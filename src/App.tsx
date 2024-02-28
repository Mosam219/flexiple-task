import { useState } from "react";
import SearchSection from "./features/SearchSection";
import DetailsSection from "./features/DetailsSection";
import useLocalStorage from "./hooks/useLocalStorage";
import NoDataAvailable from "./components/NoDataAvailable";
import Loading from "./components/Loading";
import { Trash2 } from "lucide-react";
import { Toaster } from "react-hot-toast";
import { SWeatherData } from "./types";

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
      <SearchSection
        setCityDetails={setCityDetails}
        localStorage={localStorage}
        setLocalStorage={setLocalStorage}
        setIsLoading={setIsLoading}
      />
      {cityDetails.name ? <DetailsSection details={cityDetails} /> : null}
      {isLoading ? <Loading /> : null}
      <hr className="mt-10 mb-2 w-[90%] m-auto" />
      <div className="flex">
        <span className="text-2xl mx-auto m-3 text-gray-800 underline flex gap-4 items-center">
          History
          <Trash2
            className="text-red-500 cursor-pointer"
            onClick={handleClearHistory}
          />
        </span>
      </div>
      {localStorage?.length ? (
        (localStorage as SWeatherData[]).map((weather, index) => (
          <DetailsSection key={index} details={weather} />
        ))
      ) : (
        <NoDataAvailable label="No Data Available" />
      )}
      <Toaster />
    </section>
  );
}

export default App;
