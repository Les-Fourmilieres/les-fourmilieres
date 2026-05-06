import { animate, motion, useTransform } from "framer-motion";
import type { MotionValue } from "framer-motion";
import { CagnotteGauge } from "./CagnotteGauge";
import { useDonoorCagnotte } from "./useDonoorCagnotte";
import styled from "styled-components";
import { formatCurrency } from "./formatCurrency";
import { LinkButton } from "../Link/Link";
import { useEffect, useRef } from "react";

const Container = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

const GaugeContainer = styled(motion.div)`
  flex: 1 1 auto;
  display: flex;
  align-self: stretch;
  box-sizing: border-box;
`;

const SummaryContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  line-height: 1em;
  font-variant: small-caps;
  font-weight: 500;
  white-space: nowrap;
`;

const CallToAction = styled(motion.div)`
  flex: 0 1 auto;
`;

interface Props {
  progress: MotionValue<number>;
}

export function CagnotteHeader({ progress }: Props) {
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
  const padding = useTransform(progress, [0, 1], [19, 0]);
  return (
    <Container style={{ height: campaignHeight }}>
      <SummaryContainer style={{ scale, originX: "100%" }}>
        <div ref={currentAmountRef}>
          {formatCurrency(0, data?.currency ?? "EUR")}
        </div>
        <div>récoltés</div>
        <div>
          sur{" "}
          {formatCurrency(data?.goal_amount ?? 5000, data?.currency ?? "EUR")}
        </div>
      </SummaryContainer>
      <GaugeContainer
        style={{
          paddingTop: padding,
          paddingBottom: padding,
        }}
      >
        <CagnotteGauge data={data} />
      </GaugeContainer>
      <CallToAction>
        <motion.div
          style={{
            scale,
            originX: "50%",
            originY: "50%",
          }}
        >
          <LinkButton href="#">Je fais un don</LinkButton>
        </motion.div>
      </CallToAction>
    </Container>
  );
}
