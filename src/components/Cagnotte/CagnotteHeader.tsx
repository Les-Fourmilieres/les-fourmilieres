import { animate, motion, useTransform } from "framer-motion";
import type { MotionValue } from "framer-motion";
import { CagnotteGauge } from "./CagnotteGauge";
import { useDonoorCagnotte } from "./useDonoorCagnotte";
import styled from "styled-components";
import { formatCurrency } from "./formatCurrency";
import { LinkButton } from "../Link/Link";
import { useEffect, useRef } from "react";
import { CagnotteSummary } from "./CagnotteSummary";

const Container = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

  @media (max-width: 800px) {
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

const GaugeContainer = styled(motion.div)`
  flex: 1 1 auto;
  display: flex;
  align-self: center;
  box-sizing: border-box;

  @media (max-width: 800px) {
    order: 3;
    flex: 1 1 100%;
    margin: -16px 0 0;
  }
`;

const CallToAction = styled(motion.div)`
  flex: 0 1 auto;

  @media (max-width: 800px) {
    order: 2;
  }
`;

interface Props {
  progress: MotionValue<number>;
  isMobile: boolean;
}

export function CagnotteHeader({ progress, isMobile }: Props) {
  const { data } = useDonoorCagnotte();
  const currentAmountRef = useRef<HTMLDivElement>(null);
  const previousValue = useRef(data?.current_amount ?? 0);

  useEffect(() => {
    const node = currentAmountRef.current;
    const newValue = data?.current_amount;
    if (newValue && node) {
      const controls = animate(previousValue.current, newValue, {
        duration: 2,
        ease: "easeInOut",
        onUpdate(value) {
          node.textContent = formatCurrency(value, data?.currency ?? "EUR");
        },
      });
      return () => controls.stop();
    }
  }, [data?.current_amount, data?.currency]);
  const campaignHeight = useTransform(progress, [0, 1], [80, 0]);
  const scale = useTransform(progress, [0, 1], [1, 0]);
  const gaugeHeight = useTransform(progress, [0, 1], [isMobile ? 20 : 42, 0]);
  const margin = useTransform(progress, [0, 1], [0, isMobile ? -32 : 0]);
  return (
    <Container style={{ height: campaignHeight }}>
      <CagnotteSummary
        data={data}
        margin={margin}
        scale={scale}
        isMobile={isMobile}
      />

      <GaugeContainer
        style={{
          height: gaugeHeight,
        }}
      >
        <CagnotteGauge data={data} />
      </GaugeContainer>
      <CallToAction style={{ marginBottom: margin }}>
        <motion.div
          style={{
            scale,
            originX: isMobile ? "100%" : "50%",
            originY: isMobile ? "0%" : "50%",
          }}
        >
          <LinkButton href="https://donoor.org/c/festival-les-fourmilieres ">
            Je fais un don
          </LinkButton>
        </motion.div>
      </CallToAction>
    </Container>
  );
}
