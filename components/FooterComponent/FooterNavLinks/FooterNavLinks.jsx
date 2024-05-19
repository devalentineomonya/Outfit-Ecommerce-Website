import React from "react";
import FooterLinksContainer from "./FooterLinksContainer";

const footerLinks = [
  {
    name: "Products",
    footerNavLinks: [
      {
        name: "Home",
        href: "/",
      },
      {
        name: "Documentation",
        href: "/documentation",
      },
      {
        name: "Databases",
        href: "/databases",
      },
      {
        name: "Full Projects",
        href: "/full-projects",
      },
      {
        name: "Logo and Designs",
        href: "/logo-and-design",
      },
    ],
  },
  {
    name: "Categories",
    footerNavLinks: [
      {
        name: "Current Projects",
        href: "/current",
      },
      {
        name: "Past Projects",
        href: "/past-projects",
      },
      {
        name: "Top Projects",
        href: "/top",
      },
      {
        name: "Most Requested Project",
        href: "/most-requested",
      },
    ],
  },
  {
    name: "Social Media",
    footerNavLinks: [
      {
        name: "Facebook",
        href: "/",
      },
      {
        name: "WhatsApp",
        href: "/documentation",
      },
      {
        name: "Instagram",
        href: "/databases",
      },
      {
        name: "Other Website",
        href: "/full-projects",
      },
      {
        name: "Youtube",
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
