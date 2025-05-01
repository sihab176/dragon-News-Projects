import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home";
import HomePage from "../MainPages/HomePage";
import CategoryNews from "../Pages/CategoryNews";
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
      },
    ],
  },
  {
    path: "/auth",
    element: <div>login page</div>,
  },
  {
    path: "/news",
    element: <div>login page</div>,
  },
  {
    path: "/*",
    element: <div>login page</div>,
  },
]);

export default router;
