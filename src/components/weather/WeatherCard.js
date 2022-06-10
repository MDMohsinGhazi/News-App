import React from "react";
import { Time } from "./Time";
import { Weather } from "./Weather";

export const WeatherCard = () => {
  const time = new Date().getHours();
  const img = time >= 6 && time <= 18 ? "day" : "night";
  return (
    <div className="relative">
      <img
        className="absolute inset-0 rounded-md overflow-hidden h-full w-full"
        src={process.env.PUBLIC_URL + `img/${img}.png`}
        alt="img"
      />
      <Time />
      <Weather />
    </div>
  );
};
