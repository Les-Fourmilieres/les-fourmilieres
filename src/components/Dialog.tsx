import { Dialog as RACDialog } from "react-aria-components";
import styled, { keyframes } from "styled-components";

const zoomIn = keyframes`
  from {
    transform: scale(0);
  }

  to {
    transform: scale(1);
  }
`;

export const Dialog = styled(RACDialog)`
  position: sticky;
  max-height: calc(var(--visual-viewport-height) * 0.9);
  top: calc(var(--visual-viewport-height) / 2);
  margin-left: 50vw;
  translate: -50% -50%;
  box-shadow: var(--shadow);
  border-radius: 4px;
  color: var(--text);
  outline: 0;
  width: 100%;
  max-width: min(500px, 90vw);
  background-color: var(--bg);
  padding: 8px 16px;

  .react-aria-Heading[slot="title"] {
    margin-top: 0;
    margin-bottom: 1em;
  }
  &[data-entering] {
    animation: ${zoomIn} 300ms ease-in-out;
  }
`;
