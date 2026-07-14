import { createFileRoute } from "@tanstack/react-router";
import { Section } from "../components/Section";
import { Link } from "../components/Link/Link";
import { point } from "@turf/turf";
import { collectifs, type CollectifI, type Types } from "../data/collectifs";
import { useMemo, useState } from "react";
import { Map } from "../components/Map/Map";
import { Collectif } from "../components/Collectif/Collectif";
import { useMediaQuery } from "react-responsive";
import { getLivingAreas, type LivingAreaI } from "../core/LivingArea";
import { DepartementsByCode } from "../core/Departements";
import { ToggleButtonGroup } from "react-aria-components";
import { ToggleButton } from "../components/ToggleButton/ToggleButton";
import styled from "styled-components";
import { Select, SelectItem } from "../components/Select";

const StyledToggleButtonGroup = styled(ToggleButtonGroup)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  gap: 4px 0px;
`;

const MainContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  width: 100%;
`;

const FullWidth = styled.div`
  flex: 1 1 100%;
`;

export const Route = createFileRoute("/qui-sommes-nous")({
  component: RouteComponent,
});

function shuffle(array: CollectifWithLivingArea[]) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}

type CollectifWithLivingArea = CollectifI & {
  livingArea: LivingAreaI | null;
};

const CollectifTypes: Types[] = [
  "Café associatif",
  "Tiers-lieu",
  "Festival",
  "Librairie",
  "Théâtre",
  "Syndicat",
  "Bar - Brasserie - Commerce",
  "Média" /*"Cinéma", */,
  "Collectif artistique",
  "Collectif événementiel",
  "Collectif militant",
  "Collectif pour mieux habiter",
  "Collectif pour l'accueil de réfugiés",
  "Groupement de collectifs",
  "Collectif d'éducation populaire",
];

// eslint-disable-next-line react-refresh/only-export-components
function RouteComponent() {
  const isMobile = useMediaQuery({ maxWidth: 800 });
  console.log("isMobile", isMobile);
  const [collectifType, setCollectifType] = useState<Types | null>(null);
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(
    null,
  );
  const [selectedLivingArea, setSelectedLivingArea] = useState<string | null>(
    null,
  );

  const collectifsWithLivingAreas = useMemo((): CollectifWithLivingArea[] => {
    const livingAreas = getLivingAreas();
    return collectifs.map((collectif) => {
      const pt = point([collectif.position.lng, collectif.position.lat]);
      const livingArea = livingAreas.find((livingArea) =>
        livingArea.pointIsWithing(pt),
      );
      return {
        ...collectif,
        livingArea: livingArea ?? null,
      };
    });
  }, []);
  const randomizedCollectifs = useMemo(
    () => shuffle([...collectifsWithLivingAreas]),
    [collectifsWithLivingAreas],
  );

  const filteredCollectifs = useMemo(() => {
    const fColl = collectifType
      ? randomizedCollectifs.filter((c) => c.type.includes(collectifType))
      : randomizedCollectifs;
    if (selectedLivingArea) {
      return fColl.filter(
        (collectif) => collectif.livingArea?.code === selectedLivingArea,
      );
    }
    if (selectedDepartment) {
      return fColl.filter((collectif) =>
        collectif.livingArea?.code?.startsWith(selectedDepartment),
      );
    }
    return fColl;
  }, [
    randomizedCollectifs,
    selectedDepartment,
    selectedLivingArea,
    collectifType,
  ]);

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
  const livingAreasFacets = useMemo(() => {
    return collectifsWithLivingAreas.reduce(
      (acc: Record<string, CollectifWithLivingArea[]>, collectif) => {
        if (!collectif.livingArea) return acc;
        if (acc[collectif.livingArea.code]) {
          acc[collectif.livingArea.code].push(collectif);
        } else {
          acc[collectif.livingArea.code] = [collectif];
        }
        return acc;
      },
      {},
    );
  }, [collectifsWithLivingAreas]);

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

  return (
    <Section>
      <h1>Qui sommes nous ?</h1>
      <p>
        Les Fourmilières est un festival solidaire et antifasciste. Le festival
        est décentralisé, c'est-à-dire que de nombreux évènements auront lieux
        dans différents endroits de l'Aude, l'Hérault, le Gard, la Lozère et l'Aveyron.{" "}
      </p>
      <p>
        Les Fourmilières reposent sur une organisation horizontale : chaque
        collectif rejoint Les Foumilières sur la base de{" "}
        <Link to="/la-charte">la charte commune</Link>, collabore avec d'autres
        collectifs afin de proposer des évènements de son choix.
      </p>
      <p>
        Aujourd'hui, plus de 100 collectifs ont déjà rejoint Les Foumilières :
      </p>
      <StyledToggleButtonGroup>
        {postalCodeFacets.map((postalCode) => (
          <ToggleButton
            key={postalCode}
            isSelected={postalCode === selectedDepartment}
            onChange={(isSelected) => {
              setSelectedLivingArea(null);
              setSelectedDepartment(isSelected ? postalCode : null);
            }}
          >
            {DepartementsByCode[postalCode]}
          </ToggleButton>
        ))}
      </StyledToggleButtonGroup>
      {selectedDepartment && (
        <StyledToggleButtonGroup>
          {sortedLivingAreasFacet
            .filter((livingArea) =>
              livingArea.code.startsWith(selectedDepartment),
            )
            .map((livingArea) => (
              <ToggleButton
                key={livingArea.code}
                isSelected={livingArea.code === selectedLivingArea}
                onChange={(isSelected) =>
                  setSelectedLivingArea(isSelected ? livingArea.code : null)
                }
              >
                {livingArea.name}
              </ToggleButton>
            ))}
        </StyledToggleButtonGroup>
      )}
      <MainContainer>
        <FullWidth>
          <Map collectifs={filteredCollectifs} />
        </FullWidth>

        <FullWidth>
          <Select
            label="Type de collectif…"
            value={collectifType}
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "stretch",
            }}
            onChange={(v) => {
              if (v === "null") return setCollectifType(null);
              setCollectifType(v as Types);
            }}
          >
            <SelectItem id={"null"}>Voir tous</SelectItem>
            {CollectifTypes.map((t) => (
              <SelectItem key={t} id={t}>
                {t}
              </SelectItem>
            ))}
          </Select>
        </FullWidth>
        {filteredCollectifs.map((collectif) => (
          <Collectif key={collectif.slug} collectif={collectif} />
        ))}
      </MainContainer>
    </Section>
  );
}
