import React from "react";
import AxiosInstance from "../../utilities/axios-instance";
import { useQuery } from "react-query";

export const AdviceSlip = () => {
  const { isLoading, isError, error, data } = useQuery("advice", () => {
    return AxiosInstance.get("/quotes");
  });
  if (isLoading) {
    return (
      <div className="w-full h-full bg-gradient-to-br from-[#ADA996] via-[#F2F2F2] to-[#EAEAEA] rounded-md shadow text-center text-oxfordBlue  py-3 px-2">
        Loading...
      </div>
    );
  }
  if (isError) {
    return (
      <div className="w-full h-full max-h-fit bg-gradient-to-br from-[#ADA996] via-[#F2F2F2] to-[#EAEAEA] rounded-md shadow text-center text-oxfordBlue  py-3 px-2">
        {error.message}
      </div>
    );
  }
  return (
    <div className="w-full h-full bg-gradient-to-br from-[#ADA996] via-[#F2F2F2] to-[#EAEAEA] rounded-md shadow text-center text-oxfordBlue flex justify-center flex-col relative">
      <h1 className="font-semibold pt-2 pb-5 px-2 text-clip text-justify">
        {data.data.quote.text}
      </h1>
      <p className="text-neutral-500 text-right text-sm absolute right-2 bottom-2">
        by {data.data.quote.author ?? "unknown"}
      </p>
    </div>
  );
};
