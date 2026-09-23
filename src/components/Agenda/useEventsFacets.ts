import { useMemo } from "react";
import type { MobilizonEventWithLivingAreaI } from "./Event";
import { getLivingAreas, type LivingAreaI } from "../../core/LivingArea";

export function useEventsFacets(events: MobilizonEventWithLivingAreaI[]) {
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
  return { livingAreasFacet: sortedLivingAreasFacet, postalCodeFacets };
}
