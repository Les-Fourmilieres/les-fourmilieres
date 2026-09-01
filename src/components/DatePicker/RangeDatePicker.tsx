import {
  DateRangePicker as AriaDateRangePicker,
  type DateRangePickerProps as AriaDateRangePickerProps,
  type DateValue,
  FieldError,
  Group,
  Label,
  type ValidationResult,
} from "react-aria-components/DateRangePicker";
import { DateInput, DateSegment } from "./DateField";
import { Popover } from "../Popover";
import { RangeCalendar } from "./RangeCalendar";
import { ChevronDown } from "lucide-react";
import { Button } from "../Button";
import { Description } from "../Description";
import styled from "styled-components";
import type { ComponentProps } from "react";

const StyledDateRangePicker = styled(AriaDateRangePicker)`
  color: var(--text);
  max-width: 100%;
  flex: 1 1 300px;

  & > .inset {
    border: 1px solid var(--border);
    width: 100%;
  }

  .field-Button {
    margin-left: auto;
  }

  [slot="start"] ~ span {
    padding: 0 4px;
  }

  [slot="end"] {
    margin-right: 1.75rem;
    flex: 1;
  }

  .react-aria-DateInput {
    width: unset;
    min-width: unset;
    padding: unset;
    border: unset;
    box-shadow: none;
    background: none;
    height: auto;
    line-height: normal;
    &[data-focus-within] {
      outline: unset;
    }
  }
`;

const StyledGroup = styled(Group)`
  display: flex;
  align-items: center;
  width: fit-content;
  min-width: 220px;
  max-width: 100%;
  height: var(--spacing-8);
  box-sizing: border-box;
  overflow: clip;
  position: relative;
  padding: 0 var(--spacing-1) 0 var(--spacing-3);
  border-radius: var(--radius);
  font-size: var(--font-size);
  color: var(--field-text-color);
  white-space: nowrap;
  cursor: text;

  &[data-focus-within] {
    outline: 2px solid var(--focus-ring-color);
    outline-offset: -1px;
  }

  &[data-disabled] {
    color: var(--text-color-disabled);
  }
`;

const DateFields = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  width: fit-content;
  overflow-x: auto;
  overflow-y: clip;
  scrollbar-width: none;
`;

export interface DateRangePickerProps<
  T extends DateValue,
> extends AriaDateRangePickerProps<T> {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
}

export function DateRangePicker<T extends DateValue>({
  label,
  description,
  errorMessage,
  ...props
}: DateRangePickerProps<T>) {
  return (
    <StyledDateRangePicker
      {...(props as ComponentProps<typeof StyledDateRangePicker>)}
    >
      <Label>{label}</Label>
      <StyledGroup className="inset">
        <DateFields>
          <DateInput slot="start">
            {(segment) => <DateSegment segment={segment} />}
          </DateInput>
          <span aria-hidden="true">–</span>
          <DateInput slot="end">
            {(segment) => <DateSegment segment={segment} />}
          </DateInput>
        </DateFields>
        <Button>
          <ChevronDown />
        </Button>
      </StyledGroup>
      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
      <Popover hideArrow>
        <RangeCalendar />
      </Popover>
    </StyledDateRangePicker>
  );
}
