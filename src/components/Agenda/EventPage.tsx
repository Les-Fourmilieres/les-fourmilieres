import styled from "styled-components";
import { Section } from "../Section";
import type { MobilizonEventI } from "./Event";
import { EventDate } from "./EventDate";
import { EventTime } from "./EventTime";

const EventHeader = styled.div`
  align-self: stretch;
  display: flex;
  gap: 16px;
  justify-content: flex-start;
`;

const Title = styled.h1`
  margin: 0;
`;

const Content = styled.main`
  align-self: stretch;
`;

interface Props {
  event: MobilizonEventI;
}

export function EventPage({ event }: Props) {
  return (
    <>
      <aside
        style={{
          height: 400,
          backgroundSize: "contain",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${event.picture?.url ?? "https://agenda.les-fourmilieres.org/media/5d51acc4f1d82879973317de10ae2811f51e947d17923b84d95ea2b69a939adf.webp"})`,
        }}
      ></aside>
      <Section>
        <EventHeader>
          <EventDate event={event} />
          <div>
            <Title>{event.title}</Title>
            <EventTime event={event} />
          </div>
        </EventHeader>
        {event.description && (
          <Content dangerouslySetInnerHTML={{ __html: event.description }} />
        )}
      </Section>
    </>
  );
}
