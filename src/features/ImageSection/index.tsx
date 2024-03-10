import ModeToggle from "@/components/ThemeToggle";
import WeatherIcon from "../../assets/weather.svg";
const ImageSection = () => {
  return (
    <div className="relative">
      <img src={WeatherIcon} className="h-24 m-auto my-4" />
      <div className="absolute top-3 right-4">
        <ModeToggle />
      </div>
    </div>
  );
};
export default ImageSection;
