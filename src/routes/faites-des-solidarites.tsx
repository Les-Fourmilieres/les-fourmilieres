import { createFileRoute } from "@tanstack/react-router";
import { Section } from "../components/Section";
import { RestrictedAgenda } from "../components/Agenda/RestrictedAgenda.js";
import styled from "styled-components";
import cover from "../assets/fds/faites-des-solidarites.png?url";
import { searchParams } from "../components/Agenda/SearchParams.js";

export const Route = createFileRoute("/faites-des-solidarites")({
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
      <h1>Faites des solidarités</h1>
      <Covers>
        <CovertPart src={cover} alt={"Affiche de la Faites des Solidarités."} />
      </Covers>

      <p>
        Pendant deux jours, le collectif "faites des solidarités " (habitant•es
        du quartier des Arennes et du Pays Viganais, assos, collectifs et
        syndicats locaux), partagerons au quartier des Arennes des ateliers de
        cuisine dans un four à pain itinérant, de création d’affiche et de
        visuels pour investir l'espace public, de discussions et d’échanges, de
        jeux et de partage ... sur le thème des solidarités et de nos capacités
        collectives à résister à la haine, au racisme, aux discriminations et à
        l’isolement...
      </p>
      <p>
        Notre démarche s'inscrit sur du long terme, cette fête est un point
        d'étape, et en complémentarité des actions des collectifs de Ganges !
      </p>
      <p>
        <strong>N'hésitez pas à nous contacter pour nous rejoindre :</strong>{" "}
        faitesdessolidarites@etik.com
      </p>

      <p>
        <strong>En accès libre pendant les deux jours :</strong>
      </p>
      <ul>
        <li>
          <p>Expos</p>
        </li>
        <li>
          <p>
            Infokiosque avec des affiches, des brochures des badges et des
            livres ...
          </p>
        </li>
        <li>
          <p>
            Caravane "petite fabrique à films" avec les courts métrages Sous les
            étoiles 2022,23,24,25 ...
          </p>
        </li>
        <li>
          <p>Buvette sans alcool</p>
        </li>
        <li>
          <p>La Raîma : bibliothèque-jeux de société</p>
        </li>
      </ul>

      <RestrictedAgenda path={Route.to} />
    </Section>
  );
}

/**
 * <p><strong>Au programme :</strong></p>
 * 			<p><strong>Mardi 29 septembre 2026</strong></p>
 * 			<p><strong>- 12h30-14h : </strong>CANTINE de l'Etuve en exil devant le foyer Albouy - prix libre</p>
 * 			<p><strong>- 14h30-16h : </strong>Echanges de pratiques sur les convergences de luttes, d'après des témoignages de personnes ayant participé aux "résistantes".</p>
 * 			<p><strong>- A partir de 16h : </strong>ouverture de l'espace "expressions libres" (création d'affiches, de pancartes, de slogans, de poésies urbaines, de badges ...)et de la buvette sans alcool</p>
 * 			<p><strong>- 17h :</strong> atelier pâte à pain</p>
 * 			<p><strong>- 18h30 : </strong>soirée pizza four à pain itinérant, amène tes garnitures, nous avons la pâte !</p>
 * 			<p><strong>- 19h : </strong>micro libre/open mic' et pizza au four à pain, viens chanter garnir et savourer !</p>
 * 			<p><strong>Mercredi 30 septembre :</strong></p>
 * 			<p><strong>Matin :</strong></p>
 * 			<p>- 9h-12h :<strong> </strong>Atelier couscous : venez découvrir la recette de Smahen et créer une recette "free style" avec les surprises de nos potagers ! (*si vous avez des légumes à partager, merci de les amener le mardi 29
 * 				septembre entre 10h et 14h au foyer Albouy).</p>
 * 			<p>- 9h-11h : Ateliers « expressions dans l’espace public » : slogans/affiches/pancartes/badges, l'espace "expressions libres" sera en libre accès toute la journée</p>
 * 			<p>- 10h-10h30 :&nbsp; contes de Nashredine sous la Raïma avec Kim</p>
 * 			<p>- 10h-11h : atelier bouturage et récolte de graines avec Sophie et Amandine</p>
 * 			<p>- 11h : course d'orientation des Arennes&nbsp; avec Isabelle et Raphaële : rendez vous devant le foyer Albouy</p>
 * 			<p>- 12h apéro et mini balleti d'automne avec Isabelle Curti</p>
 * 			<p>- 12h30 :&nbsp; repas de quartier partagé : amenez votre spécialité (entrée ou desserts) et venez savourer le couscous cuisiné collectivement le matin !</p>
 * 			<p>- 14h30 "Chantons ensemble avec Pierre et sa guitare"</p>
 * 			<p>- 15h cuisson des pains avec Lucas</p>
 * 			<p>- 14h-16h initiation foot, jeux et match avec Héloïse et l'équipe de foot féminine&nbsp;</p>
 * 			<p><strong>- 16h30 : </strong>goûter final avec le bon pain cuit dans le four à pain ! amène ta confiture préférée ou toute autre spécialité à partager ... et inauguration de boîte à livres et du panneaux à infos, si le coeur t'en dis
 * 				amène un livre à déposer !</p>
 * 			<p><strong>- 17h :</strong> Petits Contes Gourmands pour tous et toutes avec Kamel Ghenoun et Marcel Dreux&nbsp;&nbsp;</p>
 */
