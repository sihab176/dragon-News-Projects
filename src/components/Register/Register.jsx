import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {
  const { createUser, setUser, updateUserProfile } = use(AuthContext);

  const [nameError, setNameError] = useState("");
  const navigate = useNavigate();

  // !handle Register ||
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (name.length < 5) {
      setNameError("invalid Name");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const users = result.user;
        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...users, displayName: name, photoURL: photo });
            navigate("/");
          })
          .catch((error) => {
            // console.log(error);
            setUser(users);
          });

        // console.log(users);
      })
      .catch((error) => {
        // console.log(error);
      });
  };

  return (
    <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl mt-20">
      <div className="card-body">
        <h1 className="text-2xl text-center font-bold py-4 text-accent">
          Register your account
        </h1>
        <form onSubmit={handleRegister} className="fieldset">
          {/* name */}
          <label className="label">Your Name</label>
          <input
            type="text"
            className="input"
            placeholder="Name"
            name="name"
            required
          />
          {nameError && <p className="text-red-500 text-[10px]">{nameError}</p>}

          {/* photo url */}
          <label className="label">Photo Url</label>
          <input
            type="text"
            className="input"
            placeholder="Photo Url"
            name="photo"
            required
          />
          {/* email */}
          <label className="label">Email</label>
          <input
            type="email"
            className="input"
            placeholder="Email"
            name="email"
            required
          />
          {/* password */}
          <label className="label">Password</label>
          <input
            type="password"
            className="input"
            placeholder="Password"
            name="password"
            required
          />

          <button type="submit" className="btn btn-neutral mt-4">
            Login
          </button>
          <div>
            <p className="">
              You already Have An Account ?
              <Link to="/auth/login" className="text-secondary link-hover">
                {" "}
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
