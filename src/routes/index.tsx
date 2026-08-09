import { createFileRoute } from "@tanstack/react-router";
import styled from "styled-components";
import { Logo } from "../components/Logo/Logo";
import { Cagnotte } from "../components/Cagnotte/Cagnotte";
import { Section } from "../components/Section";
import { Teaser } from "../views/Teaser";
import { Newsletter } from "../components/Newsletter/Newsletter";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: `🐜 Les Fourmilières · Festival antifasciste et solidaire` },
      {
        name: "description",
        content: `Les Fourmilières est un festival solidaire et antifasciste. Nous sommes des collectifs, associations, librairies, brasseries, syndicats, lieux culturels, troupes de théâtre, associations sportives, tiers lieux, cinémas. Nous sommes actuellement une centaine de collectifs répartis du Larzac aux Cévennes et jusqu’au littoral, sur l'Aude, l'Hérault, le Gard, la Lozère, l'Ardèche et l'Aveyron.`,
      },
      {
        property: "og:title",
        content: `🐜 Les Fourmilières · Festival antifasciste et solidaire`,
      },
      {
        property: "og:description",
        content: `Les Fourmilières est un festival solidaire et antifasciste. Nous sommes des collectifs, associations, librairies, brasseries, syndicats, lieux culturels, troupes de théâtre, associations sportives, tiers lieux, cinémas. Nous sommes actuellement une centaine de collectifs répartis du Larzac aux Cévennes et jusqu’au littoral, sur l'Aude, l'Hérault, le Gard, la Lozère, l'Ardèche et l'Aveyron.`,
      },
      { property: "og:type", content: "website" },
    ],
  }),
});

const HeroSection = styled.div`
  background-color: var(--surface);
  text-align: center;
  min-height: 50vh;
`;

const PlaceAndDateSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  align-self: stretch;
  gap: 16px;
`;

const DatesSection = styled.p`
  line-height: 1.1em;
  margin: 0;
  font-size: 20px;
`;

const HeroLogo = styled.div`
  max-width: 500px;
  width: 100%;
  flex: 0 1 243px;
  padding: 12px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const HeroTitleSection = styled.div``;

const HeroTitle = styled.h2`
  margin: 0;
  letter-spacing: 0.3px;
  font-size: 24px;
  text-align: center;
`;

const HeroTagLine = styled.h3`
  margin: 0;
  background-color: var(--accent-bg);
  color: var(--accent-fg);
  font-weight: 500;
  padding: 0 4px;
  font-size: 19px;
  text-align: center;
`;

// eslint-disable-next-line react-refresh/only-export-components
function Home() {
  return (
    <>
      <HeroSection>
        <Section>
          <PlaceAndDateSection>
            <DatesSection>
              du <strong>25&nbsp;septembre</strong>
              <br />
              au <strong>11&nbsp;octobre 2026</strong>
            </DatesSection>
            <DatesSection>
              dans l'<strong>Aude</strong>, l'<strong>Hérault</strong> le <strong>Gard</strong>,<br />
							la <strong>Lozère</strong>, l'<strong>Ardèche</strong> et <strong>l'Aveyron</strong>
            </DatesSection>
          </PlaceAndDateSection>
          <HeroLogo>
            <div style={{ width: "100%" }}>
              <Logo />
            </div>
          </HeroLogo>
          <HeroTitleSection>
            <HeroTitle>Festival Antifasciste et Solidaire</HeroTitle>
            <HeroTagLine>
              La quinzaine qui fourmille contre le fascisme
            </HeroTagLine>
          </HeroTitleSection>
        </Section>
      </HeroSection>
      <Section>
        <Newsletter />
      </Section>

      <Teaser />
      <Cagnotte />
    </>
  );
}
