import { forwardRef } from "react";
import { Button } from "../ui/button";

type InlineButtonProps = {
  children: React.ReactNode;
  onClick?(): void;
};

const InlineButton = forwardRef<HTMLButtonElement, InlineButtonProps>(
  ({ children, onClick }, ref) => {
    return (
      <Button ref={ref} onClick={onClick} className="p-2 bg-accent">
        {children}
      </Button>
    );
  }
);

InlineButton.displayName = "InlineButton";

export default InlineButton;
