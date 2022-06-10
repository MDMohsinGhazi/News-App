import React from "react";

export const NewsCard = (props) => {
  return (
    <div>
      <h1>{props.children}</h1>
      <img src={props.img} alt="img" />
    </div>
  );
};
