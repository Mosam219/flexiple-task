import CardWrapper from "@/wrappers/cardWrapper";
import { TypographyLead } from "./ui/typography";

/**
 * For no data available
 * @param param0
 * @returns
 */
const NoDataAvailable: React.FC<{ label: string }> = ({ label }) => {
  return (
    <CardWrapper title="">
      <div className="flex justify-center items-center h-36">
        <TypographyLead text={label} />
      </div>
    </CardWrapper>
  );
};
export default NoDataAvailable;
