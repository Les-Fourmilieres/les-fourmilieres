import { Modal, ModalOverlay } from "react-aria-components";
import styled, { keyframes } from "styled-components";
import type { MenuItem } from "./Menu";
import { Link } from "../Link/Link";
import type { MouseEvent } from "react";

const overlayAnimation = keyframes`
  from {
    background: rgba(0 0 0 / 0);
    backdrop-filter: blur(0);
  }

  to {
    background: rgba(0 0 0 / .3);
    backdrop-filter: blur(10px);
  }
`;
const siderBarAnimation = keyframes`
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(0);
  }
`;

const Overlay = styled(ModalOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0 0 0 / 0.3);
  backdrop-filter: blur(10px);
  z-index: 3000;

  &[data-entering] {
    animation: ${overlayAnimation} 200ms;
  }

  &[data-exiting] {
    animation: ${overlayAnimation} 200ms reverse ease-in;
  }
`;

const SidebarContainer = styled(Modal)`
  position: fixed;
  right: 0;
  width: 300px;
  top: 0;
  height: 100vh;
  box-sizing: border-box;
  padding: 60px 0;
  margin-left: auto;
  background-color: var(--headerBg);
  color: var(--headerColor);
  outline: none;
  border-left: 1px solid var(--overlay-border);
  box-shadow: -8px 0 20px rgba(0 0 0 / 0.1);

  &[data-entering] {
    animation: ${siderBarAnimation} 200ms;
  }

  &[data-exiting] {
    animation: ${siderBarAnimation} 200ms reverse ease-in;
  }
`;

const Navigation = styled.nav`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
`;

const NavMenu = styled.ul`
  liststyletype: none;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  overflow: hidden;
  margin: 0;
  padding: 0;
  gap: 8px;
`;

const NavMenuItem = styled.li`
  display: flex;
  align-items: stretch;
  flex-direction: column;
`;

const NavLink = styled(Link)`
  display: inline-block;
  padding: 8px 16px;
  color: var(--headerColor);
  text-decoration: none;
  font-weight: 500;
  &:visited {
    color: var(--headerColor);
  }
  &:hover {
    text-shadow: 0px 0px 2px rgba(0, 0, 0, 0.15);
    background-color: var(--hover);
  }
`;

const stopPropagation = (e: MouseEvent) => e.stopPropagation();

interface Props {
  open: boolean;
  close: () => void;
  menu: MenuItem[];
}

export function Sidebar({ open, close, menu }: Props) {
  return (
    <Overlay isOpen={open} onClick={close}>
      <SidebarContainer onClick={stopPropagation}>
        <Navigation>
          <NavMenu>
            <NavMenuItem>
              <NavLink to="/" onClick={close}>
                Accueil
              </NavLink>
            </NavMenuItem>
            {menu.map((item) => (
              <NavMenuItem key={item.to}>
                <NavLink to={item.to} onClick={close}>
                  {item.label}
                </NavLink>
              </NavMenuItem>
            ))}
          </NavMenu>
        </Navigation>
      </SidebarContainer>
    </Overlay>
  );
}
