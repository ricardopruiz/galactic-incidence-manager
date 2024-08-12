"use client";
import { deleteIncidence } from "@/api/incidences";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Incidence } from "@/types/incidence";
import InlineButton from "../InlineButton";
import { Trash2Icon } from "lucide-react";

type DeleteIncidenceProps = {
  incidence: Incidence;
};

const DeleteIncidence = ({ incidence }: DeleteIncidenceProps) => {
  const handleDelete = () => {
    deleteIncidence(incidence.id);
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <InlineButton>
          <Trash2Icon />
        </InlineButton>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{`¿Borrar incidencia ${incidence.id}?`}</AlertDialogTitle>
          <AlertDialogDescription>
            {`¿Está seguro de que desea borrar la incidencia ${incidence.name}?`}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete}>
            Continuar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteIncidence;
