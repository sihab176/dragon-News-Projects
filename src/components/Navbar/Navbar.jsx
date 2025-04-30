import React from "react";
import { NavLink } from "react-router";
import userPng from "../../assets/user.png";

const Navbar = () => {
  return (
    <section className="flex items-center justify-between">
      <div className=""></div>
      <div className="flex items-center gap-5 text-primary">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
      <div className="flex gap-5 items-center">
        <img src={userPng} alt="" />
        <button className="btn btn-accent px-7 text-white rounded-none font-bold">
          LogIn
        </button>
      </div>
    </section>
  );
};

export default Navbar;
