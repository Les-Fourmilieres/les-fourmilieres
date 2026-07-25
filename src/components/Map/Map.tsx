import L from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import markerIconUrl from "leaflet/dist/images/marker-icon.png";
import markerIconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import markerShadowUrl from "leaflet/dist/images/marker-shadow.png";
import pointer_media from "../../assets/pictos/media_pointer.png?url"
import pointer_cafe from "../../assets/pictos/cafe_pointer.png?url"
import pointer_tierslieu from "../../assets/pictos/tierslieu_pointer.png?url"
import pointer_festival from "../../assets/pictos/festival_pointer.png?url"
import pointer_librairie from "../../assets/pictos/librairie_pointer.png?url"
import pointer_theatre from "../../assets/pictos/theatre_pointer.png?url"
import pointer_syndicat from "../../assets/pictos/syndicat_pointer.png?url"
import pointer_artistique from "../../assets/pictos/artistique_pointer.png?url"
import pointer_evenementiel from "../../assets/pictos/evenementiel_pointer.png?url"
import pointer_militant from "../../assets/pictos/militant_pointer.png?url"
import pointer_habiter from "../../assets/pictos/habiter_pointer.png?url"
import pointer_refugie from "../../assets/pictos/refugie_pointer.png?url"
import pointer_collectifs from "../../assets/pictos/groupement_pointer.png?url"
import pointer_educpop from "../../assets/pictos/educpop_pointer.png"

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
					let icon_url = pointer_militant
					switch (c.type[0]){
					case "Bar - Brasserie - Commerce":
					case "Café associatif":
						icon_url = pointer_cafe
						break
					case "Collectif artistique":
						icon_url = pointer_artistique
						break
					case "Collectif d'accueil de réfugiés":
						icon_url = pointer_refugie
						break
					case "Média":
						icon_url = pointer_media
						break
					case "Collectif pour mieux habiter":
						icon_url = pointer_habiter
						break
					case "Collectif d'éducation populaire":
						icon_url = pointer_educpop
						break
					case "Collectif événementiel":
						icon_url = pointer_evenementiel
						break
					case "Festival":
						icon_url = pointer_festival
						break
					case "Groupement de collectifs":
						icon_url = pointer_collectifs
						break
					case "Librairie":
						icon_url = pointer_librairie
						break
					case "Syndicat":
						icon_url = pointer_syndicat
						break
					case "Théâtre":
						icon_url = pointer_theatre
						break
					case "Tiers-lieu":
						icon_url = pointer_tierslieu
						break
					}
          const args = {
						icon: L.icon({
							iconUrl: icon_url,
							iconSize: [46, 54],
							iconAnchor: [23, 54],
						}),
					}
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
