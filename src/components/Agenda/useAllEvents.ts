import { useQueries, useQuery } from "@tanstack/react-query";
import { fetchEvents } from "./api";
import { useMemo } from "react";
import { eventsForLink, type MobilizonEventWithLivingAreaI } from "./Event";
import { getLivingAreas } from "../../core/LivingArea";
import { point } from "@turf/turf";

const params = { showUnConfirmed: false };

export function useAllEvents(path?: string): MobilizonEventWithLivingAreaI[] {
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
    if (!data) return [] as MobilizonEventWithLivingAreaI[];

    const uuids = path ? eventsForLink(path) : null;
    if (uuids !== null && uuids.length == 0) return [];

    const livingAreas = getLivingAreas();

    return pages
      .filter((page) => page.isSuccess)
      .reduce((acc, page) => {
        if (!page.data) return acc;
        return [...acc, ...page.data.data.searchEvents.elements];
      }, data.data.searchEvents.elements)
      .filter((event) => {
        return uuids === null || uuids.includes(event.uuid);
      })
      .map((event): MobilizonEventWithLivingAreaI => {
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
  }, [data, pages, path]);

  return allEvents;
}
