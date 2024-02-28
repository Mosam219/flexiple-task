import { RWeatherData } from "./services/types";

/**
 * State variables - derived from Response variables
 */
export interface SWeatherData extends Pick<RWeatherData, "name" | "weather"> {
  temp: number;
  humidity: number;
  country: string;
  pressure: number;
}
