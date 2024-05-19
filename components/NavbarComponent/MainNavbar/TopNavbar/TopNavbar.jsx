
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { IoMdArrowForward } from "react-icons/io";
import styles from "../../css/navbar.module.css";
import CountDown from "./CountDown";

const TopNavbar = () => {

  return (
    <div className="h-12 bg-black w-full flex justify-center items-center">
      <div className="flex justify-center items-center gap-x-3 ">
        <p className="font-thin text-[10px] capitalize">
          Get 25% off this summer sale. Grab it Faster!!!!{" "}
          <CountDown/>
        </p>
        <Link href="/shop">
          <Button
            className={` ${styles.shopButton} text-white text-[10px]  transition-all ease-in-out duration-300 flex justify-center items-center rounded-full border h-8 px-2 font-thin border-gray-400`}
            variant="bordered"
            endContent={
              <IoMdArrowForward
                size={18}
                className={`  transition-all ease-in-out duration-300  relative left-0 text-gray-400 ${styles.arrowIcon}`}
              />
            }
          >
            SHOP NOW
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default TopNavbar;
