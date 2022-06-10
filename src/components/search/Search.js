import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { createSearchParams, useNavigate } from "react-router-dom";
export const Search = (props) => {
  const [input, setInput] = useState();
  const navigate = useNavigate();

  const handlClick = (evt) => {
    navigate({
      pathname: "/search",
      search: `?${createSearchParams({ q: input })}`,
    });
    evt.preventDefault();
  };

  return (
    <form
      onSubmit={handlClick}
      className="bg-white text-oxfordBlue flex rounded-sm w-fit"
    >
      <input
        type="text"
        className="outline-none  px-2 py-1 rounded-sm"
        placeholder="Search"
        onChange={(evt) => setInput(evt.target.value)}
      />
      <button
        type="submit"
        onClick={props.show}
        className="border-l border-oxfordBlue/40 px-4 py-1 rounded-r-sm hover:bg-gray-200"
        disabled={!input}
      >
        <BsSearch size={20} />
      </button>
    </form>
  );
};
