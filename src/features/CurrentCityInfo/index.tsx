import React from "react";
import { SWeatherData } from "../../types";
import Details from "../../components/CityDetails";
import Loading from "../../components/Loading";

interface Props {
  cityDetails: SWeatherData;
  isLoading: boolean;
}

const CurrentCityInfo: React.FC<Props> = ({ cityDetails, isLoading }) => {
  return (
    <div className="px-10">
      {cityDetails.name ? <Details details={cityDetails} /> : null}
      {isLoading ? <Loading /> : null}
    </div>
  );
};

export default CurrentCityInfo;
