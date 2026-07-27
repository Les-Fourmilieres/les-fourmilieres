import { useQuery } from "@tanstack/react-query";
import { CalendarEvent } from "./CalendarEvent";
import styled from "styled-components";
import { fetchEvents } from "./api";
import {eventsForLink, eventType, type MobilizonEventI} from "./Event";
import { useMemo, useState } from "react";
import { Section } from "../Section";
import {Select, SelectItem} from "../Select.js";
import {SelectEventTypes} from "./Agenda.js";

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

export function RestrictedAgenda({ path }:{path:string}) {
  const { data } = useQuery({
    queryKey: ["calendar"],
    queryFn: () => fetchEvents({ showUnConfirmed: false }),
  });

	const [eventTypes, setEventTypes] = useState<string | null>(null);

  const events = useMemo(() => {
    if (!data) return [];
		const uuids = eventsForLink(path)
		if(uuids.length == 0) return []
    return data.data.searchEvents.elements.filter(el=>uuids.includes(el.uuid));
  }, [data, path]);

  const filtersEvents = useMemo(
    () =>
      events
        .filter((event) => {
					if(eventTypes != null){
						const curEventType = eventType(event)
						let found = false;
						SelectEventTypes[eventTypes].forEach(type=> found = found || curEventType.includes(type))
						console.log(SelectEventTypes[eventTypes] + "- " + curEventType)
						if(!found) return false
					}
          return true;
        })
        .sort(sortEventByDate),
    [events, eventTypes],
  );


	const eventTypesFacets = useMemo(() => {
		const eventTypesSet = new Set<string>()
		events.forEach(event=> {
			eventType(event).forEach(eventType => {
				Object.keys(SelectEventTypes).forEach(selectKey => {
					if (SelectEventTypes[selectKey].includes(eventType)) eventTypesSet.add(selectKey)
				})
			})
		})
		return Array.from(eventTypesSet.values())
	}, [events]);

	const selectItems = Object.keys(SelectEventTypes).filter((key) => eventTypesFacets.includes(key))

  if (!data) return null;

  return (
    <Section>
      <EventsContainer>
				{selectItems.length > 1 && (<FullWidth>
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
				</FullWidth>)}
        {filtersEvents.map((event) => (
          <CalendarEvent key={event.id} event={event} />
        ))}
      </EventsContainer>
    </Section>
  );
}
