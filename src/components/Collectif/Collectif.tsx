import styled from "styled-components";
import type { CollectifI } from "../../data/collectifs";
import { Button, Link } from "react-aria-components";
import { ChevronDown, Globe } from "lucide-react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { useState } from "react";

const Container = styled.div`
  flex: 1 1 180px;
  background-color: var(--bg);
  padding: 16px;
  border-radius: 8px;
  border: 1px solid var(--border);
`;

const Content = styled(Button)`
  padding: 0;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 8px;
  border: none;
  background: transparent;
  width: 100%;
`;
const ChevronContainer = styled(Button)`
  padding: 0;
  border: none;
  background: transparent;
  margin: -4px 0 0;
  cursor: pointer;
`;

const Metadata = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 8px;
`;

const LogoContainer = styled.figure`
  margin: 0;
  max-width: 120px;
  max-height: 120px;
  flex: 1 1 120px;
  align-self: stretch;
  background-color: #fffdef;
  border-radius: 8px;
  overflow: hidden;
  padding: 4px;
`;

const LogoImg = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const CollectifName = styled.h3`
  margin: 0;
  color: var(--title-color);
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 4px;
  &,
  &:visited {
    color: var(--text);
  }
  &:hover {
    color: var(--accent);
  }
`;

const Description = styled.div<{ visible: boolean }>`
  overflow: hidden;
  border-top: ${({ visible }) =>
    visible ? `1px dotted var(--accent)` : `0px dotted var(--accent)`};
  padding-top: ${({ visible }) => (visible ? "16px" : "0px")};
  margin-top: ${({ visible }) => (visible ? "16px" : "0px")};
  max-height: ${({ visible }) => (visible ? "400px" : "0px")};
  opacity: ${({ visible }) => (visible ? "1" : "0")};
  transition:
    border-top 200ms ease-in-out,
    padding-top 200ms ease-in-out,
    margin-top 200ms ease-in-out,
    max-height 200ms ease-in-out,
    opacity 200ms ease-in-out;
`;

const SocialNetworks = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
`;

interface Props {
  collectif: CollectifI;
}

export function Collectif({ collectif }: Props) {
  const [detailsVisible, setDetailsVisible] = useState(false);
  const toggleDetails = () => setDetailsVisible(!detailsVisible);
  return (
    <Container>
      <Content>
        {collectif.logo && (
          <LogoContainer>
            <LogoImg src={collectif.logo} alt={`${collectif.name} logo`} />
          </LogoContainer>
        )}
        <Metadata>
          <CollectifName>{collectif.name}</CollectifName>
          {(collectif.url || collectif.instagram || collectif.facebook) && (
            <SocialNetworks>
              {collectif.url && (
                <StyledLink href={collectif.url}>
                  <Globe size={22} />
                </StyledLink>
              )}
              {collectif.instagram && (
                <StyledLink href={collectif.instagram}>
                  <FaInstagram size={22} />
                </StyledLink>
              )}
              {collectif.facebook && (
                <StyledLink href={collectif.facebook}>
                  <FaFacebook size={22} />
                </StyledLink>
              )}
            </SocialNetworks>
          )}
        </Metadata>
        {collectif.description && (
          <ChevronContainer onClick={toggleDetails}>
            <ChevronDown />
          </ChevronContainer>
        )}
      </Content>
      {collectif.description && (
        <Description visible={detailsVisible}>
          {collectif.description}
        </Description>
      )}
    </Container>
  );
}
