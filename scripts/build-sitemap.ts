import fs from "node:fs";
import path from "node:path";

const SITE = "https://les-fourmilieres.org";

const ROUTES_DIR = path.join(process.cwd(), "src/routes");

function getFileLastMod(filePath: string): string {
  const stats = fs.statSync(filePath);
  return stats.mtime.toISOString();
}

function computePriority(lastModISO: string): number {
  const lastMod = new Date(lastModISO);
  const now = new Date();

  const diffDays = (now.getTime() - lastMod.getTime()) / (1000 * 60 * 60 * 24);

  if (diffDays < 7) return 0.9;
  if (diffDays < 30) return 0.7;
  return 0.5;
}

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

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

${cleaned
  .map((r) => {
    const lastmod = getFileLastMod(r.file);
    const priority = computePriority(lastmod);

    return `
  <url>
    <loc>${SITE}${r.path}</loc>
    <lastmod>${lastmod.split("T")[0]}</lastmod>
    <priority>${priority.toFixed(1)}</priority>
  </url>`;
  })
  .join("\n")}

</urlset>`;

fs.writeFileSync("./public/sitemap.xml", sitemap);

console.log("Sitemap généré :", cleaned.length, "routes");
