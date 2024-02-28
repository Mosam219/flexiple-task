import { useRef } from "react";
import UserInput from "../../components/UserInput";
import { WeatherService } from "../../services";
import ComponentWrapper from "../../wrappers/ComponentsWrapper";
import { SWeatherData } from "../../App";
import toast from "react-hot-toast";

interface Props {
  setCityDetails: React.Dispatch<React.SetStateAction<SWeatherData>>;
  localStorage: SWeatherData[];
  setLocalStorage: React.Dispatch<React.SetStateAction<SWeatherData[]>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

/**
 * 
 * @param param0 {
    "coord": {
        "lon": -0.1257,
        "lat": 51.5085
    },
    "weather": [
        {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 283.67,
        "feels_like": 283.02,
        "temp_min": 282.93,
        "temp_max": 284.64,
        "pressure": 1014,
        "humidity": 86
    },
    "visibility": 10000,
    "wind": {
        "speed": 6.17,
        "deg": 220
    },
    "rain": {
        "1h": 0.19
    },
    "clouds": {
        "all": 100
    },
    "dt": 1709137692,
    "sys": {
        "type": 2,
        "id": 2075535,
        "country": "GB",
        "sunrise": 1709102971,
        "sunset": 1709141830
    },
    "timezone": 0,
    "id": 2643743,
    "name": "London",
    "cod": 200
}
 
 */

const SearchSection: React.FC<Props> = ({
  setCityDetails,
  localStorage,
  setLocalStorage,
  setIsLoading,
}) => {
  const cityRef = useRef<HTMLInputElement>(null);

  const handleSubmitClick = () => {
    const city = cityRef.current?.value;
    if (!city) {
      toast.error("Add city name to get weather data!", {
        duration: 4000,
        position: "top-right",
      });
      return;
    }

    setIsLoading(true);

    WeatherService.getData(city)
      .then((res) => {
        const details: SWeatherData = {
          name: res.name,
          weather: res.weather,
          temp: res.main.temp,
          humidity: res.main.humidity,
          country: res.sys.country,
          pressure: res.main.pressure,
        };
        setCityDetails(details);
        setLocalStorage([...localStorage, details]);

        // resetting value
        cityRef.current!.value = "";
        toast.success(`Successfully got weather data for ${city}`, {
          duration: 4000,
          position: "top-right",
        });
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <ComponentWrapper>
      <div className="w-full flex justify-center gap-4 items-center flex-wrap">
        <UserInput ref={cityRef} />
        <button
          className="text-white h-10 bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={handleSubmitClick}
        >
          Submit
        </button>
      </div>
    </ComponentWrapper>
  );
};

export default SearchSection;
