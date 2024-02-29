import { Trash2 } from "lucide-react";
import React from "react";
import Details from "../../components/CityDetails";
import { SWeatherData } from "../../types";
import NoDataAvailable from "../../components/NoDataAvailable";

interface Props {
  history: SWeatherData[];
  handleClearHistory: () => void;
}

const HistorySection: React.FC<Props> = ({ history, handleClearHistory }) => {
  return (
    <React.Fragment>
      <div className="flex">
        <span className="text-2xl mx-auto m-3 text-gray-800 underline flex gap-4 items-center">
          History
          {history?.length ? (
            <Trash2
              className="text-red-500 cursor-pointer"
              onClick={handleClearHistory}
            />
          ) : null}
        </span>
      </div>
      {history?.length ? (
        history.map((weather, index) => (
          <Details key={index} details={weather} />
        ))
      ) : (
        <NoDataAvailable label="No Data Available" />
      )}
    </React.Fragment>
  );
};
export default HistorySection;
