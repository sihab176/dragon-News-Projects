import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const { logInUser } = use(AuthContext);
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  // ! handleLogin ||
  const handleLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(email, password);
    logInUser(email, password)
      .then((result) => {
        // console.log(result);

        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        // console.log(error);
        setError(error.message);
      });
  };
  return (
    <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl mt-20">
      <div className="card-body">
        <h1 className="text-2xl text-center font-bold py-4 text-accent">
          Login your account
        </h1>
        <form onSubmit={handleLogIn} className="fieldset">
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
          <div>
            {error && <p className="text-red-500 text-[10px]">{error}</p>}
          </div>

          <button type="submit" className="btn btn-neutral mt-4">
            Login
          </button>
          <div>
            <p className="">
              Dont’t Have An Account ?
              <Link to="/auth/register" className="text-secondary link-hover">
                {" "}
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
