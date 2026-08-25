import z from "zod";
import type { LivingAreaI } from "../../core/LivingArea";
import cinema_cover from "../../assets/events/cinema.png?url";
import concert_cover from "../../assets/events/concert.png?url";
import conf_cover from "../../assets/events/conf.png?url";
import picnic_cover from "../../assets/events/picnic.png?url"
import autre_cover from "../../assets/events/autre.png?url"
import djset_cover from "../../assets/events/djset.png?url"
import openair_cover from "../../assets/events/openair.png?url"
import balpop_cover from "../../assets/events/balpop.png?url"
import ag_cover from "../../assets/events/ag.png?url"
import kermesse_cover from "../../assets/events/kermesse.png?url"
import theatre_cover from "../../assets/events/theatre.png?url"
import manif_cover from "../../assets/events/manif.png?url"
import type {MenuItem} from "../Header/Menu.js";
import {eventExtraData, type EventTypes} from "../../data/EventExtraData.js";

export const eventType:(event:MobilizonEventI) => EventTypes[] = (event)=> {
	return eventExtraData[event.uuid]?.eventTypes || ["Autre"]
}
export const eventLinks:(event:MobilizonEventI) => MenuItem[]|undefined = (event)=> {
	return eventExtraData[event.uuid]?.programLinks
}
export const eventsForLink:(path:string) => string[] = (path)=> {
	const events:string[] = []
	Object.entries(eventExtraData).forEach((entry)=>entry[1].programLinks?.forEach(link=>{
		if(link.to == path) events.push(entry[0])
	}))
	return events
}

export const eventDefaultCover:(type:EventTypes)=>string = (type)=>{
	switch (type){
	case "Projection":
	case "Ciné-débat":
		return cinema_cover
	case "DJ Set":
		return djset_cover
	case "Open Air":
		return openair_cover
	case "Bal populaire":
		return balpop_cover
	case "Concert":
		return concert_cover
	case "AG":
		return ag_cover
	case "Conférence":
	case "Rencontre Littéraire":
	case "Table-Ronde":
		return conf_cover
	case "Picnic":
	case "Apéro":
	case "Repas partagé":
		return picnic_cover
	case "Kermesse":
	case "Loto":
	case "Expo":
	case "Braderie":
	case "Village Associatif":
		return kermesse_cover
	case "Théâtre":
	case "Dragshow":
	case "Spectacle vivant":
	case "Lecture":
		return theatre_cover
	case "Manifestation":
	case "Pride":
	case "Parade":
		return manif_cover
	default:
		return autre_cover
	}
}

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

export type MobilizonResponseI = z.infer<typeof MobilizonResponseSchema>;
export type MobilizonEventI = z.infer<typeof MobilizonEventSchema>;
export type MobilizonEventWithLivingAreaI = MobilizonEventI & {
  livingArea: LivingAreaI | undefined;
};
export type MobilizonPhysicalAddressI = z.infer<typeof MobilizonAddressSchema>
export type MobilizonEventSchema = z.infer<typeof MobilizonSearchEventsSchema>;

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
export type MobilizonEventParticipantsData = z.infer<
  typeof MobilizonEventParticipantsDataSchema
>;
export type MobilizonEventParticipants = z.infer<
  typeof MobilizonEventParticipantsSchema
>;
