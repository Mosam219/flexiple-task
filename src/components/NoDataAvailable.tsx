import CardWrapper from "@/wrappers/cardWrapper";
import ComponentWrapper from "../wrappers/ComponentsWrapper";
import { TypographyLarge, TypographyLead } from "./ui/typography";

/**
 * For no data available
 * @param param0
 * @returns
 */
const NoDataAvailable: React.FC<{ label: string }> = ({ label }) => {
  return (
    <CardWrapper title="">
      <div className="flex justify-center items-center h-36">
        <TypographyLead text="No Data Available" />
      </div>
    </CardWrapper>
  );
};
export default NoDataAvailable;
