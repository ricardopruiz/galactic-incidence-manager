import { getIncidences } from "@/api/incidences";
import IncidenceTable from "@/components/IncidenceTable";
import NewIncidenceButton from "@/components/NewIncidenceButton";
import Title from "@/components/Title";

const IncidenceManager = async () => {
  const incidences = await getIncidences();

  return (
    <div className="px-8 py-4 overflow-auto md:px-12 md:py-8 gap-4">
      <div className="flex flex-col md:flex-row md:justify-between gap-4">
        <Title>Gestión de Incidencias</Title>
        <NewIncidenceButton />
      </div>
      <IncidenceTable incidences={incidences} />
    </div>
  );
};
export const dynamic = "force-dynamic";

export const revalidate = 10;

export default IncidenceManager;
