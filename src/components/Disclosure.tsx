import { Button } from "react-aria-components/Button";
import {
  Disclosure as AriaDisclosure,
  DisclosurePanel as AriaDisclosurePanel,
  type DisclosureProps,
  type DisclosurePanelProps,
  type HeadingProps,
  Heading,
} from "react-aria-components/Disclosure";
import styled from "styled-components";
import type { ReactNode } from "react";

const StyledDisclosure = styled(AriaDisclosure)`
  width: 100%;

  button.disclosure-button .disclosure-hide-label {
    display: none;
  }
  button.disclosure-button .disclosure-show-label {
    display: block;
  }
  &[data-expanded] button.disclosure-button .disclosure-hide-label {
    display: block;
  }
  &[data-expanded] button.disclosure-button .disclosure-show-label {
    display: none;
  }
`;

const StyledHeading = styled(Heading)`
  margin: 0;
`;
const StyledButton = styled(Button)`
  background: none;
  border: none;
  box-shadow: none;
  text-shadow: none;
  width: 100%;
  color: var(--text);
  cursor: pointer;
  font: 18px/145% var(--sans);
  letter-spacing: 0.18px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: start;
  gap: 2px;
  padding: 4px 8px;
  border-radius: 0;
  transition:
    background 200ms,
    color 200ms,
    scale 200ms;
  outline: none;
  -webkit-tap-highlight-color: transparent;

  &[data-hovered],
  &[data-pressed] {
    color: var(--placeholder);
  }

  &[data-pressed] {
    scale: 0.98;
  }

  &[data-focus-visible] {
    outline: 2px solid var(--hover);
  }

  &[data-disabled] {
    color: var(--placeholder);
  }

  svg {
    rotate: 270deg;
    transition: rotate 200ms;
    fill: none;
    stroke: currentColor;
    stroke-width: 3px;
  }
`;

const StyledDisclosurePanel = styled(AriaDisclosurePanel)`
  color: var(--text);
  height: auto;
  transition: height 250ms;
  overflow: clip;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export function Disclosure(props: DisclosureProps) {
  return <StyledDisclosure {...props} />;
}

export function DisclosureHeader({
  children,
  hideLabel,
  ...props
}: HeadingProps & { hideLabel: ReactNode }) {
  return (
    <StyledHeading {...props}>
      <StyledButton slot="trigger" className="disclosure-button">
        <span className="disclosure-show-label">{children}</span>
        <span className="disclosure-hide-label">{hideLabel}</span>
      </StyledButton>
    </StyledHeading>
  );
}

export function DisclosurePanel(props: DisclosurePanelProps) {
  return (
    <StyledDisclosurePanel {...props}>
      <div>{props.children}</div>
    </StyledDisclosurePanel>
  );
}
