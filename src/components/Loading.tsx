import { Loader2 } from "lucide-react";

/**
 * Loading component - for showing loading state
 */
const Loading = () => {
  return (
    <div className="flex justify-center align-middle m-auto">
      <Loader2 className="animate-spin h-5 w-5 mr-3" />
      Loading
    </div>
  );
};
export default Loading;
