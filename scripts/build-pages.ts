import fs from "node:fs";
import path from "node:path";
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

events.reduce((acc, event) => {
  acc.push({ path: `/programme/${event.uuid}`, file: "" });
  return acc;
}, cleaned);

cleaned.forEach(({ path, file }) => {
  if (path === "/") return;
  console.log(`page: ${path}, file: ${file}`);
  fs.copyFileSync("./dist/index.html", `./dist${path}.html`);
});

console.log("Pages générées :", cleaned.length);
