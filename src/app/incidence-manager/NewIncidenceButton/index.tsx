import Link from "next/link";
import { Button } from "../../../components/ui/button";

const NewIncidenceButton = () => {
  return (
    <Button className="bg-accent">
      <Link href={"/create-incidence"}>
        <span className="font-normal text-lg/[30px] md:font-medium md:text-lg/[23px]">
          Crear Incidencia
        </span>
      </Link>
    </Button>
  );
};

export default NewIncidenceButton;
