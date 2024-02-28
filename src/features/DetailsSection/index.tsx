import { SWeatherData } from "../../types";
import ComponentWrapper from "../../wrappers/ComponentsWrapper";
import { getIconUrl } from "./constants";

interface Props {
  details: SWeatherData;
}

/**
 * Weather Details Section
 */
const DetailsSection: React.FC<Props> = ({ details }) => {
  return (
    <ComponentWrapper>
      <div className="flex justify-around items-center flex-wrap gap-5">
        <div className="flex flex-col justify-center items-center">
          <img
            src={getIconUrl(details.weather?.[0].icon || "")}
            alt="weather image"
            className="w-[120px]"
          />
          <span className="text-xl text-center">
            {details.weather?.[0]?.description || "-"}
          </span>
        </div>
        <hr className="bg-red-200 w-full min-[420px]:hidden" />
        <div className="flex flex-col justify-center align-middle gap-4">
          <span className="text-2xl">{details.name || "-"}</span>
          <span className="text-4xl">
            {details.temp || "-"}
            {"\u00b0"} c
          </span>
        </div>
        <hr className="bg-red-200 w-full min-[420px]:hidden" />
        <div className="flex flex-col justify-center align-middle gap-4">
          <div className="flex justify-between gap-5 align-middle">
            <span>Humidity</span>
            <span>{details.humidity || "-"}</span>
          </div>
          <div className="flex justify-between gap-5 align-middle">
            <span>Pressure</span>
            <span>{details.pressure ? details.pressure + " hPa" : "-"}</span>
          </div>
        </div>
      </div>
    </ComponentWrapper>
  );
};
export default DetailsSection;
