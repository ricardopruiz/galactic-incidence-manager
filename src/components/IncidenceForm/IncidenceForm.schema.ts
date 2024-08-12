import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const REQUIRED_FIELD_MESSAGE = "Este campo es requerido";

export const incidenceFormSchema = z.object({
  name: z
    .string({
      required_error: REQUIRED_FIELD_MESSAGE,
    })
    .min(1, REQUIRED_FIELD_MESSAGE),
  desc: z
    .string({ required_error: REQUIRED_FIELD_MESSAGE })
    .min(1, REQUIRED_FIELD_MESSAGE),
  priorityId: z.string({ required_error: REQUIRED_FIELD_MESSAGE }),
});

export type IncidenceFormSchema = z.infer<typeof incidenceFormSchema>;

export const incidenceFormResolver = zodResolver(incidenceFormSchema);
