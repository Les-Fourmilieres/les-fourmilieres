type Geometry =
  | {
      type: "Polygon";
      coordinates: [number, number][][];
    }
  | {
      type: "MultiPolygon";
      coordinates: [number, number][][][];
    };

interface Feature {
  type: string;
  properties: {
    bv2022?: string | number;
    [key: string]: unknown;
  };
  geometry: Geometry;
}

interface FeatureCollection {
  type: "FeatureCollection";
  features: Feature[];
}

declare module "*.geojson" {
  const value: FeatureCollection;
  export default value;
}
