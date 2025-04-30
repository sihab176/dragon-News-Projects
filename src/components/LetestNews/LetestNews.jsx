import React from "react";
import Marquee from "react-fast-marquee";

const LetestNews = () => {
  return (
    <div className="flex gap-4 bg-base-200 p-3 items-center">
      <button className="btn btn-secondary">Latest </button>
      <Marquee pauseOnHover={true}>
        <p>
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Lorem ipsum dolor, sit amet consectetur . Germany vs Spain
          as....
        </p>
        <p>
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Lorem ipsum dolor, sit amet consectetur . Germany vs Spain
          as....
        </p>
      </Marquee>
    </div>
  );
};

export default LetestNews;
