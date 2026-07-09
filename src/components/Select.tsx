import {
  type ListBoxItemProps,
  Select as AriaSelect,
  type SelectProps as AriaSelectProps,
  SelectValue,
  type ValidationResult,
  type ListBoxProps,
  FieldError,
} from "react-aria-components/Select";
import { Button } from "./Button";
import { DropdownItem, DropdownListBox } from "./ListBox";
import { ChevronDown } from "lucide-react";
import { Popover } from "./Popover";
import { Description } from "./Description";
import styled from "styled-components";

export interface SelectProps<
  T extends object,
  M extends "single" | "multiple",
> extends Omit<AriaSelectProps<T, M>, "children"> {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
  items?: Iterable<T>;
  children: React.ReactNode | ((item: T) => React.ReactNode);
}

const SelectButton = styled(Button)`
  flex: 1 1 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export function Select<
  T extends object,
  M extends "single" | "multiple" = "single",
>({
  label,
  description,
  errorMessage,
  children,
  items,
  ...props
}: SelectProps<T, M>) {
  return (
    <AriaSelect {...props} placeholder={label}>
      <SelectButton size="small" variant="default">
        <SelectValue />
        <ChevronDown />
      </SelectButton>
      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
      <Popover hideArrow>
        <SelectListBox items={items}>{children}</SelectListBox>
      </Popover>
    </AriaSelect>
  );
}

export function SelectListBox<T extends object>(props: ListBoxProps<T>) {
  return <DropdownListBox {...props} />;
}

export function SelectItem(props: ListBoxItemProps) {
  return <DropdownItem {...props} />;
}
