import L from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import markerIconUrl from "leaflet/dist/images/marker-icon.png";
import markerIconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import markerShadowUrl from "leaflet/dist/images/marker-shadow.png";

import "leaflet/dist/leaflet.css";
import type { CollectifI } from "../../data/collectifs";
import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import { CollectifContent } from "../Collectif/CollectifContent";
import { Button } from "react-aria-components";
import { ChevronsRight } from "lucide-react";

L.Icon.Default.prototype.options.iconUrl = markerIconUrl;
L.Icon.Default.prototype.options.iconRetinaUrl = markerIconRetinaUrl;
L.Icon.Default.prototype.options.shadowUrl = markerShadowUrl;
L.Icon.Default.imagePath = "";

const Container = styled.div`
  height: 500px;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  position: relative;

  @media (min-width: 801px) {
    flex-direction: row;
  }
`;

const StyledMapContainer = styled(MapContainer)`
  flex: 1 1 auto;
  align-self: stretch;
`;

const CollectifContainer = styled.aside`
  padding: 16px 24px;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  max-height: 50%;
  overflow: visible;
  background: var(--bgTransparent);
  backdrop-filter: blur(10px);
  box-sizing: border-box;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  @media (min-width: 801px) {
    flex: 0 0 300px;
    bottom: auto;
    top: 0;
    right: 0;
    left: auto;
    height: 100%;
    width: 300px;
    max-height: none;
  }
`;

const CollectifSideContent = styled.div`
  flex: 1 1 auto;
  overflow: auto;
`;

const PanelCloseButton = styled(Button)`
  position: absolute;
  left: -16px;
  width: 32px;
  height: 32px;
  top: 8px;
  border-radius: 16px;
  background-color: var(--bg);
  border: 1px solid var(--border);
  box-shadow: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  @media (max-width: 800px) {
    display: none;
  }
`;

interface Props {
  collectifs: CollectifI[];
}

function zoomToCollectifs(map: L.Map, collectifs: CollectifI[]) {
  if (collectifs.length === 0) {
    return;
  }

  const bounds = L.latLngBounds(
    collectifs.filter(c=>c.position).map((c) => [c.position!.lat, c.position!.lng]),
  );
  map.fitBounds(bounds, {
    padding: [50, 50],
    maxZoom: 12,
    animate: true,
  });
}

export function Map({ collectifs }: Props) {
  const mapRef = useRef<L.Map>(null);
  const [selectedCollectif, setSelectedCollectif] = useState<CollectifI | null>(
    null,
  );
  useEffect(() => {
    if (mapRef.current) {
      zoomToCollectifs(mapRef.current, collectifs);
    }
  }, [collectifs]);
  return (
    <Container>
      <StyledMapContainer center={[43.6, 3.9]} zoom={8} ref={mapRef}>
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          className="map-tiles"
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
          return c.position ? (
            <Marker
              key={c.slug}
              position={[c.position.lat, c.position.lng]}
              eventHandlers={{
                popupopen: () => {
                  setSelectedCollectif(c);
                },
                popupclose: () => {
                  setSelectedCollectif(null);
                },
              }}
              {...args}
            >
              <Popup>{c.name}</Popup>
            </Marker>
          ) : null;
        })}
      </StyledMapContainer>
      {selectedCollectif && (
        <CollectifContainer>
          <PanelCloseButton
            onClick={() => {
              setSelectedCollectif(null);
              if (mapRef.current) {
                mapRef.current.closePopup();
              }
            }}
          >
            <ChevronsRight />
          </PanelCloseButton>
          <CollectifSideContent>
            <CollectifContent collectif={selectedCollectif} forceOpen />
          </CollectifSideContent>
        </CollectifContainer>
      )}
    </Container>
  );
}
