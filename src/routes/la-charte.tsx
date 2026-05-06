import { createFileRoute } from "@tanstack/react-router";
import { Link, TooltipTrigger } from "react-aria-components";
import styled from "styled-components";
import { Tooltip } from "../components/Tooltip";

export const Route = createFileRoute("/la-charte")({
  component: RouteComponent,
});

const SubTitle = styled.p(() => ({
  textAlign: "center",
  fontStyle: "italic",
  color: "var(--text-l)",
  margin: "40px auto",
  maxWidth: "var(--textMaxWidth)",
}));

const Container = styled.article`
  max-width: var(--textMaxWidth);
  width: 100%;
  margin: 0 auto;
  padding: 40px 0;
`;

const StyledLink = styled(Link)`
  color: var(--accent);
  text-decoration: none;
  &:visited {
    color: var(--accent);
  }
  &:hover {
    text-decoration: underline;
  }
`;

// eslint-disable-next-line react-refresh/only-export-components
function RouteComponent() {
  return (
    <Container>
      <h1>CHARTE DU FESTIVAL «&nbsp;LES FOURMILIÈRES&nbsp;»</h1>
      <SubTitle>
        Les collectifs citoyens, associations, entreprises, coopératives,
        syndicats participant à l’organisation du festival Les Fourmilières et
        dénommés dans la suite du document «&nbsp;les collectifs&nbsp;»,
        s’engagent sur la présente charte.
      </SubTitle>

      <h2>Article 1 – Objet de la charte</h2>
      <p>
        La présente charte fixe les règles, valeurs et engagements des
        collectifs participant à l’organisation du festival Les Fourmilières.
        Elle constitue le <strong>cadre éthique et organisationnel</strong> du
        festival.
      </p>

      <h2>
        Article 2 – le festival «&nbsp;Les Fourmilières&nbsp;» (objectifs,
        durée, lieux, parties prenantes)
      </h2>
      <p>
        «&nbsp;Les Fourmilières&nbsp;» est un festival{" "}
        <strong>
          contre le fascisme, l’extrême droite et ses idées et pour un monde
          solidaire.
        </strong>
      </p>
      <p>
        Le festival se tient du{" "}
        <strong>25 septembre au 11 octobre 2026.</strong>
      </p>
      <p>
        Le festival prend la forme d’une{" "}
        <strong>programmation d’évènements dans différents endroits</strong> du
        Midi. Chaque collectif propose l’angle (culture, féminisme, luttes
        locales, écologie, antiracisme...) et le format de son choix (sérieux,
        ludique, festif, artistique...).
      </p>
      <p>
        Ces évènements peuvent être organisés par des{" "}
        <strong>
          collectifs citoyens, des associations, des entreprises, des
          coopératives, des syndicats.
        </strong>
      </p>

      <h2>Article 3 – Manifeste du festival</h2>

      <p>
        Les collectifs engagés dans le festival s’engagent sur le manifeste
        suivant&nbsp;:
      </p>
      <p>
        Alors que les forces réactionnaires menacent nos libertés, notre
        démocratie, nos droits fondamentaux, écologiques, sociaux et
        économiques,
      </p>
      <p>
        Nous, associations, collectifs citoyens, syndicats, coopératives,
        entreprises et lieux engagés, mobilisés dans les luttes pour un avenir
        solidaire et inclusif,{" "}
      </p>
      <p>
        Déclarons la nécessité d'une riposte forte contre l’extrême droite et
        d’une alternative progressiste.{" "}
      </p>

      <h3>Défendre pour ne rien céder</h3>

      <p>
        Nous refusons la normalisation de l'extrême droite et ses idées
        toxiques. Nous nous engageons à :
      </p>
      <ul>
        <li>
          <strong>Déconstruire et exposer les manipulations</strong>,
          contre-vérités et discours de haine par une action éducative,
          médiatique et créative.
        </li>
        <li>
          <strong>Rebâtir un cordon sanitaire</strong> pour marginaliser les
          mouvements réactionnaires et bloquer leur accession au pouvoir.
        </li>
        <li>
          <strong>
            Protéger les conquis sociaux et les droits des personnes visées
          </strong>{" "}
          par les offensives autoritaires et discriminatoires.
        </li>
      </ul>

      <h3>Ouvrir un autre imaginaire</h3>
      <p>
        Nous voulons vivre un présent désirable, une alternative forte et
        puissante. Nous nous engageons à :
      </p>
      <ul>
        <li>
          <strong>Déplacer le curseur vers un horizon progressiste</strong> en
          promouvant des idées radicalement justes et solidaires, en rupture
          avec le libéralisme qui précarise et qui fait le terreau de l’extrême
          droite.
        </li>
        <li>
          <strong>Bâtir une puissance populaire</strong> à travers l’éducation
          populaire, les réseaux d'entraide et le soutien aux médias
          indépendants.
        </li>
        <li>
          <strong>Mener des luttes pour s'émanciper collectivement</strong>,
          dans la joie et la bienveillance.
        </li>
      </ul>

      <h3>Ensemble solidaires</h3>
      <p>
        Ensemble nous formons un réseau pour un{" "}
        <strong>
          Midi solidaire et antifasciste en organisant un festival
        </strong>{" "}
        afin de visibiliser,{" "}
        <strong>
          massifier la lutte contre l’extrême droite et mener la bataille
          culturelle
        </strong>{" "}
        dans nos territoires de façon coordonnée.
      </p>
      <p>
        Nous refusons la peur et la résignation.{" "}
        <strong>
          Notre riposte sera collective, populaire, joyeuse et déterminée. Et
          elle sera généreuse
        </strong>
        , car elle portera un projet d'émancipation et de dignité pour toutes et
        tous.
      </p>

      <p>
        <strong>Rejoignez-nous. Ensemble, faisons front.</strong>
      </p>

      <h2>Article 4 – Principes et cadre éthique du festival</h2>

      <p>
        Le festival et les évènements organisés dans ce cadre sont{" "}
        <strong>non violents et s’inscrivent dans un cadre légal</strong>.
      </p>

      <p>
        Le festival vise à accueillir une diversité de publics et à participer à
        la sortie de l’entre-soi. Les évènements veillent à l’
        <strong>accessibilité de tous·tes</strong>, à la{" "}
        <strong>non-discrimination</strong> et à des prises de paroles
        équilibrées. Ils s’inscrivent dans une démarche globale de lutte contre
        les systèmes de domination et de promotion du respect du vivant.
      </p>

      <p>
        Les évènements <strong>refusent toute discrimination</strong>,
        xénophobie, islamophobie, antisémitisme et toutes autres formes de
        racisme. Le festival constitue un cadre{" "}
        <strong>féministe et opposé aux discriminations LGBTQIA+</strong>. Les
        propos racistes, sexistes, validistes, homophobes ou transphobes ne sont
        pas tolérés (liste établie sans hiérarchie ni prétention
        d’exhaustivité).{" "}
      </p>

      <p>
        Le festival s'engage à{" "}
        <strong>
          ne pas utiliser{" "}
          <TooltipTrigger delay={0}>
            <Link
              href="https://fr.wikipedia.org/wiki/Intelligence_artificielle_g%C3%A9n%C3%A9rative"
              target="_blank"
            >
              d'IA génératives
            </Link>
            <Tooltip>
              L'intelligence artificielle générative est un type de système
              d'intelligence artificielle (IA) capable de générer du texte, des
              images, des vidéos ou d'autres médias en réponse à des
              requêtes{" "}
            </Tooltip>
          </TooltipTrigger>
        </strong>{" "}
        pour l'ensemble de ses productions. De l'écriture à la création de
        visuels et de vidéos, l'ensemble du travail est réalisé par des êtres
        humains consentants.{" "}
        <Link
          href="https://s3.fr-par.scw.cloud/strapi-uploads/Data_For_Good_Livre_Blanc_IA_Generative_v1_0_1_345b2a7454.pdf"
          download
        >
          En savoir plus
        </Link>
      </p>

      <p>
        Le festival est{" "}
        <strong>
          indépendant des partis ou mouvements politiques électoralistes
        </strong>
        . Ils ne pourront pas être organisateurs ou co-organisateurs mais
        pourront être invités à des évènements.
      </p>

      <h2>Article 5 – Engagements des collectifs</h2>

      <p>
        L’organisation du festival repose sur des{" "}
        <strong>principes d’horizontalité</strong>, avec des décisions prises de
        façon collective et transparente dans le cadre des différents groupes de
        travail. <strong>Les groupes sont autonomes</strong> dans leur
        fonctionnement hormis décision importante et/ou impliquant la
        coordination avec d’autres groupes.{" "}
      </p>

      <p>
        <StyledLink href="https://quartiergenereux.fr">
          <strong>Le Quartier Généreux</strong>
        </StyledLink>
        , association à l’origine du Festival Les Fourmilières, s’engage à
        assurer la coordination générale du festival, son identité visuelle et à
        élaborer un kit de communication (nom, logo, visuels) qui pourra être
        adaptée si besoin.
      </p>

      <p>
        <strong>Les différents collectifs parties prenantes</strong> s’engagent
        à organiser, accueillir ou soutenir des évènements au cours des 15 jours
        du festival, à communiquer localement sur leurs évènements et sur le
        festival et à participer à son organisation en fonction de leurs
        capacités. Les modalités de communication locale sont au choix des
        collectifs, dans le respect de la présente charte et en transparence
        avec les autres collectifs.
      </p>

      <p>
        Chaque collectif accueillant et/ou organisant un évènement{" "}
        <strong>est responsable de l’accueil du public</strong>, doit veiller
        aux conditions de sécurité et au respect du cadre légal. Le Quartier
        Généreux ne peut être tenu responsable de ces aspects, en dehors des
        évènements qu’il organise ou accueille lui-même.
      </p>

      <p>
        Chaque collectif est{" "}
        <strong>responsable financièrement de son évènement</strong>
        (principe de subsidiarité) mais si un besoin de mutualisation ou
        d’entraide entre collectifs apparaît pour la prise en charge de certains
        coûts, les collectifs en discuteront en prenant en compte un principe de
        solidarité. Les modalités seront définies collectivement.
      </p>

      <p>
        <strong>Un pôle d’écoute et de médiation est mis en place</strong>,
        ouvert à tous les bénévoles et collectifs qui le souhaitent, afin de
        prendre en compte les frictions éventuelles et points de dissensions.
        Les différentes parties prenantes à la présente charte s’engagent à une
        attitude respectueuse, bienveillante et non-violente.
      </p>
    </Container>
  );
}
