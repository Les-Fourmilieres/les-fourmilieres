import type { MobilizonEventI } from "./Event";
import { localTime, timeRenderOptions } from "./time";

interface Props {
  event: MobilizonEventI;
}

export function EventTime({ event }: Props) {
  if (!event.beginsOn || !event.endsOn) return null;
  return (
    <>
      {event.beginsOn.toLocaleTimeString(localTime, timeRenderOptions)} -{" "}
      {event.endsOn.toLocaleTimeString(localTime, timeRenderOptions)}
    </>
  );
}
