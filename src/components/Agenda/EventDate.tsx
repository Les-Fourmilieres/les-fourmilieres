import styled from "styled-components";
import type { MobilizonEventI } from "./Event";
import { getDayLabel, getShortMonthLabel } from "../../utils/days";

interface Props {
  event: MobilizonEventI;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  line-height: 1.2em;
  background-color: var(--bg);
  padding: 8px 16px;
  margin: -8px;
  border-radius: 8px;
`;

const DayContainer = styled.div`
  font-variant: small-caps;
  font-weight: bold;
`;
const DateContainer = styled.div`
  font-weight: 900;
  font-size: 25pt;
  color: var(--accent);
  line-height: 0.9em;
  margin-bottom: -2px;
`;
const MonthContainer = styled.div`
  font-variant: small-caps;
  font-weight: bold;
`;

const localTime = "fr-FR";
const dateRenderOptions: Intl.DateTimeFormatOptions = { day: "2-digit" };

export function EventDate({ event }: Props) {
  if (!event.beginsOn && !event.endsOn) return null;

  if (event.beginsOn)
    return (
      <Container>
        <DayContainer>{getDayLabel(event.beginsOn!)}</DayContainer>
        <DateContainer>
          {event.beginsOn!.toLocaleDateString(localTime, dateRenderOptions)}
        </DateContainer>
        <MonthContainer>{getShortMonthLabel(event.beginsOn!)}</MonthContainer>
      </Container>
    );
}
