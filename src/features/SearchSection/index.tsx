import { useRef } from "react";
import UserInput from "../../components/UserInput";
import { WeatherService } from "../../services";
import ComponentWrapper from "../../wrappers/ComponentsWrapper";
import toast from "react-hot-toast";
import { SWeatherData } from "../../types";

interface Props {
  setCityDetails: React.Dispatch<React.SetStateAction<SWeatherData>>;
  localStorage: SWeatherData[];
  setLocalStorage: React.Dispatch<React.SetStateAction<SWeatherData[]>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

/**
 * Search Section
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
      // empty string case
      toast.error("Add city name to get weather data!", {
        duration: 4000,
        position: "top-right",
      });
      return;
    }

    // starting loading state
    setIsLoading(true);

    WeatherService.getData(city)
      .then((res) => {
        // setting data to state
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
        cityRef.current!.focus();

        // showing notification
        toast.success(`Successfully got weather data for ${city}`, {
          duration: 4000,
          position: "top-right",
        });
      })
      .catch((e) => {
        console.log(e);
        toast.error(`City not found`, {
          duration: 4000,
          position: "top-right",
        });
      })
      .finally(() => {
        // stopping loading state
        setIsLoading(false);
      });
  };

  return (
    <ComponentWrapper>
      <div className="w-full flex justify-center gap-4 items-center flex-wrap">
        <UserInput ref={cityRef} handleSubmitClick={handleSubmitClick} />
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
