import { AdviceSlip } from "../../components/advice/AdviceSlip";
import { WeatherCard } from "../../components/weather/WeatherCard";
import { Slider } from "../../components/slider/Slider2";
import { HomeSection } from "./HomeSection";

const Home = () => {
  return (
    <div className="pt-5 md:pt-0 ">
      <div className="grid grid-cols-1 md:grid-cols-4 grid-flow-row gap-4 md:pt-5 lg:p-10 h-1/3">
        <div className="md:col-span-3">
          <Slider />
        </div>
        <div className="grid grid-rows-4 gap-4 ">
          <div className="hidden xl:block row-span-1">
            <AdviceSlip />
          </div>
          <div className="px-4 md:p-0 row-span-3 overflow-hidden">
            <WeatherCard />
          </div>
        </div>
      </div>
      <HomeSection />
    </div>
  );
};

export default Home;
