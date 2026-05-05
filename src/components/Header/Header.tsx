import { styled } from "styled-components";
import { Logo } from "../Logo/Logo";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "../Link/Link";
import { ToggleMenu } from "../ToggleMenu";
import { useState } from "react";
import { Sidebar } from "./Sidebar";
import type { MenuItem } from "./Menu";

const HeaderContainer = styled(motion.header)`
  background-color: var(--headerBg);
  color: var(--headerColor);
  height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 2000;
  padding: 8px 16px;
  box-sizing: border-box;
  box-shadow: var(--shadow);
`;

const Content = styled.div(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  maxWidth: "var(--contentWidth)",
  boxSizing: "border-box",
  padding: "0 16px",
  width: "100%",
  height: "100%",
  margin: "0 auto",
  letterSpacing: "-0.5px",
}));

const LogoContainer = styled(Link)(() => ({
  height: "calc(100% + 16px)",
  flex: "0 0 250px",
}));

const Navigation = styled.nav`
  flex: 1 1 auto;
  display: flex;
  @media (max-width: 800px) {
    display: none;
  },
`;

const NavMenu = styled.ul(() => ({
  listStyleType: "none",
  flex: 1,
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-end",
  overflow: "hidden",
  margin: 0,
  padding: 0,
  gap: 16,
}));

const NavMenuItem = styled.li(() => ({}));

const NavLink = styled(Link)`
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

const menu: MenuItem[] = [
  {
    label: "Qui sommes-nous ?",
    to: "/qui-sommes-nous",
  },
  {
    label: "Le programme",
    to: "/le-programme",
  },
  {
    label: "La charte",
    to: "/la-charte",
  },
];

export function Header() {
  const [menuOpened, setMenuOpened] = useState(false);
  const { scrollY } = useScroll();

  const toggleMenu = () => setMenuOpened(!menuOpened);

  const progress = useTransform(scrollY, [0, 80], [0, 1], {
    clamp: true,
  });

  const height = useTransform(progress, [0, 1], [140, 60]);
  return (
    <>
      <HeaderContainer style={{ height }}>
        <Content>
          <LogoContainer to="/">
            <Logo progress={progress} backgroundColor="var(--headerBg)" />
          </LogoContainer>
          <Navigation>
            <NavMenu>
              {menu.map((item) => (
                <NavMenuItem key={item.to}>
                  <NavLink to={item.to}>{item.label}</NavLink>
                </NavMenuItem>
              ))}
            </NavMenu>
          </Navigation>
          <ToggleMenu onClick={toggleMenu} />
          <Sidebar open={menuOpened} close={toggleMenu} menu={menu} />
        </Content>
      </HeaderContainer>
      <motion.div style={{ height: "140px" }} />
    </>
  );
}
