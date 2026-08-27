import type {MenuItem} from "../components/Header/Menu.js";
import {type MobilizonPhysicalAddressI} from "../components/Agenda/Event.js";

export type EventTypes = "Concert" | "DJ Set" | "Open Air" | "Bal populaire" |
	"Conférence" | "Rencontre Littéraire" | "AG" | "Table-Ronde" |
	"Kermesse" | "Village Associatif" | "Braderie" | "Expo" | "Loto" |
	"Manifestation" | "Pride" | "Parade" |
	"Atelier cuisine" | "Atelier d'expression" | "Atelier militant" | "Fresque" | "Atelier sérigraphie" | "Arpentage" |
	"Théâtre" | "Spectacle vivant" | "Dragshow" | "Lecture" | "Conte" |
	"Projection" | "Ciné-débat" |
	"Picnic" | "Apéro" | "Repas partagé" | "Cantine" | "Pizza" | "Goûter" |
	"Autre"

export const SelectEventTypes: {[key: string] : EventTypes[]} = {
	"Concerts, DJ Set, Open Air, …": ["Concert", "DJ Set", "Open Air", "Bal populaire"],
	"Conférences, Tables rondes, …": ["Conférence", "Rencontre Littéraire", "AG", "Table-Ronde"],
	"Kermesses, Braderie, Expo, …": ["Kermesse",  "Village Associatif", "Braderie", "Expo", "Loto"],
	"Manifestation, Pride, Parade, …": [ "Manifestation", "Pride", "Parade"],
	"Ateliers, Fresques, …" : ["Atelier cuisine", "Atelier d'expression", "Fresque", "Atelier sérigraphie", "Arpentage", "Atelier militant"],
	"Théâtre, Spectacles vivants, Dragshow, …": [ "Théâtre", "Spectacle vivant", "Dragshow", "Lecture", "Conte"],
	"Projection, Ciné-débat, …": [ "Projection", "Ciné-débat"],
	"Picnic, apéro, repas partagé, …": ["Picnic", "Apéro", "Repas partagé", "Cantine", "Pizza", "Goûter"],
	"Autre":["Autre"]
};

type EventExtraDataI = {
	eventTypes:EventTypes[],
	programLinks?:MenuItem[],
	physicalAdress?:MobilizonPhysicalAddressI //Default value, overridden by Mobilizon. Could include only a geom default value
}

const halleTropisme:MenuItem = {
	to:"/30-septembre-halle-tropisme",
	label:"Voir toute la programmation du 30 septembre à la Halle Tropisme"
}

const lodeve:MenuItem = {
	to:"/la-fourmiliere-de-lodeve",
	label:"Consulter toute la programmation de La Fourmilière de Lodève"
}

const lfp:MenuItem = {
	to:"/festival-des-luttes-populaires",
	label:"Voir toute la programmation du Festival des Luttes Populaires"
}

const fds:MenuItem = {
	to:"/faites-des-solidarites",
	label:"Voir toute la programmation de la Faites des Solidarités"
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
		eventTypes:["Atelier cuisine", "Atelier d'expression", "Concert", "Kermesse"],
		physicalAdress:{geom: "3.6146139412570664;43.99013933871999"}
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
		eventTypes:["Projection"],
		physicalAdress:{geom: "3.858621;43.601846"}
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
	},
	"2c83fc3a-b436-43e3-b0f9-231f81264b94":{
		eventTypes:["Conférence"]
	},
	"2ad57bd6-2635-4096-845f-c2fd1e458ff8":{
		eventTypes:["Braderie", "Atelier sérigraphie", "Arpentage", "Expo"]
	},
	"8cd0fb3b-126d-436c-bd98-4d56b2fcbf17":{
		eventTypes:["Fresque"],
		physicalAdress:{
			description: "Mas des Moulins",
			geom:"3.8440761429693677;43.629717824973525"
		}
	},
	"59c4c5f9-f127-470c-a852-8e5d0ed79bef":{
		eventTypes:["Table-Ronde"]
	},
	"08c5d7b9-25b5-40ac-99d5-701ea3f4b511":{
		eventTypes:["Théâtre"]
	},
	"be48d1bb-12b9-4ddc-8eef-ee6dc050bd18":{
		eventTypes:["Pride"]
	},
	"b93d6081-c7f0-447b-8e40-80edf41ffd4c":{
		eventTypes:["Concert", "Table-Ronde", "Village Associatif"]
	},
	"8fde90a6-8664-44d6-91c7-614b852044a6":{
		eventTypes:["Conférence"],
		physicalAdress:{geom: "2.461218;44.47473"}
	},
	"69557963-13b0-4c9b-b126-32ab5d8b480f":{
		eventTypes:["Concert", "DJ Set", "Dragshow"]
	},
	"205537bf-df3a-4bc4-ac99-5948aeb87a99":{
		eventTypes:["Concert"]
	},
	"2781745b-4d3d-4b7d-a825-4a4169f3a85b":{
		eventTypes:["Table-Ronde"]
	},
	"f4bc64a2-c443-4e15-a9fe-72fc1663788c":{
		eventTypes:["Ciné-débat"]
	},
	"754cf40f-6ceb-44f4-8772-78dd75d42614":{
		eventTypes:["Manifestation"]
	},
	"1b0bb799-bc15-440f-90cf-c51d0e2fa9be":{
		eventTypes:["Concert"],
		programLinks:[lodeve]
	},
	"f03047d4-e8fa-4605-8086-dec565f70d12":{
		eventTypes:["Autre"],
		physicalAdress:{
			description: "Centre-ville de Nîmes",
			geom: "4.358859;43.836139"
		}
	},
	"24c312e0-9f97-4f32-9455-a53890a199f1":{
		eventTypes:["Loto"]
	},
	"cb98c0a4-479b-4f5c-9b8c-2f7f45088066":{
		eventTypes:["Lecture"]
	},
	"5a1d83b0-b9e1-4e59-bae6-5c83e8be68b7":{
		eventTypes:["Théâtre"]
	},
	"c76b71de-e3ad-4aad-b4f7-059bf657fe64":{
		eventTypes:["Théâtre"]
	},
	"065871fd-9b68-431a-887c-2645565bf4d2":{
		eventTypes:["Théâtre"]
	},
	"659ab5cb-ba81-4337-a536-bac696f43ad9":{
		eventTypes:["Théâtre"]
	},
	"9eb5e5a7-c760-4c1c-9868-d86dda1122dd":{
		eventTypes:["DJ Set"]
	},
	"b17f8c43-4d6e-4317-bc04-b439382810bb":{
		eventTypes:["Repas partagé"],
		programLinks:[lfp]
	},
	"6922f3bc-189e-48b6-9286-6399666f85d7":{
		eventTypes:["Conférence"],
		programLinks:[lfp]
	},
	"384c9efb-a817-49d0-a807-e3c5f78c0336":{
		eventTypes:["Conférence"],
		programLinks:[lfp]
	},
	"cc9fa2b2-8ddc-4eaa-a239-feac63189fd2":{
		eventTypes:["Conférence"],
		programLinks:[lfp]
	},
	"fe55750e-7cd9-47b1-a789-a7f5f1634ee1":{
		eventTypes:["Concert"],
		programLinks:[lfp]
	},
	"03895f7c-35be-402c-92e4-502a4be1ee54":{
		eventTypes:["Théâtre"],
		programLinks:[lfp]
	},
	"4425079d-15b8-4cd3-8fe6-e7378af2b81f":{
		eventTypes:["Concert"],
		programLinks:[lfp]
	},
	"57054d56-1fce-4e37-a4d9-4d0f045af703":{
		eventTypes:["DJ Set"],
		programLinks:[lfp]
	},
	"c190d464-124d-48be-87ee-49d83082cb92":{
		eventTypes:["Projection"],
		programLinks:[lfp]
	},
	"854130ac-c3f4-4159-84e2-d6c88ec35761":{
		eventTypes:["Concert"],
		programLinks:[lfp]
	},
	"cb1ef331-c541-4a61-9454-ef606bd819e0":{
		eventTypes:["Concert"],
		programLinks:[lfp]
	},
	"3e18f472-cadf-4c8a-8b61-fb39adf2cf8f":{
		eventTypes:["Ciné-débat"],
		physicalAdress:{
			geom: "3.691129156575649;43.40614887484989"
		}
	},
	"e1a5e198-4238-4020-8a20-fa986eff27fe":{
		eventTypes:["Expo"]
	},
	"afdbd57d-0bd4-44f6-abfb-4b80a8286920":{
		eventTypes:["Expo"]
	},
	"633c0e74-6cca-4bb2-974a-67a156e3ea84":{
		eventTypes:["Conférence"]
	},
	"ab8971e9-9c2e-45cb-929f-993b7cbc574e":{
		eventTypes:["Cantine"],
		programLinks:[fds]
	},
	"96636c06-14ec-46f4-b132-0d54ab0304c6":{
		eventTypes:["Atelier militant"],
		programLinks:[fds]
	},
	"8917b7c0-0311-40b5-997c-bcd5fd860503":{
		eventTypes:["Atelier cuisine", "Atelier d'expression", "Atelier militant"],
		programLinks:[fds]
	},
	"7c0afecb-e4b3-47cc-909b-2ce89e1e4fe2":{
		eventTypes:["Atelier cuisine", "Pizza", "Concert"],
		programLinks:[fds]
	},
	"5bffbb5b-0e7d-4982-bc04-07aa28bc8d91":{
		eventTypes:["Repas partagé", "Bal populaire"],
		programLinks:[fds]
	},
	"88e99442-3d96-42fe-a70b-6b03fc904d95":{
		eventTypes:["Atelier d'expression", "Atelier cuisine"],
		programLinks:[fds]
	},
	"938d683f-5559-4324-b442-22cc0399e7f6":{
		eventTypes:["Conte", "Goûter"],
		programLinks:[fds]
	}
}