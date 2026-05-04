import { createFileRoute } from "@tanstack/react-router";
import { Section } from "../components/Section";
import { Link } from "../components/Link/Link";
import { collectifs, type CollectifI } from "../data/collectifs";
import { useMemo } from "react";
import { Map } from "../components/Map/Map";

export const Route = createFileRoute("/qui-sommes-nous")({
  component: RouteComponent,
});

function shuffle(array: CollectifI[]) {
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

// eslint-disable-next-line react-refresh/only-export-components
function RouteComponent() {
  const randomizedCollectifs = useMemo(() => shuffle([...collectifs]), []);
  return (
    <Section>
      <h1>Qui sommes nous ?</h1>
      <p>
        Les Fourmilières est un festival solidaire et antifasciste. Le festival
        est décentralisé, c'est-à-dire que de nombreux évènements auront lieux
        dans différents lieux de l'Aveyron, du Gard et de l'Hérault.{" "}
      </p>
      <p>
        Les Fourmilières reposent sur une organisation horizontale : chaque
        collectif rejoint Les Foumilières sur la base de{" "}
        <Link to="/la-charte">la charte commune</Link>, collabore avec d'autres
        collectifs afin de proposer des évènements de son choix.
      </p>
      <p>
        Aujourd'hui, plus de 60 collectifs ont déjà rejoint Les Foumilières :
      </p>
      <div style={{ display: "flex", alignSelf: "stretch", flexWrap: "wrap" }}>
        <div style={{ flex: "1 1 400px" }}>
          {randomizedCollectifs.map((collectif) => (
            <div>
              <h3>{collectif.name}</h3>
            </div>
          ))}
        </div>
        <div style={{ flex: "1 1 400px" }}>
          <Map collectifs={collectifs} />
        </div>
      </div>
    </Section>
  );
}
