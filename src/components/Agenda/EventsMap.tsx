import L from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import markerIconUrl from "leaflet/dist/images/marker-icon.png";
import markerIconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import markerShadowUrl from "leaflet/dist/images/marker-shadow.png";

import "leaflet/dist/leaflet.css";
import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import { Button } from "react-aria-components";
import { ChevronsRight } from "lucide-react";
import {eventType, type MobilizonEventI} from "./Event";
import { EventPreview } from "./EventPreview";

import pointer_autre from "../../assets/events/pointer_autre.webp?url"
import pointer_concert from "../../assets/events/pointer_concert.webp?url"
import pointer_conf from "../../assets/events/pointer_conf.webp?url"
import pointer_fresque from "../../assets/events/pointer_fresque.webp?url"
import pointer_kermesse from "../../assets/events/pointer_kermesse.webp?url"
import pointer_picnic from "../../assets/events/pointer_picnic.webp?url"
import pointer_proj from "../../assets/events/pointer_proj.webp?url"
import pointer_theatre from "../../assets/events/pointer_theatre.webp?url"
import pointer_manif from "../../assets/events/pointer_manif.webp?url"

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
  events: MobilizonEventI[];
}

function zoomOnEvents(map: L.Map, events: MobilizonEventI[]) {
  const eventsWithAddress = events.filter((e) => !!e.physicalAddress?.geom);
  if (eventsWithAddress.length === 0) {
    return;
  }

  const bounds = L.latLngBounds(
    eventsWithAddress.map((event) => {
      const [lng, lat] = event.physicalAddress!.geom!.split(";");
      return [parseFloat(lat), parseFloat(lng)];
    }),
  );
  map.fitBounds(bounds, {
    padding: [50, 50],
    maxZoom: 12,
    animate: true,
  });
}

export function EventsMap({ events }: Props) {
  const mapRef = useRef<L.Map>(null);
  const [selectedEvent, setSelectedEvent] = useState<MobilizonEventI | null>(
    null,
  );
  useEffect(() => {
    if (mapRef.current) {
      zoomOnEvents(mapRef.current, events);
    }
  }, [events]);
  return (
    <Container>
      <StyledMapContainer center={[43.9, 3.9]} zoom={8} ref={mapRef}>
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          className="map-tiles"
        />

        {events.map((event) => {
          if (!event.physicalAddress?.geom) return null;
          const [lng, lat] = event.physicalAddress!.geom!.split(";");
          const position: [number, number] = [parseFloat(lat), parseFloat(lng)];
						let icon_url = pointer_autre
						switch (eventType(event)[0]) {
						case "Concert":
						case "DJ Set":
						case "Open Air":
						case "Bal populaire":
							icon_url = pointer_concert
							break
						case "Conférence":
						case "Rencontre Littéraire":
						case "Table-Ronde":
							icon_url = pointer_conf
							break
						case "Kermesse":
						case "Village Associatif":
						case "Braderie":
						case "Expo":
						case "Loto":
							icon_url = pointer_kermesse
							break
						case "Manifestation":
						case "Pride":
						case "Parade":
							icon_url = pointer_manif
							break
						case "Atelier cuisine":
						case "Atelier d'expression":
						case "Fresque":
						case "Jeux":
						case "Formation":
						case "Atelier militant":
						case "Atelier sérigraphie":
						case "Arpentage":
							icon_url = pointer_fresque
							break
						case "Théâtre":
						case "Spectacle vivant":
						case "Dragshow":
						case "Conte":
						case "Lecture":
							icon_url = pointer_theatre
							break
						case "Projection":
						case "Ciné-débat":
							icon_url = pointer_proj
							break
						case "Picnic":
						case "Apéro":
						case "Repas partagé":
						case "Cantine":
						case "Goûter":
						case "Pizza":
						case "Banquet populaire":
							icon_url = pointer_picnic
							break
						}
						const args = {
							icon: L.icon({
								iconUrl: icon_url,
								iconSize: [54, 54],
								iconAnchor: [23, 54],
							}),
						}
          return (
            <Marker
              key={event.uuid}
              position={position}
              eventHandlers={{
                popupopen: () => {
                  setSelectedEvent(event);
                },
                popupclose: () => {
                  setSelectedEvent(null);
                },
              }}
							{...args}
            >
              <Popup>{event.title}</Popup>
            </Marker>
          );
        })}
      </StyledMapContainer>
      {selectedEvent && (
        <CollectifContainer>
          <PanelCloseButton
            onClick={() => {
              setSelectedEvent(null);
              if (mapRef.current) {
                mapRef.current.closePopup();
              }
            }}
          >
            <ChevronsRight />
          </PanelCloseButton>
          <CollectifSideContent>
            <EventPreview event={selectedEvent} />
          </CollectifSideContent>
        </CollectifContainer>
      )}
    </Container>
  );
}
