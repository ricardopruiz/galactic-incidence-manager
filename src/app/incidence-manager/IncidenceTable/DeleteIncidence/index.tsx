"use client";
import { deleteIncidence } from "@/api/trelloApi";
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
import InlineButton from "@/components/InlineButton";
import { useToast } from "@/components/ui/use-toast";
import { Trash2Icon } from "lucide-react";
import { revalidateIncidenceList } from "@/lib/actions";

type DeleteIncidenceProps = {
  incidence: Incidence;
};

const DeleteIncidence = ({ incidence }: DeleteIncidenceProps) => {
  const { toast } = useToast();
  const handleDelete = () => {
    deleteIncidence(incidence.id)
      .then(() => {
        toast({
          title: "Incidencia Eliminada",
          description: "La incidencia se ha eliminado correctamente",
          duration: 5000,
        });
        revalidateIncidenceList();
      })
      .catch((error) => {
        toast({
          title: "Error al eliminar la incidencia",
          description: `Hubo un error al eliminar la incidencia: ${error}`,
          variant: "destructive",
          duration: 5000,
        });
      });
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
