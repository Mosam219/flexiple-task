import { forwardRef } from "react";

const UserInput = forwardRef(
  (props, ref: React.ForwardedRef<HTMLInputElement>) => {
    return (
      <input
        ref={ref}
        type="text"
        placeholder="Search for city...."
        className="w-[50%] p-4 text-lg font-light capitalize rounded-lg shadow-md focus:outline-none placeholder-opacity-50"
      />
    );
  }
);
export default UserInput;
