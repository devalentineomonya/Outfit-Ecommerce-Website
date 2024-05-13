import Image from "next/image";
import React from "react";
import textImage from "@/assets/images/herobg4.jpg";

const ProductCard = () => {
  return (
    <div className="w-full aspect-[9/10] cursor-pointer hover:scale-95 transition-all ease-in-out duration-300">
      <div className="relative w-full h-[80%] bg-green-20 overflow-hidden rounded-md">
        <Image src={textImage} className="h-full" />
      </div>
      <div className="w-full h-[20%] mt-2">
        <h3 className="text-slate-950 font-bold text-xl ">Product Name</h3>
        <p className="text-slate-400 whitespace-nowrap overflow-hidden text-ellipsis">Small Product description or prod category</p>
        <h3 className="text-slate-950 font-bold text-md ">Kes 1700</h3>
      </div>
    </div>
  );
};

export default ProductCard;
