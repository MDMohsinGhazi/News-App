import React from "react";

export const NotFound = () => {
  return (
    <div className="fixed top-12 left-0 bg-LightGray w-full h-full overflow-hidden z-10 flex flex-col  items-center ">
      <img src={process.env.PUBLIC_URL + "img/srch.png"} />
      <h1 className="font-bold text-5xl text-gray-500">
        sorry, no search found
      </h1>
    </div>
  );
};
