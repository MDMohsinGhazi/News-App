import React from "react";
import AxiosInstance from "../../utilities/axios-instance";
import { useQuery } from "react-query";

export const AdviceSlip = () => {
  const { isLoading, isError, error, data } = useQuery("advice", () => {
    return AxiosInstance.get("/quotes");
  });
  if (isLoading) {
    return (
      <div className="w-full h-full bg-gradient-to-br from-[#ADA996] via-[#F2F2F2] to-[#EAEAEA] rounded-md shadow text-center text-oxfordBlue  py-3 px-2 hidden lg:block">
        Loading...
      </div>
    );
  }
  if (isError) {
    return (
      <div className="w-full h-full max-h-fit bg-gradient-to-br from-[#ADA996] via-[#F2F2F2] to-[#EAEAEA] rounded-md shadow text-center text-oxfordBlue  py-3 px-2 hidden lg:block">
        {error.message}
      </div>
    );
  }
  return (
    <div className="bg-gradient-to-br from-[#ADA996] via-[#F2F2F2] to-[#EAEAEA] text-oxfordBlue relative p-5 w-72 h-full lg:flex items-center justify-center hidden ">
      <h1 className="font-semibold text-xl ">{data.data.quote.text}</h1>
      <p className="text-neutral-500 text-right text-sm absolute right-3 bottom-4">
        By {data.data.quote.author ?? "unknown"}
      </p>
    </div>
  );
};
