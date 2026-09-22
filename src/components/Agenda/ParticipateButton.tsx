import styled from "styled-components";
import type { MobilizonEventI } from "./Event";
import { LinkButton } from "../Link/Link";

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

const StyledLinkButton = styled(LinkButton)`
  ${ButtonStyle}
`;

interface Props {
  event: MobilizonEventI;
}

export function ParticipateButton({ event }: Props) {
  if (!event.externalParticipationUrl) return null;
  return (
    <>
      <StyledLinkButton href={event.externalParticipationUrl} target="_blank">
        Billetterie
      </StyledLinkButton>
    </>
  );
}
