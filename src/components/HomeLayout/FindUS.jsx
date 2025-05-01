import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";

const FindUs = () => {
  return (
    <div>
      <h3 className="font-bold space-y-6">Find Us</h3>

      <div className="w-full grid grid-rows-1 ">
        <button className="btn join-item bg-white  hover:bg-blue-400">
          <FaFacebook /> FaceBook
        </button>
        <button className="btn join-item bg-white hover:bg-black hover:text-white">
          {" "}
          <FaTwitter /> Twitter
        </button>
        <button className="btn join-item bg-white hover:bg-pink-400">
          <FaInstagram /> Instagram
        </button>
      </div>
    </div>
  );
};

export default FindUs;
