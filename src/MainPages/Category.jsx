import React, { use } from "react";
import { NavLink } from "react-router";

const categoryPromice = fetch("/categories.json").then((res) => res.json());

const Category = () => {
  const categories = use(categoryPromice);
  //   console.log( categories );
  return (
    <div>
      <h2 className="font-bold text-center py-4 bg-base-300">Categories</h2>
      <div className="grid grid-cols-1 gap-1">
        {categories.map((category) => (
          <NavLink
            to={`/category/${category.id}`}
            key={category.id}
            className={
              "btn bg-base-100 hover:bg-green-200 border-0 text-accent"
            }
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Category;
