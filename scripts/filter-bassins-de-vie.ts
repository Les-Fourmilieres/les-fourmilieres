import * as fs from "node:fs";
import { execSync } from "node:child_process";

interface Feature {
  type: string;
  properties: {
    bv2022?: string | number;
    [key: string]: unknown;
  };
  geometry: unknown;
}

interface FeatureCollection {
  type: "FeatureCollection";
  features: Feature[];
}

const geojson = JSON.parse(
  fs.readFileSync("bassins.geojson", "utf8"),
) as FeatureCollection;

const filtered = {
  ...geojson,
  features: geojson.features.filter(
    (feature) =>
      String(feature.properties.bv2022).startsWith("11") ||
      String(feature.properties.bv2022).startsWith("12") ||
      String(feature.properties.bv2022).startsWith("30") ||
      String(feature.properties.bv2022).startsWith("34"),
  ),
};

const outputFile = "src/data/bdv.geojson";
const finalFile = "src/data/bdv-simple.geojson";

fs.writeFileSync(outputFile, JSON.stringify(filtered));

execSync(
  `npx mapshaper ${outputFile} -simplify 10% keep-shapes -o ${finalFile}`,
  { stdio: "inherit" },
);

console.log(
  `${filtered.features.length} bassins conservés sur ${geojson.features.length}`,
);
