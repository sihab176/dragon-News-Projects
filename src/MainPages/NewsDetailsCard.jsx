import React from "react";
import { Link } from "react-router";

const NewsDetailsCard = ({ news }) => {
  console.log(news);
  return (
    <section>
      <p>{news.title}</p>
      <h1>Dragon News</h1>

      <div className="space-y-6">
        <img
          className="w-full h-[350px] object-cover"
          src={news.image_url}
          alt=""
        />
        <h3 className="text-2xl font-semibold">{news.title}</h3>
        <p>{news.details}</p>
        <Link
          className="btn-secondary text-white btn"
          to={`/category/${news.id}`}
        >
          Back to category
        </Link>
      </div>
    </section>
  );
};

export default NewsDetailsCard;
