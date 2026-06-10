import { useQuery } from "@tanstack/react-query";
import { CalendarEvent } from "./CalendarEvent";
import styled from "styled-components";
import { fetchEvents } from "./api";

const EventsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: center;
  max-width: var(--contentWidth);
  box-sizing: border-box;
  padding: 16px;
  margin: 32px auto;
  gap: 32px;
`;

export function Agenda() {
  const { data, error } = useQuery({
    queryKey: ["calendar"],
    queryFn: fetchEvents,
  });

  console.log(data, error);

  if (!data) return null;

  return (
    <EventsContainer>
      {data.data.searchEvents.elements.map((event) => (
        <CalendarEvent key={event.id} event={event} />
      ))}
    </EventsContainer>
  );
}
