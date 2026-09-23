import styled from "styled-components";
import { useMemo, useState } from "react";
import { useAllEvents } from "../Agenda/useAllEvents";
import { eventType, type MobilizonEventWithLivingAreaI } from "../Agenda/Event";
import {
  SelectEventTypes,
  type GroupedEventTypes,
} from "../../data/EventExtraData";
import { useEventsFacets } from "../Agenda/useEventsFacets";
import { LivingAreaFilter } from "../LivingAreaFilter/LivingAreaFilter";
import type { LivingAreaSelectValue } from "../LivingAreaFilter/LivingAreaFilter.types";
import { LinkButton } from "../Link/Link";
import { DepartementsByCodeWithArticle } from "../../core/Departements";
import { RotateCcw } from "lucide-react";
import { Button as RACButton } from "react-aria-components";
import { Button } from "../Button";
import {
  UnderstandCategory,
  understandCatgerories,
} from "./UnderstandCategory";
import { getFilterFromCategory } from "./getFilterFromCategory";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  justify-content: space-between;
`;

const HeaderLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

  p {
    margin: 0;
    font-size: 22px;
  }
`;

const ResetButton = styled(RACButton)`
  background: transparent;
  border: none;
  cursor: pointer;
`;

const ActionsContainer = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  flex-wrap: wrap;
`;

const Action = styled(Button)`
  margin-right: -1px;
  margin-bottom: -1px;
  &:last-child {
    margin-right: 0;
  }
`;

enum Expectation {
  UNDERSTAND = "understand",
  CONNECT = "connect",
  ACT = "act",
  PARTY = "party",
}

const expectations = [
  Expectation.UNDERSTAND,
  Expectation.CONNECT,
  Expectation.ACT,
  Expectation.PARTY,
];

const expectationLabels: Record<Expectation, string> = {
  [Expectation.UNDERSTAND]: "à comprendre",
  [Expectation.CONNECT]: "à faire du lien entre nous",
  [Expectation.ACT]: "à agir",
  [Expectation.PARTY]: "à faire la fête",
};

const understandCategoryLabels: Record<UnderstandCategory, string> = {
  [UnderstandCategory.FAR_RIGHT]: "la fascisation",
  [UnderstandCategory.PATRIARCHY]: "l'hétéro-patriarcat",
  [UnderstandCategory.WHITE_SUPREMACY]: "la suprémacie blanche",
  [UnderstandCategory.COLONIALISM]: "le colonialisme",
  [UnderstandCategory.ECOLOGY]: "l'impérialisme écologique",
  [UnderstandCategory.SPECISM]: "le spécisme",
  [UnderstandCategory.OTHER]: "d'autres systèmes de domination",
};

const getLabel = (
  expectation: Expectation | null,
  category: UnderstandCategory | null,
  department?: number | undefined,
) => {
  return (
    <p>
      <span>Je cherche</span>
      {expectation ? (
        <>
          <span> {expectationLabels[expectation]}</span>
          {expectation === Expectation.UNDERSTAND && category ? (
            <>
              <span> </span>
              <span>{understandCategoryLabels[category]}</span>
            </>
          ) : null}
          {department ? (
            <>
              <span> au cours d'un évènement dans </span>
              <span>
                {
                  DepartementsByCodeWithArticle[
                    (department < 10 ? "0" : "") + department.toString()
                  ]
                }
              </span>
            </>
          ) : (
            <span> au cours d'un évènement dans…</span>
          )}
        </>
      ) : (
        <span>…</span>
      )}
    </p>
  );
};

const getFilterByType = (typesOfEvent: GroupedEventTypes[]) => {
  return (event: MobilizonEventWithLivingAreaI) => {
    const curEventType = eventType(event);
    return typesOfEvent
      .map((typeOfEvent) => SelectEventTypes[typeOfEvent])
      .flat()
      .find((type) => curEventType.includes(type));
  };
};

const getFilterFromExpectation = (
  expectation: Expectation,
): GroupedEventTypes[] => {
  if (expectation === Expectation.UNDERSTAND)
    return ["conf", "atelier", "projection"];
  if (expectation === Expectation.CONNECT) return ["kermesse", "miam"];
  if (expectation === Expectation.ACT) return ["manif"];
  return ["musique", "spectacle-vivant"];
};

export function ProgramHelper() {
  const allEvents = useAllEvents();
  const [expectation, setExpectation] = useState<Expectation | null>(null);
  const [category, setCategory] = useState<UnderstandCategory | null>(null);
  const [searchParams, setSearchParams] = useState<{
    department?: number | undefined;
    bdv?: number | undefined;
  }>({});

  const reset = () => {
    setSearchParams({});
    setCategory(null);
    setExpectation(null);
  };

  const filteredEvents = useMemo(() => {
    if (!expectation) return allEvents;
    const types = getFilterFromExpectation(expectation);
    return allEvents
      .filter(getFilterByType(types))
      .filter(getFilterFromCategory(category));
  }, [allEvents, expectation, category]);

  const { livingAreasFacet, postalCodeFacets } =
    useEventsFacets(filteredEvents);

  const finalEventSelection = useMemo(() => {
    if (!searchParams.department) return filteredEvents;
    if (searchParams.bdv) {
      return filteredEvents.filter(
        (event) => event.livingArea?.code === searchParams.bdv!.toString(),
      );
    }
    return filteredEvents.filter((event) =>
      event.livingArea?.code.startsWith(
        (searchParams.department! < 10 ? "0" : "") +
          searchParams.department!.toString(),
      ),
    );
  }, [filteredEvents, searchParams]);
  const params = new URLSearchParams();
  if (expectation) {
    params.append("type", getFilterFromExpectation(expectation).join(","));
  }
  if (expectation === Expectation.UNDERSTAND && category) {
    params.append("category", category);
  }
  if (searchParams.department) {
    params.append("department", searchParams.department.toString());
  }
  const url = `/programme?${params.toString()}`;
  return (
    <Container>
      <HeaderLine>
        {getLabel(expectation, category, searchParams.department)}
        {expectation && (
          <ResetButton onClick={reset}>
            <RotateCcw size={16} />
          </ResetButton>
        )}
      </HeaderLine>

      {expectation === null && (
        <ActionsContainer>
          {expectations.map((e) => (
            <Action key={e} variant="default" onClick={() => setExpectation(e)}>
              {expectationLabels[e]}
            </Action>
          ))}
        </ActionsContainer>
      )}
      {expectation === Expectation.UNDERSTAND && category === null && (
        <ActionsContainer>
          {understandCatgerories.map((cat) => (
            <Action
              key={cat}
              variant="default"
              onClick={() => setCategory(cat)}
            >
              {understandCategoryLabels[cat]}
            </Action>
          ))}
        </ActionsContainer>
      )}

      {expectation !== null &&
        (expectation !== Expectation.UNDERSTAND || category !== null) && (
          <div>
            <LivingAreaFilter
              value={
                {
                  department: searchParams.department?.toString() ?? null,
                  livingArea: searchParams.bdv?.toString() ?? null,
                } as LivingAreaSelectValue
              }
              onChange={(value) => {
                if (value.livingArea) {
                  setSearchParams({
                    department: parseInt(value.department),
                    bdv: parseInt(value.livingArea),
                  });
                } else if (value.department) {
                  setSearchParams({ department: parseInt(value.department) });
                } else {
                  setSearchParams({});
                }
              }}
              postalCodeFacets={postalCodeFacets}
              livingAreaFacets={livingAreasFacet}
              withArticle
              disableLivingArea
            />
          </div>
        )}

      <LinkButton href={url}>
        Voir les {finalEventSelection.length} évènements
      </LinkButton>
    </Container>
  );
}
