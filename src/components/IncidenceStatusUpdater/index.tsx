"use client";

import { useContext, useEffect, useState } from "react";
import IncidenceStatusSelect from "../IncidenceStatusSelect";
import { Incidence } from "@/types/incidence";
import { IncidenceStatus } from "@/types/incidenceStatus";
import { changeIncidenceStatus } from "@/api/incidences";
import { IncidencesContext } from "@/contexts/IncidencesContext";

type IncidenceStatusUpdaterProps = {
  incidence: Incidence;
};

const IncidenceStatusUpdater = ({ incidence }: IncidenceStatusUpdaterProps) => {
  const { statusList } = useContext(IncidencesContext);
  const [isFetching, setIsFetching] = useState(false);
  const [statusId, setStatusId] = useState<string>(incidence.idList);

  useEffect(() => {
    if (statusId && statusId !== "" && statusId !== incidence.idList) {
      setIsFetching(true);
      changeIncidenceStatus(incidence.id, statusId)
        .then()
        .finally(() => setIsFetching(false));
    }
  }, [statusId, incidence.id, incidence.idList]);

  return (
    <IncidenceStatusSelect
      onChangeValue={setStatusId}
      priorityStatusList={statusList}
      selectedValue={statusId!}
    />
  );
};

export default IncidenceStatusUpdater;
