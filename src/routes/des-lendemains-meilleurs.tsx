import { createFileRoute } from "@tanstack/react-router";
import styled from "styled-components";
import { Article } from "../Article";
import { Link } from "react-aria-components";

export const Route = createFileRoute("/des-lendemains-meilleurs")({
  component: RouteComponent,
});

const Poetry = styled.p`
  line-height: 1.75em;
  font-size: 20px;
`;

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
`;

// eslint-disable-next-line react-refresh/only-export-components
function RouteComponent() {
  return (
    <Article>
      <h1>Vers des lendemains meilleurs</h1>

      <Poetry>
        Blottie dans sa fourmilière
        <br />
        Désertée par ses congénères
        <br />
        La fourmi se sent bien solitaire.
        <br />
        Neuf années se sont écoulées
        <br />
        Depuis que le temps a changé :<br />
        Dans cette période les jours orageux,
        <br />
        Sombres, au vent hostile, étaient nombreux.
        <br />
        Son moulin fut bien amoché,
        <br />
        La vitesse du vent il ne put supporter.
        <br />
        La fourmi ne sachant que faire
        <br />
        Lança un appel sous terre
        <br />
        À d’autres ouvrières.
        <br />
        Un temps, elle resta découragée,
        <br />
        Pensant la bise trop forte pour être déviée.
        <br />
        Mais, issue d’un autre territoire,
        <br />
        Une fourmi rouge vint la voir :<br />
        « Notre fourmilière peut t’aider,
        <br />
        Or, nous ne serons pas assez »<br />
        Embêtée, la fourmi ne pensa alors pas
        <br />
        Que des fourmis d’ici et là
        <br />
        Du Midi s’investiraient tant
        <br />
        Pour se joindre au rassemblement.
        <br />
        Le moulin, elles réparèrent,
        <br />
        Et sur le vent elles soufflèrent
        <br />
        Dans le sens contraire.
        <br />
        L’effort collectif fut si puissant
        <br />
        Que le vent changea de courant
        <br />
        - Le moulin repartit comme en 36 -<br />
        Et que le temps s’éclaircit.
        <br />
        La fourmi comprit que désormais
        <br />
        Elle ne bâtirait jamais,
        <br />
        Sans fourmis d’ici et d’ailleurs,
        <br />
        Des lendemains un peu meilleurs.
      </Poetry>

      <p>
        Cette histoire de fourmis, c’est la nôtre. Collectifs, associations,
        brasseries, troupes de théâtre, librairies, cinémas etc. nous sommes
        décidés à souffler ensemble contre le vent d'extrême droite et les
        nuages bruns qui s'amoncellent. Cette tempête fasciste qui nous menace
        depuis des années, nous ne pourrons la combattre seuls. Nous rassembler
        autour d’une charte commune, proposer des événements aux formats et
        perspectives variées, c’est ce que nous proposons aujourd’hui pour
        lutter pacifiquement. L’objectif du festival est d’affirmer la lutte
        contre l’extrême droite dans nos territoires, de montrer que nous sommes
        nombreux et nombreuses à vouloir réagir et de proposer un autre projet
        de société face à la menace fasciste. Dans le respect de nos valeurs
        d’auto-gestion, le Festival est décentralisé et fonctionne de façon
        horizontale, sans association pilotant son organisation.
      </p>
      <p>
        C’est parce que le slogan «&nbsp;mieux connaître l’extrême droite pour
        mieux la combattre&nbsp;» circule tant que cette infolettre sera quelque
        peu originale pour celle d’un festival. Elle aura un second but, en plus
        de vous faire découvrir la programmation du festival et les collectifs
        qui nous composent. Il s’agira, tout au long de l’été, de donner des
        clés de compréhension ce qu'est l'extrême droite, d’analyser son
        implantation régionale et de partager des outils pour lui faire face,
        afin de nous rassembler autour d’idées, d’en débattre, et de nous
        mobiliser pour les défendre. Vous aurez ainsi l’occasion de lire des
        entretiens avec des spécialistes et des articles destinés à s’armer pour
        la bataille culturelle contre l’extrême droite.
      </p>
      <p>En espérant que ce contenu vous plaira,</p>
      <p> Les Fourmilières</p>
      <Links>
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
    </Article>
  );
}
