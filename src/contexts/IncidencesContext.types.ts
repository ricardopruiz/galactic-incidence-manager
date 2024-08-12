import { IncidenceStatus } from "@/types/incidenceStatus";
import { Priority } from "@/types/priority";

export type IncidencesContextData = {
  statusList: IncidenceStatus[];
  priorityLabelsAvailable: Priority[];
};
