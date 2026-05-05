import { useMeter } from "react-aria";
import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { Link } from "react-aria-components";
import { fetchCampaign } from "./Donoor";

const Section = styled.section`
  width: 100%;
  max-width: var(--contentWidth);
  margin: 40px auto;
  padding: 0 16px;
  box-sizing: border-box;
`;

function formatCurrency(amount: number, currency: string) {
  return new Intl.NumberFormat("fr-FR", { style: "currency", currency }).format(
    amount,
  );
}

const MeterContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto 24px;
`;

const MeterLegend = styled.div`
  display: flex;
  justify-content: space-between;
`;
const MeterGauge = styled.div`
  height: 24px;
  background-color: var(--accent-bg-light);
  border-radius: 3px;
  overflow: hidden;
`;

const MeterBar = styled.div`
  height: 100%;
  background-color: var(--accent);
  color: var(--surface);
  text-align: right;
  font-weight: 500;
  transition: width 0.5s ease-in-out;
  box-sizing: border-box;
  padding-right: 4px;
  padding-left: 2px;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
`;

const LinkButton = styled(Link)`
  display: inline-block;
  padding: 8px 24px;
  background-color: var(--accent);
  color: var(--accent-contrast);
  border: none;
  outline: none;
  text-decoration: none;
  font-weight: 500;
  font-size: 20px;
  transition: background-color 200ms ease-in-out;
  &:hover {
    background-color: var(--accent-dark);
  }
`;

const LinkContainer = styled.div`
  text-align: center;
  margin: 32px 0 40px;
`;

const label = "Objectif :";

export function Cagnotte() {
  const { data } = useQuery({
    queryKey: ["campaign"],
    queryFn: fetchCampaign,
  });
  const maxValue = data?.goal_amount ?? 5000;
  const value = data ? data.current_amount + 3000 : 0;
  const { meterProps, labelProps } = useMeter({
    minValue: 0,
    maxValue,
    value,
    valueLabel: formatCurrency(maxValue, data?.currency ?? "EUR"),
  });
  const barWidth = `${Math.min(100, Math.round((data ? data.percent : 0) * 100))}%`;

  return (
    <Section>
      <h1>Soutenir Les Fourmilières</h1>
      <p>
        Afin de défrayer les intervenant·es, rémunérer les artistes et
        technicien·nes, nous donner les moyens de communiquer le plus largement
        possible et permettre un accès gratuit pour tous·tes à l'ensemble des
        évènements, vous pouvez faire un don au festival.
      </p>

      <MeterContainer {...meterProps}>
        <MeterLegend>
          {label && <span {...labelProps}>{label}</span>}
          <span>{meterProps["aria-valuetext"]}</span>
        </MeterLegend>
        <MeterGauge>
          <MeterBar style={{ width: barWidth }}>{barWidth}</MeterBar>
        </MeterGauge>
      </MeterContainer>

      <LinkContainer>
        <LinkButton href="#">Je fais un don</LinkButton>
      </LinkContainer>
    </Section>
  );
}
