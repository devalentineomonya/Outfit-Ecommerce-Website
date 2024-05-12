import { Button } from "@nextui-org/button";
import Link from "next/link";
import React from "react";
import { IoMdArrowForward } from "react-icons/io";
import styles from "./css/navbar.module.css"
const TopNavbar = () => {
  return (
    <div className="h-12 bg-black w-full flex justify-center items-center">
      <div className="flex justify-center items-center gap-x-3 text-sm sm:text-medium">
        2024 COMPUTER PROJECT IS READY GRAB A PROJECT TODAY
        <Link href="/shop">
          <Button className={` ${styles.shopButton} text-white  transition-all ease-in-out duration-300 flex justify-center items-center rounded-full border h-10`}  variant="bordered" endContent={<IoMdArrowForward size={18} className={`  transition-all ease-in-out duration-300  relative left-1 ${styles.arrowIcon}`} />}>
            SHOP NOW
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default TopNavbar;
