import { Trash2 } from "lucide-react";
import React from "react";
import Details from "../../components/CityDetails";
import { SWeatherData } from "../../types";
import NoDataAvailable from "../../components/NoDataAvailable";
import { TypographyH2 } from "@/components/ui/typography";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface Props {
  history: SWeatherData[];
  handleClearHistory: () => void;
}

const HistorySection: React.FC<Props> = ({ history, handleClearHistory }) => {
  return (
    <React.Fragment>
      <div className="flex">
        <span className="mx-auto m-3 flex gap-4 items-center">
          <TypographyH2 text={"History"} />
          {history?.length ? (
            <TooltipProvider delayDuration={100}>
              <Tooltip>
                <TooltipTrigger>
                  <Trash2
                    className="text-red-500 cursor-pointer"
                    onClick={handleClearHistory}
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Clear History</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ) : null}
        </span>
      </div>
      {history?.length ? (
        <div className="px-10">
          {history.map((weather, index) => (
            <Details key={index} details={weather} />
          ))}
        </div>
      ) : (
        <NoDataAvailable label="No Data Available" />
      )}
    </React.Fragment>
  );
};
export default HistorySection;
