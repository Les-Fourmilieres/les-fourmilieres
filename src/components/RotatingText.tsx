import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

interface RotatingTextProps {
  variations: string[];
  interval?: number;
}

export function RotatingText({ variations }: RotatingTextProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % variations.length);
    }, 1700);

    return () => clearInterval(id);
  }, [setIndex, variations.length]);

  return (
    <span style={{ position: "relative" }}>
      <AnimatePresence mode="wait">
        <motion.span
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            whiteSpace: "nowrap",
          }}
          key={index}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
        >
          {variations[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
