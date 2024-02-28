import { RWeatherData } from "./types/types";
const APP_ID = "61d32b0fb03a3682996eec7b472b97a7";
const WeatherService = {
  getData: (city: string): Promise<RWeatherData> =>
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APP_ID}&units=metric`
    ).then((res) => res.json()),
};
export { WeatherService };
