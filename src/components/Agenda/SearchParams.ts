import z from "zod";

export const searchParams = z.object({
  department: z.number().optional(),
  bdv: z.number().optional(),
  type: z.string().optional(),
  from: z.string().optional(),
  to: z.string().optional(),
});
