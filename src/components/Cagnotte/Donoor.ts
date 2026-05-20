import z from "zod";

const DonoorResponseDataSchema = z.object({
  current_amount: z.coerce.number(),
  currency: z.string(),
  donors_count: z.number(),
  goal_amount: z.coerce.number(),
  percent: z.number(),
});

const DonoorResponseSchema = z.object({
  success: z.boolean(),
  data: DonoorResponseDataSchema,
});

export async function fetchCampaign() {
  const data = await fetch(
    `https://api.donoor.org/api/campaigns/public/slug/festival-les-fourmilieres`,
  );
  return DonoorResponseSchema.parse(await data.json()).data;
}

export type DonoorResponseData = z.infer<typeof DonoorResponseDataSchema>;
