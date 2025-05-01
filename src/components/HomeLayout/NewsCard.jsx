import React, { useState } from "react";
import { IoMdBookmark } from "react-icons/io";

const NewsCard = ({ newses }) => {
  const { title, rating, total_view, author, thumbnail_url, details, tags } =
    newses;

  const formattedDate = new Date(author.published_date).toLocaleDateString();

  const [expanded, setExpanded] = useState(false);

  return (
    // <div>
    //   <h1>{title}</h1>
    // </div>
    <div className="card bg-base-100 shadow-xl mb-5">
      <div className="card-body">
        <div className="flex justify-between items-center gap-3 text-sm text-gray-600 mb-2 bg-base-200 p-5">
          <div className="flex items-center gap-4">
            <img
              src={author.img}
              alt={author.name}
              className="w-8 h-8 rounded-full"
            />{" "}
            <br />
            <span>{author.name}</span> • <span>{formattedDate}</span>
          </div>
          <div>
            <button>
              <IoMdBookmark size={24} />
            </button>
          </div>
        </div>

        <h2 className="card-title text-lg font-semibold">{title}</h2>
        <figure>
          <img
            src={thumbnail_url}
            alt={title}
            className="h-52 w-full object-cover"
          />
        </figure>

        <p className="text-gray-700 text-sm">
          {expanded ? details : `${details.slice(0, 150)}...`}
          <button
            onClick={() => setExpanded(!expanded)}
            className="ml-2 text-blue-600 hover:underline font-medium"
          >
            {expanded ? "See less" : "See more"}
          </button>
        </p>

        {/* <div className="flex flex-wrap gap-2 mt-3">
          {tags.map((tag, idx) => (
            <span key={idx} className="badge badge-outline text-xs">
              #{tag}
            </span>
          ))}
        </div> */}

        <div className="flex justify-between items-center mt-4 text-sm">
          <div className="flex items-center gap-1 text-warning">
            {/* <FaStar /> */}
            <span>{rating.number}</span>
            {rating.badge && (
              <span className="badge badge-success badge-sm ml-2">
                {rating.badge}
              </span>
            )}
          </div>
          <div className="flex items-center gap-1 text-gray-600">
            {/* <FaEye /> */}
            <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
