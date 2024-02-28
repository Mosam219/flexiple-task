import { ReactNode } from "react";

const ComponentWrapper: React.FC<{ children: ReactNode }> = ({ children }) => (
  <div
    className={`w-[96%] bg-gradient-to-br p-4 md:p-6 mx-auto rounded-md shadow-inner shadow-gray-400 mb-10`}
  >
    {children}
  </div>
);

export default ComponentWrapper;
