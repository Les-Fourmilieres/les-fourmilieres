import L from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import markerIconUrl from "leaflet/dist/images/marker-icon.png";
import markerIconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import markerShadowUrl from "leaflet/dist/images/marker-shadow.png";

import "leaflet/dist/leaflet.css";
import type { CollectifI } from "../../data/collectifs";
import styled from "styled-components";

L.Icon.Default.prototype.options.iconUrl = markerIconUrl;
L.Icon.Default.prototype.options.iconRetinaUrl = markerIconRetinaUrl;
L.Icon.Default.prototype.options.shadowUrl = markerShadowUrl;
L.Icon.Default.imagePath = "";

const StyledMapContainer = styled(MapContainer)`
  height: 500px;
  align-self: stretch;
`;

interface Props {
  collectifs: CollectifI[];
}

export function Map({ collectifs }: Props) {
  return (
    <StyledMapContainer center={[43.6, 3.9]} zoom={8}>
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {collectifs.map((c) => {
        const args = c.icon
          ? {
              icon: L.icon({
                iconUrl: c.icon,
                iconSize: [32, 32],
                iconAnchor: [16, 16],
              }),
            }
          : {};
        return (
          <Marker
            key={c.slug}
            position={[c.position.lat, c.position.lng]}
            {...args}
          >
            <Popup>{c.name}</Popup>
          </Marker>
        );
      })}
    </StyledMapContainer>
  );
}
