import { MapPin } from "lucide-react";
import { Link } from "../Link/Link";
import type { MobilizonEventI } from "./Event";
import styled from "styled-components";

interface Props {
  event: MobilizonEventI;
}

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 4px;
`;

export function EventAddress({ event }: Props) {
  if (!event.physicalAddress) return null;

  const content = (
    <>
      <MapPin size={22} style={{ flex: "0 0 22px" }} />
      <span>
        {event.physicalAddress.description} {event.physicalAddress.locality}
      </span>
    </>
  );
  if (!event.physicalAddress.geom) return content;

  const [lng, lat] = event.physicalAddress.geom.split(";");
  return (
    <StyledLink
      to={`https://www.openstreetmap.org/?mlat=${lat}&mlon=${lng}#map=18/${lat}/${lng}`}
    >
      {content}
    </StyledLink>
  );
}
