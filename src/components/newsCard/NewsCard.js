import React from "react";
import dog from "./../../assets/dog2.jpg";

export const NewsCard = (props) => {
  const timeStemp = (time) => {
    const days = new Date().getDate() - new Date(time).getDate();
    const hours = new Date().getHours() - new Date(time).getHours();
    if (!days) {
      return hours + `${hours > 1 ? "hours" : "hour"}`;
    } else {
      return days + `${days > 1 ? "days" : "day"}`;
    }
  };
  return (
    <div className="bg-white relative shadow-md justify-center ">
      <img
        className="aspect-[4/3] min-h-1/2 w-full overflow-hidden"
        src={props.article.urlToImage || dog}
        alt="news"
      />
      <div className="p-2.5">
        <h1 className="text-xl font-semibold text-oxfordBlue sm:line-clamp-2 line-clamp-none ">
          {props.article.title}
        </h1>
        <p className="text-lg line-clamp-none md:line-clamp-5 mb-8">
          {props.article.description}
        </p>
        <a
          className="absolute -bottom-1 py-2 font-bold line-clamp-1  cursor-pointer"
          href={props.article.url}
          target="_blank"
        >
          <span className="text-xl text-yellow-500">|</span>
          <span className=" text-oxfordBlue ">{props.article.source.name}</span>
        </a>
        <p className="absolute -bottom-1 right-2 py-2 text-neutral-500/50 text-sm">
          {timeStemp(props.article.publishedAt)} ago
        </p>
      </div>
    </div>
  );
};
