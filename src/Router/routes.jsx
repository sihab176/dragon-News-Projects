import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home";
import HomePage from "../MainPages/HomePage";
import CategoryNews from "../Pages/CategoryNews";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import AuthLayout from "../components/HomeLayout/AuthLayout";
import NewsDetails from "../MainPages/NewsDetails";
import PrivetRoutes from "../Provider/PrivetRoutes";
import Loading from "../Loding/Loading";
// import Category from "../MainPages/Category";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "/category/:id",
        Component: CategoryNews,
        loader: () => fetch("/news.json"),
        hydrateFallbackElement: <Loading />,
      },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "/auth/login",
        Component: Login,
      },
      {
        path: "/auth/register",
        Component: Register,
      },
    ],
  },

  {
    path: "/news-details/:id",
    element: (
      <PrivetRoutes>
        <NewsDetails />
      </PrivetRoutes>
    ),
    loader: () => fetch("/news.json"),
    hydrateFallbackElement: <Loading />,
  },
  {
    path: "/*",
    element: <div>login page</div>,
  },
]);

export default router;
