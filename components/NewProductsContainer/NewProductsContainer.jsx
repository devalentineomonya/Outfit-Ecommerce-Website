import React from "react";
import ProductCard from "../CardsComponent/ProductsCard/ProductCard";

const NewProductsContainer = () => {
  return (
    <div className="">
      <div className="py-4 flex justify-center items-center flex-col mb-6 ">
        <h2 className="text-slate-900 font-bold text-3xl whitespace-nowrap overflow-hidden text-ellipsis">
          LATEST PROJECTS
        </h2>
        <p className="text-sm font-thin text-slate-700  mt-5 text-center">
          Fugiat sint proident esse occaecat dolore nulla et do cillum est
          excepteur. Elit fugiat eu pariatur anim ad ad excepteur fugiat ipsum
          elit ullamco tempor laboris. Tempor id Lorem duis laboris adipisicing
          excepteur. Aliqua voluptate et commodo aliquip nostrud eiusmod
          adipisicing Lorem qui culpa irure.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-1 gap-y-2 w-full">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default NewProductsContainer;
