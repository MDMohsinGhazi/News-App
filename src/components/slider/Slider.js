import React, { useState } from "react";
import axios from "axios";
import { useInfiniteQuery } from "react-query";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Loader } from "../../utilities/Loader";

export const Slider = () => {
  const [page, setPage] = useState(1);
  const { isLoading, isError, error, data, refetch } = useInfiniteQuery(
    ["slider", page],
    () => {
      return axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&pageSize=1&page=${page}&apiKey=a1a9cb8df89c4c68834d3d208c6bc0c4`
      );
    },
    {
      refetchOnWindowFocus: false,
    }
  );

  if (isLoading) {
    return (
      <div className="relative">
        <img
          className="aspect-video"
          src={process.env.PUBLIC_URL + "img/news.jpg"}
          alt="loading"
        />
        <div className="absolute bottom-1/2 right-1/2">
          <Loader />
        </div>
      </div>
    );
  }
  if (isError) {
    return (
      <div className="relative">
        <img
          className="aspect-video"
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
      {data.data.articles.map((article, index) => {
        return (
          <div className="aspect-video" key={index}>
            <img
              src={
                article.urlToImage || process.env.PUBLIC_URL + "img/news.jpg"
              }
              alt="img"
              className="w-full h-full overflow-hidden"
            />
            <h1 className="absolute text-xl bottom-0 text-white bg-black/40 w-full px-2 py-5 ">
              {article.description}
            </h1>
          </div>
        );
      })}
      <button
        className="absolute left-0 top-1/2 py-1 mx-0.5 hover:bg-black/40"
        disabled={page === 1}
      >
        <FiChevronLeft
          style={{ color: "white", fontSize: "2em" }}
          onClick={() => {
            setPage((page) => page - 1);
            refetch();
          }}
        />
      </button>
      <button className="absolute right-0 top-1/2 mx-0.5 px-0.5 py-1 hover:bg-black/40">
        <FiChevronRight
          onClick={() => setPage((page) => page + 1)}
          style={{ color: "white", fontSize: "2em" }}
        />
      </button>
    </div>
  );
};
