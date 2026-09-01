import {
  DateField as AriaDateField,
  type DateFieldProps as AriaDateFieldProps,
  DateInput as AriaDateInput,
  type DateInputProps,
  DateSegment as AriaDateSegment,
  type DateSegmentProps,
  type DateValue,
  type ValidationResult,
  Label,
  FieldError,
} from "react-aria-components/DateField";
import { Description } from "../Description";
import styled from "styled-components";
import type { ComponentProps } from "react";

const StyledDateInput: typeof AriaDateInput = styled(AriaDateInput)`
  display: inline;
  padding: 0 12px;
  box-sizing: border-box;
  border-radius: 4px;
  font: 16px var(--sans);
  color: var(--text);
  height: 24px;
  line-height: 24px;
  width: fit-content;
  min-width: 150px;
  white-space: nowrap;
  forced-color-adjust: none;
  cursor: text;

  &[data-focus-within] {
    outline: 2px solid var(--accent-dark);
    outline-offset: -1px;
  }

  &[data-disabled] {
    color: var(--placeholder);
    cursor: default;
  }
`;

const StyledDateField = styled(AriaDateField)`
  display: flex;
  flex-direction: column;
`;

const StyledDateSegment = styled(AriaDateSegment)`
  padding: 2px;
  font-size: 16px;
  font-variant-numeric: tabular-nums;
  text-align: end;
  color: var(--text);
  -webkit-tap-highlight-color: transparent;

  &[data-type="literal"] {
    padding: 0;
  }

  &[data-placeholder] {
    color: var(--placeholder);
  }

  &:focus {
    color: var(--accent);
    background: var(--accent-contrast);
    outline: none;
    border-radius: 4px;
    caret-color: transparent;
  }

  &[data-invalid] {
    color: var(--invalid-color);

    &:focus {
      background: var(--accent);
      color: var(--accent-contrast);
    }
  }

  &[data-disabled] {
    color: var(--placeholder);
    cursor: default;
  }
`;

export interface DateFieldProps<
  T extends DateValue,
> extends AriaDateFieldProps<T> {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
}

export function DateField<T extends DateValue>({
  label,
  description,
  errorMessage,
  ...props
}: DateFieldProps<T>) {
  return (
    <StyledDateField {...(props as ComponentProps<typeof StyledDateField>)}>
      <Label>{label}</Label>
      <DateInput>{(segment) => <DateSegment segment={segment} />}</DateInput>
      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
    </StyledDateField>
  );
}

export function DateSegment(props: DateSegmentProps) {
  return <StyledDateSegment {...props} />;
}

export function DateInput(props: DateInputProps) {
  return <StyledDateInput {...props} className="inset" />;
}
