import { useEffect, useState } from "react";
import AxiosInstance from "../../utilities/axios-instance";
import { useQuery } from "react-query";
import { IoLocationOutline } from "react-icons/io5";

export const Weather = () => {
  const [coords, setCoords] = useState();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setCoords(position.coords);
    });
  }, []);

  const { isIdle, isLoading, isError, error, data } = useQuery(
    ["weather"],
    () => {
      return AxiosInstance.get(
        `/weather?lat=${coords.latitude}&lon=${coords.longitude}`
      );
    },
    {
      enabled: !!coords,
    }
  );
  console.log(data);

  if (isIdle) {
    return <h1>Ideal..</h1>;
  }
  if (isLoading) {
    return <div className="text-white">Loading...</div>;
  }
  if (isError) {
    return <div className="">{error.message}</div>;
  }
  return (
    <div className="relative text-white px-6 py-10 md:pb-10">
      <h1 className="items-center inline-flex pb-5">
        <div className="text-2xl ">
          <IoLocationOutline />
        </div>
        {data?.data.city}
      </h1>
      <div className="md:mt-24">
        <div className="flex justify-between ">
          <div className="text-5xl">
            {Math.floor(data?.data.temp - 273.15)}&#8451;
          </div>
          <div className="text-md leading-5 px-4 ">
            <div>
              Feels Like {Math.floor(data?.data.feels_like - 273.15)}
              &#8451;
            </div>
            <div>Humidity {data?.data.humidity}&#37;</div>
          </div>
        </div>
        <div className="text-xl capitalize">{data?.data.weather}</div>
      </div>
    </div>
  );
};
