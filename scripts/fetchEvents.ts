import { MobilizonResponseSchema } from "../src/components/Agenda/Event.js";
import { eventExtraData } from "../src/data/EventExtraData.js";

function buildGraphQlQuery() {
  return `
    query SearchEventsInWindow($beginsOn: DateTime, $endsOn: DateTime, $limit: Int, $page: Int, $statusOneOf: [EventStatus]) {
      searchEvents(beginsOn: $beginsOn, endsOn: $endsOn, limit: $limit, page: $page, statusOneOf: $statusOneOf) {
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
            updatedAt
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

const BASE_URL = "https://agenda.les-fourmilieres.org/api";
const limit = 100;

async function fetchEvents({ showUnConfirmed = false, page = 1 }) {
  const after = new Date(2026, 7, 25);

  const query = buildGraphQlQuery();
  const variables = {
    beginsOn: after,
    limit,
    page,
    statusOneOf: showUnConfirmed ? ["CONFIRMED", "TENTATIVE"] : ["CONFIRMED"],
  };
  const payload = JSON.stringify({ query: query, variables: variables });

  const response = await fetch(BASE_URL, {
    method: "post",
    body: payload,
    headers: {
      "Content-Type": "application/json",
    },
  });

  const mobilizonResponse = MobilizonResponseSchema.parse(
    await response.json(),
  );
  return mobilizonResponse;
}

export async function fetchAllEvents() {
  const firstPage = await fetchEvents({ showUnConfirmed: false, page: 1 });
  const pageCount = Math.ceil(firstPage.data.searchEvents.total / limit);
  if (pageCount <= 1) {
    return firstPage.data.searchEvents.elements.filter(
      (event) => !!eventExtraData[event.uuid],
    );
  }
  const results = await Promise.allSettled(
    Array.from({ length: pageCount - 1 }).map((_, index: number) => {
      const page = index + 2;
      return fetchEvents({ showUnConfirmed: false, page });
    }),
  );
  return results
    .filter((result) => result.status === "fulfilled")
    .map((result) => result.value)
    .reduce((acc, page) => {
      return [...acc, ...page.data.searchEvents.elements];
    }, firstPage.data.searchEvents.elements)
    .filter((event) => !!eventExtraData[event.uuid]);
}
