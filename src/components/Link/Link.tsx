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
