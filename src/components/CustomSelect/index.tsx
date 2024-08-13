"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type IncidenceStatusSelectProps = {
  options: { id: string; name: string }[];
  selectedValue: string;
  onChangeValue(status: string): void;
  placeholder?: string;
};

const CustomSelect = ({
  options,
  selectedValue,
  placeholder,
  onChangeValue,
}: IncidenceStatusSelectProps) => {
  return (
    <Select
      defaultValue={selectedValue}
      onValueChange={(statusId) => onChangeValue(statusId)}
    >
      <SelectTrigger>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options.map((status) => (
          <SelectItem key={status.id} value={status.id}>
            {status.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default CustomSelect;
