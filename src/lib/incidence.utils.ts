import { Incidence } from "@/types/incidence";
import { Priority } from "@/types/priority";

export const getCorrectLabel = (
  labelsList: Priority[],
  incidence: Incidence
) => {
  const incidenceLabel = incidence.labels[0];
  const isPriorityInLabelsList =
    labelsList.findIndex(({ id }) => id === incidenceLabel.id) >= 0;

  if (isPriorityInLabelsList) return incidenceLabel.id;

  const equivalentPriority = labelsList.find(
    ({ name }) => name === incidenceLabel.name
  );

  return equivalentPriority ? equivalentPriority.id : labelsList[0].id;
};
