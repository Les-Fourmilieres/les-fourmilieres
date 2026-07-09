import styled from "styled-components";
import { Section } from "../Section";
import type { MobilizonEventI } from "./Event";
import { EventDate } from "./EventDate";
import { EventTime } from "./EventTime";
import { ParticipateButton } from "./ParticipateButton";
import { EventAddress } from "./EventAddress";

const EventHeader = styled.div`
  align-self: stretch;
  display: flex;
  gap: 16px;
  justify-content: flex-start;
`;

const Title = styled.h1`
  margin: 0 0 8px;
  font-family: var(--sans);
  line-height: 1.1em;
  text-align: left;
`;

const Content = styled.main`
  align-self: stretch;
`;

const EventCover = styled.aside`
  height: 400px;
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  display: flex;
  padding: 8px;
  box-sizing: border-box;
  align-items: flex-end;
  justify-content: flex-end;
`;

interface Props {
  event: MobilizonEventI;
}

export function EventPage({ event }: Props) {
  return (
    <>
      <EventCover
        style={{
          backgroundImage: `url(${event.picture?.url ?? "https://agenda.les-fourmilieres.org/media/5d51acc4f1d82879973317de10ae2811f51e947d17923b84d95ea2b69a939adf.webp"})`,
        }}
      ></EventCover>
      <Section>
        <EventHeader>
          <EventDate event={event} />
          <div>
            <Title>{event.title}</Title>
            <EventTime event={event} />
            <EventAddress event={event} />
          </div>
          <ParticipateButton event={event} />
        </EventHeader>
        {event.description && (
          <Content dangerouslySetInnerHTML={{ __html: event.description }} />
        )}
      </Section>
    </>
  );
}
