import { Loader2Icon } from "lucide-react";

const Loading = () => {
  return (
    <div className="text-foreground animate-spin flex items-center justify-center h-full">
      <Loader2Icon size={100} />
    </div>
  );
};

export default Loading;
