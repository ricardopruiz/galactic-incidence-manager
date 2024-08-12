import { Incidence } from "@/types/incidence";
import { Priority } from "@/types/priority";

export const getCorrectLabel = (
  availableLabel: Priority[],
  incidence: Incidence
) => {
  const priorityIsInOurLabel = availableLabel.findIndex(
    (label) => label.id === incidence!.labels[0].id
  );

  if (priorityIsInOurLabel === -1) {
    const newPriority = availableLabel.find(
      (label) => label.name === incidence!.labels[0].name
    );

    return newPriority?.id;
  }

  return incidence?.labels[0].id;
};
