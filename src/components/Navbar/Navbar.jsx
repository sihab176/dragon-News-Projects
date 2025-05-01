import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userPng from "../../assets/user.png";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOutUser } = use(AuthContext);
  // console.log(user.email);

  //LogOut \\
  const handleLogOut = () => {
    logOutUser()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <section className="flex items-center justify-between">
      <div className="">{user && user.email}</div>
      <div className="flex items-center gap-5 text-primary">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
      <div className="flex gap-5 items-center">
        <img src={userPng} alt="" />

        {user ? (
          <button
            onClick={handleLogOut}
            className="btn btn-accent px-7 text-white rounded-none font-bold"
          >
            LogOut
          </button>
        ) : (
          <Link to="/auth/login">
            <button className="btn btn-accent px-7 text-white rounded-none font-bold">
              LogIn
            </button>
          </Link>
        )}
      </div>
    </section>
  );
};

export default Navbar;
