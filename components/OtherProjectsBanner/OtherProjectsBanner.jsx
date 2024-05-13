import React from "react";
import styles from "./otherprojectsbanner.module.css";
import { Button } from "@nextui-org/button";
const OtherProjectsBanner = () => {
  return (
    <div className="w-full h-fit mt-12">
      <div className="w-full h-[600px]">
        <div
          className={`w-full h-3/4  relative rounded-xl ${styles.homeBanner}`}
        ></div>
        <div className="flex justify-center items-center flex-col mt-6">
          <h2 className="text-slate-900 font-bold text-3xl whitespace-nowrap overflow-hidden text-ellipsis">
            PREVIOUS PROJECTS
          </h2>
          <p className="text-sm font-thin text-slate-700  mt-5 text-center">
            Fugiat sint proident esse occaecat dolore nulla et do cillum est
            excepteur. Elit fugiat eu pariatur anim ad ad excepteur fugiat ipsum
          </p>
          <Button className="bg-slate-950 dark:bg-gray-50 text-slate-50 dark:text-slate-950 rounded-full pt-1 mt-4">
            VIEW PROJECTS
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OtherProjectsBanner;
