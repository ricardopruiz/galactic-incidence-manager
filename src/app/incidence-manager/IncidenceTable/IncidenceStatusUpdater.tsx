"use client";

import { useContext, useState } from "react";
import { Incidence } from "@/types/incidence";
import { IncidencesContext } from "@/contexts/IncidencesContext";
import { revalidateIncidenceList } from "@/lib/actions";
import CustomSelect from "@/components/CustomSelect";
import { updateIncidenceStatus } from "@/api/trelloApi";

type IncidenceStatusUpdaterProps = {
  incidence: Incidence;
};

const IncidenceStatusUpdater = ({ incidence }: IncidenceStatusUpdaterProps) => {
  const { statusList } = useContext(IncidencesContext);
  const [statusId, setStatusId] = useState<string>(incidence.idList);

  const handleStatusChange = (idList: string) => {
    setStatusId(idList);
    if (idList && idList !== "" && idList !== incidence.idList) {
      updateIncidenceStatus(incidence.id, idList).then(() =>
        revalidateIncidenceList()
      );
    }
  };

  return (
    <CustomSelect
      selectedValue={statusId}
      onChangeValue={handleStatusChange}
      options={statusList}
    />
  );
};

export default IncidenceStatusUpdater;
