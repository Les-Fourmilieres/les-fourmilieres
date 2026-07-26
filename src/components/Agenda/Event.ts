import z from "zod";
import type { LivingAreaI } from "../../core/LivingArea";
import cinema_cover from "../../assets/events/cinema.png?url";
import concert_cover from "../../assets/events/concert.png?url";
import conf_cover from "../../assets/events/conf.png?url";
import picnic_cover from "../../assets/events/picnic.png?url"
import table_ronde_cover from "../../assets/events/table-ronde.png?url"
import rencontre_litteraire_cover from "../../assets/events/rencontre-litteraire.png?url"
import djset_cover from "../../assets/events/djset.png?url"
import openair_cover from "../../assets/events/openair.png?url"
import balpop_cover from "../../assets/events/balpop.png?url"
import ag_cover from "../../assets/events/ag.png?url"
import type {MenuItem} from "../Header/Menu.js";

export type EventTypes = "Concert" | "DJ Set" | "Open Air" | "Bal populaire" |
	"Conférence" | "Rencontre Littéraire" | "AG" | "Table-Ronde" |
	"Kermesse" | "Village Associatif" |
	"Manifestation" | "Pride" | "Parade" |
	"Atelier cuisine" | "Atelier d'expression" | "Fresque" |
	"Théâtre" | "Spectacle vivant" |
	"Cinéma" | "Ciné-débat" |
	"Picnic" | "Apéro" | "Repas partagé" |
	"Autre"

const uiidTypesMap:{ [key: string] : EventTypes[]; } = {
	"538f4ebe-8c97-43fe-b2c6-9040993b6bb0":["Conférence"],
	"d380683f-d451-45ee-8818-9bd9c2f414ff":["Conférence"],
	"c3fd4ad3-8e73-40f3-861c-52427ea8352b":["Picnic"],
	"180b67c8-8d4a-4748-93b8-0ba4c1e04a4f":["Table-Ronde"],
	"192db528-e67b-4e67-92f7-a8d603e35625":["Concert"],
	"0cbe6c40-c320-4d64-9189-d5cb264a0ffe":["Table-Ronde"],
	"4efd8fed-36f6-40aa-9f36-5f2d8dea255d":["Open Air"],
	"3c9bd105-3fb8-4dee-8ac5-c229300d1463":["Conférence"],
	"a28a1a79-9595-4cc7-a4f6-bce7ac6a84a3":["Atelier cuisine", "Atelier d'expression", "Concert", "Kermesse"],
	"76f7c610-663c-4792-b0c2-41cfd3df2fd7":["Fresque"],
	"5e505d63-e827-4cd5-83a3-699d85554caa":["Cinéma"],
	"ee734fc5-b151-45ab-94a7-6109aaf7cf78":["Concert"],
	"ffea1971-298d-4bda-bdf8-73c567b1069e":["DJ Set"],
	"c13b5c14-9a64-4746-98ce-cc570f3461f9":["DJ Set"],
	"c8241147-0707-45f0-973c-ed7efc2ad533":["Ciné-débat"],
	"25ae5f0e-6eb1-4dae-9487-6c9bbc7bc30d":["Rencontre Littéraire"],
	"11d1a8f8-5c08-46b6-9e91-25f4ca01a7f9":["Conférence"],
	"b3ad3faf-22f3-4690-90a9-c7f2e7691ccb":["DJ Set", "Open Air"],
	"ebc70aab-95b0-4454-ba5a-cd93e783f3c7":["DJ Set", "Open Air"],
	"ad529e6c-de28-499e-a505-7fa3c5732bb4":["Concert"],
	"e921cbdc-8b76-48c4-a485-5036e248c16d":["DJ Set", "Open Air"],
	"5e0dc165-747b-44dd-b2bc-b674f0aeb4c2":["Cinéma"],
	"e24446de-b4da-4bbb-bcf3-efceb2a9ea7c":["Atelier d'expression"],
	"bd975802-c6d3-410c-a857-f95591cf6efe":["Rencontre Littéraire"],
	"d75e045c-d447-47c5-b18f-7d438817a5fc":["Conférence"],
	"365f47d9-93f7-43e7-a5ef-4e2011fb0491":["AG"],
	"7355d219-6c45-4100-811d-d70a435b72ef":["DJ Set"],
	"a706c612-268e-4775-8204-98b11e74f2cc":["Bal populaire"],
	"b79d6b21-528c-4539-b68c-25bcb7af3ff8":["Théâtre"]
}

const halleTropisme:MenuItem = {
	to:"/programme/30-septembre-halles-tropisme",
	label:"Voir toute la programmtion du 30 septembre aux Halles Tropisme"
}

export const reverseProgramMap :{ [key: string] :  MenuItem[];} = {
	"ee734fc5-b151-45ab-94a7-6109aaf7cf78":[halleTropisme],
	"ffea1971-298d-4bda-bdf8-73c567b1069e":[halleTropisme]
}

export const eventType:(event:MobilizonEventI) => EventTypes[] = (event)=> {
	return uiidTypesMap[event.uuid] || ["Autre"]
}

export const eventDefaultCover:(type:EventTypes)=>string = (type)=>{
	switch (type){
	case "Cinéma":
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
	case "Conférence":
		return conf_cover
	case "AG":
		return ag_cover
	case "Rencontre Littéraire":
		return rencontre_litteraire_cover
	case "Table-Ronde":
		return table_ronde_cover
	case "Picnic":
	case "Apéro":
	case "Repas partagé":
		return picnic_cover

	default:
		return "https://agenda.les-fourmilieres.org/media/5d51acc4f1d82879973317de10ae2811f51e947d17923b84d95ea2b69a939adf.webp"
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
