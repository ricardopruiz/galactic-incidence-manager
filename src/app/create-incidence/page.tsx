import IncidenceForm from "@/components/IncidenceForm";
import Title from "@/components/Title";

const CreateIncidencePage = () => {
  return (
    <div className="flex flex-col px-8 py-4 items-stretch md:px-12 md:py-8  gap-7">
      <Title className="flex-grow-0 shrink-0">Crear Incidencia</Title>
      <IncidenceForm type="new" />
    </div>
  );
};

export default CreateIncidencePage;
