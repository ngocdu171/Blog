import { Button } from "reactstrap";
import React, { useContext, useState } from "react";
import { NewsContext } from "../../context";
import Article from "./Article";

const News = (props) => {
  const { data, bitcoin } = useContext(NewsContext);
  // console.log(data);
  const [data1, setData1] = useState(false);
  console.log("print from news: ", bitcoin);
  const [name, setName] = useState();
  // const getname = (subject) => {
  //   alert("ban da chon sach: ", subject);
  // }
  return (
    <div className="all__news">
      {data1
        ? data1.articles.map((item, index) => (
            <Article data={item} key={index} />
          ))
        : "Loading"}
      <div>
        kaskdakd
      </div>
    </div>
  );
};

export default News;
