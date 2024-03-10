import CardWrapper from "@/wrappers/cardWrapper";
import { SWeatherData } from "../../types";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { TypographyLarge, TypographyMuted } from "../ui/typography";
import { getIconUrl } from "./constants";
import { motion } from "framer-motion";

interface Props {
  details: SWeatherData;
}

/**
 * Weather Details Section
 */
const Details: React.FC<Props> = ({ details }) => {
  return (
    <CardWrapper title={details.name || "-"}>
      <div className="flex justify-around gap-3 flex-wrap">
        <div className="flex flex-col justify-center items-center">
          <img
            src={getIconUrl(details.weather?.[0].icon || "")}
            alt="weather image"
          />
          <span className="text-xl text-center">
            {details.weather?.[0]?.description || "-"}
          </span>
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex gap-x-3 items-center justify-between">
            <TypographyLarge text={"Temperature"} />
            <TypographyMuted text={`${details.temp || "-"}\u00b0 C`} />
          </div>
          <div className="flex gap-x-3 items-center justify-between">
            <TypographyLarge text={"Pressure"} />
            <TypographyMuted
              text={details.pressure ? details.pressure + " hPa" : "-"}
            />
          </div>
          <div className="flex gap-x-3 items-center justify-between">
            <TypographyLarge text={"Humidity"} />
            <TypographyMuted text={details.humidity || "-"} />
          </div>
        </div>
      </div>
    </CardWrapper>
  );
};
export default Details;
