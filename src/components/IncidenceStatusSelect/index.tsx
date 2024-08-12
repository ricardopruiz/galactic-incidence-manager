"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { IncidenceStatus } from "@/types/incidenceStatus";

type IncidenceStatusSelectProps = {
  priorityStatusList: IncidenceStatus[];
  selectedValue: string;
  onChangeValue(status: string): void;
};

const IncidenceStatusSelect = ({
  priorityStatusList,
  selectedValue,
  onChangeValue,
}: IncidenceStatusSelectProps) => {
  return (
    <Select
      defaultValue={selectedValue}
      onValueChange={(statusId) => onChangeValue(statusId)}
    >
      <SelectTrigger>
        <SelectValue placeholder="Estado de la tarea" />
      </SelectTrigger>
      <SelectContent>
        {priorityStatusList.map((status) => (
          <SelectItem key={status.id} value={status.id}>
            {status.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default IncidenceStatusSelect;
