import { createFileRoute } from "@tanstack/react-router";
import { Article, Figure, Answer, Introduction, Question } from "../Article";

export const Route = createFileRoute("/entretien-christine-coord-eau")({
  component: RouteComponent,
});

// eslint-disable-next-line react-refresh/only-export-components
function RouteComponent() {
  return (
    <Article>
      <h1>Entretien avec Christine de la coord'eau</h1>

      <Figure style={{ backgroundImage: `url('entretien-coord-eau.webp')` }} />

      <Introduction>
        Lors des précédents entretiens, nous avons abordé ce qu’était le
        fascisme et la réalité de l’extrême droite dans la région. Désormais, il
        nous faut lutter, mais comment&nbsp;? Nous avons rencontré la Coord’Eau
        34.{" "}
      </Introduction>

      <Question>
        Pourquoi avoir créé la Coord’Eau34&nbsp;et quelles sont vos
        mobilisations ?{" "}
      </Question>

      <Answer>
        La Coord'Eau34 est un collectif créé en 2023 pour lutter contre
        l'accaparement et la marchandisation de l'eau. <br />
        Nous nous mobilisons dans un premier temps autour des bassines du
        conseil départemental (on est déjà passés de 9 à 2 projets) puis autour
        de l'appropriation par Alma-Cristalline d'une ressource en eau à
        Montagnac alors qu'il reste des habitations non desservies et que la
        sécheresse frappe la zone. Nous luttons ainsi contre l'inversion des
        priorités prévues par la Directive Eau (l'eau potable, les milieux puis
        en dernier les activités économiques) et contre le passage en force en
        catimini.&nbsp;
      </Answer>

      <Question>
        Pourquoi cette lutte s'inscrit-elle dans la lutte antifasciste ?{" "}
      </Question>
      <Answer>
        L'eau est un commun à préserver et à partager !<br />
        L'eau est indispensable à tout : à la vie, aux écosystèmes et à
        l’ensemble de nos activités. Pourtant, elle ne cesse d’être menacée par
        des logiques capitalistes extractivistes et marchandes qui mettent en
        danger notre avenir et la biodiversité.
        <br />
        Le modèle productiviste s'impose non sans violences, aux êtres, aux
        milieux, au vivant. Il s'agit donc de dévoiler les stratégies et
        méthodes à l'œuvre, leur histoire aussi.
      </Answer>

      <Question>Comment vous soutenir&nbsp;? </Question>
      <Answer>
        Dans le cadre des Fourmilières, la Coord'eau34 vous invite à des
        ciné-débats sur ces thèmes :
        <ul>
          <li>
            "Violence dans les champs" au cinéma Alain Resnais à Clermont
            l'Hérault le 1er octobre à 20h30
          </li>
          <li>
            "Main basse sur l'eau" à la Baraquette citoyenne à Sète le 11
            octobre à 18h30
          </li>
        </ul>
        L'occasion de parler aussi des combats locaux: bassines, usine
        d'embouteillage, menaces sur des captages d'eau potable et des milieux…
      </Answer>
    </Article>
  );
}
