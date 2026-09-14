import {
  OverlayArrow,
  Popover as AriaPopover,
  type PopoverProps as AriaPopoverProps,
} from "react-aria-components/Popover";
import styled from "styled-components";

const StyledPopover = styled(AriaPopover)`
  --background-color: var(--hover);

  box-sizing: border-box;
  filter: blur(10);
  background: var(--background-color);
  color: var(--text);
  transition:
    transform 200ms,
    opacity 200ms;
  padding: 8px;
  overflow: auto;

  &[data-trigger="MenuTrigger"],
  &[data-trigger="SubmenuTrigger"] {
    padding: 0;
  }

  .react-aria-OverlayArrow svg {
    display: block;
    fill: var(--background-color);
    paint-order: stroke;
    stroke-width: 2px;
  }

  &[data-entering],
  &[data-exiting] {
    transform: var(--origin);
    opacity: 0;
  }

  &[data-placement="top"] {
    --origin: translateY(8px);

    &:has(.react-aria-OverlayArrow) {
      margin-bottom: 6px;
    }
  }

  &[data-placement="bottom"] {
    --origin: translateY(-8px);

    &:has(.react-aria-OverlayArrow) {
      margin-top: 6px;
    }

    .react-aria-OverlayArrow svg {
      transform: rotate(180deg);
    }
  }

  &[data-placement="right"] {
    --origin: translateX(-8px);

    &:has(.react-aria-OverlayArrow) {
      margin-left: 6px;
    }

    .react-aria-OverlayArrow svg {
      transform: rotate(90deg);
    }
  }

  &[data-placement="left"] {
    --origin: translateX(8px);

    &:has(.react-aria-OverlayArrow) {
      margin-right: 6px;
    }

    .react-aria-OverlayArrow svg {
      transform: rotate(-90deg);
    }
  }
`;
export interface PopoverProps extends Omit<AriaPopoverProps, "children"> {
  children: React.ReactNode;
  hideArrow?: boolean;
}

export function Popover({ children, hideArrow, ...props }: PopoverProps) {
  return (
    <StyledPopover {...props}>
      {({ trigger }) => (
        <>
          {!hideArrow &&
            trigger !== "MenuTrigger" &&
            trigger !== "SubmenuTrigger" && (
              <OverlayArrow>
                <svg width={12} height={12} viewBox="0 0 12 12">
                  <path d="M0 0 L6 6 L12 0" />
                </svg>
              </OverlayArrow>
            )}
          {children}
        </>
      )}
    </StyledPopover>
  );
}
