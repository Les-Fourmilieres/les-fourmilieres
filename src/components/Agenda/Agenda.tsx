import { CalendarDate, parseDate } from "@internationalized/date";
import { useQueries, useQuery } from "@tanstack/react-query";
import { point } from "@turf/turf";
import { CalendarEvent } from "./CalendarEvent";
import styled from "styled-components";
import { fetchEvents } from "./api";
import {
  eventType,
  type MobilizonEventI,
  type MobilizonEventWithLivingAreaI,
} from "./Event";
import { useMemo, useState } from "react";
import { getLivingAreas, type LivingAreaI } from "../../core/LivingArea";
import type { LivingAreaSelectValue } from "../LivingAreaFilter/LivingAreaFilter.types";
import { LivingAreaFilter } from "../LivingAreaFilter/LivingAreaFilter";
import { Section } from "../Section";
import { EventsMap } from "./EventsMap";
import { Select, SelectItem } from "../Select.js";
import { SelectEventTypes } from "../../data/EventExtraData.js";
import { I18nProvider, type RangeValue } from "react-aria-components";
import { DateRangePicker } from "../DatePicker/RangeDatePicker.js";

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
  display: flex;
  gap: 16px;
  align-items: stretch;
  flex-wrap: wrap;
`;

const sortEventByDate = (e1: MobilizonEventI, e2: MobilizonEventI): number => {
  if (!e1.beginsOn || !e2.beginsOn) return 0;
  if (e1.beginsOn < e2.beginsOn) return -1;
  if (e1.beginsOn > e2.beginsOn) return 1;
  return 0;
};

const params = { showUnConfirmed: false };

export function Agenda() {
  const [dateRange, setDateRange] = useState<RangeValue<CalendarDate> | null>(
    null,
  );
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

  const [filter, setFilter] = useState<LivingAreaSelectValue>({
    department: null,
    livingArea: null,
  });
  const [eventTypes, setEventTypes] = useState<string | null>(null);

  const events = useMemo(() => {
    if (!allEvents) return [];
    const livingAreas = getLivingAreas();
    return allEvents.map((event): MobilizonEventWithLivingAreaI => {
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
    });
  }, [allEvents]);

  const filtersEvents = useMemo(
    () =>
      events
        .filter((event) => {
          if (!dateRange) return true;
          if (!event.beginsOn || !event.endsOn) return false;

          return (
            event.beginsOn!.getTime() <
              dateRange.end.toDate("Europe/Paris").getTime() + 24 * 3_600_000 &&
            event.endsOn!.getTime() >=
              dateRange.start.toDate("Europe/Paris").getTime()
          );
        })
        .filter((event) => {
          if (eventTypes != null) {
            const curEventType = eventType(event);
            let found = false;
            SelectEventTypes[eventTypes].forEach(
              (type) => (found = found || curEventType.includes(type)),
            );
            if (!found) return false;
          }
          if (!filter.department) return true;
          if (filter.livingArea)
            return event.livingArea?.code === filter.livingArea;
          return event.livingArea?.code.startsWith(filter.department);
        })
        .sort(sortEventByDate),
    [events, filter, eventTypes, dateRange],
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

  console.log(dateRange);

  if (!data) return null;

  return (
    <Section>
      <LivingAreaFilter
        value={filter}
        onChange={setFilter}
        postalCodeFacets={postalCodeFacets}
        livingAreaFacets={sortedLivingAreasFacet}
      />
      <EventsMap events={filtersEvents} />
      <EventsContainer>
        <FullWidth>
          <I18nProvider locale="fr-FR-u-ca-gregory">
            <DateRangePicker
              value={dateRange}
              onChange={setDateRange}
              defaultValue={{
                start: parseDate("2026-09-15"),
                end: parseDate("2026-10-11"),
              }}
            />
          </I18nProvider>
          <Select
            label="Type d'événement…"
            value={eventTypes}
            style={{
              flex: "1 1 300px",
              display: "flex",
              justifyContent: "stretch",
            }}
            onChange={(v) => {
              if (v === "null") return setEventTypes(null);
              setEventTypes(v as string);
            }}
          >
            <SelectItem id={"null"}>Voir tous</SelectItem>
            {Object.keys(SelectEventTypes)
              .filter((key) => eventTypesFacets.includes(key))
              .map((t) => (
                <SelectItem key={t} id={t}>
                  {t}
                </SelectItem>
              ))}
          </Select>
        </FullWidth>
        {filtersEvents.map((event) => (
          <CalendarEvent key={event.id} event={event} />
        ))}
      </EventsContainer>
    </Section>
  );
}
