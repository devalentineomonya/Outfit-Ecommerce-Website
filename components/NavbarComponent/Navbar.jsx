import React from "react";
import TopNavbar from "./MainNavbar/TopNavbar/TopNavbar";
import LowerNavbar from "./MainNavbar/LowerNavbar/LowerNavbar";

const Navbar = () => {
  return (
    <div className="z-[1020]">
      <TopNavbar />
      <LowerNavbar />
    </div>
  );
};

export default Navbar;
