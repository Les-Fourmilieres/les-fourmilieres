import { createFileRoute } from "@tanstack/react-router";
import { Section } from "../components/Section";
import styled from "styled-components";
import { LinkButton } from "../components/Link/Link";
import { searchParams } from "../components/Agenda/SearchParams";
import cover from "../assets/gya/gya.png?url";
import { Agenda } from "../components/Agenda/Agenda";

export const Route = createFileRoute("/groove-your-ass")({
  component: RouteComponent,
  validateSearch: searchParams,
});

const ButtonStyle = `
  border: none;
  background: var(--accent);
  color: var(--accent-contrast);
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 3px;
  box-sizing: border-box;
  font-size: 18px;
  padding: 8px 16px;
  font-weight: 500;
  white-space: nowrap;
  &:hover {
    background-color: var(--accent-dark);
  }`;

const StyledLinkButton = styled(LinkButton)`
  ${ButtonStyle}
`;

const Container = styled.div`
	display: flex;
	justify-content: center;
`

const Covers = styled.aside`
  display: flex;
  flex-wrap: wrap;
  row-gap: 24px;
  column-gap: 24px;
  justify-content: center;
		margin-bottom: 30px;
`;

const CovertPart = styled.img`
  max-width: 1200px;
  @media (max-width: 550px) {
    max-width: 90%;
  }
`;

// eslint-disable-next-line react-refresh/only-export-components
function RouteComponent() {
  return (
		<Section>
		<main>
			<h1>
				Festival Groove Your Ass
			</h1>
			<Covers>
				<CovertPart src={cover} alt={"Logo - Groove Your Ass."} />
			</Covers>
			<p>
				<strong>Groove Your Ass : Un festival anticapitaliste, écologiste et culturel</strong>
			</p>
			<p>
				<strong>Le capitalisme nous mène droit dans le mur</strong>
				<br/>Groove Your Ass part d’un constat simple : le modèle capitaliste est un système prédateur. Il creuse les inégalités, détruit les écosystèmes, perpétue le néocolonialisme et isole les individus. Les ultra-riches, ces milliardaires, ont investi tous les pans de notre société : le droit, la politique, l’économie, les sciences, et même la culture, pour maintenir leurs privilèges au détriment du vivant et des populations.
				<br/>
				La culture, autrefois espace de liberté et de création, est devenue une marchandise. Asphyxiée par des logiques purement financières, elle perd son âme, son pouvoir de contestation et de rassemblement. Les festivals, eux aussi, se transforment en machines à profit, déconnectés des réalités sociales et écologiques.</p>
			<p>Nous refusons cette fatalité. Groove Your Ass est un festival, mais bien plus que cela : un espace de créativité, d’innovation et de revendication. Nous prouvons qu’il est possible d’organiser un événement en harmonie avec les limites planétaires, sans compromis avec les logiques de croissance et de profit.</p>
			<p>
				<strong>La musique électronique comme outil de rassemblement et de protestation</strong>
				<br/>La musique électronique a toujours été un moyen de rassembler, mais aussi de résister. Les festivals sont des territoires où nous pouvons repenser nos pratiques, les rendre plus altruistes, plus écoresponsables. Groove Your Ass a de multiples objectifs :</p>
			<ol>
				<li>
					<strong>Se réapproprier la culture</strong>et en faire un espace de revendication.</li>
				<li>Permettre de produire des artistes locaux à une époque où les cultures alternatives sont de plus en plus marginalisées.</li>
				<li >
					<strong>Proposer un modèle économique de festival</strong>respectueux des limites planétaires, loin des logiques de croissance infinie, soutenant un écosystème local.</li>
				<li>
					<strong>Sensibiliser et rendre accessibles</strong>des concepts trop souvent diabolisés par la classe dominante : anticapitalisme, écologie radicale, justice sociale, luttes, post-croissance.</li>
			</ol>
			<p>Groove Your Ass est un espace alternatif, conçu pour que chacun·e puisse accéder à un univers proche de l’underground, le temps d’un week-end. Ici, pas de place pour les compromis vides de sens. Nous proposons une programmation locale, une alimentation végétale, des tarifs accessibles et une organisation inclusive.
				<br/>
				Rejoignez-nous pour vivre, danser et construire ensemble une autre vision de la culture et de la société.
				<br/>
				<strong>Le futur se construit maintenant, et il va te faire groover.</strong></p>
		<p/>
			<Container>
			<StyledLinkButton
				href="https://shotgun.live/fr/venues/groove-your-ass"
				target="_blank"
			>
				Réserve vite ta place !
			</StyledLinkButton>
			</Container>
		<p>
			<u>Groove Your Ass #3</u>:</p>
		<p>Vendredi 2 octobre 2026 · 16h à 1h · Parc Montcalm</p>
		<p>Samedi 3 octobre 2026 · 11h à 1h · Parc Montcalm</p>
		<p>After · Samedi 3 octobre · 23h59 à 6h · Le Mélomane</p>
		<p>Dimanche 4 octobre 2026 · 11h à 22h · Parc Montcalm</p>
		<p/>
		<p>
			<u>Billetterie</u>:</p>
		<p>Pass 1 jour : 9 € · tarif solidaire : 13 €</p>
		<p>Pass 2 jours : 16,50 € · tarif
			solidaire : 19 €</p>
		<p>Pass After au Mélomane : 9 € · tarif solidaire : 13 €</p>
		<p>Pass dimanche : prix libre sur place · réserve ta place sur Shotgun.</p>
		<p/>
		<p>
			<em>Parce que danser n’a jamais été une fuite. Parce que la fête
				est un espace d’émancipation.</em>
		</p>
		<Section>
			<Agenda
				path={Route.to}
				disableMap
				disableDateFilder
				disableTypeFilter
			/>
		</Section>
	</main>
		</Section>
	);}
