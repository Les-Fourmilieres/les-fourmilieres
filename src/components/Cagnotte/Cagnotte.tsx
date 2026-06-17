import styled from "styled-components";
import { CagnotteContent } from "./CagnotteContent";

const Section = styled.section`
  width: 100%;
  max-width: var(--contentWidth);
  margin: 40px auto;
  padding: 0 16px;
  box-sizing: border-box;
`;

export function Cagnotte() {
  return (
    <Section>
      <h1>Soutenir Les Fourmilières</h1>
      <p>
        Afin de défrayer les intervenant·es, rémunérer les artistes et
        technicien·nes, nous donner les moyens de communiquer le plus largement
        possible et permettre un accès gratuit pour tous·tes à l'ensemble des
        évènements, vous pouvez faire un don au festival.
      </p>
      <CagnotteContent />
    </Section>
  );
}
