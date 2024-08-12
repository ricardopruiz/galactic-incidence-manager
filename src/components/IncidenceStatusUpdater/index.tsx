"use client";

import { useContext, useEffect, useState } from "react";
import { Incidence } from "@/types/incidence";
import { changeIncidenceStatus } from "@/api/incidences";
import { IncidencesContext } from "@/contexts/IncidencesContext";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { revalidateIncidenceList } from "@/lib/actions";

type IncidenceStatusUpdaterProps = {
  incidence: Incidence;
};

const IncidenceStatusUpdater = ({ incidence }: IncidenceStatusUpdaterProps) => {
  const { statusList } = useContext(IncidencesContext);
  const [statusId, setStatusId] = useState<string>(incidence.idList);

  const handleStatusChange = (idList: string) => {
    setStatusId(idList);
    if (idList && idList !== "" && idList !== incidence.idList) {
      changeIncidenceStatus(incidence.id, idList).then(() =>
        revalidateIncidenceList()
      );
    }
  };

  return (
    <Select defaultValue={statusId!} onValueChange={handleStatusChange}>
      <SelectTrigger>
        <SelectValue placeholder="Estado de la tarea" />
      </SelectTrigger>
      <SelectContent>
        {statusList.map((status) => (
          <SelectItem key={status.id} value={status.id}>
            {status.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default IncidenceStatusUpdater;
