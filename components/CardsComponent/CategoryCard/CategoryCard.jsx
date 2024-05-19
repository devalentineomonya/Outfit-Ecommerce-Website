import Image from "next/image";
import React from "react";
import testImage from "@/assets/images/herobg1.jpg";
import { Button } from "@nextui-org/button";
const CategoryCard = () => {
  return (
    <div className="relative w-full aspect-[9/10] rounded-lg overflow-hidden">
      <Image src={testImage} className="w-full h-full " alt="Image Alt"/>
      <div className="absolute left-5 bottom-5">
        <h1 className="font-semibold text-4xl overflow-hidden whitespace-nowrap text-ellipsis ">
          DOCUMENTATION
        </h1>
        <Button className="rounded-full bg-gray-50 text-slate-900 font-bold mt-4">
          View Projects
        </Button>
      </div>
    </div>
  );
};

export default CategoryCard;
