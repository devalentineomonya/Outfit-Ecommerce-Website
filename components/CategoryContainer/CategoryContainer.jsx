import React from "react";
import CategoryCard from "../CardsComponent/CategoryCard/CategoryCard";

const CategoryContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-1 gap-y-2 w-full mt-12">
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
    </div>
  );
};

export default CategoryContainer;
