import styled from "styled-components";
import { Button as RacButton } from "react-aria-components";

interface Props {
  size?: "small" | "default";
  variant?: "primary" | "default" | "quiet";
}

export const Button = styled(RacButton)<Props>`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: ${({ size }) => (size === "small" ? `4px 16px` : `8px 24px`)};
  font-size: ${({ size }) => (size === "small" ? `18px` : `16px`)};
  background-color: ${({ variant }) =>
    variant === "default" ? `var(--bg)` : `var(--accent)`};
  color: ${({ variant }) =>
    variant === "default" ? `var(--text)` : `var(--accent-contrast)`};
  border: ${({ variant }) =>
    variant === "default" ? `1px solid var(--border)` : `none`};
  text-transform: ${({ variant }) =>
    variant === "default" ? `none` : `uppercase`};
  cursor: pointer;
  outline: none;
  text-decoration: none;
  font-weight: 500;
  transition: background-color 200ms ease-in-out;
  &:hover {
    background-color: var(--accent-dark);
  }
`;
