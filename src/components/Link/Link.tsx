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

export const NavLink = styled(Link)`
  display: inline-block;
  padding: 8px 4px;
  color: var(--headerColor);
  text-decoration: none;
  font-weight: 500;
  &:visited {
    color: var(--headerColor);
  }
  &:hover {
    text-shadow: 0px 0px 2px rgba(0, 0, 0, 0.15);
  }
`;

export const IconNavLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  width: 32px;
  background-color: var(--headerColor);
  border-radius: 16px;
  &,
  &:visited {
    color: var(--headerBg);
  }
`;
