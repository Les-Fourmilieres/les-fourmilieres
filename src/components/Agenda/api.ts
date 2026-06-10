import { MobilizonResponseSchema, MobilizonSingleEventSchema } from "./Event";

const BASE_URL = "https://agenda.les-fourmilieres.org/api";

function buildGraphQlQuery() {
  return `
    query SearchEventsInWindow($beginsOn: DateTime, $endsOn: DateTime, $limit: Int) {
      searchEvents(beginsOn: $beginsOn, endsOn: $endsOn, limit: $limit) {
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

export async function fetchEvents() {
  //const eventsPage = 1;
  const limit = 100;
  const after = new Date(Date.now() - 24 * 3600000 * 30);

  const query = buildGraphQlQuery();
  const variables = { beginsOn: after, limit: limit };
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
