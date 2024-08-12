import { createContext, useContext, useEffect, useState } from "react";
import priorityLabels from "@/services/priorityList";
import { getIncidenceStatusLists } from "@/api/incidences";
import { IncidenceStatus } from "@/types/incidenceStatus";
import { IncidencesContextData } from "./IncidencesContext.types";

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
    getIncidenceStatusLists().then((statusItems) => setStatusList(statusItems));
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
