import { Incidence } from "@/types/incidence";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import DateFormatter from "../DateFormatter";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import ColorBullet from "../ColorBullet";
import IncidenceStatusUpdater from "../IncidenceStatusUpdater";

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
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="font-medium max-w-10 truncate">
                        {incidence.id}
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="bg-foreground text-primary p-4 rounded-sm shadow opacity-75">
                          {incidence.id}
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </TableCell>
                <TableCell>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="text-left">
                        {incidence.name}
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="bg-foreground text-primary p-4 rounded-sm shadow opacity-95">
                          {incidence.desc}
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </TableCell>
                <TableCell>
                  <DateFormatter date={incidence.dateLastActivity} />
                </TableCell>
                <TableCell>{incidence.labels[0].name}</TableCell>
                <TableCell>
                  <IncidenceStatusUpdater incidence={incidence} />
                </TableCell>
              </TableRow>
            );
          })}
      </TableBody>
    </Table>
  );
};

export default IncidenceTable;
