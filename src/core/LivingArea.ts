import { booleanPointInPolygon, polygon, type Coord } from "@turf/turf";
import type {
  Feature,
  GeoJsonProperties,
  Geometry,
  MultiPolygon,
  Polygon,
} from "geojson";

import bassins from "../data/bdv.geojson?raw";

interface LivingAreaProperties {
  name: string;
  code: string;
}

export interface LivingAreaI {
  pointIsWithing(point: Coord): boolean;
  readonly name: string;
  readonly code: string;
}

class MultiPolygonLivingArea implements LivingAreaI {
  private polygons: Feature<Polygon, GeoJsonProperties>[];
  public readonly name: string;
  public readonly code: string;
  constructor(
    multiPolygon: MultiPolygon,
    { name, code }: LivingAreaProperties,
  ) {
    this.name = name;
    this.code = code;
    this.polygons = multiPolygon.coordinates.map((coord) => {
      return polygon(coord);
    });
  }

  pointIsWithing(point: Coord) {
    return this.polygons.some((poly) => booleanPointInPolygon(point, poly));
  }
}

class PolygonLivingArea implements LivingAreaI {
  private polygon: Feature<Polygon, GeoJsonProperties>;
  public readonly name: string;
  public readonly code: string;
  constructor(poly: Polygon, { name, code }: LivingAreaProperties) {
    this.name = name;
    this.code = code;
    this.polygon = polygon(poly.coordinates);
  }

  pointIsWithing(point: Coord) {
    return booleanPointInPolygon(point, this.polygon);
  }
}

function buildLivingArea(
  geometry: Geometry,
  props: LivingAreaProperties,
): LivingAreaI | null {
  if (geometry.type === "Polygon") {
    return new PolygonLivingArea(geometry, props);
  } else if (geometry.type === "MultiPolygon") {
    return new MultiPolygonLivingArea(geometry, props);
  }
  return null;
}

let _livingAreasSigneton: LivingAreaI[] | null;
export function getLivingAreas() {
  if (_livingAreasSigneton) return _livingAreasSigneton;
  const data = JSON.parse(bassins) as FeatureCollection;
  _livingAreasSigneton = data.features
    .map((feature) => {
      const livingAreaCode = feature.properties?.bv2022 as string;
      const livingAreaLabel = feature.properties?.libbv2022 as string;

      return buildLivingArea(feature.geometry, {
        code: livingAreaCode,
        name: livingAreaLabel,
      });
    })
    .filter((v) => !!v);

  return _livingAreasSigneton;
}
