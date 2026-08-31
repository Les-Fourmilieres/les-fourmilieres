import { useQueries, useQuery } from "@tanstack/react-query";
import { CalendarEvent } from "./CalendarEvent";
import styled from "styled-components";
import { fetchEvents } from "./api";
import { eventsForLink, eventType, type MobilizonEventI } from "./Event";
import { useMemo, useState } from "react";
import { Section } from "../Section";
import { Select, SelectItem } from "../Select.js";
import { SelectEventTypes } from "../../data/EventExtraData.js";

const EventsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: center;
  max-width: var(--contentWidth);
  box-sizing: border-box;
  padding: 0;
  margin: 32px auto;
  gap: 32px;
  width: 100%;
`;

const FullWidth = styled.div`
  flex: 1 1 100%;
`;

const sortEventByDate = (e1: MobilizonEventI, e2: MobilizonEventI): number => {
  if (!e1.beginsOn || !e2.beginsOn) return 0;
  if (e1.beginsOn < e2.beginsOn) return -1;
  if (e1.beginsOn > e2.beginsOn) return 1;
  return 0;
};

const params = { showUnConfirmed: false };

export function RestrictedAgenda({ path }: { path: string }) {
  const { data } = useQuery({
    queryKey: ["calendar", params, 0],
    queryFn: () => fetchEvents(params),
  });
  const pageCount = data ? Math.ceil(data.data.searchEvents.total / 100) : 0;
  const pages = useQueries({
    queries: Array.from({ length: pageCount }, (_, index) => ({
      queryKey: ["calendar", params, index + 1],
      queryFn: () =>
        fetchEvents({
          ...params,
          page: index + 1,
        }),
      enabled: index > 0,
    })),
  });
  const allEvents = useMemo(() => {
    if (!data) return [] as MobilizonEventI[];
    return pages
      .filter((page) => page.isSuccess)
      .reduce((acc, page) => {
        if (!page.data) return acc;
        return [...acc, ...page.data.data.searchEvents.elements];
      }, data.data.searchEvents.elements);
  }, [data, pages]);

  const [eventTypes, setEventTypes] = useState<string | null>(null);

  const events = useMemo(() => {
    if (!allEvents) return [];
    const uuids = eventsForLink(path);
    if (uuids.length == 0) return [];
    return allEvents.filter((el) => uuids.includes(el.uuid));
  }, [allEvents, path]);

  const filtersEvents = useMemo(
    () =>
      events
        .filter((event) => {
          if (eventTypes != null) {
            const curEventType = eventType(event);
            let found = false;
            SelectEventTypes[eventTypes].forEach(
              (type) => (found = found || curEventType.includes(type)),
            );
            if (!found) return false;
          }
          return true;
        })
        .sort(sortEventByDate),
    [events, eventTypes],
  );

  const eventTypesFacets = useMemo(() => {
    const eventTypesSet = new Set<string>();
    events.forEach((event) => {
      eventType(event).forEach((eventType) => {
        Object.keys(SelectEventTypes).forEach((selectKey) => {
          if (SelectEventTypes[selectKey].includes(eventType))
            eventTypesSet.add(selectKey);
        });
      });
    });
    return Array.from(eventTypesSet.values());
  }, [events]);

  const selectItems = Object.keys(SelectEventTypes).filter((key) =>
    eventTypesFacets.includes(key),
  );

  if (!data) return null;

  return (
    <Section>
      <EventsContainer>
        {selectItems.length > 1 && (
          <FullWidth>
            <Select
              label="Type d'événement…"
              value={eventTypes}
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "stretch",
              }}
              onChange={(v) => {
                if (v === "null") return setEventTypes(null);
                setEventTypes(v as string);
              }}
            >
              <SelectItem id={"null"}>Voir tous</SelectItem>
              {selectItems.map((t) => (
                <SelectItem key={t} id={t}>
                  {t}
                </SelectItem>
              ))}
            </Select>
          </FullWidth>
        )}
        {filtersEvents.map((event) => (
          <CalendarEvent key={event.id} event={event} />
        ))}
      </EventsContainer>
    </Section>
  );
}
