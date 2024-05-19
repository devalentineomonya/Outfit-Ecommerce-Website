import React from "react";
import styles from "./homeherocomponent.module.css";
import { Button } from "@nextui-org/button";

const HomeHeroComponent = () => {
  return (
    <div
      className={`w-full h-[calc(100vh-135px)] rounded-xl mt-3 relative -z-20 ${styles.heroImage}`}
    >
      <div className="absolute bottom-3 flex justify-center items-center w-full flex-col lg:flex-row p-2 lg:p-10 -z-10">
        <div className="w-full">
          <h1 className="text-5xl font-bold whitespace-normal lg:whitespace-nowrap">OUTFIT COLLECTIONS</h1>
          <p className="mt-2 text-xl font-medium">
         Find out the best outfit collections. Offering our best quality products in Outfit collections
          </p>
        </div>
        <div className="w-full h-full flex justify-start lg:justify-end items-end mt-4 lg:mt-0">
            <Button className="rounded-full bg-white text-slate-600 hover:text-gray-50 transition-all ease-in-out duration-300 font-bold hover:bg-slate-900 ">Shop Now</Button>
        </div>
      </div>
    </div>
  );
};

export default HomeHeroComponent;
