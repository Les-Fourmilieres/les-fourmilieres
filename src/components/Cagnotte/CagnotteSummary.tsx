import { animate, motion, MotionValue, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import styled from "styled-components";
import type { DonoorResponseData } from "./Donoor";
import { formatCurrency } from "./formatCurrency";

const SummaryContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  line-height: 1em;
  font-variant: small-caps;
  font-weight: 500;
  white-space: nowrap;

  @media (max-width: 800px) {
    order: 1;
    align-items: flex-start;
    flex: 1;
  }
`;

interface Props {
  data?: DonoorResponseData | undefined;
  scale?: MotionValue<number>;
  margin?: MotionValue<number>;
  isMobile?: boolean;
}

export function CagnotteSummary({ scale, data, isMobile, margin }: Props) {
  const currentAmountRef = useRef<HTMLDivElement>(null);
  const previousValue = useRef(data?.current_amount ?? 0);
  const isInView = useInView(currentAmountRef, { once: false });

  useEffect(() => {
    const node = currentAmountRef.current;
    const newValue = data?.current_amount;
    if (newValue && node && isInView) {
      const controls = animate(previousValue.current, newValue, {
        duration: 2,
        ease: "easeInOut",
        onUpdate(value) {
          node.textContent = formatCurrency(value, data?.currency ?? "EUR");
        },
      });
      return () => controls.stop();
    }
  }, [isInView, data?.current_amount, data?.currency]);
  return (
    <SummaryContainer
      style={{
        scale,
        originX: isMobile ? "0%" : "100%",
        marginBottom: margin,
        marginTop: margin,
      }}
    >
      <div ref={currentAmountRef}>
        {formatCurrency(0, data?.currency ?? "EUR")}
      </div>
      <div>récoltés</div>
      <div>
        sur {formatCurrency(data?.goal_amount ?? 5000, data?.currency ?? "EUR")}
      </div>
    </SummaryContainer>
  );
}
