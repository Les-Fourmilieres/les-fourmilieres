import z from "zod";
import { UnderstandCategory } from "../ProgramHelper/UnderstandCategory";

export const searchParams = z.object({
  department: z.number().optional(),
  bdv: z.number().optional(),
  type: z.string().optional(),
  from: z.string().optional(),
  to: z.string().optional(),
  category: z.enum(UnderstandCategory).optional(),
});
export type SearchParams = z.infer<typeof searchParams>;
