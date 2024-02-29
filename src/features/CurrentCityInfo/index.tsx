import React from "react";
import { SWeatherData } from "../../types";
import Details from "../../components/CityDetails";
import Loading from "../../components/Loading";
import ComponentWrapper from "../../wrappers/ComponentsWrapper";

interface Props {
  cityDetails: SWeatherData;
  isLoading: boolean;
}

const CurrentCityInfo: React.FC<Props> = ({ cityDetails, isLoading }) => {
  return (
    <ComponentWrapper>
      {cityDetails.name ? <Details details={cityDetails} /> : null}
      {isLoading ? <Loading /> : null}
    </ComponentWrapper>
  );
};

export default CurrentCityInfo;
