import styled from "styled-components";
import {eventLinks, eventType, type MobilizonEventI} from "./Event";
import { EventDate } from "./EventDate";
import { useClockIcon } from "./useClockIcon";
import { Link } from "../Link/Link";
import { EventTime } from "./EventTime";
import { EventAddress } from "./EventAddress";
import { ParticipateButton } from "./ParticipateButton";

import picto_autre from "../../assets/events/picto_autre.webp?url";
import picto_concert from "../../assets/events/picto_concert.webp?url";
import picto_conf from "../../assets/events/picto_conf.webp?url";
import picto_fresque from "../../assets/events/picto_fresque.webp?url";
import picto_kermesse from "../../assets/events/picto_kermesse.webp?url";
import picto_picnic from "../../assets/events/picto_picnic.webp?url";
import picto_proj from "../../assets/events/picto_proj.webp?url";
import picto_theatre from "../../assets/events/picto_theatre.webp?url";
import picto_manif from "../../assets/events/picto_manif.webp?url";
import { eventDefaultCover } from "./EventCover";
import { datesAreSameDay } from "./datesAreSameDay";
import {createLink} from "@tanstack/react-router";

import { FaCalendarPlus } from "react-icons/fa";

interface Props {
  event: MobilizonEventI;
	showEventsPageLink:boolean
}

const Container = styled.div`
	flex: 1 0 320px;
	background-color: var(--surface);
  box-shadow: var(--shadow);
	max-width: min(490px, 100%);
	width: 100%;
	display: flex;
`;
const Tile = styled(createLink(Link))`
	max-width: min(490px, 100%);
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	color: var(--text);
	&:visited {
		color: var(--text);
	} 
	text-decoration: none;
`

const Figure = styled.figure`
  flex: 0 0 200px;
  padding: 0;
  margin: 0;
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
`;

const Content = styled.div`
  padding: 24px 16px;
  display: flex;
  gap: 16px;
`;

const ParentPageLink = styled(Link)`
	background-color: var(--accent-light);
	color: var(--accent-contrast);
	text-decoration: none;

	border-radius: 5px;
	white-space: nowrap;
	font-size: 15px;
	font-style: italic;
	box-shadow: var(--shadow);
	padding: 0 5px;

	display: flex;
	gap: 5px;
	flex-direction: row;
	align-items: center;
	&:visited {
		color: var(--accent-contrast);
	}
	&:hover{
			text-decoration: underline;
	}
		
`

const Title = styled.h3`
  margin: 0;
`;

const Infos = styled.div`
  flex: 1 1 auto;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  gap: 4px;
`;

const Metadata = styled.div`
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 4px;

  span,
  a {
    flex: 1 1 auto;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const LabelsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 4px 8px;
  flex-wrap: wrap;
  padding: 8px;
`;

// eslint-disable-next-line react-refresh/only-export-components
export const EventType = styled.span`
  background-color: var(--accent-dark);
  color: var(--accent-contrast);
  font-weight: 500;
  padding: 0px 4px;

  border-radius: 5px;
  white-space: nowrap;
  font-size: 14px;
  box-shadow: var(--shadow);

  &::before {
    content: "";
    display: inline-block;
    height: 30px;
    width: 36px;
    transform: scale(0.7);
    margin-right: 3px;
    margin-top: -2px;
    margin-bottom: -2px;
    vertical-align: middle;
  }
  /*

 */
  &[data-cat="Concert"]::before,
  &[data-cat="DJ Set"]::before,
  &[data-cat="Open Air"]::before,
  &[data-cat="Bal populaire"]::before {
    background: url("${picto_concert}") no-repeat 0 center;
  }

  &[data-cat="Conférence"]::before,
  &[data-cat="Rencontre Littéraire"]::before,
  &[data-cat="Table-Ronde"]::before {
    background: url("${picto_conf}") no-repeat 0 center;
  }

  &[data-cat="Kermesse"]::before,
  &[data-cat="Village Associatif"]::before,
  &[data-cat="Braderie"]::before,
  &[data-cat="Loto"]::before,
  &[data-cat="Expo"]::before {
    background: url("${picto_kermesse}") no-repeat 0 center;
  }

  &[data-cat="Manifestation"]::before,
  &[data-cat="Pride"]::before,
  &[data-cat="Parade"]::before {
    background: url("${picto_manif}") no-repeat 0 center;
  }

  &[data-cat="Atelier cuisine"]::before,
  &[data-cat="Atelier d'expression"]::before,
  &[data-cat="Atelier militant"]::before,
  &[data-cat="Fresque"]::before,
  &[data-cat="Jeux"]::before,
  &[data-cat="Formation"]::before,
  &[data-cat="Atelier sérigraphie"]::before,
  &[data-cat="Arpentage"]::before {
    background: url("${picto_fresque}") no-repeat 0 center;
  }

  &[data-cat="Théâtre"]::before,
  &[data-cat="Conte"]::before,
  &[data-cat="Spectacle vivant"]::before,
  &[data-cat="Lecture"]::before,
  &[data-cat="Dragshow"]::before {
    background: url("${picto_theatre}") no-repeat 0 center;
  }
  &[data-cat="Projection"]::before,
  &[data-cat="Ciné-débat"]::before {
    background: url("${picto_proj}") no-repeat 0 center;
  }

  &[data-cat="Picnic"]::before,
  &[data-cat="Apéro"]::before,
  &[data-cat="Cantine"]::before,
  &[data-cat="Banquet populaire"]::before,
  &[data-cat="Repas partagé"]::before {
    background: url("${picto_picnic}") no-repeat 0 center;
  }

  &[data-cat="Autre"]::before {
    background: url("${picto_autre}") no-repeat 0 center;
  }
`;

const Actions = styled.div`
  padding: 16px;
  margin: -16px 0 0;
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: space-between;
`;

export function CalendarEvent({ event, showEventsPageLink }: Props) {
  const ClockIcon = useClockIcon(event.beginsOn, 20);
  return (
    <Container>
			<Tile to={`/programme/${event.uuid}`}>
				<Figure
					style={
						event.picture?.url &&
						event.picture.url !=
							"https://agenda.les-fourmilieres.org/media/5d51acc4f1d82879973317de10ae2811f51e947d17923b84d95ea2b69a939adf.webp?name=les-fourmilieres-preview.webp"
							? {
									backgroundImage: `url(${event.picture?.url})`,
									backgroundSize: "cover",
								}
							: {
									backgroundImage: `url(${eventDefaultCover(eventType(event)[0])})`,
									backgroundSize: "cover",
								}
					}
				>
					<LabelsContainer>
						{eventType(event).map((type) => (
							<EventType data-cat={type}>{type}</EventType>
						))}
					</LabelsContainer>
				</Figure>
				<LabelsContainer>
				{showEventsPageLink ? eventLinks(event)?.map((eventsPage) => (
					<ParentPageLink to={eventsPage.to}><FaCalendarPlus /> {eventsPage.shortLabel}</ParentPageLink>
				)) : null}
				</LabelsContainer>
				<Content>
					<EventDate event={event} />
					<Infos>
						<Title>{event.title}</Title>
						{event.physicalAddress && (
							<Metadata>
								<EventAddress event={event} />
							</Metadata>
						)}
						{event.beginsOn &&
							event.endsOn &&
							datesAreSameDay(event.beginsOn, event.endsOn) && (
								<Metadata>
									{ClockIcon}
									<span>
										<EventTime event={event} />
									</span>
								</Metadata>
							)}
					</Infos>
				</Content>
				<Actions>
					<Link to={`/programme/${event.uuid}`}>Plus d'infos</Link>
					<ParticipateButton event={event} />
				</Actions>
			</Tile>
    </Container>
  );
}
