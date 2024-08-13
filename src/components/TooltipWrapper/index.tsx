import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type TooltipWrapperProps = {
  children: React.ReactNode;
  message: string;
};

const TooltipWrapper = ({ children, message }: TooltipWrapperProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>{children}</TooltipTrigger>
        <TooltipContent className="shadow-lg">
          <p className="bg-foreground text-primary p-1 rounded-sm opacity-75">
            {message}
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default TooltipWrapper;
