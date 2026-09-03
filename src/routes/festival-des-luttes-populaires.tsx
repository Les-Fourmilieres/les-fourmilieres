import { createFileRoute } from "@tanstack/react-router";
import { Section } from "../components/Section";
import { RestrictedAgenda } from "../components/Agenda/RestrictedAgenda.js";
import styled from "styled-components";
import cover from "../assets/lfp/affiche-flp-2026.jpg?url";
import lineup from "../assets/lfp/programme-lfp-2026.jpg";
import { Link } from "../components/Link/Link.js";
import { searchParams } from "../components/Agenda/SearchParams.js";

export const Route = createFileRoute("/festival-des-luttes-populaires")({
  component: RouteComponent,
  validateSearch: searchParams,
});

const Covers = styled.aside`
  display: flex;
  flex-wrap: wrap;
  row-gap: 24px;
  column-gap: 24px;
  justify-content: center;
`;

const CovertPart = styled.img`
  max-width: 500px;
  @media (max-width: 550px) {
    max-width: 90%;
  }
`;

// eslint-disable-next-line react-refresh/only-export-components
function RouteComponent() {
  return (
    <Section>
      <h1>Festival des luttes populaires</h1>
      <h2>Notre énergie collective face à leurs énergies polluantes !</h2>
      <Covers>
        <CovertPart
          src={cover}
          alt={
            "Affiche du Festival des luttes populaire à l'Olivette de Langel Armissan 11110. Prix libre."
          }
        />
        <CovertPart
          src={lineup}
          alt={
            "Flyer du programme. Toute la programmation est reprise dans la page ci-dessous"
          }
        />
      </Covers>

      <p>
        Le festival des luttes populaires accueilli à{" "}
        <Link href={"https://olivettedelangel.fr/festival/"}>
          L'olivette et jardin de Langel
        </Link>{" "}
        est organisé par le collectif Mutvitz11 qui distribue du café zapatiste
        en provenance directe de coopératives du Chiapas au Mexique.
      </p>

      <p>
        Entrée à prix libre - Camping en auto-gestion sur place - Restauration
        et buvette.
      </p>

      <p>
        Pour sa 9ième édition, le festival des luttes populaires s'inscrit dans
        la programmation des fourmilières.
      </p>

      <RestrictedAgenda path={Route.to} />
    </Section>
  );
}
