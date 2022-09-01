import { AdviceSlip } from "../../components/advice/AdviceSlip";
import { WeatherCard } from "../../components/weather/WeatherCard";
import { Slider } from "../../components/slider/Slider2";
import { HomeSection } from "./HomeSection";

const Home = () => {
  return (
    <main className="max-w-7xl lg:max-w-full mx-auto min-h-screen p-1 lg:p-10 ">
      <section className="flex flex-col lg:grid grid-cols-5 grid-flow-row gap-5 pb-10">
        <Slider />
        <div className="flex flex-col gap-5 col-span-1">
          <AdviceSlip />
          <WeatherCard />
        </div>
      </section>
      <HomeSection />
    </main>
  );
};
export default Home;
