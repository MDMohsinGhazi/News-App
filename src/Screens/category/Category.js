import React from "react";
import { useParams } from "react-router-dom";
import { useInfiniteQuery } from "react-query";
import { NewsCard } from "../../components/newsCard/NewsCard";
import AxiosInstance from "../../utilities/axios-instance";
import { Modal } from "../../utilities/Modal";

export const Category = () => {
  const { category } = useParams();
  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery(
      ["category", category],
      ({ pageParam = 1 }) => {
        return AxiosInstance.get(
          `news/headlines?category=${category}&language=en&pageSize=18&page=${pageParam}`
        );
      },
      {
        enabled: !!category,
        refetchOnWindowFocus: false,
        getNextPageParam: (lastPage, pages) => pages.length + 1,
        // getPreviousPageParam: (firstPage, allPages) => firstPage.prevCursor,
      }
    );

  if (isLoading || !data) {
    return <Modal />;
  }

  return (
    <div className="px-3 sm:px-5 md:px-7 lg:px-10 py-4 min-h-screen">
      <h1>
        <span className="font-bold text-red-900 text-3xl">|</span>
        <span className="font-semibold text-3xl text-oxfordBlue capitalize">
          {category}
        </span>
      </h1>
      <div className="pt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-flow-row gap-5 ">
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
          className="px-4 py-2 ring-1 rounded-sm ring-black bg-oxfordBlue font-bold text-white"
          disabled={!hasNextPage}
        >
          {isFetchingNextPage ? "Loading..." : "Load More"}
        </button>
      </div>
    </div>
  );
};
