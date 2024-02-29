import { forwardRef } from "react";

interface Props {
  handleSubmitClick: () => void;
}

/**
 * User Input
 */
const UserInput = forwardRef(
  ({ handleSubmitClick }: Props, ref: React.ForwardedRef<HTMLInputElement>) => {
    return (
      <input
        ref={ref}
        type="text"
        onKeyDown={(e) => {
          e.key === "Enter" && handleSubmitClick();
        }}
        placeholder="Search for city...."
        className="w-[90%] sm:w-[50%] p-4 text-sm md:text-md font-light capitalize rounded-lg shadow-md focus:outline-none placeholder-opacity-50"
      />
    );
  }
);
export default UserInput;
