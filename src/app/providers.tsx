"use client";

import { IncidencesContextProvider } from "@/contexts/IncidencesContext";

const Providers = ({ children }: any) => {
  return <IncidencesContextProvider>{children}</IncidencesContextProvider>;
};

export default Providers;
