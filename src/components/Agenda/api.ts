import {
  MobilizonEventParticipantsDataSchema,
  MobilizonResponseSchema,
  MobilizonSingleEventSchema,
  type MobilizonEventParticipants,
} from "./Event";

const BASE_URL = "https://agenda.les-fourmilieres.org/api";

function buildGraphQlQuery() {
  return `
    query SearchEventsInWindow($beginsOn: DateTime, $endsOn: DateTime, $limit: Int, $statusOneOf: [EventStatus]) {
      searchEvents(beginsOn: $beginsOn, endsOn: $endsOn, limit: $limit, statusOneOf: $statusOneOf) {
        total
        elements {
          __typename
          ... on Event {
            id
            title
            description
            beginsOn
            endsOn
            onlineAddress
            joinOptions
            externalParticipationUrl
            uuid
            url
            slug
            options {
                showStartTime
                showEndTime
                timezone
                offers {
                    price
                    priceCurrency
                    url
                    __typename
                }
                participationConditions {
                    title
                    content
                    url
                    __typename
                }
            }
            tags {
              id
              slug
              title
              __typename
            }
            picture {
              url
              alt
              name
              contentType
              size
              metadata {
                width, height
              }
            }
            url
            physicalAddress {
              description
              locality
              geom
              postalCode
              street
            }
          }
        }
      }
    }
    `;
}

function getSinqleEventQuery() {
  return `
    query getEvent($uuid: UUID!) {
      event(uuid: $uuid) {
            id
            title
            description
            beginsOn
            endsOn
            onlineAddress
            joinOptions
            externalParticipationUrl
            url
            uuid
            options {
                showStartTime
                showEndTime
                timezone
                offers {
                    price
                    priceCurrency
                    url
                    __typename
                }
                participationConditions {
                    title
                    content
                    url
                    __typename
                }
            }
            tags {
                id
                slug
                title
                __typename
            }
            picture {
                url
                alt
                name
                contentType
                size
                metadata {
                width, height
                }
            }
            url
            physicalAddress {
                description
                locality
                geom
                postalCode
                street
            }
        }
    }
    `;
}

interface SearchOptions {
  showUnConfirmed?: boolean;
}

export async function fetchEvents({ showUnConfirmed = false }: SearchOptions) {
  //const eventsPage = 1;
  const limit = 100;
  const after = new Date(2026, 7, 25);

  const query = buildGraphQlQuery();
  const variables = {
    beginsOn: after,
    limit: limit,
    statusOneOf: showUnConfirmed ? ["CONFIRMED", "TENTATIVE"] : ["CONFIRMED"],
  };
  const payload = JSON.stringify({ query: query, variables: variables });

  /*const dtFormat = new Intl.DateTimeFormat("fr-FR", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    timeZone: "Europe/Paris",
  });*/

  const response = await fetch(BASE_URL, {
    method: "post",
    body: payload,
    headers: {
      "Content-Type": "application/json",
    },
  });

  return MobilizonResponseSchema.parse(await response.json());
}

export async function fetchEventByUuid(uuid: string) {
  const query = getSinqleEventQuery();
  const variables = { uuid: uuid };
  const payload = JSON.stringify({ query: query, variables: variables });

  /*const dtFormat = new Intl.DateTimeFormat("fr-FR", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    timeZone: "Europe/Paris",
  });*/

  const response = await fetch(BASE_URL, {
    method: "post",
    body: payload,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return MobilizonSingleEventSchema.parse(await response.json());
}

export async function fetchEventParticipants(
  uuid: string,
): Promise<MobilizonEventParticipants> {
  const query = `query FetchEventBasic($uuid: UUID!) {
  event(uuid: $uuid) {
    id
    uuid
    joinOptions
    externalParticipationUrl
    participantStats {
      going
      notApproved
      notConfirmed
      participant
      __typename
    }
    __typename
  }
}`;
  const variables = { uuid: uuid };
  const payload = JSON.stringify({
    operationName: "FetchEventBasic",
    query: query,
    variables: variables,
  });
  const response = await fetch(BASE_URL, {
    method: "post",
    body: payload,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return MobilizonEventParticipantsDataSchema.parse(await response.json()).data
    .event;
}

export async function addParticipant(
  eventId: string,
  email: string,
  message: string,
) {
  const query = `mutation JoinEvent($eventId: ID!, $actorId: ID!, $email: String, $message: String, $locale: String, $timezone: Timezone) {
    joinEvent(
      eventId: $eventId
      actorId: $actorId
      email: $email
      message: $message
      locale: $locale
      timezone: $timezone
    ) {
      ...ParticipantQuery
      __typename
    }
    }

  fragment ParticipantQuery on Participant {
    role
    id
    actor {
      ...ActorFragment
      __typename
    }
    event {
      id
      uuid
      __typename
    }
    metadata {
      cancellationToken
      message
      __typename
    }
    insertedAt
    __typename
  }

  fragment ActorFragment on Actor {
    id
    avatar {
      uuid
      url
      __typename
    }
      type
      preferredUsername
      name
      domain
      summary
      url
      __typename
  }`;
  const variables = {
    eventId: `${eventId}`,
    actorId: "1",
    email,
    message,
    locale: "fr",
    timezone: "Europe/Paris",
  };
  const payload = JSON.stringify({
    operationName: "JoinEvent",
    query: query,
    variables: variables,
  });

  const response = await fetch(BASE_URL, {
    method: "post",
    body: payload,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await response.json();
}
