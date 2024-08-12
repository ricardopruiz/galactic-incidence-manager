import IncidenceForm from "@/components/IncidenceForm";
import Title from "@/components/Title";

const CreateIncidencePage = () => {
  return (
    <div className="flex flex-col p-3 items-stretch  gap-7">
      <Title className="flex-grow-0 shrink-0">Crear Incidencia</Title>
      <IncidenceForm type="new" />
    </div>
  );
};

export default CreateIncidencePage;
