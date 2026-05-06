import { createFileRoute } from "@tanstack/react-router";
import styled from "styled-components";
import { Logo } from "../components/Logo/Logo";
import { Cagnotte } from "../components/Cagnotte/Cagnotte";
import { Section } from "../components/Section";
import { Teaser } from "../views/Teaser";

export const Route = createFileRoute("/")({
  component: Home,
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
              dans l'<strong>Hérault</strong>,<br /> le <strong>Gard</strong> et{" "}
              <strong>l'Aveyron</strong>
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
        <iframe
          width="100%"
          height="550"
          src="https://831d7d2b.sibforms.com/serve/MUIFAGRLxcnC6V1RZbJo8HRFs16TSK5o7YcHGuBQFXk9UDZOHZxjnGTi6DcChRJlbQ-TM_todKH3Sm7SGYWsRm3bnHYgrDldw3YrTy1OmoLqJVGcX8uXMXQbyv1l71ADn25xNdJHH7iHDApLfM8TkSoA1wyOLI0wpEQcdt9S_RKKeEAHep6xsJhsyFzE4MQEWzwKPFmhQ4id_3mx"
          allowFullScreen
          allowTransparency={true}
          style={{
            display: "block",
            margin: "0 auto",
            maxWidth: "100%",
            border: "none",
            backgroundColor: "transparent",
          }}
        ></iframe>
      </Section>
      <Teaser />
      <Cagnotte />
    </>
  );
}
