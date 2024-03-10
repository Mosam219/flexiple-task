import { useRef } from "react";
import UserInput from "../../components/UserInput";
import { WeatherService } from "../../services";
import toast from "react-hot-toast";
import { SWeatherData } from "../../types";
import { Button } from "@/components/ui/button";

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

  const updateLocalStorage = (data: SWeatherData) => {
    // If item is already present will remove it
    const filteredLocalStorage = localStorage.filter(
      (item) => item.name !== data.name
    );
    // adding new item to top
    setLocalStorage([data, ...filteredLocalStorage]);
  };

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

        updateLocalStorage(details);

        // resetting value
        cityRef.current!.value = "";

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
    <div className="w-full flex justify-center gap-4 items-center flex-wrap my-10">
      <UserInput ref={cityRef} handleSubmitClick={handleSubmitClick} />
      <Button onClick={handleSubmitClick}>Submit</Button>
    </div>
  );
};

export default SearchSection;
