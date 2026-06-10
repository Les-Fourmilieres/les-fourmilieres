import z from "zod";

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

const MobilizonTagSchema = z.object({
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
  tags: z.array(MobilizonTagSchema).nullable().optional(),
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
