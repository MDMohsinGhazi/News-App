import React, { useState } from "react";
import AxiosInstance from "../../utilities/axios-instance";
import { useQuery } from "react-query";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Modal } from "../../utilities/Modal";

export const Slider = () => {
  const [news, setNews] = useState(null);
  const [page, setPage] = useState(0);

  const { isLoading, isIdle, isError, error, data } = useQuery(
    "slider",
    () => {
      return AxiosInstance.get(`/news/headlines?country=in&pageSize=30&page=1`);
    },
    {
      onSuccess: (data) => {
        setNews(data.data.articles);
      },
      refetchOnWindowFocus: false,
    }
  );
  console.log(page);

  if (news === null) {
    return null;
  }

  if (isIdle) {
    return null;
  }

  if (isLoading) {
    return <Modal />;
  }
  if (isError) {
    return (
      <div className="relative container">
        <img
          className="aspect-[16/9]"
          src={process.env.PUBLIC_URL + "img/news.jpg"}
          alt="loading"
        />
        <h1 className="absolute bottom-0 bg-black/40 text-white ">
          {error.message}
        </h1>
      </div>
    );
  }
  return (
    <div className="relative">
      <div className="aspect-[16/9]">
        <img
          src={news[page].urlToImage ?? process.env.PUBLIC_URL + "img/news.jpg"}
          alt="img"
          className="w-full h-full overflow-hidden"
        />
        <div className="absolute text-xl bottom-0 text-white bg-black/50  h-full md:h-fit w-full overflow-hidden px-2 py-5 text-left ">
          <h1 className="font-bold text-xl md:text-2xl ">{news[page].title}</h1>
          <p className="inline">{news[page].description}</p>
          <a
            href={news[page].url}
            target="_blank"
            className="text-gray-100 font-semibold hover:text-gray-300"
          >
            Read more.
          </a>
        </div>
      </div>
      <button
        className="absolute left-0 top-1/2 py-1 mx-0.5 bg-black/40 hover:bg-black/70"
        disabled={page === 0}
        onClick={() => {
          setPage((page) => page - 1);
        }}
      >
        <FiChevronLeft style={{ color: "white", fontSize: "2em" }} />
      </button>
      <button
        className="absolute right-0 top-1/2 mx-0.5 px-0.5 py-1 bg-black/40 hover:bg-black/70"
        disabled={page === news.length - 2}
        onClick={() => setPage((page) => page + 1)}
      >
        <FiChevronRight style={{ color: "white", fontSize: "2em" }} />
      </button>
    </div>
  );
};
