import styled from "styled-components";
import type { MobilizonEventI } from "./Event";
import { EventDate } from "./EventDate";
import { useClockIcon } from "./useClockIcon";
import { Link } from "../Link/Link";
import { Button } from "react-aria-components";
import { EventTime } from "./EventTime";
import { EventAddress } from "./EventAddress";

interface Props {
  event: MobilizonEventI;
}

const Container = styled.div`
  flex: 1 0 240px;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  background-color: var(--surface);
  box-shadow: var(--shadow);
`;

const Figure = styled.figure`
  flex: 0 0 200px;
  padding: 0;
  margin: 0;
  background-size: cover;
`;

const Content = styled.div`
  padding: 24px 16px;
  display: flex;
  gap: 16px;
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
  gap: 4px;
`;

const Metadata = styled.div`
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 4px;

  span {
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

const StyledButton = styled(Button)`
  border: none;
  background: var(--accent);
  color: var(--accent-contrast);
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 3px;
  font-size: 18px;
  padding: 8px 16px;
  font-weight: 500;
  &:hover {
    background-color: var(--accent-dark);
  }
`;

export function CalendarEvent({ event }: Props) {
  const ClockIcon = useClockIcon(event.beginsOn, 20);
  return (
    <Container>
      <Figure
        style={
          event.picture?.url
            ? {
                backgroundImage: `url(${event.picture?.url})`,
              }
            : {
                backgroundImage: `url(https://agenda.les-fourmilieres.org/media/5d51acc4f1d82879973317de10ae2811f51e947d17923b84d95ea2b69a939adf.webp)`,
              }
        }
      ></Figure>
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
      </Content>
      <Actions>
        <Link to={`/programme/${event.uuid}`}>Plus d'infos</Link>
        <StyledButton>Je participe</StyledButton>
      </Actions>
    </Container>
  );
}
