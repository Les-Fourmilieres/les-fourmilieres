import { Tooltip as RacTooltip } from "react-aria-components";
import styled from "styled-components";

export const Tooltip = styled(RacTooltip)`
  box-shadow: 0 8px 20px rgba(0 0 0 / 0.1);
  border-radius: var(--radius);
  background: var(--bg);
  color: var(--text);
  forced-color-adjust: none;
  outline: none;
  padding: 8px 16px;
  max-width: 300px;
  /* fixes FF gap */
  transform: translate3d(0, 0, 0);
  transition:
    transform 200ms,
    opacity 200ms;
  font: var(--font-size) system-ui;

  &[data-entering],
  &[data-exiting] {
    transform: var(--origin);
    opacity: 0;
  }

  &[data-placement="top"] {
    margin-bottom: 10px;
    --origin: translateY(4px);
  }

  &[data-placement="bottom"] {
    margin-top: 10px;
    --origin: translateY(-4px);
    & .react-aria-OverlayArrow svg {
      transform: rotate(180deg);
    }
  }

  &[data-placement="right"] {
    margin-left: 10px;
    --origin: translateX(-4px);
    & .react-aria-OverlayArrow svg {
      transform: rotate(90deg);
    }
  }

  &[data-placement="left"] {
    margin-right: 10px;
    --origin: translateX(4px);
    & .react-aria-OverlayArrow svg {
      transform: rotate(-90deg);
    }
  }

  .react-aria-OverlayArrow svg {
    display: block;
    fill: var(--highlight-background);
  }
`;
