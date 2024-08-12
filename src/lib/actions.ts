"use server";

import { revalidatePath, revalidateTag } from "next/cache";

export const revalidateIncidenceList = () => {
  revalidateTag("incidence-list");
};

export const revalidateIncidenceForm = () => {
  revalidatePath("/edit/[incidence]");
};
