import fs from "node:fs";
import path from "node:path";
import { convert } from "html-to-text";
import { fetchAllEvents } from "./fetchEvents";

const ROUTES_DIR = path.join(process.cwd(), "src/routes");

function scanRoutes(dir: string, basePath = "") {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  const routes: {
    path: string;
    file: string;
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

// nettoyage + normalisation
const cleaned = rawRoutes.filter(
  (r) =>
    !r.path.includes(":") && !r.path.includes("__") && r.path !== "/programme/",
); // on exclut les dynamiques

const events = await fetchAllEvents();

if (!fs.existsSync("./dist/programme")) {
  fs.mkdirSync("./dist/programme");
}

cleaned.forEach(({ path, file }) => {
  if (path === "/") return;
  console.log(`page: ${path}, file: ${file}`);
  fs.copyFileSync("./dist/index.html", `./dist${path}.html`);
});

const indexFileContent = fs.readFileSync("./dist/index.html", "utf-8");

events.forEach((event) => {
  console.log(`page: programme/${event.uuid}, file: ${event.uuid}`);
  const description = convert(event.description ?? "");
  const summary =
    description.length > 155
      ? `${description.substring(0, 150)}…`
      : description;
  const eventShema = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.title,
    startDate: event.beginsOn?.toISOString(),
    endDate: event.endsOn?.toISOString(),
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "Place",
      name: event.physicalAddress?.description,
      address: {
        "@type": "PostalAddress",
        streetAddress: event.physicalAddress?.street,
        addressLocality: event.physicalAddress?.locality,
        postalCode: event.physicalAddress?.postalCode,
        addressCountry: "FR",
      },
    },
    image: event.picture ? [event.picture.url] : [],
    description: summary,
    offers: event.externalParticipationUrl
      ? {
          "@type": "Offer",
          url: event.externalParticipationUrl,
        }
      : undefined,
    organizer: {
      "@type": "Organization",
      name: "🐜 Les Fourmilières",
      url: "https://les-fourmilieres.org",
    },
  };
  const fileContent = indexFileContent.replace(
    "<head>",
    `<head>
      <title>🐜 Les Fourmilières · ${event.title}</title>
      ${event.picture ? `<meta property="og:image" content="${event.picture.url}" />` : `<meta property="og:image" content="https://les-fourmilieres.org/les-fourmilieres-preview.webp" />`}
      <meta property="og:locale" content="fr_FR" />
      <meta name="description" content="${summary}" />
      <meta property="og:title" content="🐜 Les Fourmilières · ${event.title?.replaceAll('"', '\\"')}">
      <meta property="og:description" content="${summary}">
      <script type="application/ld+json">${JSON.stringify(eventShema)}</script>`,
  );
  fs.writeFileSync(`./dist/programme/${event.uuid}.html`, fileContent);
});

console.log("Pages générées :", cleaned.length);
