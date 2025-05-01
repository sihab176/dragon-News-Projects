import React, { useEffect, useState } from "react";
import Heder from "../components/Heder/Heder";
import RightAside from "../components/HomeLayout/RightAside";
import { useLoaderData, useParams } from "react-router";
import NewsDetailsCard from "./NewsDetailsCard";

const NewsDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [news, setNews] = useState({});
  //   console.log(news);

  useEffect(() => {
    const newsData = data.find((singleData) => singleData.id == id);
    setNews(newsData);
  }, [id, data]);

  return (
    <div>
      <header>
        <Heder />
      </header>
      <main className="w-11/12 mx-auto grid grid-cols-12 mt-6 gap-6">
        <section className="col-span-9">
          <NewsDetailsCard news={news} />
        </section>
        <aside className="col-span-3">
          <RightAside />
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
