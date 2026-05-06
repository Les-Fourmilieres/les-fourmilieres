import { createLink } from "@tanstack/react-router";
import { Link as RACLink, MenuItem } from "react-aria-components";
import styled from "styled-components";

export const Link = styled(createLink(RACLink))`
  color: var(--accent);
  &:visited {
    color: var(--accent);
  }
`;
export const MenuItemLink = createLink(MenuItem);

export const LinkButton = styled(RACLink)`
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
  &:hover {
    background-color: var(--accent-dark);
  }
`;
