import { datesAreSameDay } from "./datesAreSameDay";
import type { MobilizonEventI } from "./Event";
import { dateRenderOptions, localTime, timeRenderOptions } from "./time";

interface Props {
  event: MobilizonEventI;
}

export function EventTime({ event }: Props) {
  if (!event.beginsOn || !event.endsOn) return null;
  if (!datesAreSameDay(event.beginsOn!, event.endsOn!)) {
    return `du ${event.beginsOn.toLocaleDateString(localTime, dateRenderOptions)} au ${event.endsOn.toLocaleDateString(localTime, dateRenderOptions)}`;
  }
  return (
    <>
      {event.beginsOn.toLocaleTimeString(localTime, timeRenderOptions)} -{" "}
      {event.endsOn.toLocaleTimeString(localTime, timeRenderOptions)}
    </>
  );
}
