import { Button } from "react-aria-components";
import styled from "styled-components";

const width = 24;
const height = 3;
const space = 4;
const borderRadius = 3;

const StyledButton = styled(Button)`
  border: none;
  background: none;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Icon = styled.i`
  position: relative;
  display: inline-block;
  width: ${width}px;
  height: ${height}px;
  background: var(--text);
  border-radius: ${borderRadius}px;

  &:before {
    content: "";
    display: block;
    position: absolute;
    width: ${width}px;
    height: ${height}px;
    top: -${height + space}px;
    background: var(--text);
    border-radius: ${borderRadius}px;
  }

  &:after {
    content: "";
    display: block;
    position: absolute;
    width: ${width}px;
    height: ${height}px;
    top: ${height + space}px;
    background: var(--text);
    border-radius: ${borderRadius}px;
  }
`;

export function ToggleMenu() {
  return (
    <StyledButton>
      <Icon />
    </StyledButton>
  );
}
