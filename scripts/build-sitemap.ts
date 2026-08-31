import fs from "node:fs";
import path from "node:path";
import { MobilizonResponseSchema } from "../src/components/Agenda/Event.js";
import { eventExtraData } from "../src/data/EventExtraData.js";

const SITE = "https://les-fourmilieres.org";

const ROUTES_DIR = path.join(process.cwd(), "src/routes");

function getFileLastMod(filePath: string): string {
  const stats = fs.statSync(filePath);
  return stats.mtime.toISOString();
}

function getToday(): string {
  const today = new Date();
  return today.toISOString();
}

function computePriority(lastModISO: string): number {
  const lastMod = new Date(lastModISO);
  const now = new Date();

  const diffDays = (now.getTime() - lastMod.getTime()) / (1000 * 60 * 60 * 24);

  if (diffDays < 7) return 0.9;
  if (diffDays < 30) return 0.7;
  return 0.5;
}

function buildGraphQlQuery() {
  return `
    query SearchEventsInWindow($beginsOn: DateTime, $endsOn: DateTime, $limit: Int, $page: Int, $statusOneOf: [EventStatus]) {
      searchEvents(beginsOn: $beginsOn, endsOn: $endsOn, limit: $limit, page: $page, statusOneOf: $statusOneOf) {
        total
        elements {
          __typename
          ... on Event {
            id
            title
            description
            beginsOn
            endsOn
            onlineAddress
            joinOptions
            externalParticipationUrl
            uuid
            url
            slug
            updatedAt
            options {
                showStartTime
                showEndTime
                timezone
                offers {
                    price
                    priceCurrency
                    url
                    __typename
                }
                participationConditions {
                    title
                    content
                    url
                    __typename
                }
            }
            tags {
              id
              slug
              title
              __typename
            }
            picture {
              url
              alt
              name
              contentType
              size
              metadata {
                width, height
              }
            }
            url
            physicalAddress {
              description
              locality
              geom
              postalCode
              street
            }
          }
        }
      }
    }
    `;
}

const BASE_URL = "https://agenda.les-fourmilieres.org/api";
const limit = 10;

async function fetchEvents({ showUnConfirmed = false, page = 1 }) {
  const after = new Date(2026, 7, 25);

  const query = buildGraphQlQuery();
  const variables = {
    beginsOn: after,
    limit,
    page,
    statusOneOf: showUnConfirmed ? ["CONFIRMED", "TENTATIVE"] : ["CONFIRMED"],
  };
  const payload = JSON.stringify({ query: query, variables: variables });

  const response = await fetch(BASE_URL, {
    method: "post",
    body: payload,
    headers: {
      "Content-Type": "application/json",
    },
  });

  const mobilizonResponse = MobilizonResponseSchema.parse(
    await response.json(),
  );
  return mobilizonResponse;
}

async function fetchAllEvents() {
  const firstPage = await fetchEvents({ showUnConfirmed: false, page: 1 });
  const pageCount = Math.ceil(firstPage.data.searchEvents.total / limit);
  if (pageCount <= 1) {
    return firstPage.data.searchEvents.elements.filter(
      (event) => !!eventExtraData[event.uuid],
    );
  }
  const results = await Promise.allSettled(
    Array.from({ length: pageCount - 1 }).map((_, index: number) => {
      const page = index + 2;
      return fetchEvents({ showUnConfirmed: false, page });
    }),
  );
  return results
    .filter((result) => result.status === "fulfilled")
    .map((result) => result.value)
    .reduce((acc, page) => {
      return [...acc, ...page.data.searchEvents.elements];
    }, firstPage.data.searchEvents.elements)
    .filter((event) => !!eventExtraData[event.uuid]);
}

function scanRoutes(dir: string, basePath = "") {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  const routes: {
    path: string;
    file: string;
    lastUpdate?: string;
  }[] = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      routes.push(...scanRoutes(fullPath, basePath + "/" + entry.name));
      continue;
    }

    if (!entry.name.endsWith(".tsx") && !entry.name.endsWith(".ts")) continue;

    let route = basePath + "/" + entry.name.replace(/\.(tsx|ts)$/, "");
    route = route.replace(/\/index$/, "/");
    route = route.replace(/\$/g, ":");

    routes.push({
      path: route === "" ? "/" : route,
      file: fullPath,
    });
  }

  return routes;
}

const rawRoutes = scanRoutes(ROUTES_DIR);

const events = await fetchAllEvents();

// nettoyage + normalisation
const cleaned = rawRoutes.filter(
  (r) =>
    !r.path.includes(":") && !r.path.includes("__") && r.path !== "/programme/",
); // on exclut les dynamiques

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

${cleaned
  .map((r) => {
    const lastmod =
      r.file === "le-programme" ? getToday() : getFileLastMod(r.file);
    const priority = computePriority(lastmod);

    return `
  <url>
    <loc>${SITE}${r.path}</loc>
    <lastmod>${lastmod.split("T")[0]}</lastmod>
    <priority>${priority.toFixed(1)}</priority>
  </url>`;
  })
  .join("\n")}

${events.map(
  (event) => `
  <url>
    <loc>${SITE}/programme/${event.uuid}</loc>
    <lastmod>${event.updatedAt ? event.updatedAt.split("T")[0] : getToday().split("T")[0]}</lastmod>
    <priority>0.9</priority>
  </url>`,
)}

</urlset>`;

fs.writeFileSync("./public/sitemap.xml", sitemap);

console.log("Sitemap généré :", cleaned.length + events.length, "routes");
