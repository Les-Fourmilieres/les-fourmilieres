import styled from "styled-components";
import { CagnotteGauge } from "./CagnotteGauge";
import { useDonoorCagnotte } from "./useDonoorCagnotte";
import { LinkButton } from "../Link/Link";

const Section = styled.section`
  width: 100%;
  max-width: var(--contentWidth);
  margin: 40px auto;
  padding: 0 16px;
  box-sizing: border-box;
`;

const GaugeContainer = styled.div`
  margin: 0 auto 24px;
  width: 100%;
  max-width: 500px;
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
      <GaugeContainer>
        <CagnotteGauge data={data} />
      </GaugeContainer>

      <LinkContainer>
        <LinkButton href="#">Je fais un don</LinkButton>
      </LinkContainer>
    </Section>
  );
}
