import React from "react";
import AxiosInstance from "../../utilities/axios-instance";
import { useInfiniteQuery } from "react-query";
import { NewsCard } from "../../components/newsCard/NewsCard";
import { Modal } from "../../utilities/Modal";
export const HomeSection = () => {
  const {
    data,
    isLoading,
    isError,
    error,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery(
    ["Indian"],
    ({ pageParam = 1 }) => {
      return AxiosInstance.get(`/news/headlines?pageSize=18&page=${pageParam}`);
    },
    {
      refetchOnWindowFocus: false,
      getNextPageParam: (lastPage, pages) => pages.length + 1,
    }
  );

  if (isLoading) {
    return <Modal />;
  }
  if (isError) {
    return (
      <div className="p-4 sm:p-6 md:p-8 -mt-5 min-h-screen">
        {error.message}
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6 md:p-8 -mt-5 min-h-screen">
      <h1>
        <span className="font-bold text-red-900 text-3xl">|</span>
        <span className="font-semibold text-3xl text-oxfordBlue capitalize">
          Top headlines
        </span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-flow-row gap-3 sm:gap-5 mt-5 ">
        {data.pages.map((page) =>
          page.data.articles.map((article, index) => (
            <NewsCard key={index} article={article} />
          ))
        )}
      </div>
      <div className="flex flex-col items-center mx-auto my-5">
        <button
          type="button"
          onClick={() => fetchNextPage()}
          className="px-4 py-2 ring-1 ring-black bg-oxfordBlue font-bold text-white"
          disabled={!hasNextPage}
        >
          {isFetchingNextPage ? "Loading.." : "Load More"}
        </button>
      </div>
    </div>
  );
};
