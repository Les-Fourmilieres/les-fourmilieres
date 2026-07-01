import {
  Input,
  TextField as AriaTextField,
  type TextFieldProps as AriaTextFieldProps,
  type ValidationResult,
  Label,
  FieldError,
} from "react-aria-components/TextField";
import type React from "react";
import styled from "styled-components";
import { Description } from "./Description";

export interface TextFieldProps<
  T = HTMLInputElement,
> extends AriaTextFieldProps {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
  placeholder?: string;
  inputRef?: React.Ref<T>;
}

const StyledLabel = styled(Label)`
  display: block;
  font-family: var(--heading);
  color: var(--text);
  margin-bottom: 8px;
  font-weight: 500;
`;

const StyledInput = styled(Input)`
  width: 100%;
  min-height: 40px;
  padding: 0 16px;
  box-sizing: border-box;
  margin: 0;
  border: 1px solid var(--border);
  border-radius: 3px;
  font: var(--sans) system-ui;
  color: var(--text);
  outline: none;
  -webkit-tap-highlight-color: transparent;

  &::placeholder {
    color: var(--placeholder);
  }

  &[data-focused] {
    outline: 2px solid var(--accent);
    outline-offset: -1px;
  }
`;

export function TextField({
  label,
  description,
  errorMessage,
  placeholder,
  inputRef,
  ...props
}: TextFieldProps) {
  return (
    <AriaTextField {...props}>
      {label && <StyledLabel>{label}</StyledLabel>}
      <StyledInput
        ref={inputRef}
        className="react-aria-Input inset"
        placeholder={placeholder}
      />
      {description && (
        <Description slot="description">{description}</Description>
      )}
      <FieldError>{errorMessage}</FieldError>
    </AriaTextField>
  );
}
