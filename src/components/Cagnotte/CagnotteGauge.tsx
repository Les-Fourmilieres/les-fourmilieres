import { useMeter } from "react-aria";
import styled from "styled-components";
import type { DonoorResponseData } from "./Donoor";
import { formatCurrency } from "./formatCurrency";
import { formatPercent } from "./formatPercent";

const MeterContainer = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const MeterGauge = styled.div`
  height: 100%;
  background-color: var(--accent-bg-light);
  border-radius: 3px;
  overflow: hidden;
`;

const MeterBar = styled.div`
  height: 100%;
  background-color: var(--accent);
  color: var(--accent-contrast);
  text-align: right;
  font-weight: 500;
  transition: width 2s ease-in-out;
  box-sizing: border-box;
  padding-right: 4px;
  padding-left: 2px;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  display: flex;
  align-items: center;
`;

interface Props {
  data?: DonoorResponseData | undefined;
}

export function CagnotteGauge({ data }: Props) {
  const maxValue = data?.goal_amount ?? 5000;
  const value = data ? data.current_amount + 3000 : 0;
  const { meterProps } = useMeter({
    minValue: 0,
    maxValue,
    value,
    valueLabel: formatCurrency(maxValue, data?.currency ?? "EUR"),
  });
  const percentValue = (data?.percent ?? 0) / 100;
  const barWidth = `${Math.min(100, 100 * percentValue)}%`;
  return (
    <MeterContainer {...meterProps}>
      <MeterGauge>
        <MeterBar style={{ width: barWidth }}>
          {formatPercent(percentValue)}
        </MeterBar>
      </MeterGauge>
    </MeterContainer>
  );
}
