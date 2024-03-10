import { forwardRef } from "react";
import { Input } from "./ui/input";

interface Props {
  handleSubmitClick: () => void;
}

/**
 * User Input
 */
const UserInput = forwardRef(
  ({ handleSubmitClick }: Props, ref: React.ForwardedRef<HTMLInputElement>) => {
    return (
      <Input
        ref={ref}
        type="text"
        onKeyDown={(e) => {
          e.key === "Enter" && handleSubmitClick();
        }}
        placeholder="Search for city...."
        className="w-[90%] sm:w-[50%]"
      />
    );
  }
);
export default UserInput;
