import React from "react";
import FooterLinksContainer from "./FooterLinksContainer";

const footerLinks = [
  {
    name: "Products",
    footerNavLinks: [
      {
        name: "TShirt",
        href: "/",
      },
      {
        name: "Jacket",
        href: "/documentation",
      },
      {
        name: "Shoes",
        href: "/databases",
      },
      {
        name: "Trousers",
        href: "/full-projects",
      },
      {
        name: "SunGlasses",
        href: "/logo-and-design",
      },
    ],
  },
  {
    name: "Categories",
    footerNavLinks: [
      {
        name: "Men",
        href: "/current",
      },
      {
        name: "Women",
        href: "/past-projects",
      },
      {
        name: "Kids",
        href: "/top",
      },
      {
        name: "Gifts",
        href: "/most-requested",
      },
    ],
  },
  {
    name: "Social Media",
    footerNavLinks: [
      {
        name: "Instagram",
        href: "/",
      },
      {
        name: "Facebook",
        href: "/documentation",
      },
      {
        name: "Youtube",
        href: "/databases",
      },
   
      {
        name: "Tweeter",
        href: "/logo-and-design",
      },
    ],
  },
];

const FooterNavLinks = () => {
  return (
    <div className="flex flex-1 w-1/2  bg-gray-50 p-3">
      {footerLinks &&
        footerLinks.map((footerLink, index) => (
          <FooterLinksContainer
            categoryName={footerLink.name}
            footerLinks={footerLink.footerNavLinks}
            key={index}
          />
        ))}
    </div>
  );
};

export default FooterNavLinks;
