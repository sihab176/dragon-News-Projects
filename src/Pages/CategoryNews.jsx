import React from "react";
import { useParams } from "react-router";

const CategoryNews = () => {
  const { id } = useParams();
  console.log(id);
  console.log("heeeeeeeeeeeeeeeeeeeeeeeeeee");
  return <div>hello......</div>;
};

export default CategoryNews;
