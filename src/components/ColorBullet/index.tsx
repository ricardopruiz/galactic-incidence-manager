import { Label } from "@/types/incidence";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@radix-ui/react-tooltip";

export type ColorBulletProps = {
  status: Label;
};

const ColorBullet = ({ status }: ColorBulletProps) => {
  return (
    <span>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <div
              className="rounded-full w-2 h-2"
              style={{ backgroundColor: status.color }}
            ></div>
          </TooltipTrigger>
          <TooltipContent>
            <p className="bg-foreground text-primary p-4 rounded-sm shadow opacity-75">
              {status.name}
            </p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </span>
  );
};

export default ColorBullet;
