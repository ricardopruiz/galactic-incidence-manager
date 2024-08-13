import { Incidence } from "@/types/incidence";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import ColorBullet from "./ColorBullet";
import IncidenceStatusUpdater from "./IncidenceStatusUpdater";
import Link from "next/link";
import DeleteIncidence from "./DeleteIncidence";
import InlineButton from "@/components/InlineButton";
import { Edit2Icon } from "lucide-react";
import { formatDateTime } from "@/lib/dates";
import TooltipWrapper from "@/components/TooltipWrapper";

type IncidenceTableProps = {
  incidences: Incidence[];
};

const IncidenceTable = ({ incidences = [] }: IncidenceTableProps) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-2"></TableHead>
          <TableHead className="max-w-20 hidden md:table-cell">ID</TableHead>
          <TableHead>Título</TableHead>
          <TableHead>Fecha</TableHead>
          <TableHead>Prioridad</TableHead>
          <TableHead>Estado</TableHead>
          <TableHead>Acciones</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {incidences &&
          incidences.map((incidence) => {
            return (
              <TableRow key={incidence.id}>
                <TableCell>
                  <ColorBullet status={incidence.labels[0]} />
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  <TooltipWrapper message={incidence.id}>
                    <div className="font-medium max-w-10 truncate">
                      {incidence.id}
                    </div>
                  </TooltipWrapper>
                </TableCell>
                <TableCell>
                  <TooltipWrapper message={incidence.desc}>
                    {incidence.name}
                  </TooltipWrapper>
                </TableCell>
                <TableCell>
                  {formatDateTime(new Date(incidence.dateLastActivity))}
                </TableCell>
                <TableCell>{incidence.labels[0].name}</TableCell>
                <TableCell>
                  <IncidenceStatusUpdater
                    incidence={incidence}
                    key={`status-select-${incidence.id}`}
                  />
                </TableCell>
                <TableCell className="flex flex-row w-fit gap-2">
                  <Link href={`/edit/${incidence.id}`}>
                    <InlineButton>
                      <Edit2Icon />
                    </InlineButton>
                  </Link>
                  <DeleteIncidence incidence={incidence} />
                </TableCell>
              </TableRow>
            );
          })}
      </TableBody>
    </Table>
  );
};

export default IncidenceTable;
