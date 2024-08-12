"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  incidenceFormResolver,
  IncidenceFormSchema,
} from "./IncidenceForm.schema";
import { Incidence } from "@/types/incidence";
import {
  SelectContent,
  Select,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "../ui/select";
import { createNewIncidence, editIncidence } from "@/api/incidences";
import { IncidencesContext } from "@/contexts/IncidencesContext";
import { useContext } from "react";
import { useToast } from "@/components/ui/use-toast";
import { getCorrectLabel } from "@/utils/incidence.utils";
import {
  revalidateIncidenceForm,
  revalidateIncidenceList,
} from "@/lib/actions";

type IncidenceFormProps = {
  type: "new" | "edit";
  initialData?: Incidence;
};

const IncidenceForm = ({ type, initialData }: IncidenceFormProps) => {
  const { toast } = useToast();
  const router = useRouter();
  const { priorityLabelsAvailable, statusList } = useContext(IncidencesContext);

  const sanitizePriorityId = () => {
    if (type === "edit") {
      getCorrectLabel(priorityLabelsAvailable, initialData!);
    }
    return null;
  };

  const formMethods = useForm<IncidenceFormSchema>({
    resolver: incidenceFormResolver,
    defaultValues: {
      name: initialData?.name || "",
      desc: initialData?.desc || "",
      priorityId: sanitizePriorityId() || priorityLabelsAvailable[0].id,
    },
  });

  const sendNewIncidence = (data: IncidenceFormSchema) => {
    const { name, desc, priorityId } = data;
    const pendingStatus = statusList.findIndex((st) => st.name === "PENDIENTE");

    createNewIncidence(name, desc, priorityId, statusList[pendingStatus].id)
      .then(() => {
        toast({
          title: "Nueva Incidencia Creada",
          description: "La incidencia se ha creado correctamente",
          duration: 5000,
        });

        revalidateIncidenceList();
        router.push("/incidence-manager");
      })
      .catch((error) => {
        toast({
          title: "Error al crear la incidencia",
          description: `Hubo un error al crear la incidencia. ${error}`,
          variant: "destructive",
          duration: 5000,
        });
      });
  };

  const sendEditIncidence = (data: IncidenceFormSchema) => {
    const { name, desc, priorityId } = data;

    editIncidence(initialData!.id, name, desc, priorityId, initialData!.idList)
      .then(() => {
        toast({
          title: "Incidencia Editada",
          description: "La incidencia se ha editado correctamente",
          duration: 5000,
        });

        revalidateIncidenceForm();
        revalidateIncidenceList();
        router.push("/incidence-manager");
      })
      .catch((error) => {
        toast({
          title: "Error al editar la incidencia",
          description: `Hubo un error al editar la incidencia. ${error}`,
          variant: "destructive",
          duration: 5000,
        });
      });
  };

  const { handleSubmit, control } = formMethods;

  const onSubmit = handleSubmit((data: IncidenceFormSchema) => {
    type === "new" ? sendNewIncidence(data) : sendEditIncidence(data);
  });

  return (
    <Form {...formMethods}>
      <form onSubmit={onSubmit}>
        <div className="flex flex-col md:items-center">
          <div className="flex flex-col gap-6 md:w-1/2">
            <FormField
              control={control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nombre</FormLabel>
                  <FormControl>
                    <Input placeholder="Nombre de la Incidencia" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="desc"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Descripción</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Descripción de la Incidencia"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="priorityId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Prioridad </FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Estado de la tarea" />
                      </SelectTrigger>
                      <SelectContent>
                        {priorityLabelsAvailable.map((p) => (
                          <SelectItem key={p.id} value={p.id}>
                            {p.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="bg-accent md:self-end ">
              {type === "new" ? "Crear Incidencia" : "Editar Incidencia"}
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default IncidenceForm;
