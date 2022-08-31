import React, { useState } from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { Link, useParams } from "react-router-dom";

export const Dropdown = (props) => {
  const [show, setShow] = useState(false);
  const { category } = useParams();
  const types = ["business", "general", "sports", "science"];
  console.log("param", category);
  const handleClickOutside = () => {
    setShow(false);
  };
  document.addEventListener("mousedown", handleClickOutside);

  return (
    <div className="relative text-left w-1/3 sm:w-full">
      <div className="hover:text-gold inline-flex shadow-xl">
        <button
          className="font-semibold inline-flex"
          onClick={() => setShow(!show)}
        >
          Category
          {show ? (
            <RiArrowDropUpLine style={{ fontSize: "1.5em" }} />
          ) : (
            <RiArrowDropDownLine style={{ fontSize: "1.5em" }} />
          )}
        </button>
      </div>
      <div
        className="transition-all transform -translate-y-3 duration-150 ease-in-out origin-top-right absolute right-0 mt-2 w-36  ring-1 ring-black ring-opacity-5 sm:divide-y sm:divide-gray-100 rounded-md shadow-md bg-inherit text-neutral-200 sm:bg-white sm:text-gray-900 p-2 capitalize  "
        style={{
          transform: show ? "translateY(0)" : "",
          visibility: show ? "visible" : "hidden",
          opacity: show ? "1" : "0",
        }}
      >
        {types.map((cat, index) => {
          return (
            <Link
              key={index}
              onClick={() => {
                setShow(false);
                props.show();
              }}
              className="ml-10 sm:ml-0 block py-2 px-3 hover:opacity-70 hover:shadow-md "
              to={`category/${cat}`}
            >
              {cat}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
