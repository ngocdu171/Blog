import React, { useContext } from "react";
import { NewsContext } from "../../context";
import Article from "./Article";

const News = (props) => {
  const { data } = useContext(NewsContext);
  console.log(data);
  return (
    <div className="all__news">
      {data
        ? data.articles.map((item, index) => (
            <Article data={item} key={index} />
          ))
        : "Loading"}
    </div>
  );
};

export default News;
