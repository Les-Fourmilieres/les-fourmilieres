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
const indexFileContent = fs.readFileSync("./dist/index.html", "utf-8");

const titles: Record<string, string> = {
  "/bataille-culturelle-des-luttes-paysannes":
    "🐜 Les Fourmilières · Bataille culturelle : des luttes paysannes",
  "/bataille-culturelle-histoire-du-14-juillet":
    "🐜 Les Fourmilières · L'histoire du 14 juillet",
  "/entretien-emmanuel-negrier":
    "🐜 Les Fourmilières · Entretien avec Emmanuel Négrier",
  "/safia-dahani-les-extremes-droites-contemporaines":
    "🐜 Les Fourmilières · Entretien avec Safia Dahani",
};

const descriptions: Record<string, string> = {
  "/bataille-culturelle-des-luttes-paysannes":
    "Bataille Culturelle : des luttes paysannes",
  "/bataille-culturelle-histoire-du-14-juillet":
    "Bataille Culturelle : L'histoire du 14 juillet",
  "/entretien-emmanuel-negrier":
    "Entretien avec Emmanuel Négrier : les « quatre P » du renversement",
  "/safia-dahani-les-extremes-droites-contemporaines":
    "Entretien avec Safia Dahani : Processus de banalisation des extrêmes droites",
};

const images: Record<string, string> = {
  "/bataille-culturelle-des-luttes-paysannes":
    "https://les-fourmilieres.org/bataille-culturelle-des-luttes-paysannes.webp",
  "/bataille-culturelle-histoire-du-14-juillet":
    "https://les-fourmilieres.org/bataille-culturelle-histoire-du-14-juillet.webp",
  "/entretien-emmanuel-negrier":
    "https://les-fourmilieres.org/emmanuel-negrier-entretien.webp",
  "/safia-dahani-les-extremes-droites-contemporaines":
    "https://les-fourmilieres.org/entretien-sofia-dahani.webp",
};
const types: Record<string, string> = {
  "/bataille-culturelle-des-luttes-paysannes": "article",
  "/bataille-culturelle-histoire-du-14-juillet": "article",
  "/entretien-emmanuel-negrier": "article",
  "/safia-dahani-les-extremes-droites-contemporaines": "article",
};

cleaned.forEach(({ path, file }) => {
  if (path === "/") return;
  console.log(`page: ${path}, file: ${file}`);
  const title =
    titles[path] ?? "🐜 Les Fourmilières · Festival antifasciste et solidaire";
  const description =
    descriptions[path] ??
    "Les Fourmilières est un festival solidaire et antifasciste. Nous sommes des collectifs, associations, librairies, brasseries, syndicats, lieux culturels, troupes de théâtre, tiers lieux, cinémas. Nous sommes actuellement plus d'une centaine de collectifs répartis dans le midi : de la vallée de l'Aveyron jusqu'aux monts d'Ardèche, des montagnes jusqu'au littoral.";
  const image =
    images[path] ??
    "https://les-fourmilieres.org/les-fourmilieres-preview.webp";
  const ogType = types[path] ?? "website";

  const fileContent = indexFileContent.replace(
    "<head>",
    `<head>
    <title>${title}</title>
    <meta property="og:image" content="${image}" />
    <meta property="og:locale" content="fr_FR" />
    <meta name="description" content="${description}" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:type" content="${ogType}" />`,
  );

  fs.writeFileSync(`./dist${path}.html`, fileContent);
});

events.forEach((event) => {
  console.log(`page: programme/${event.uuid}, file: ${event.uuid}`);
  const description = convert(event.description ?? "").split("\n")[0];
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
