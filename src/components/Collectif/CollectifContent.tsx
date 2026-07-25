import styled from "styled-components";
import type { CollectifI } from "../../data/collectifs";
import { Button, Link } from "react-aria-components";
import { ChevronDown, Globe } from "lucide-react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { useState } from "react";
import picto_media from "../../assets/pictos/media_B.png?url"
import picto_cafe from "../../assets/pictos/bar_B.png?url"
import picto_tierslieu from "../../assets/pictos/tierslieu_B.png?url"
import picto_festival from "../../assets/pictos/festival_B.png?url"
import picto_librairie from "../../assets/pictos/librairie_B.png?url"
import picto_theatre from "../../assets/pictos/theatre_B.png?url"
import picto_syndicat from "../../assets/pictos/syndicat_B.png?url"
import picto_artistique from "../../assets/pictos/artistique_B.png?url"
import picto_evenementiel from "../../assets/pictos/evenementiel_B.png?url"
import picto_militant from "../../assets/pictos/militant_B.png?url"
import picto_habiter from "../../assets/pictos/habiter_B.png?url"
import picto_refugie from "../../assets/pictos/refugies_B.png?url"
import picto_collectifs from "../../assets/pictos/collectifs_B.png?url"
import picto_educpop from "../../assets/pictos/education_B.png"


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

const CollectifTypes = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 4px 8px;
  flex-wrap: wrap;
`;

const CollectifType = styled.div`
  background-color: var(--accent-dark);
  color: var(--accent-contrast);
  font-weight: 500;
  padding: 0px 4px;
  border-radius: 5px;
  white-space: nowrap;
	&::before{
		content:"";
	  display:inline-block;
	  height:30px;
	  width:36px;
		transform: scale(.7);
		margin-right: 3px;
		margin-top:-2px;
	  margin-bottom:-2px;
	  vertical-align:middle;
  }
	&[data-cat="Café associatif"]::before {
		background: url("${picto_cafe}") no-repeat 0 center;
	}
	&[data-cat="Tiers-lieu"]::before {
		background: url("${picto_tierslieu}") no-repeat 0 center;
	}
	&[data-cat="Festival"]::before {
		background: url("${picto_festival}") no-repeat 0 center;
	}
	&[data-cat="Librairie"]::before {
		background: url("${picto_librairie}") no-repeat 0 center;
	}
	&[data-cat="Théâtre"]::before {
		background: url("${picto_theatre}") no-repeat 0 center;
	}
	&[data-cat="Syndicat"]::before {
		background: url("${picto_syndicat}") no-repeat 0 center;
	}
	&[data-cat="Bar - Brasserie - Commerce"]::before {
		background: url("${picto_cafe}") no-repeat 0 center;
	}
	&[data-cat="Média"]::before {
		background: url("${picto_media}") no-repeat 0 center;
	}
	&[data-cat="Collectif artistique"]::before {
		background: url("${picto_artistique}") no-repeat 0 center;
	}
	&[data-cat="Collectif événementiel"]::before {
		background: url("${picto_evenementiel}") no-repeat 0 center;
	}
	&[data-cat="Collectif militant"]::before {
		background: url("${picto_militant}") no-repeat 0 center;
	}
	&[data-cat="Collectif pour mieux habiter"]::before {
		background: url("${picto_habiter}") no-repeat 0 center;
	}
	&[data-cat="Collectif d'accueil de réfugiés"]::before {
		background: url("${picto_refugie}") no-repeat 0 center;
	}
	&[data-cat="Groupement de collectifs"]::before {
		background: url("${picto_collectifs}") no-repeat 0 center;
	}
	&[data-cat="Collectif d'éducation populaire"]::before {
		background: url("${picto_educpop}") no-repeat 0 center;
	}
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
  forceOpen?: boolean;
}

export function CollectifContent({ collectif, forceOpen }: Props) {
  const [detailsVisible, setDetailsVisible] = useState(false);
  const toggleDetails = () => setDetailsVisible(!detailsVisible);
  return (
    <>
      <Content>
        {collectif.logo && (
          <LogoContainer>
            <LogoImg src={collectif.logo} alt={`${collectif.name} logo`} />
          </LogoContainer>
        )}
        <Metadata>
          <CollectifName>{collectif.name}</CollectifName>
          <CollectifTypes>
            {collectif.type.map((type) => (
              <CollectifType data-cat={type}>{type}</CollectifType>
            ))}
          </CollectifTypes>
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
        {!forceOpen && collectif.description && (
          <ChevronContainer onClick={toggleDetails}>
            <ChevronDown />
          </ChevronContainer>
        )}
      </Content>
      {collectif.description && (
        <Description visible={forceOpen || detailsVisible}>
          {collectif.description}
        </Description>
      )}
    </>
  );
}
