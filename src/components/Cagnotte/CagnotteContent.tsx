import styled from "styled-components";
import { CagnotteGauge } from "./CagnotteGauge";
import { useDonoorCagnotte } from "./useDonoorCagnotte";
import { LinkButton } from "../Link/Link";
import { CagnotteSummary } from "./CagnotteSummary";

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

export function CagnotteContent() {
  const { data } = useDonoorCagnotte();

  return (
    <>
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
    </>
  );
}
