import type { ComponentProps } from "react";
import { Button } from "react-aria-components";
import styled from "styled-components";

const width = 24;
const height = 3;
const space = 4;
const borderRadius = 3;

const StyledButton = styled(Button)`
  border: none;
  background: none;
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  display: none;
  cursor: pointer;
  border-radius: 100%;
  &:hover {
    background-color: var(--hover);
  }
  z-index: 5000;

  @media (max-width: 800px) {
    display: inline-block;
    order: 3;
  },
`;

const Icon = styled.i`
  position: relative;
  display: inline-block;
  width: ${width}px;
  height: ${height}px;
  margin-bottom: ${height}px;
  background: var(--headerColor);
  border-radius: ${borderRadius}px;

  &:before {
    content: "";
    display: block;
    position: absolute;
    width: ${width}px;
    height: ${height}px;
    top: -${height + space}px;
    background: var(--headerColor);
    border-radius: ${borderRadius}px;
  }

  &:after {
    content: "";
    display: block;
    position: absolute;
    width: ${width}px;
    height: ${height}px;
    top: ${height + space}px;
    background: var(--headerColor);
    border-radius: ${borderRadius}px;
  }
`;

export function ToggleMenu(props: ComponentProps<typeof StyledButton>) {
  return (
    <StyledButton {...props}>
      <Icon />
    </StyledButton>
  );
}
