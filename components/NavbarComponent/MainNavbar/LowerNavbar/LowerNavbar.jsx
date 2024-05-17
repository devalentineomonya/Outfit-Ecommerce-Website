"use client";
import { IoMdSearch } from "react-icons/io";
import { IoBagHandleOutline } from "react-icons/io5";
import Link from "next/link";
import React, { useState } from "react";
import { TbMenu } from "react-icons/tb";
import { TbX } from "react-icons/tb";
const navbarItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Database",
    href: "/database",
  },
  {
    name: "Documentation",
    href: "/documentation",
  },
  {
    name: "Full Project",
    href: "/full-project",
  },
  {
    name: "About",
    href: "/about",
  },
];

const iconItems = [
  {
    icon: <IoMdSearch size={20} />,
    href: "/search",
  },
  {
    icon: <IoBagHandleOutline size={20} />,
    href: "/cart",
  },
  {
    icon: "Login",
    href: "/login",
  },
];

const LowerNavbar = () => {
  const [showSideMenu, setShowSideMenu] = useState(false);
  function toggleSidebar() {
    setShowSideMenu(!showSideMenu);
  }

  return (
    <div className="h-14 w-full flex justify-center items-center dark:bg-slate-950 bg-gray-50 sticky top-0 ">
      <div className="max-w-[1400px] w-full flex justify-between items-center ">
        <div
          className="lg:hidden pl-6 dark:text-white text-slate-600 font-semibold  hover:text-slate-950 dark:hover:text-slate-300 cursor-pointer "
          onClick={() => toggleSidebar()}
        >
          <TbMenu
            size={36}
            className={`${showSideMenu ? "hidden" : "block"}`}
          />
          <TbX size={36} className={`${showSideMenu ? "block" : "hidden"}`} />
        </div>

        <nav
          className={`dark:text-white text-slate-600 font-semibold fixed w-1/2 h-full lg:static lg:w-fit lg:h-fit lg:shadow-none shadow-[26px_-1px_25px_-25px_rgba(204,204,204,0.74)] top-28 transition-all ease-in-out duration-300  dark:bg-slate-950 bg-gray-50  ${
            showSideMenu ? "left-0" : "left-[-500px]"
          }`}
        >
            <ul className="flex  items-start justify-start flex-col  gap-x-4 w-fit lg:px-2 lg:flex-row lg:items-center">
              {navbarItems &&
                navbarItems.map((navbarItem, i) => (
                  <li
                    key={i}
                    className="hover:text-slate-950 dark:hover:text-slate-300 whitespace-nowrap mt-6 lg:mt-0 pl-4 lg:pl-0"
                  >
                    <Link
                      href={navbarItem.href}
                      onClick={() => toggleSidebar()}
                    >
                      {navbarItem.name}
                    </Link>
                  </li>
                ))}
            </ul>
        </nav>
        <div className="font-bold text-lg sm:text-2xl flex justify-center lg:justify-start items-center w-full lg:pl-10 text-slate-700 whitespace-nowrap cursor-default">
          KNECOMPUTER PROJECTS
        </div>
        <div className="flex justify-center items-center gap-x-2  pr-4 lg:pr-0 ">
          {iconItems &&
            iconItems.map((iconItem, i) => (
              <div
                key={i}
                className="dark:text-white text-slate-600 font-semibold  hover:text-slate-950 dark:hover:text-slate-300 "
              >
                <Link href={iconItem.href}>{iconItem.icon}</Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default LowerNavbar;
