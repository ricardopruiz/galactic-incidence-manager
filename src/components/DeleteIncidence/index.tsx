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
import { useToast } from "../ui/use-toast";
import { useRouter } from "next/navigation";

type DeleteIncidenceProps = {
  incidence: Incidence;
};

const DeleteIncidence = ({ incidence }: DeleteIncidenceProps) => {
  const router = useRouter();
  const { toast } = useToast();
  const handleDelete = () => {
    deleteIncidence(incidence.id)
      .then(() => {
        toast({
          title: "Incidencia Eliminada",
          description: "La incidencia se ha eliminado correctamente",
        });
      })
      .catch((error) => {
        toast({
          title: "Error al eliminar la incidencia",
          description: `Hubo un error al eliminar la incidencia: ${error}`,
          variant: "destructive",
        });
      });

    setTimeout(() => router.refresh(), 200);
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
