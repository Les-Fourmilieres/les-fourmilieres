import { useQuery } from "@tanstack/react-query";
import { point } from "@turf/turf";
import { CalendarEvent } from "./CalendarEvent";
import styled from "styled-components";
import { fetchEvents } from "./api";
import type { MobilizonEventI, MobilizonEventWithLivingAreaI } from "./Event";
import { useMemo, useState } from "react";
import { getLivingAreas, type LivingAreaI } from "../../core/LivingArea";
import type { LivingAreaSelectValue } from "../LivingAreaFilter/LivingAreaFilter.types";
import { LivingAreaFilter } from "../LivingAreaFilter/LivingAreaFilter";
import { Section } from "../Section";

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

const sortEventByDate = (e1: MobilizonEventI, e2: MobilizonEventI): number => {
  if (!e1.beginsOn || !e2.beginsOn) return 0;
  if (e1.beginsOn < e2.beginsOn) return -1;
  if (e1.beginsOn > e2.beginsOn) return 1;
  return 0;
};

export function Agenda() {
  const { data } = useQuery({
    queryKey: ["calendar"],
    queryFn: () => fetchEvents({ showUnConfirmed: false }),
  });

  const [filter, setFilter] = useState<LivingAreaSelectValue>({
    department: null,
    livingArea: null,
  });

  const events = useMemo(() => {
    if (!data) return [];
    const livingAreas = getLivingAreas();
    return data.data.searchEvents.elements.map(
      (event): MobilizonEventWithLivingAreaI => {
        const geom = event.physicalAddress?.geom;

        if (!geom) return { ...event, livingArea: undefined };

        const [lng, lat] = geom.split(";").map((pos) => parseFloat(pos));
        const pt = point([lng, lat]);
        const livingArea = livingAreas.find((livingArea) =>
          livingArea.pointIsWithing(pt),
        );
        return {
          ...event,
          livingArea,
        };
      },
    );
  }, [data]);

  const filtersEvents = useMemo(
    () =>
      events
        .filter((event) => {
          if (!filter.department) return true;
          if (filter.livingArea)
            return event.livingArea?.code === filter.livingArea;
          return event.livingArea?.code.startsWith(filter.department);
        })
        .sort(sortEventByDate),
    [events, filter],
  );

  const livingAreasFacets = useMemo(() => {
    return events.reduce(
      (acc: Record<string, MobilizonEventWithLivingAreaI[]>, event) => {
        if (!event.livingArea) return acc;
        if (acc[event.livingArea.code]) {
          acc[event.livingArea.code].push(event);
        } else {
          acc[event.livingArea.code] = [event];
        }
        return acc;
      },
      {},
    );
  }, [events]);

  const livingAreaByCode = useMemo(() => {
    const livingAreas = getLivingAreas();
    return livingAreas.reduce(
      (acc: Record<string, LivingAreaI>, livingArea) => {
        acc[livingArea.code] = livingArea;
        return acc;
      },
      {},
    );
  }, []);

  const postalCodeFacets = useMemo(() => {
    return Array.from(
      Object.keys(livingAreasFacets)
        .map((code) => {
          return code.substring(0, 2);
        })
        .reduce((acc: Set<string>, code) => {
          acc.add(code);
          return acc;
        }, new Set<string>()),
    ).sort();
  }, [livingAreasFacets]);

  const sortedLivingAreasFacet = useMemo(() => {
    return Object.keys(livingAreasFacets)
      .sort()
      .map((code) => {
        return livingAreaByCode[code];
      });
  }, [livingAreasFacets, livingAreaByCode]);

  if (!data) return null;

  return (
    <Section>
      <LivingAreaFilter
        value={filter}
        onChange={setFilter}
        postalCodeFacets={postalCodeFacets}
        livingAreaFacets={sortedLivingAreasFacet}
      />
      <EventsContainer>
        {filtersEvents.map((event) => (
          <CalendarEvent key={event.id} event={event} />
        ))}
      </EventsContainer>
    </Section>
  );
}
