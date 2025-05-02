import React, { use } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router";

const PrivetRoutes = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();
  console.log(location);

  if (loading) {
    return (
      <div className="flex justify-center items-center mt-60">
        {" "}
        <div className="w-16 h-16 border-4 border-dashed bg-blue-100 rounded-full animate-spin dark:border-violet-600"></div>
      </div>
    );
  }

  if (user && user?.email) {
    return children;
  }
  return <Navigate state={location.pathname} to="/auth/login"></Navigate>;
};

export default PrivetRoutes;
