import z from "zod";
import { eventExtraData, } from "../../data/EventExtraData.js";
export const eventType = (event) => {
    return eventExtraData[event.uuid]?.eventTypes || ["Autre"];
};
export const eventLinks = (event) => {
    return eventExtraData[event.uuid]?.programLinks;
};
export const eventsForLink = (path) => {
    const events = [];
    Object.entries(eventExtraData).forEach((entry) => entry[1].programLinks?.forEach((link) => {
        if (link.to == path)
            events.push(entry[0]);
    }));
    return events;
};
const MobilizonMediaSchema = z.object({
    url: z.string().optional().nullable(),
    alt: z.string().optional().nullable(),
    name: z.string().optional().nullable(),
    contentType: z.string().optional().nullable(),
    size: z.number().optional().nullable(),
    metadata: z
        .object({
        width: z.number().nullable().optional(),
        height: z.number().nullable().optional(),
    })
        .nullable()
        .optional(),
});
const MobilizonAddressSchema = z.object({
    description: z.string().optional().nullable(),
    geom: z.string().optional().nullable(),
    locality: z.string().optional().nullable(),
    postalCode: z.string().optional().nullable(),
    street: z.string().optional().nullable(),
});
const MobilizonTAGSchema = z.object({
    __typename: z.string(),
    id: z.string(),
    slug: z.string(),
    title: z.string(),
});
const MobilizonEventSchema = z.object({
    beginsOn: z.coerce.date().optional().nullable(),
    description: z.string().optional().nullable(),
    endsOn: z.coerce.date().optional().nullable(),
    externalParticipationUrl: z.string().optional().nullable(),
    id: z.string(),
    joinOptions: z.string(),
    onlineAddress: z.string().optional().nullable(),
    physicalAddress: MobilizonAddressSchema.nullable().optional(),
    picture: MobilizonMediaSchema.nullable().optional(),
    tAGs: z.array(MobilizonTAGSchema).nullable().optional(),
    title: z.string().nullable().optional(),
    url: z.string().nullable().optional(),
    uuid: z.string(),
    updatedAt: z.string().optional().nullable(),
});
const MobilizonSearchEventsSchema = z.object({
    elements: z.array(MobilizonEventSchema),
    total: z.number(),
});
const MobilizonDataSchema = z.object({
    searchEvents: MobilizonSearchEventsSchema,
});
export const MobilizonResponseSchema = z.object({
    data: MobilizonDataSchema,
});
export const MobilizonSingleEventSchema = z.object({
    data: z.object({
        event: MobilizonEventSchema,
    }),
});
const MobilizonEventParticipantsSchema = z.object({
    __typename: z.literal("Event"),
    externalParticipationUrl: z.url().nullable().optional(),
    id: z.string(),
    uuid: z.string(),
    joinOptions: z.string(),
    participantStats: z.object({
        __typename: z.literal("ParticipantStats"),
        notApproved: z.number(),
        notConfirmed: z.number(),
        participant: z.number(),
    }),
});
export const MobilizonEventParticipantsDataSchema = z.object({
    data: z.object({
        event: MobilizonEventParticipantsSchema,
    }),
});
