import { fetchIncidence } from "@/api/trelloApi";
import IncidenceForm from "@/components/IncidenceForm";
import Title from "@/components/Title";

type EditIncidencePageProps = {
  params: { incidence: string };
};

const EditIncidencePage = async ({
  params: { incidence },
}: EditIncidencePageProps) => {
  const incidenceInfo = await fetchIncidence(incidence);

  return (
    <div className="flex flex-col px-8 py-4 items-stretch md:px-12 md:py-8  gap-7">
      <Title className="flex-grow-0 shrink-0">Editar Incidencia</Title>
      <IncidenceForm type="edit" initialData={incidenceInfo} />
    </div>
  );
};

export default EditIncidencePage;
