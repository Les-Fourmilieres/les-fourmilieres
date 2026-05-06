import styled from "styled-components";
import { CagnotteGauge } from "./CagnotteGauge";
import { useDonoorCagnotte } from "./useDonoorCagnotte";
import { LinkButton } from "../Link/Link";
import { CagnotteSummary } from "./CagnotteSummary";

const Section = styled.section`
  width: 100%;
  max-width: var(--contentWidth);
  margin: 40px auto;
  padding: 0 16px;
  box-sizing: border-box;
`;

const CagnotteContainer = styled.div`
  display: flex;
  height: 60px;
  margin: 0 auto 24px;
  flex-direction: row;
  align-items: stretch;
  justify-content: center;
  gap: 8px;

  @media (max-width: 800px) {
    flex-direction: row-reverse;
  }
`;

const GaugeContainer = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  align-items: stretch;
`;

const LinkContainer = styled.div`
  text-align: center;
  margin: 32px 0 40px;
`;

export function Cagnotte() {
  const { data } = useDonoorCagnotte();

  return (
    <Section>
      <h1>Soutenir Les Fourmilières</h1>
      <p>
        Afin de défrayer les intervenant·es, rémunérer les artistes et
        technicien·nes, nous donner les moyens de communiquer le plus largement
        possible et permettre un accès gratuit pour tous·tes à l'ensemble des
        évènements, vous pouvez faire un don au festival.
      </p>
      <CagnotteContainer>
        <CagnotteSummary data={data} />
        <GaugeContainer>
          <CagnotteGauge data={data} />
        </GaugeContainer>
      </CagnotteContainer>

      <LinkContainer>
        <LinkButton href="https://donoor.org/c/festival-les-fourmilieres ">
          Je fais un don
        </LinkButton>
      </LinkContainer>
    </Section>
  );
}
