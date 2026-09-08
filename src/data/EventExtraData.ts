import type { MenuItem } from "../components/Header/Menu.js";
import { type MobilizonPhysicalAddressI } from "../components/Agenda/Event.js";

export type EventTypes =
  | "Concert"
  | "DJ Set"
  | "Open Air"
  | "Bal populaire"
  | "Conférence"
  | "Rencontre Littéraire"
  | "AG"
  | "Table-Ronde"
  | "Kermesse"
  | "Village Associatif"
  | "Braderie"
  | "Expo"
  | "Loto"
  | "Manifestation"
  | "Pride"
  | "Parade"
  | "Atelier cuisine"
  | "Atelier d'expression"
	| "Sport pour tous.tes"
  | "Atelier militant"
	| "Atelier jardinage"
	| "Atelier pour enfants"
  | "Fresque"
	| "Jeux"
	| "Formation"
  | "Atelier sérigraphie"
  | "Arpentage"
	| "Café philo"
  | "Théâtre"
  | "Spectacle vivant"
  | "Dragshow"
  | "Lecture"
  | "Conte"
  | "Projection"
  | "Ciné-débat"
  | "Picnic"
  | "Apéro"
  | "Repas partagé"
  | "Cantine"
  | "Pizza"
  | "Goûter"
  | "Banquet populaire"
  | "Autre";

export type GroupedEventTypes =
  | "musique"
  | "conf"
  | "kermesse"
  | "manif"
  | "atelier"
  | "spectacle-vivant"
  | "projection"
  | "miam"
  | "autre";

export const eventTypesLabels: Record<GroupedEventTypes, string> = {
  musique: "Concerts, DJ Set, Open Air, …",
  conf: "Conférences, Tables rondes, …",
  kermesse: "Kermesses, Braderie, Expo, …",
  manif: "Manifestation, Pride, Parade, …",
  atelier: "Ateliers, Fresques, …",
  "spectacle-vivant": "Théâtre, Spectacles vivants, Dragshow, …",
  projection: "Projection, Ciné-débat",
  miam: "Picnic, apéro, repas partagé, …",
  autre: "Autre",
};

export const SelectEventTypes: Record<GroupedEventTypes, EventTypes[]> = {
  musique: ["Concert", "DJ Set", "Open Air", "Bal populaire"],
  conf: ["Conférence", "Rencontre Littéraire", "AG", "Table-Ronde"],
  kermesse: ["Kermesse", "Village Associatif", "Braderie", "Expo", "Loto"],
  manif: ["Manifestation", "Pride", "Parade"],
  atelier: [
    "Atelier cuisine",
    "Atelier d'expression",
		"Sport pour tous.tes",
		"Atelier jardinage",
		"Atelier pour enfants",
    "Fresque",
		"Jeux",
		"Formation",
    "Atelier sérigraphie",
    "Arpentage",
		"Café philo",
    "Atelier militant",
  ],
  "spectacle-vivant": [
    "Théâtre",
    "Spectacle vivant",
    "Dragshow",
    "Lecture",
    "Conte",
  ],
  projection: ["Projection", "Ciné-débat"],
  miam: [
    "Picnic",
    "Apéro",
    "Repas partagé",
    "Cantine",
    "Pizza",
    "Goûter",
    "Banquet populaire",
  ],
  autre: ["Autre"],
};

export interface ExtendedMenuItem extends MenuItem {
  shortLabel: string
	desc?: string;
}

type EventExtraDataI = {
  eventTypes: EventTypes[];
  programLinks?: ExtendedMenuItem[];
  physicalAddress?: MobilizonPhysicalAddressI; //Default value, overridden by Mobilizon. Could include only a geom default value
  overridePhysicalAddress?: MobilizonPhysicalAddressI; //Override value
};

const halleTropisme: ExtendedMenuItem = {
  to: "/30-septembre-halle-tropisme",
  label: "Voir toute la programmation du 30 septembre à la Halle Tropisme",
	shortLabel:"Les fourmilières à la Halle Tropisme"
  // desc:"Le 30 septembre, les Fourmilières investissent la Halle Tropisme pour une après-midi de conférences et kermesses pour petits et grands suivie d'un concert puis DJ Set."
};

const lodeve: ExtendedMenuItem = {
  to: "/la-fourmiliere-de-lodeve",
  label: "Consulter toute la programmation de La Fourmilière Lodévois-Larzac",
	shortLabel:"Fourmilière Lodévois-Larzac",
  desc: "Cet événement s'inscrit dans la programmation de la Fourmilière Lodévois-Larzac qui programme 15 jours de festival sur toute la durée des Fourmilières.",
};

const lfp: ExtendedMenuItem = {
  to: "/festival-des-luttes-populaires",
  label: "Voir toute la programmation du Festival des Luttes Populaires",
	shortLabel: "Festival des Luttes Populaires",
  desc: "Cet événement s'inscrit dans la 9ième édition du Festival des Luttes Populaires, un festival mêlant conférences et concerts les 26 et 27 septembre.",
};

const fds: ExtendedMenuItem = {
  to: "/faites-des-solidarites",
  label: "Voir toute la programmation de la Faites des Solidarités",
	shortLabel: "Faites des Solidarités",
  desc: "Cet événement s'inscrit dans la Faites des Solidarités, 2 jours mêlant ateliers et cuisine populaire et partagée dans le quartier des Arènes au Vigan.",
};

const cafeDuSiecle:MobilizonPhysicalAddressI = {
	description: "Société du Café du Siècle",
	street: "1, rue Biron",
	locality: "Ganges",
	geom: "3.7077889465294476;43.934114272413765"
}
const autreCote:MobilizonPhysicalAddressI = {
	description: "De l'Autre Côté",
	street:"24 rue du Jeu de Ballon",
	locality: "Ganges",
	geom:"3.7078075842345037;43.93431129921118"
}
const freep:MobilizonPhysicalAddressI = {
	description: "La Freep",
	street:"22 rue Armand Sabatier",
	locality: "Ganges",
	geom:"3.7039525482435907;43.93375554254482"
}
const arbreSansFin:MobilizonPhysicalAddressI = {
	description:"L'Arbre sans fin",
	street:"7 rue Biron",
	locality:"Ganges",
	geom:"3.7073966494329094;43.93417741352798"
}
const masDesMoulins:MobilizonPhysicalAddressI = {
	description:"Mas des Moulins",
	street:"2452 Avenue du Père Soulas",
	locality:"Montpellier",
	geom:"3.8438363674688696;43.629858803968105"
}
const foyerAlbouy:MobilizonPhysicalAddressI = {
	description:"Foyer Albouy",
	street:"rue de la Pansière",
	locality:"Le Vigan",
	geom:"3.6150398202932483;43.9903403039744"
}

const tropisme:MobilizonPhysicalAddressI = {
	description: "La Halle Tropisme",
	street: "121 Rue Fontcouverte",
	locality:"Montpellier",
	geom:"3.858688767336156;43.60222918891905"
}

const carmagnole: MobilizonPhysicalAddressI = {
	description: "La Carmagnole",
	street: "10 rue de la Palissade",
	locality: "Montpellier",
	geom: "3.868039687392882;43.60736510894427"
}

export const eventExtraData: { [key: string]: EventExtraDataI } = {
  "538f4ebe-8c97-43fe-b2c6-9040993b6bb0": {
    eventTypes: ["Conférence"],
		overridePhysicalAddress:carmagnole
  },
  "d380683f-d451-45ee-8818-9bd9c2f414ff": {
    eventTypes: ["Conférence"],
  },
  "c3fd4ad3-8e73-40f3-861c-52427ea8352b": {
    eventTypes: ["Picnic"],
  },
  "180b67c8-8d4a-4748-93b8-0ba4c1e04a4f": {
    eventTypes: ["Table-Ronde"],
  },
  "192db528-e67b-4e67-92f7-a8d603e35625": {
    eventTypes: ["Concert"],
  },
  "0cbe6c40-c320-4d64-9189-d5cb264a0ffe": {
    eventTypes: ["Table-Ronde"],
  },
  "4efd8fed-36f6-40aa-9f36-5f2d8dea255d": {
    eventTypes: ["Open Air"],
  },
  "3c9bd105-3fb8-4dee-8ac5-c229300d1463": {
    eventTypes: ["Conférence"],
		overridePhysicalAddress:carmagnole
  },
  "a28a1a79-9595-4cc7-a4f6-bce7ac6a84a3": {
    eventTypes: [
      "Atelier cuisine",
      "Atelier d'expression",
			"Sport pour tous.tes",
      "Concert",
      "Kermesse",
    ],
    physicalAddress: { geom: "3.6146139412570664;43.99013933871999" },
  },
  "76f7c610-663c-4792-b0c2-41cfd3df2fd7": {
    eventTypes: ["Fresque"],
  },
  "5e505d63-e827-4cd5-83a3-699d85554caa": {
    eventTypes: ["Projection"],
  },
  "ee734fc5-b151-45ab-94a7-6109aaf7cf78": {
    eventTypes: ["Concert"],
    programLinks: [halleTropisme],
		overridePhysicalAddress:tropisme
  },
  "ffea1971-298d-4bda-bdf8-73c567b1069e": {
    eventTypes: ["DJ Set"],
    programLinks: [halleTropisme],
		overridePhysicalAddress:tropisme
  },
  "c13b5c14-9a64-4746-98ce-cc570f3461f9": {
    eventTypes: ["DJ Set"],
  },
  "c8241147-0707-45f0-973c-ed7efc2ad533": {
    eventTypes: ["Ciné-débat"],
  },
  "25ae5f0e-6eb1-4dae-9487-6c9bbc7bc30d": {
    eventTypes: ["Rencontre Littéraire"],
  },
  "11d1a8f8-5c08-46b6-9e91-25f4ca01a7f9": {
    eventTypes: ["Conférence"],
  },
  "b3ad3faf-22f3-4690-90a9-c7f2e7691ccb": {
    eventTypes: ["DJ Set", "Open Air"],
  },
  "ebc70aab-95b0-4454-ba5a-cd93e783f3c7": {
    eventTypes: ["DJ Set", "Open Air"],
  },
  "ad529e6c-de28-499e-a505-7fa3c5732bb4": {
    eventTypes: ["Concert"],
    programLinks: [lodeve],
  },
  "e921cbdc-8b76-48c4-a485-5036e248c16d": {
    eventTypes: ["DJ Set", "Open Air"],
  },
  "5e0dc165-747b-44dd-b2bc-b674f0aeb4c2": {
    eventTypes: ["Projection"],
    overridePhysicalAddress:tropisme
  },
  "e24446de-b4da-4bbb-bcf3-efceb2a9ea7c": {
    eventTypes: ["Atelier d'expression"],
  },
  "bd975802-c6d3-410c-a857-f95591cf6efe": {
    eventTypes: ["Rencontre Littéraire"],
		overridePhysicalAddress:arbreSansFin
  },
  "d75e045c-d447-47c5-b18f-7d438817a5fc": {
    eventTypes: ["Conférence"],
  },
  "365f47d9-93f7-43e7-a5ef-4e2011fb0491": {
    eventTypes: ["AG"],
  },
  "7355d219-6c45-4100-811d-d70a435b72ef": {
    eventTypes: ["DJ Set"],
  },
  "a706c612-268e-4775-8204-98b11e74f2cc": {
    eventTypes: ["Bal populaire"],
  },
  "b79d6b21-528c-4539-b68c-25bcb7af3ff8": {
    eventTypes: ["Théâtre"],
  },
  "47fd12d7-b2ca-4be3-a981-fde01ec0422b": {
    eventTypes: ["Concert"],
    programLinks: [lodeve],
    physicalAddress: {
      description: "Lodève (lieux à préciser)",
      geom: "3.3163397569504283;43.733208459921066",
    },
  },
  "bc7705b0-2c3b-49d8-b415-6d182c6ecc69": {
    eventTypes: ["Concert", "Conférence", "Projection"],
    programLinks: [lodeve],
  },
  "c06f60b1-0b98-4995-9862-389a6aba80e8": {
    eventTypes: ["Table-Ronde", "Conférence", "Bal populaire"],
    programLinks: [lodeve],
  },
  "ccee2219-c040-47f2-a103-765b7b4809e2": {
    eventTypes: ["Concert", "DJ Set"],
    programLinks: [lodeve],
  },
  "c0045865-03dc-4fb8-8ff1-60fc06a3ed64": {
    eventTypes: ["Parade", "Concert", "DJ Set"],
    programLinks: [lodeve],
  },
  "2c83fc3a-b436-43e3-b0f9-231f81264b94": {
    eventTypes: ["Conférence"],
  },
  "2ad57bd6-2635-4096-845f-c2fd1e458ff8": {
    eventTypes: ["Braderie", "Atelier sérigraphie", "Arpentage", "Expo"],
  },
  "8cd0fb3b-126d-436c-bd98-4d56b2fcbf17": {
    eventTypes: ["Fresque"],
    overridePhysicalAddress:masDesMoulins
  },
  "59c4c5f9-f127-470c-a852-8e5d0ed79bef": {
    eventTypes: ["Table-Ronde"],
  },
  "08c5d7b9-25b5-40ac-99d5-701ea3f4b511": {
    eventTypes: ["Théâtre"],
  },
  "be48d1bb-12b9-4ddc-8eef-ee6dc050bd18": {
    eventTypes: ["Pride"],
  },
  "b93d6081-c7f0-447b-8e40-80edf41ffd4c": {
    eventTypes: ["Concert", "Table-Ronde", "Village Associatif"],
  },
  "8fde90a6-8664-44d6-91c7-614b852044a6": {
    eventTypes: ["Conférence"],
    physicalAddress: { geom: "2.461218;44.47473" },
  },
  "69557963-13b0-4c9b-b126-32ab5d8b480f": {
    eventTypes: ["Concert", "DJ Set", "Dragshow"],
  },
  "205537bf-df3a-4bc4-ac99-5948aeb87a99": {
    eventTypes: ["Concert"],
		overridePhysicalAddress:freep
  },
  "2781745b-4d3d-4b7d-a825-4a4169f3a85b": {
    eventTypes: ["Table-Ronde"],
  },
  "f4bc64a2-c443-4e15-a9fe-72fc1663788c": {
    eventTypes: ["Ciné-débat"],
  },
  "754cf40f-6ceb-44f4-8772-78dd75d42614": {
    eventTypes: ["Manifestation"],
  },
  "1b0bb799-bc15-440f-90cf-c51d0e2fa9be": {
    eventTypes: ["Concert"],
    programLinks: [lodeve],
  },
  "f03047d4-e8fa-4605-8086-dec565f70d12": {
    eventTypes: ["Autre"],
    physicalAddress: {
      description: "Centre-ville de Nîmes",
      geom: "4.358859;43.836139",
    },
  },
  "24c312e0-9f97-4f32-9455-a53890a199f1": {
    eventTypes: ["Loto"],
  },
  "cb98c0a4-479b-4f5c-9b8c-2f7f45088066": {
    eventTypes: ["Lecture"],
  },
  "5a1d83b0-b9e1-4e59-bae6-5c83e8be68b7": {
    eventTypes: ["Théâtre"],
  },
  "c76b71de-e3ad-4aad-b4f7-059bf657fe64": {
    eventTypes: ["Théâtre"],
  },
  "065871fd-9b68-431a-887c-2645565bf4d2": {
    eventTypes: ["Théâtre"],
  },
  "659ab5cb-ba81-4337-a536-bac696f43ad9": {
    eventTypes: ["Théâtre"],
  },
  "9eb5e5a7-c760-4c1c-9868-d86dda1122dd": {
    eventTypes: ["DJ Set"],
  },
  "b17f8c43-4d6e-4317-bc04-b439382810bb": {
    eventTypes: ["Repas partagé"],
    programLinks: [lfp],
  },
  "6922f3bc-189e-48b6-9286-6399666f85d7": {
    eventTypes: ["Conférence"],
    programLinks: [lfp],
  },
  "384c9efb-a817-49d0-a807-e3c5f78c0336": {
    eventTypes: ["Conférence"],
    programLinks: [lfp],
  },
  "cc9fa2b2-8ddc-4eaa-a239-feac63189fd2": {
    eventTypes: ["Conférence"],
    programLinks: [lfp],
  },
  "fe55750e-7cd9-47b1-a789-a7f5f1634ee1": {
    eventTypes: ["Concert"],
    programLinks: [lfp],
  },
  "03895f7c-35be-402c-92e4-502a4be1ee54": {
    eventTypes: ["Théâtre"],
    programLinks: [lfp],
  },
  "4425079d-15b8-4cd3-8fe6-e7378af2b81f": {
    eventTypes: ["Concert"],
    programLinks: [lfp],
  },
  "57054d56-1fce-4e37-a4d9-4d0f045af703": {
    eventTypes: ["DJ Set"],
    programLinks: [lfp],
  },
  "c190d464-124d-48be-87ee-49d83082cb92": {
    eventTypes: ["Projection"],
    programLinks: [lfp],
  },
  "854130ac-c3f4-4159-84e2-d6c88ec35761": {
    eventTypes: ["Concert"],
    programLinks: [lfp],
  },
  "cb1ef331-c541-4a61-9454-ef606bd819e0": {
    eventTypes: ["Concert"],
    programLinks: [lfp],
  },
  "3e18f472-cadf-4c8a-8b61-fb39adf2cf8f": {
    eventTypes: ["Ciné-débat"],
    physicalAddress: {
      geom: "3.691129156575649;43.40614887484989",
    },
  },
  "e1a5e198-4238-4020-8a20-fa986eff27fe": {
    eventTypes: ["Expo"],
		overridePhysicalAddress:tropisme
  },
  "afdbd57d-0bd4-44f6-abfb-4b80a8286920": {
    eventTypes: ["Expo"],
  },
  "633c0e74-6cca-4bb2-974a-67a156e3ea84": {
    eventTypes: ["Conférence"],
  },
  "ab8971e9-9c2e-45cb-929f-993b7cbc574e": {
    eventTypes: ["Cantine"],
		overridePhysicalAddress:foyerAlbouy,
    programLinks: [fds],
  },
  "96636c06-14ec-46f4-b132-0d54ab0304c6": {
    eventTypes: ["Atelier militant"],
    programLinks: [fds],
    overridePhysicalAddress:foyerAlbouy
  },
  "8917b7c0-0311-40b5-997c-bcd5fd860503": {
    eventTypes: ["Atelier cuisine", "Atelier d'expression", "Atelier militant"],
    programLinks: [fds],
		overridePhysicalAddress:foyerAlbouy
  },
  "7c0afecb-e4b3-47cc-909b-2ce89e1e4fe2": {
    eventTypes: ["Atelier cuisine", "Pizza", "Concert"],
		overridePhysicalAddress:foyerAlbouy,
    programLinks: [fds],
  },
  "5bffbb5b-0e7d-4982-bc04-07aa28bc8d91": {
    eventTypes: ["Repas partagé", "Bal populaire"],
		overridePhysicalAddress:foyerAlbouy,
    programLinks: [fds],
  },
  "88e99442-3d96-42fe-a70b-6b03fc904d95": {
    eventTypes: ["Atelier d'expression", "Atelier cuisine", "Sport pour tous.tes"],
		overridePhysicalAddress:foyerAlbouy,
    programLinks: [fds],
  },
  "938d683f-5559-4324-b442-22cc0399e7f6": {
    eventTypes: ["Conte", "Goûter"],
		overridePhysicalAddress:foyerAlbouy,
    programLinks: [fds],
  },
  "0e275a07-2610-4be6-b60b-ae88cda219f1": {
    eventTypes: ["Pride"],
		physicalAddress:{
			description: "Arles",
			geom:"4.629936736133307;43.67592257109148"
		}
  },
  "9bebffdf-b392-421a-9340-e5e053be4918": {
    eventTypes: ["Ciné-débat"],
    physicalAddress: {
      description: "La Base",
      street: "15 rue Chaptal",
      locality: "Montpellier",
      geom: "3.870942689460005;43.60543284302407",
    },
  },
  "b0f03c3d-2588-43d1-8635-44fcc131f3fb": {
    eventTypes: ["Conférence"],
		overridePhysicalAddress:carmagnole
  },
  "e015f26b-265e-4e5b-884d-87dbcb268d23": {
    eventTypes: ["Banquet populaire"],
  },
  "dd44f90a-8134-4a13-a73e-7747b677a5c1": {
    eventTypes: ["Spectacle vivant"],
		overridePhysicalAddress:cafeDuSiecle
  },
  "ec3a24a6-f7e7-4fd6-9898-34ca3f213b60": {
    eventTypes: ["DJ Set"],
    programLinks: [lodeve],
    physicalAddress: {
      description: "Lodève (lieux à préciser)",
      geom: "3.3163397569504283;43.733208459921066",
    },
  },
  "65a6488f-6877-4606-b03f-ee8873632703": {
    eventTypes: ["Arpentage"],
  },
  "aac53e1b-4760-4b4c-a552-07dc6b125f54": {
    eventTypes: ["Expo"],
		overridePhysicalAddress:autreCote
  },
  "73733af0-98ed-49f4-8da5-997b5bcb2af3": {
    eventTypes: ["Conférence"],
    programLinks: [lodeve],
  },
  "0f4cf1a9-88c6-4028-8ac4-8a4ed4c86cf0": {
    eventTypes: ["Lecture"],
    programLinks: [lodeve],
    physicalAddress: {
      description: "Brasserie Lodèva, Lodève",
      geom: "3.324022465288582;43.73025580653958",
    },
  },
  "4487620c-07ae-4836-8fc8-6db44193a83f": {
    eventTypes: ["Concert", "Théâtre"],
    programLinks: [lodeve],
    physicalAddress: {
      description: "Lodève (lieux à préciser)",
      geom: "3.3163397569504283;43.733208459921066",
    },
  },
  "36836714-c035-4e5f-a97f-47d6a05029b1": {
    eventTypes: ["Concert"],
    programLinks: [lodeve],
    physicalAddress: {
      geom: "3.324022465288582;43.73025580653958",
    },
  },
  "88766b3e-2a6b-4b61-a281-ce6ec7dbf25c": {
    eventTypes: ["Projection"],
    programLinks: [lodeve],
    physicalAddress: {
      geom: "3.3163397569504283;43.733208459921066",
    },
  },
  "83c5a2f6-bf9e-4c1c-8c05-05734dec26da": {
    eventTypes: ["Concert", "Théâtre"],
    programLinks: [lodeve],
    overridePhysicalAddress: {
      description: "Lodève (lieux à préciser)",
      geom: "3.3163397569504283;43.733208459921066",
    },
  },
  "762e42ec-3ab1-4422-87ac-9ad15abf39b1": {
    eventTypes: ["Table-Ronde"],
    programLinks: [lodeve],
    physicalAddress: {
      description: "Lodève (lieux à préciser)",
      geom: "3.3163397569504283;43.733208459921066",
    },
  },
  "f8230be7-7806-4b12-8357-0072a12ab3e3": {
    eventTypes: ["Théâtre"],
    programLinks: [lodeve],
    physicalAddress: {
      description: "Lodève (lieux à préciser)",
      geom: "3.3163397569504283;43.733208459921066",
    },
  },
  "94418219-de82-419e-95d3-a5cb6213ea6e": {
    eventTypes: ["Concert", "Théâtre"],
		overridePhysicalAddress:cafeDuSiecle
  },
  "c9684b06-08cb-4443-a6d0-9a3d90056d82": {
    eventTypes: ["Kermesse", "Table-Ronde"],
    overridePhysicalAddress: {
      description: "Macondo, Montarnaud",
      geom: "3.728561963362193;43.62506823340958",
    },
  },
  "b9e5c3ab-b3bf-4f9c-aba7-b67297ba23b9": {
    eventTypes: ["Autre"],
    overridePhysicalAddress: {
      description: "Bézier (lieux à définir)",
      geom: "3.2171179151191325;43.34150194890089",
    },
  },
  "2ec529d3-1d6e-4c8f-a0ca-7cdd242cb9a1": {
    eventTypes: ["Expo"],
		overridePhysicalAddress:cafeDuSiecle
  },
  "7b11dab7-c001-4045-a1c0-3c6ba6f7986d": {
    eventTypes: ["Lecture"],
		overridePhysicalAddress:cafeDuSiecle
  },
	"0c645c5c-5435-467a-9fa8-a803427f0c07":{
		eventTypes:["Projection"]
	},
	"44e4ec18-f604-4d74-b526-8064f0e58779":{
		eventTypes:["Projection"]
	},
	"745a59a9-8677-4368-a616-3e128b21447d":{
		eventTypes:["Lecture"],
		programLinks:[lodeve]
	},
	"b2d1e79f-077a-4852-be67-958c58df4baa":{
		eventTypes:["Expo"]
	},
	"2797ad37-0da5-4f5a-be09-64033f19e1f5":{
		eventTypes:["Formation"],
		overridePhysicalAddress:carmagnole
	},
	"6cf0c898-bc84-4f70-9400-6c6ed9548c7f":{
		eventTypes:["Conte"],
		programLinks:[lodeve]
	},
	"72746618-80ea-4429-9533-3e31ea99051c":{
		eventTypes:["Formation"],
		overridePhysicalAddress:carmagnole
	},
	"815414dd-1acd-46db-9ce2-72889cf49579":{
		eventTypes:["Formation"],
		overridePhysicalAddress:carmagnole
	},
	"c701099b-2aad-43a5-a5c8-20f4a811fa52":{
		eventTypes:["Concert"],
		programLinks:[halleTropisme],
		overridePhysicalAddress:tropisme
	},
	"11de6093-7a7e-4f07-95c1-8b6654ff5059":{
		eventTypes:["Rencontre Littéraire", "Arpentage"],
		programLinks:[halleTropisme],
		overridePhysicalAddress:tropisme
	},
	"6f50e85c-ca06-4bca-919c-645b9dddc5c8":{
		eventTypes:["Kermesse"],
		programLinks:[halleTropisme],
		overridePhysicalAddress:tropisme
	},
	"19e71f5e-223b-4354-8fcc-90ab0b009a23":{
		eventTypes:["Conférence"]
	},
	"6fd1f509-724a-4f10-ac15-bf07729bc977":{
		eventTypes:["Lecture", "Ciné-débat", "Rencontre Littéraire"],
		overridePhysicalAddress:autreCote
	},
	"4cc9926d-684a-48c6-bcbf-0a9e647e9f14":{
		eventTypes:["Lecture", "Rencontre Littéraire"],
		overridePhysicalAddress:cafeDuSiecle
	},
	"d0dc29b9-9f1c-405a-b65c-e52f2687412b":{
		eventTypes:["Concert"],
		programLinks: [lodeve],
	},
	"6a16ddcf-2046-4e11-a345-2a14e0d92242":{
		eventTypes:["Jeux"],
		programLinks: [lodeve],
	},
	"b31fac63-9628-4b6f-bdac-32d87aa8c059":{
		eventTypes:["Spectacle vivant"],
		programLinks: [lodeve],
	},
	"72fa8d0c-cf93-466b-8ab7-6e28cdd56518":{
		eventTypes:["Rencontre Littéraire"],
		programLinks: [lodeve],
	},
	"f9492282-e987-4977-ac60-a9ee40a57a11":{
		eventTypes:["Concert", "Parade"],
		programLinks: [lodeve]
	},
	"354e1826-d17e-46ad-a7e6-a93e64d6cf82":{
		eventTypes:["Rencontre Littéraire"]
	},
	"97b1aaa0-8fd8-4824-b176-e241ec723a3d":{
		eventTypes:["Théâtre"]
	},
	"3aa9adcd-0072-47b4-9b4d-3c9e2febf7ed":{
		eventTypes:["Jeux"]
	},
	"7fbd1b9f-4c77-4fd9-9b6a-590392020b45":{
		eventTypes:["Arpentage"]
	},
	"23251ad2-7b38-49ca-908c-b8fe0a23a254":{
		eventTypes:["Projection"]
	},
	"7dc5726f-47ae-4698-90f2-046fc4398e37":{
		eventTypes:["Atelier cuisine", "Banquet populaire"],
		overridePhysicalAddress:foyerAlbouy,
		programLinks:[fds]
	},
	"ba7da6f5-7ba7-4ea0-a46b-43ec1b1b5e5d":{
		eventTypes:["Atelier d'expression"],
		overridePhysicalAddress:foyerAlbouy,
		programLinks:[fds]
	},
	"e555c713-ba19-4036-a6bc-903e0c97e0da":{
		eventTypes:["Conte"],
		overridePhysicalAddress:foyerAlbouy,
		programLinks:[fds]
	},
	"afba029d-010a-4181-80a3-03614bf79fad":{
		eventTypes:["Atelier jardinage"],
		overridePhysicalAddress:foyerAlbouy,
		programLinks:[fds]
	},
	"902451d3-9fdd-45e7-863e-8c43032ca17e":{
		eventTypes:["Sport pour tous.tes"],
		overridePhysicalAddress:foyerAlbouy,
		programLinks:[fds]
	},
	"da1b1d63-05ac-48f4-9f56-b0e0c99c88b3":{
		eventTypes:["Jeux"],
		programLinks:[lodeve]
	},
	"6e8ec1be-abeb-46dd-bdb5-a6d331f110a8":{
		eventTypes:["Concert"],
		programLinks:[lodeve]
	},
	"98956a63-b56e-46bc-9eec-9e69e78f5a29":{
		eventTypes:["DJ Set"],
		programLinks:[lodeve]
	},
	"3766b6bf-cada-4501-ac96-8ead47638de3":{
		eventTypes:["Table-Ronde"],
		programLinks:[lodeve]
	},
	"373f9e19-80a6-4b6e-90ed-e07a78698d3b":{
		eventTypes:["Conférence"],
		programLinks:[lodeve]
	},
	"934dd4a9-1291-4963-a6cb-a9582dc6d245":{
		eventTypes:["Théâtre"],
		programLinks:[lodeve]
	},
	"a22e4e19-2b46-40c8-94ff-1a81af689f0c":{
		eventTypes:["Bal populaire"],
		programLinks:[lodeve]
	},
	"be365b79-c3c6-4f65-bded-38900db5db6d":{
		eventTypes:["Spectacle vivant"],
		programLinks:[lodeve],
		physicalAddress: {
			description: "Lodève (lieux à préciser)",
			geom: "3.3163397569504283;43.733208459921066",
		}
	},
	"d28383b5-6575-438c-8bb6-e531a51e702c":{
		eventTypes:["Loto"],
		programLinks:[lodeve],
		physicalAddress: {
			description: "Lodève (lieux à préciser)",
			geom: "3.3163397569504283;43.733208459921066",
		}
	},
	"c8cc6ad8-455c-49bf-811c-8e049c4ac949":{
		eventTypes:["Théâtre"],
		programLinks:[lodeve],
		physicalAddress: {
			description: "Lodève (lieux à préciser)",
			geom: "3.3163397569504283;43.733208459921066",
		}
	},
	"6dd5f013-28ae-4aa9-b8e5-9ec2c027c431":{
		eventTypes:["Spectacle vivant"],
		programLinks:[lodeve]
	},
	"55355f13-2d2b-4dc9-905a-b830f67d8f03":{
		eventTypes:["Concert"],
		programLinks:[lodeve],
		physicalAddress: {
			description: "Lodève (lieux à préciser)",
			geom: "3.3163397569504283;43.733208459921066",
		}
	},
	"a7c51f72-06b9-4928-975a-e3d2a0374089":{
		eventTypes:["Concert"],
		programLinks:[lodeve]
	},
	"799dcd37-cc18-411c-9b62-9662b22cdde3":{
		eventTypes:["Concert"],
		programLinks:[lodeve]
	},
	"cc8d931a-a314-4b68-af69-1c7e8875896a":{
		eventTypes:["DJ Set"],
		programLinks:[lodeve]
	},
	"359c805a-ca64-404c-a96e-d3bebc2f7aa9":{
		eventTypes:["Café philo"],
		programLinks:[lodeve]
	},
	"6bb7ec31-c75e-4430-94f5-8c361e58f955":{
		eventTypes:["Spectacle vivant"],
		programLinks:[lodeve]
	},
	"46bf2c0c-1ea6-4972-97a7-2d094135abc2":{
		eventTypes:["Conférence"],
		programLinks:[lodeve]
	},
	"fa720f39-7107-40d9-a54d-0e0e8c9b0bd9":{
		eventTypes:["Spectacle vivant"],
		programLinks:[lodeve]
	},
	"67c8f541-d84e-4369-843e-380a4ebe4553":{
		eventTypes:["Spectacle vivant"],
		programLinks:[lodeve]
	},
	"2499c0dc-520d-4d44-b1d5-970a4316cd2b":{
		eventTypes:["Théâtre"],
		programLinks:[lodeve]
	},
	"252f8677-16f0-4de6-a338-711d4263c338":{
		eventTypes:["Spectacle vivant"],
		programLinks:[lodeve]
	},
	"32ade4d8-1956-427c-af24-1a0b3563cc00":{
		eventTypes:["Projection"],
		programLinks:[lodeve]
	},
	"9f2e5703-b01a-4b71-b3d9-247d0d0cced6":{
		eventTypes:["Concert"],
		programLinks:[lodeve]
	},
	"4fcea752-450e-43a2-9768-8d658c23ecdd":{
		eventTypes:["Concert"],
		programLinks:[lodeve],
		physicalAddress: {
			description: "Lodève (lieux à préciser)",
			geom: "3.3163397569504283;43.733208459921066",
		},
	},
	"760e574b-76f0-4d93-adf2-cba69aa5d5fc":{
		eventTypes:["DJ Set"],
		programLinks:[lodeve]
	},
	"387ae566-f77d-43d4-b2cb-eab4ecc5e1e0":{
		eventTypes:["DJ Set"],
		programLinks:[lodeve]
	},
	"9d897d36-c844-482c-ab57-8dd2a67dfeda":{
		eventTypes:["Atelier pour enfants"],
		programLinks:[halleTropisme],
		overridePhysicalAddress:tropisme
	},
	"7c045675-d034-41f1-95f8-0326e5bec946":{
		eventTypes:["Formation"],
		overridePhysicalAddress:{
			description: "Alès (lieu envoyé par email aux inscrites)",
			geom: "4.077342110606977;44.12470811020639"
		}
	},
	"f84f64cb-7555-492a-acb6-f6cf5cbf84fd":{
		eventTypes:["Picnic"]
	},
	"4d422666-63e7-4f5b-8b3a-c926c25336dc":{
		eventTypes:["Spectacle vivant"]
	},
	"856d54ae-8f03-4497-8b2a-1bc3259c95a4":{
		eventTypes:["Théâtre"],
		overridePhysicalAddress:autreCote
	},
	"87f3859a-918c-4c88-8433-371f27ddc446":{
		eventTypes:["Spectacle vivant"],
		overridePhysicalAddress:cafeDuSiecle
	},

};
