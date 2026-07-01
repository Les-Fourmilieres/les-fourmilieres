import styled from "styled-components";
import { Button as RacButton } from "react-aria-components";

export const Button = styled(RacButton)`
  display: inline-block;
  padding: 8px 24px;
  background-color: var(--accent);
  color: var(--accent-contrast);
  cursor: pointer;
  border: none;
  outline: none;
  text-decoration: none;
  font-weight: 500;
  font-size: 20px;
  transition: background-color 200ms ease-in-out;
  text-transform: uppercase;
  &:hover {
    background-color: var(--accent-dark);
  }
`;
