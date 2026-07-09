import { Modal as RACModal } from "react-aria-components/Modal";
import styled, { keyframes } from "styled-components";

const overlayAnimation = keyframes`
  from {
    background: rgba(0 0 0 / 0);
    backdrop-filter: blur(0);
  }

  to {
    background: rgba(0 0 0 / .3);
    backdrop-filter: blur(10px);
  }
`;

export const Modal = styled(RACModal)`
  position: absolute;
  top: 0;
  left: 0;
  width: var(--page-width);
  height: var(--page-height);
  background: rgba(0 0 0 / .3);
  backdrop-filter: blur(10px);
  overflow: clip;
  z-index: 3000;
  font-family: system-ui;
  font-size: var(--font-size);

  &[data-entering] {
    animation: ${overlayAnimation} 200ms;
  }

  &[data-exiting] {
    animation: ${overlayAnimation} 200ms reverse ease-in;
  }
`;
