import AxiosInstance from "../../utilities/axios-instance";
import { useQuery } from "react-query";
import { useSearchParams } from "react-router-dom";
import { Modal } from "../../utilities/Modal";
import { NewsCard } from "../../components/newsCard/NewsCard";
import { NotFound } from "../../utilities/NotFound";
export const SearchResult = () => {
  const [searchParems] = useSearchParams();
  const q = searchParems.get("q");

  const { isLoading, isFetching, data, isError, error } = useQuery(
    ["search", q],
    () => {
      return AxiosInstance.get(`news/everything?q=${q}&pageSize=36`);
    },
    {
      refetchOnWindowFocus: false,
    }
  );

  if (isLoading || isFetching) {
    return <Modal />;
  }
  if (isError) {
    return (
      <div className="px-4 sm:px-6 md:px-8 lg:px-10 py-4 min-h-screen">
        {error.message}
      </div>
    );
  }
  if (data.data.articles.length === 0) {
    return <NotFound />;
  }
  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-10 py-4 min-h-screen">
      <h1>
        <span className="font-bold text-red-900 text-3xl">|</span>
        <span className="font-semibold text-3xl text-oxfordBlue capitalize">
          Search Reasults for "{q}"
        </span>
      </h1>
      <div className="pt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-flow-row gap-5 ">
        {data.data.articles.map((article, index) => (
          <NewsCard key={index} article={article} />
        ))}
      </div>
    </div>
  );
};
