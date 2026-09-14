import { createFileRoute } from "@tanstack/react-router";
import { Section } from "../components/Section";
import styled from "styled-components";
import { Link } from "../components/Link/Link";

export const Route = createFileRoute("/infolettre")({
  component: RouteComponent,
});

const FullSizeLink = styled(Link)``;

const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  flex-wrap: wrap;

  a {
    flex: 1 1 40%;
    min-width: 300px;
    cursor: pointer;
    img {
      aspect-ratio: 1.91 / 1;
      width: 100%;
    }
  }
  ${FullSizeLink} {
    flex: 1 1 100%;
  }
`;

// eslint-disable-next-line react-refresh/only-export-components
function RouteComponent() {
  return (
    <Section>
      <h1>Infolettre</h1>

      <Links>
        <FullSizeLink href="/la-fourmiliere-brule">
          <img
            src="/edito-2-la-fourmiliere-brule-et-on-regarde-ailleurs.webp"
            alt="Édito 2 : a fourmilière brûle et on regarde ailleurs"
            title="La fourmilière brûle et on regarde ailleurs"
          />
        </FullSizeLink>
        <Link href="/entretien-emmanuel-negrier">
          <img
            src="/emmanuel-negrier-entretien.webp"
            alt="Entretien avec Emmanuel Négrier : les « quatre P » du renversement"
            title="Entretien avec Emmanuel Négrier : les « quatre P » du renversement"
          />
        </Link>
        <Link href="/bataille-culturelle-des-luttes-paysannes">
          <img
            src="/bataille-culturelle-des-luttes-paysannes.webp"
            alt="Bataille Culturelle : des luttes paysannes"
            title="Bataille Culturelle : des luttes paysannes"
          />
        </Link>
        <FullSizeLink href="/des-lendemains-meilleurs">
          <img
            src="/edito-1-vers-des-lendemains-meilleurs.webp"
            alt="Édito 1 : Vers des lendemains meilleurs"
            title="Vers des lendemains meilleurs"
          />
        </FullSizeLink>
        <Link href="/safia-dahani-les-extremes-droites-contemporaines">
          <img
            src="/entretien-sofia-dahani.webp"
            alt="Entretien avec Safia Dahani : Processus de banalisation des extrêmes droites"
            title="Entretien avec Safia Dahani : Processus de banalisation des extrêmes droites"
          />
        </Link>
        <Link href="/bataille-culturelle-histoire-du-14-juillet">
          <img
            src="/bataille-culturelle-histoire-du-14-juillet.webp"
            alt="Bataille Culturelle : L'histoire du 14 juillet"
            title="Bataille Culturelle : L'histoire du 14 juillet"
          />
        </Link>
      </Links>
    </Section>
  );
}
