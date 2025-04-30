import React from "react";
import { FaGithub } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

const SocalLogin = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl">Login With</h1>
      <div>
        <button className="btn btn-outline btn-secondary mb-2 w-full mt-4 ">
          <FcGoogle size={24} /> Login With Google
        </button>
        <button className="btn btn-outline btn-primary mb-2 w-full">
          <FaGithub size={24} /> Login With Github
        </button>
      </div>
    </div>
  );
};

export default SocalLogin;
