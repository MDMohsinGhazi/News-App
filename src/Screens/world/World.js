import AxiosInstance from "../../utilities/axios-instance";
import { useInfiniteQuery } from "react-query";
import { NewsCard } from "../../components/newsCard/NewsCard";
import { Modal } from "../../utilities/Modal";

export const World = () => {
  const {
    data,
    isLoading,
    isError,
    error,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery(
    "world",
    ({ pageParam = 1 }) =>
      AxiosInstance.get(
        `/news/everything?domains=bbc.co.uk,aljazeera.com&pageSize=18&page=${pageParam}`
      ),
    {
      refetchOnWindowFocus: false,
      getNextPageParam: (_lastPage, pages) => pages.length + 1,
    }
  );

  if (isLoading || !data) {
    return <Modal />;
  }
  if (isError) {
    return <div>{error.message}</div>;
  }
  return (
    <div className="px-3 md:px-10 py-4 ">
      <h1>
        <span className="font-bold text-green-800 text-3xl">|</span>
        <span className="font-semibold text-3xl text-oxfordBlue">World</span>
      </h1>
      <div className="pt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-5 ">
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
          {isFetchingNextPage ? "Loading..." : "Load More"}
        </button>
      </div>
    </div>
  );
};
