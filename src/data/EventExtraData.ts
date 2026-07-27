import type {MenuItem} from "../components/Header/Menu.js";

export type EventTypes = "Concert" | "DJ Set" | "Open Air" | "Bal populaire" |
	"Conférence" | "Rencontre Littéraire" | "AG" | "Table-Ronde" |
	"Kermesse" | "Village Associatif" |
	"Manifestation" | "Pride" | "Parade" |
	"Atelier cuisine" | "Atelier d'expression" | "Fresque" |
	"Théâtre" | "Spectacle vivant" |
	"Projection" | "Ciné-débat" |
	"Picnic" | "Apéro" | "Repas partagé" |
	"Autre"

export const SelectEventTypes: {[key: string] : EventTypes[]} = {
	"Concerts, DJ Set, Open Air, …": ["Concert", "DJ Set", "Open Air", "Bal populaire"],
	"Conférences, Tables rondes, Rencontres littéraires, …": ["Conférence", "Rencontre Littéraire", "AG", "Table-Ronde"],
	"Kermesses, Villages associatifs, …": ["Kermesse",  "Village Associatif"],
	"Manifestation, Pride, Parade, …": [ "Manifestation", "Pride", "Parade"],
	"Ateliers, Fresques, …" : ["Atelier cuisine", "Atelier d'expression", "Fresque"],
	"Théâtre, Spectacles vivants, …": [ "Théâtre", "Spectacle vivant"],
	"Projection, Ciné-débat, …": [ "Projection", "Ciné-débat"],
	"Picnic, apéro, repas partagé, …": ["Picnic", "Apéro", "Repas partagé"],
	"Autre":["Autre"]
};

type EventExtraDataI = {
	eventTypes:EventTypes[],
	programLinks?:MenuItem[]
}

const halleTropisme:MenuItem = {
	to:"/30-septembre-halle-tropisme",
	label:"Voir toute la programmation du 30 septembre à la Halle Tropisme"
}

const lodeve:MenuItem = {
	to:"/la-fourmiliere-de-lodeve",
	label:"Consulter toute la programmation de La Fourmilière de Lodève"
}

export const eventExtraData:{[key: string] : EventExtraDataI;} = {
	"538f4ebe-8c97-43fe-b2c6-9040993b6bb0":{
		eventTypes:["Conférence"]
	},
	"d380683f-d451-45ee-8818-9bd9c2f414ff":{
		eventTypes:["Conférence"]
	},
	"c3fd4ad3-8e73-40f3-861c-52427ea8352b":{
		eventTypes:["Picnic"]
	},
	"180b67c8-8d4a-4748-93b8-0ba4c1e04a4f":{
		eventTypes:["Table-Ronde"]
	},
	"192db528-e67b-4e67-92f7-a8d603e35625":{
		eventTypes:["Concert"]
	},
	"0cbe6c40-c320-4d64-9189-d5cb264a0ffe":{
		eventTypes:["Table-Ronde"]
	},
	"4efd8fed-36f6-40aa-9f36-5f2d8dea255d":{
		eventTypes:["Open Air"]
	},
	"3c9bd105-3fb8-4dee-8ac5-c229300d1463":{
		eventTypes:["Conférence"]
	},
	"a28a1a79-9595-4cc7-a4f6-bce7ac6a84a3":{
		eventTypes:["Atelier cuisine", "Atelier d'expression", "Concert", "Kermesse"]
	},
	"76f7c610-663c-4792-b0c2-41cfd3df2fd7":{
		eventTypes:["Fresque"]
	},
	"5e505d63-e827-4cd5-83a3-699d85554caa":{
		eventTypes:["Projection"]
	},
	"ee734fc5-b151-45ab-94a7-6109aaf7cf78":{
		eventTypes:["Concert"],
		programLinks:[halleTropisme]
	},
	"ffea1971-298d-4bda-bdf8-73c567b1069e":{
		eventTypes:["DJ Set"],
		programLinks:[halleTropisme]
	},
	"c13b5c14-9a64-4746-98ce-cc570f3461f9":{
		eventTypes:["DJ Set"]
	},
	"c8241147-0707-45f0-973c-ed7efc2ad533":{
		eventTypes:["Ciné-débat"]
	},
	"25ae5f0e-6eb1-4dae-9487-6c9bbc7bc30d":{
		eventTypes:["Rencontre Littéraire"]
	},
	"11d1a8f8-5c08-46b6-9e91-25f4ca01a7f9":{
		eventTypes:["Conférence"]
	},
	"b3ad3faf-22f3-4690-90a9-c7f2e7691ccb":{
		eventTypes:["DJ Set", "Open Air"]
	},
	"ebc70aab-95b0-4454-ba5a-cd93e783f3c7":{
		eventTypes:["DJ Set", "Open Air"]
	},
	"ad529e6c-de28-499e-a505-7fa3c5732bb4":{
		eventTypes:["Concert"],
		programLinks:[lodeve]
	},
	"e921cbdc-8b76-48c4-a485-5036e248c16d":{
		eventTypes:["DJ Set", "Open Air"]
	},
	"5e0dc165-747b-44dd-b2bc-b674f0aeb4c2":{
		eventTypes:["Projection"]
	},
	"e24446de-b4da-4bbb-bcf3-efceb2a9ea7c": {
		eventTypes:["Atelier d'expression"],
	},
	"bd975802-c6d3-410c-a857-f95591cf6efe":{
		eventTypes:["Rencontre Littéraire"]
	},
	"d75e045c-d447-47c5-b18f-7d438817a5fc":{
		eventTypes:["Conférence"]
	},
	"365f47d9-93f7-43e7-a5ef-4e2011fb0491":{
		eventTypes:["AG"]
	},
	"7355d219-6c45-4100-811d-d70a435b72ef":{
		eventTypes:["DJ Set"]
	},
	"a706c612-268e-4775-8204-98b11e74f2cc":{
		eventTypes:["Bal populaire"]
	},
	"b79d6b21-528c-4539-b68c-25bcb7af3ff8":{
		eventTypes:["Théâtre"]
	},
	"47fd12d7-b2ca-4be3-a981-fde01ec0422b":{
		eventTypes:["Concert"],
		programLinks:[lodeve]
	},
	"bc7705b0-2c3b-49d8-b415-6d182c6ecc69":{
		eventTypes:["Concert", "Conférence", "Projection"],
		programLinks:[lodeve]
	},
	"c06f60b1-0b98-4995-9862-389a6aba80e8":{
		eventTypes:["Table-Ronde", "Conférence", "Bal populaire"],
		programLinks:[lodeve]
	},
	"ccee2219-c040-47f2-a103-765b7b4809e2":{
		eventTypes:["Concert", "DJ Set"],
		programLinks:[lodeve]
	},
	"c0045865-03dc-4fb8-8ff1-60fc06a3ed64":{
		eventTypes:["Parade", "Concert", "DJ Set"],
		programLinks:[lodeve]
	}
}