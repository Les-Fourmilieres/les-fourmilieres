import styled from "styled-components";
import type { MobilizonEventI } from "./Event";
import { LinkButton } from "../Link/Link";
import { Button } from "react-aria-components";
import { useState } from "react";
import { JoinEventModal } from "./JoinEventModal";

const ButtonStyle = `
  border: none;
  background: var(--accent);
  color: var(--accent-contrast);
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 3px;
  box-sizing: border-box;
  font-size: 18px;
  padding: 8px 16px;
  font-weight: 500;
  white-space: nowrap;
  &:hover {
    background-color: var(--accent-dark);
  }`;

const StyledButton = styled(Button)`
  ${ButtonStyle}
`;
const StyledLinkButton = styled(LinkButton)`
  ${ButtonStyle}
`;

interface Props {
  event: MobilizonEventI;
}

export function ParticipateButton({ event }: Props) {
  const [participateModalVisible, setParticipateModalVisible] = useState(false);
  const onEventJoin = async () => {
    setParticipateModalVisible(true);
  };
  return (
    <>
      <JoinEventModal
        isOpen={participateModalVisible}
        close={() => setParticipateModalVisible(false)}
        eventId={event.id}
      />
      {event.externalParticipationUrl ? (
        <StyledLinkButton href={event.externalParticipationUrl} target="_blank">
          Je participe
        </StyledLinkButton>
      ) : (
        <StyledButton onClick={onEventJoin}>Je participe</StyledButton>
      )}
    </>
  );
}
