import React from "react";
import Heder from "../../components/Heder/Heder";
import { Outlet } from "react-router";
import LetestNews from "../../components/LetestNews/LetestNews";
import Navbar from "../../components/Navbar/Navbar";

import LeftAside from "../../components/HomeLayout/LeftAside";
import RightAside from "../../components/HomeLayout/RightAside";

const Home = () => {
  return (
    <div>
      <header>
        <Heder />
        <section className="w-11/12 mx-auto my-4 ">
          <LetestNews />
        </section>
        <nav className="w-11/12 mx-auto my-4 ">
          <Navbar />
        </nav>
      </header>
      <main className="w-11/12 mx-auto my-4   grid grid-cols-12 gap-6">
        <aside className="col-span-3 sticky top-0 h-fit">
          <LeftAside />
        </aside>
        <section className="col-span-6">
          <Outlet></Outlet>
        </section>
        <aside className="col-span-3 sticky top-0 h-fit">
          <RightAside />
        </aside>
      </main>
    </div>
  );
};

export default Home;
