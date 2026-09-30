import styled from "styled-components";
import {
  getDeferredDate,
  isEventCancelled,
  type MobilizonEventI,
} from "./Event";

const CancelledContainer = styled.aside`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  z-index: 100;
  backdrop-filter: blur(0px);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const CancelledText = styled.div`
  font-size: 52px;
  text-transform: uppercase;
  font-weight: bold;
  transform: rotate(-30deg);
  color: var(--accent-contrast);
  padding: 4px 8px;
  line-height: 1em;
  box-sizing: border-box;
  width: 200%;
  margin: 0 -50%;
  text-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  background-color: var(--accent);
  opacity: 0.9;

  & > div:first-child {
    padding-top: 8px;
    margin-bottom: -16px;
  }
  & > div:first-child:last-child {
    padding-top: 0;
    margin-bottom: 0;
  }
`;

const CancelledNewDate = styled.div`
  font-size: 20px;
`;

export function EventCancelled({
  event,
}: {
  event: Pick<MobilizonEventI, "uuid">;
}) {
  if (!isEventCancelled(event)) return null;
  const deferredDate = getDeferredDate(event);
  return (
    <CancelledContainer>
      <CancelledText>
        <div>Annulé</div>
        {deferredDate === "TBD" && (
          <CancelledNewDate>Date de report à venir</CancelledNewDate>
        )}
        {deferredDate === "visio" && (
          <CancelledNewDate>Reporté en visio</CancelledNewDate>
        )}
        {deferredDate instanceof Date && (
          <CancelledNewDate>
            Reporté au {deferredDate.toLocaleDateString("fr-FR")}
          </CancelledNewDate>
        )}
      </CancelledText>
    </CancelledContainer>
  );
}
