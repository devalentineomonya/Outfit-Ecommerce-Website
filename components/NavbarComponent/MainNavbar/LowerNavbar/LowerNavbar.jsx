import { IoMdSearch } from "react-icons/io";
import { IoBagHandleOutline } from "react-icons/io5";
import Link from "next/link";
import React from "react";
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
    icon: <IoBagHandleOutline size={20} />,
    href: "/cart",
  },
  {
    icon: <IoMdSearch size={20}/>,
    href: "/search",
  },
  {
    icon: "Login",
    href: "/login",
  },
];
const LowerNavbar = () => {
  return (
    <div className="h-14 w-full flex justify-center items-center dark:bg-slate-950 bg-gray-50">
      <div className="max-w-[1400px] w-full flex justify-between items-center ">
        <nav className="dark:text-white text-slate-600 font-semibold ">
          <ul className="flex justify-center items-center gap-x-4 w-full">
            {navbarItems &&
              navbarItems.map((navbarItem, i) => (
                <li
                  key={i}
                  className="hover:text-slate-950 dark:hover:text-slate-300 whitespace-nowrap"
                >
                  <Link href={navbarItem.href}>{navbarItem.name}</Link>
                </li>
              ))}
          </ul>
        </nav>
        <div className="font-bold text-2xl flex justify-center items-center w-full pl-10 text-slate-700 whitespace-nowrap">
          KNECOMPUTER PROJECTS
        </div>
        <div className="flex justify-center items-center gap-x-2 ">
          {iconItems &&
            iconItems.map((iconItem, i) => (
              <div
                key={i}
                className="dark:text-white text-slate-600 font-semibold  hover:text-slate-950 dark:hover:text-slate-300"
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
