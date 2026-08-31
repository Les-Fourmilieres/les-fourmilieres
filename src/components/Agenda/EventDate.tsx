import styled from "styled-components";
import type { MobilizonEventI } from "./Event";
import { getDayLabel, getShortMonthLabel } from "../../utils/days";
import { ChevronRight } from "lucide-react";
import { datesAreSameDay } from "./datesAreSameDay";

interface Props {
  event: MobilizonEventI;
}

const MultiDayContainer = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  padding: 0px 16px;
`;

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
  overflow: visible;

  ${MultiDayContainer} & {
    padding: 4px 8px;
    margin: -4px;
  }
`;

const ChevronContainer = styled(Container)`
  padding: 0;
  margin: 0;
  ${MultiDayContainer} & {
    padding: 0;
    margin: 0;
  }
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

  if (!datesAreSameDay(event.beginsOn!, event.endsOn!))
    return (
      <MultiDayContainer>
        <Container>
          <DayContainer>{getDayLabel(event.beginsOn!)}</DayContainer>
          <DateContainer>
            {event.beginsOn!.toLocaleDateString(localTime, dateRenderOptions)}
          </DateContainer>
          <MonthContainer>{getShortMonthLabel(event.beginsOn!)}</MonthContainer>
        </Container>
        <ChevronContainer>
          <ChevronRight size={32} />
        </ChevronContainer>
        <Container>
          <DayContainer>{getDayLabel(event.endsOn!)}</DayContainer>
          <DateContainer>
            {event.endsOn!.toLocaleDateString(localTime, dateRenderOptions)}
          </DateContainer>
          <MonthContainer>{getShortMonthLabel(event.endsOn!)}</MonthContainer>
        </Container>
      </MultiDayContainer>
    );

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
