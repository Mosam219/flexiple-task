import ComponentWrapper from "../wrappers/ComponentsWrapper";

/**
 * For no data available
 * @param param0
 * @returns
 */
const NoDataAvailable: React.FC<{ label: string }> = ({ label }) => {
  return (
    <ComponentWrapper>
      <div className="flex justify-center align-middle h-28">
        <span className="text-xl text-gray-600">{label}</span>
      </div>
    </ComponentWrapper>
  );
};
export default NoDataAvailable;
