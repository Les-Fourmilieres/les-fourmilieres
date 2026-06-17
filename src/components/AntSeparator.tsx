import { useEffect, useMemo, useRef, useState } from "react";
import { createNoise2D } from "simplex-noise";

import { Ant } from "./Ant";

type AntSeparatorProps = {
  height?: number;
};

export function AntSeparator({ height = 60 }: AntSeparatorProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const noise2D = useMemo(() => createNoise2D(), []);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new ResizeObserver(([entry]) => {
      setWidth(entry.contentRect.width);
      console.log(entry.contentRect.width);
    });

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  const ants = useMemo(() => {
    if (width === 0) return [];

    const antSize = Math.max(32, Math.min(40, width / 20));

    const margin = antSize / 2;
    const usableWidth = width - 2 * margin;
    const spacing = antSize * 1;
    const count = Math.floor(usableWidth / spacing);

    return Array.from({ length: count }).map((_, i) => {
      const x = margin + (i + 0.5) * spacing;

      // Petite courbe sinusoïdale
      const centerY = height / 5 + Math.sin(i * 0.8) * height * 0.15;
      const y = centerY + noise2D(i * 0.08, 0) * 15;

      const angle = Math.cos(i * 0.8) * 20;
      const threshold = 0.2 + noise2D(i * 0.03, 999) * 0.05;
      const n = noise2D(i * 0.15, 10);
      const value = (n + 1) / 2;

      // Couleur pseudo-aléatoire stable
      const color = value < threshold ? "var(--accent)" : "var(--text)";

      return {
        x,
        y,
        angle,
        color,
        size: antSize,
      };
    });
  }, [width, height, noise2D]);

  return (
    <div ref={ref} style={{ width: "100%" }}>
      <svg
        width="100%"
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="none"
      >
        {ants.map((ant, i) => (
          <g
            key={i}
            transform={`
              translate(${ant.x} ${ant.y})
              rotate(${ant.angle})
              scale(${ant.size / 50})
            `}
          >
            <Ant color={ant.color} />
          </g>
        ))}
      </svg>
    </div>
  );
}
