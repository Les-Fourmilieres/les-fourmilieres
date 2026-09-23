import type { Departements } from "../data/collectifs";

export const DepartementsByCode: Record<string, Departements> = {
  "07": "Ardèche",
	"11": "Aude",
  "12": "Aveyron",
  "30": "Gard",
  "34": "Hérault",
  "48": "Lozère",
	"13": "Bouches-du-Rhône",
	"66": "Pyrénées-Orientales"
};


export const DepartementsByCodeWithArticle: Record<string, string> = {
  "07": "l'Ardèche",
	"11": "l'Aude",
  "12": "l'Aveyron",
  "30": "le Gard",
  "34": "l'Hérault",
  "48": "la Lozère",
	"13": "les Bouches-du-Rhône",
	"66": "les Pyrénées-Orientales"
};
