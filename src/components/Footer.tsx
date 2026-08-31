import styled from "styled-components";
import { Logo } from "./Logo/Logo";
import { Section } from "./Section";
import { IconNavLink, Link, LinkButton } from "./Link/Link";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Container = styled.footer`
  background-color: var(--surface);
`;

const StyledSection = styled(Section)`
  display: flex;
  flex-direction: row;
  gap: 16px;
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }
`;

const LogoContainer = styled.div`
  max-width: 200px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1 1 auto;
  align-items: center;
`;

const LogoColumn = styled(Column)`
  align-items: flex-start;
  overflow: hidden;
  @media (max-width: 800px) {
    align-items: center;
  }
`;

const LastColumn = styled(Column)`
  align-items: flex-end;
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`;

export function Footer() {
  return (
    <Container>
      <StyledSection>
        <LogoColumn>
          <LogoContainer>
            <Logo />
          </LogoContainer>
        </LogoColumn>

        <Column>
          <Link href="/la-charte">La Charte</Link>
          <Link href="/mentions-legales">Mentions Légales</Link>
          <Link href="/politique-de-confidentialite">
            Politique de confidentialité
          </Link>
        </Column>

        <Column>
          <LinkButton href="https://donoor.org/c/festival-les-fourmilieres ">
            Je soutiens le festival
          </LinkButton>
        </Column>

        <LastColumn>
          <IconNavLink to="https://www.instagram.com/lesfourmilieres/">
            <FaInstagram />
          </IconNavLink>
          <IconNavLink to="https://www.facebook.com/profile.php?id=61591477501620">
            <FaFacebook />
          </IconNavLink>
        </LastColumn>
      </StyledSection>
    </Container>
  );
}
