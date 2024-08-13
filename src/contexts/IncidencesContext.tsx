import { createContext, useEffect, useState } from "react";
import priorityLabels from "@/services/priorityList";

import { IncidenceStatus } from "@/types/incidenceStatus";
import { IncidencesContextData } from "./IncidencesContext.types";
import { fetchStatusesList } from "@/api/trelloApi";

const IncidencesContextInitialState: IncidencesContextData = {
  priorityLabelsAvailable: [],
  statusList: [],
};

export const IncidencesContext = createContext<IncidencesContextData>(
  IncidencesContextInitialState
);

export const IncidencesContextProvider = ({ children }: any) => {
  const [statusList, setStatusList] = useState<IncidenceStatus[]>([]);
  const priorityLabelsAvailable = priorityLabels;

  useEffect(() => {
    fetchStatusesList().then(setStatusList);
  }, []);

  return (
    <IncidencesContext.Provider
      value={{
        statusList,
        priorityLabelsAvailable,
      }}
    >
      {children}
    </IncidencesContext.Provider>
  );
};
