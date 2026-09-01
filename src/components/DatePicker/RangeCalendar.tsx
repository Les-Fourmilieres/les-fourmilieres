import {
  CalendarCell as AriaCalendarCell,
  RangeCalendar as AriaRangeCalendar,
  CalendarGrid,
  Text,
  Heading,
  type DateValue,
  type RangeCalendarProps as AriaRangeCalendarProps,
  type CalendarCellProps,
} from "react-aria-components/RangeCalendar";
import { composeRenderProps } from "react-aria-components/composeRenderProps";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../Button";
import styled from "styled-components";
import type { ComponentProps } from "react";

const StyledRangeCalendar = styled(AriaRangeCalendar)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow: auto;
  width: fit-content;
  max-width: 100%;
  color: var(--text);
  background-color: var(--surface);

  .react-aria-CalendarGrid {
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
  }

  [slot="errorMessage"] {
    font-size: var(--font-size-sm);
    color: var(--invalid-color);
  }
`;

const Months = styled.div`
  display: flex;
  gap: 8px;
`;

const Month = styled.div`
  width: 320px;
  min-width: 160px;
  container-type: inline-size;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 4px 16px 4px;
  min-height: 32px;

  .react-aria-CalendarHeading {
    flex: 1;
    margin: 0;
    text-align: center;
    font-size: 18px;
  }
`;

const StyledCalendarCell = styled(AriaCalendarCell)`
  margin: 2px 0;
  padding: 0 calc(var(--gap) / 2);
  position: relative;
  z-index: 1;
  outline: none;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    border-radius: 9999px;
    transition: scale 200ms;
  }

  &[data-selected] {
    border-radius: 0;
    background: var(--button-background);
    border-color: var(--tint-700);
    border-style: solid;
    border-width: 0;
    border-top-width: 0.5px;
    border-bottom-width: 0.5px;
    margin: 1.5px 0;

    @media (forced-colors: active) {
      border-color: Highlight;
    }

    &[data-selection-start],
    &:is(td:first-child > *, [aria-disabled] + td > *) {
      border-start-start-radius: 9999px;
      border-end-start-radius: 9999px;
      border-inline-start-width: 0.5px;
      margin-inline-start: calc(var(--gap) / 2 - 0.5px);
      padding-inline-start: 0;
    }

    &[data-selection-end],
    &:is(td:last-child > *, td:has(+ [aria-disabled]) > *) {
      border-end-end-radius: 9999px;
      border-start-end-radius: 9999px;
      border-inline-end-width: 0.5px;
      margin-inline-end: calc(var(--gap) / 2 - 0.5px);
      padding-inline-end: 0;
    }

    &[data-selection-start],
    &[data-selection-end] {
      z-index: 2;
    }

    &:not([data-selection-start], [data-selection-end]) span {
      color: var(--tint-1200);
      @media (forced-colors: active) {
        color: ButtonText;
      }
    }
  }

  &[data-pressed] {
    scale: 1;
    span {
      scale: 0.9;
    }
  }

  &[data-focus-visible] {
    outline: none;
    z-index: 2;
    span {
      outline: 2px solid var(--focus-ring-color);
      outline-offset: 2px;
    }
  }
`;

export interface RangeCalendarProps<
  T extends DateValue,
> extends AriaRangeCalendarProps<T> {
  errorMessage?: string;
}

export function RangeCalendar<T extends DateValue>({
  errorMessage,
  ...props
}: RangeCalendarProps<T>) {
  const months = props.visibleDuration?.months || 1;
  return (
    <StyledRangeCalendar
      {...(props as ComponentProps<typeof StyledRangeCalendar>)}
    >
      <Months>
        {Array.from({ length: months }, (_, i) => (
          <Month key={i}>
            <Header>
              {i === 0 && (
                <Button slot="previous" variant="quiet">
                  <ChevronLeft />
                </Button>
              )}
              <Heading level={5} />
              {i === months - 1 && (
                <Button slot="next" variant="quiet">
                  <ChevronRight />
                </Button>
              )}
            </Header>
            <CalendarGrid offset={{ months: i }}>
              {(date) => <CalendarCell date={date} />}
            </CalendarGrid>
          </Month>
        ))}
      </Months>
      {errorMessage && <Text slot="errorMessage">{errorMessage}</Text>}
    </StyledRangeCalendar>
  );
}

export { CalendarGrid };
export function CalendarCell(props: CalendarCellProps) {
  return (
    <StyledCalendarCell {...props}>
      {composeRenderProps(
        props.children,
        (
          children,
          {
            defaultChildren,
            isHovered,
            isPressed,
            isSelectionStart,
            isSelectionEnd,
            isDisabled,
          },
        ) => (
          <span
            className="button-base"
            data-variant="quiet"
            data-hovered={isHovered || undefined}
            data-pressed={isPressed || undefined}
            data-selected={isSelectionStart || isSelectionEnd || undefined}
            data-disabled={isDisabled || undefined}
          >
            {children || defaultChildren}
          </span>
        ),
      )}
    </StyledCalendarCell>
  );
}
