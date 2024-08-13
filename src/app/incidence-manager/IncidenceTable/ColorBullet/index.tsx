import { Label } from "@/types/incidence";
import TooltipWrapper from "@/components/TooltipWrapper";

export type ColorBulletProps = {
  status: Label;
};

const ColorBullet = ({ status }: ColorBulletProps) => {
  return (
    <span>
      <TooltipWrapper message={status.name}>
        <div
          role="priority-indicator"
          className="rounded-full w-2 h-2"
          style={{ backgroundColor: status.color }}
        ></div>
      </TooltipWrapper>
    </span>
  );
};

export default ColorBullet;
