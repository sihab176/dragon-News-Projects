import React, { use } from "react";
import { FaGithub } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Provider/AuthProvider";

const SocalLogin = () => {
  const { googleSignUp, githubLogin } = use(AuthContext);

  // google Login \\
  const googleLogin = () => {
    googleSignUp()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // github login \\
  const handleGithubLogin = () => {
    githubLogin()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1 className="font-bold text-2xl">Login With</h1>
      <div>
        <button
          onClick={googleLogin}
          className="btn btn-outline btn-secondary mb-2 w-full mt-4 "
        >
          <FcGoogle size={24} /> Login With Google
        </button>
        <button
          onClick={handleGithubLogin}
          className="btn btn-outline btn-primary mb-2 w-full"
        >
          <FaGithub size={24} /> Login With Github
        </button>
      </div>
    </div>
  );
};

export default SocalLogin;
