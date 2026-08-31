import { booleanPointInPolygon, polygon } from "@turf/turf";
import bassins from "../data/bdv.geojson?raw";
class MultiPolygonLivingArea {
    polygons;
    name;
    code;
    constructor(multiPolygon, { name, code }) {
        this.name = name;
        this.code = code;
        this.polygons = multiPolygon.coordinates.map((coord) => {
            return polygon(coord);
        });
    }
    pointIsWithing(point, code) {
        return code == this.code || point && this.polygons.some((poly) => booleanPointInPolygon(point, poly));
    }
}
class PolygonLivingArea {
    polygon;
    name;
    code;
    constructor(poly, { name, code }) {
        this.name = name;
        this.code = code;
        this.polygon = polygon(poly.coordinates);
    }
    pointIsWithing(point, code) {
        return code == this.code || point && booleanPointInPolygon(point, this.polygon);
    }
}
function buildLivingArea(geometry, props) {
    if (geometry.type === "Polygon") {
        return new PolygonLivingArea(geometry, props);
    }
    else if (geometry.type === "MultiPolygon") {
        return new MultiPolygonLivingArea(geometry, props);
    }
    return null;
}
let _livingAreasSigneton;
export function getLivingAreas() {
    if (_livingAreasSigneton)
        return _livingAreasSigneton;
    const data = JSON.parse(bassins);
    _livingAreasSigneton = data.features
        .map((feature) => {
        const livingAreaCode = feature.properties?.bv2022;
        const livingAreaLabel = feature.properties?.libbv2022;
        return buildLivingArea(feature.geometry, {
            code: livingAreaCode,
            name: livingAreaLabel,
        });
    })
        .filter((v) => !!v);
    return _livingAreasSigneton;
}
