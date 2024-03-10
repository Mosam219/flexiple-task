import { useState } from "react";
import SearchSection from "./features/SearchSection";
import useLocalStorage from "./hooks/useLocalStorage";
import { Toaster } from "react-hot-toast";
import { SWeatherData } from "./types";
import HistorySection from "./features/HistorySection";
import CurrentCityInfo from "./features/CurrentCityInfo";
import ImageSection from "./features/ImageSection";

function App() {
  const [cityDetails, setCityDetails] = useState<SWeatherData>(
    {} as SWeatherData
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { value: localStorage, setValue: setLocalStorage } = useLocalStorage(
    "history",
    []
  );

  const handleClearHistory = () => {
    setLocalStorage([]);
  };

  return (
    <section className="mx-auto mt-4 h-fit max-w-screen-md ">
      {/* Image seciton */}
      {/* <img src={WeatherIcon} className="h-24 m-auto my-4" /> */}
      <ImageSection />

      {/* user search section  */}
      <SearchSection
        setCityDetails={setCityDetails}
        localStorage={localStorage}
        isLoading={isLoading}
        setLocalStorage={setLocalStorage}
        setIsLoading={setIsLoading}
      />

      {/* current weather details section */}
      <CurrentCityInfo cityDetails={cityDetails} isLoading={isLoading} />

      <hr className="mt-10 mb-2 w-[90%] m-auto" />

      {/* History Section */}
      <HistorySection
        history={localStorage}
        handleClearHistory={handleClearHistory}
      />
      <Toaster />
    </section>
  );
}

export default App;
