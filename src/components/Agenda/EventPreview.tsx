import styled from "styled-components";
import {eventType, type MobilizonEventI} from "./Event";
import { EventDate } from "./EventDate";
import { EventAddress } from "./EventAddress";
import { useClockIcon } from "./useClockIcon";
import { EventTime } from "./EventTime";
import { Link } from "../Link/Link";
import { ParticipateButton } from "./ParticipateButton";

const EventTypes = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 4px 8px;
  flex-wrap: wrap;
`;

const EventType = styled.span`
	background-color: var(--accent-dark);
	color: var(--accent-contrast);
	//font-weight: 200;
	padding: 0px 4px;
	border-radius: 4px;
	white-space: nowrap;
	font-size: 14px;
`

const Content = styled.div`
  padding: 24px 16px;
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`;

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

const Actions = styled.div`
  padding: 16px;
  margin: -16px 0 0;
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: space-between;
`;

interface Props {
  event: MobilizonEventI;
}

export function EventPreview({ event }: Props) {
  const ClockIcon = useClockIcon(event.beginsOn, 20);
  return (
    <>
      <Content>
        <EventDate event={event} />
        <Infos>
          <Title>{event.title}</Title>
          {event.physicalAddress && (
            <Metadata>
              <EventAddress event={event} />
            </Metadata>
          )}
          {event.beginsOn && event.endsOn && (
            <Metadata>
              {ClockIcon}
              <span>
                <EventTime event={event} />
              </span>
            </Metadata>
          )}
        </Infos>
				<EventTypes>
					{eventType(event).map((type) => (
						<EventType>{type}</EventType>
					))}
				</EventTypes>
      </Content>
      <Actions>
        <Link to={`/programme/${event.uuid}`}>Plus d'infos</Link>
        <ParticipateButton event={event} />
      </Actions>
    </>
  );
}
