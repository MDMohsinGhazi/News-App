import React from "react";

export const Modal = () => {
  return (
    <div className="fixed top-12 left-0 bg-LightGray w-full h-full outline-none overflow-hidden  z-10 flex justify-center items-center">
      <div className="flex space-x-10 ">
        <div className="h-4 w-4 rounded-full bg-oxfordBlue animate-ping"></div>
        <div className="h-4 w-4 rounded-full bg-oxfordBlue animate-ping animation-delay-200"></div>
        <div className="h-4 w-4 rounded-full bg-oxfordBlue animate-ping animation-delay-400 "></div>
      </div>
    </div>
  );
};
