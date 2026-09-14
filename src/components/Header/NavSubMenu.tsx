import { MenuTrigger } from "react-aria-components";
import { IconNavLink, NavButton, NavSubLink } from "../Link/Link";
import { Popover } from "../Popover";
import type { MenuItemGroup } from "./Menu";
import styled from "styled-components";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const NavSubMenuList = styled.ul`
  background-color: var(--headerBg);
  margin: 0;
  list-style-type: none;
  padding: 0;
`;

interface Props {
  item: MenuItemGroup;
}

export function NavSubMenu({ item }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <MenuTrigger>
      <NavButton onClick={() => setIsOpen(!isOpen)}>
        <span>{item.label}</span>
        <ChevronDown />
      </NavButton>
      <Popover isOpen={isOpen} onOpenChange={setIsOpen}>
        <NavSubMenuList>
          {item.children.map((child) => (
            <li key={child.to}>
              {child.isIcon ? (
                <IconNavLink to={child.to}>{child.label}</IconNavLink>
              ) : (
                <NavSubLink onClick={() => setIsOpen(false)} to={child.to}>
                  {child.label}
                </NavSubLink>
              )}
            </li>
          ))}
        </NavSubMenuList>
      </Popover>
    </MenuTrigger>
  );
}
