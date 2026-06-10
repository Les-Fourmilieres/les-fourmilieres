import {
  Clock1,
  Clock2,
  Clock3,
  Clock4,
  Clock5,
  Clock6,
  Clock7,
  Clock8,
  Clock9,
  Clock10,
  Clock11,
  Clock12,
} from "lucide-react";
import { localTime, timeRenderOptions } from "./time";
import type { CSSProperties } from "react";

export function getClockIcon(date: Date, size: number) {
  const strTime = date
    .toLocaleTimeString(localTime, timeRenderOptions)
    .split(":")[0];
  const style: CSSProperties = { flex: `0 0 ${size}px` };
  switch (strTime) {
    case "01":
    case "13":
      return <Clock1 size={size} style={style} />;
    case "02":
    case "14":
      return <Clock2 size={size} style={style} />;
    case "03":
    case "15":
      return <Clock3 size={size} style={style} />;
    case "04":
    case "16":
      return <Clock4 size={size} style={style} />;
    case "05":
    case "17":
      return <Clock5 size={size} style={style} />;
    case "06":
    case "18":
      return <Clock6 size={size} style={style} />;
    case "07":
    case "19":
      return <Clock7 size={size} style={style} />;
    case "08":
    case "20":
      return <Clock8 size={size} style={style} />;
    case "09":
    case "21":
      return <Clock9 size={size} style={style} />;
    case "10":
    case "22":
      return <Clock10 size={size} style={style} />;
    case "11":
    case "23":
      return <Clock11 size={size} style={style} />;
    default:
      return <Clock12 size={size} style={style} />;
  }
}

export function useClockIcon(date?: Date | null, size = 24) {
  return date ? getClockIcon(date, size) : <Clock5 size={size} />;
}
