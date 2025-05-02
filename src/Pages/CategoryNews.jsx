import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../components/HomeLayout/NewsCard";

const CategoryNews = () => {
  const data = useLoaderData();
  const { id } = useParams();

  const [category, setCategory] = useState();
  // console.log(category);

  useEffect(() => {
    if (id == "0") {
      setCategory(data);
      return;
    } else if (id == "1") {
      const filterData = data.filter(
        (news) => news.others.is_today_pick === true
      );
      setCategory(filterData);
    } else {
      const filterData = data.filter((news) => news.category_id == id);
      setCategory(filterData);
    }
  }, [data, id]);

  return (
    <div>
      <h1 className="font-bold text-2xl ml-5">Dragon News Home</h1>
      <div>
        {category?.map((newses) => (
          <NewsCard key={newses.id} newses={newses} />
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
