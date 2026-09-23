import { convert } from "html-to-text";
import type { MobilizonEventWithLivingAreaI } from "../Agenda/Event";
import {
  categoryKeyWords,
  UnderstandCategory,
  understandCatgerories,
} from "./UnderstandCategory";
import slugify from "slugify";

const quote = new RegExp("'", "g");
function clearText(text: string) {
  return slugify(text.replaceAll(quote, " "), {
    lower: true,
    locale: "fr-FR",
    replacement: "-",
    trim: true,
  });
}

export const getFilterFromCategory = (category: UnderstandCategory | null) => {
  if (category === null) return () => true;
  if (category === UnderstandCategory.OTHER) {
    const categoryKW = understandCatgerories
      .map((c) => categoryKeyWords[c])
      .flat();
    return (event: MobilizonEventWithLivingAreaI) => {
      const description = convert(event.description ?? "");
      const fullText = `${event.title} ${description}`;
      const keywords = clearText(fullText);
      return !categoryKW.some((keyword) => keywords.includes(keyword));
    };
  }
  const categoryKW = categoryKeyWords[category];
  return (event: MobilizonEventWithLivingAreaI) => {
    const description = convert(event.description ?? "");
    const fullText = `${event.title} ${description}`;
    const keywords = clearText(fullText);
    return categoryKW.some((keyword) => keywords.includes(keyword));
  };
};
