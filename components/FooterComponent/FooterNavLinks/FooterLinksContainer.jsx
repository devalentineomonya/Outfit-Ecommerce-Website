import Link from "next/link";
import React from "react";

const FooterLinksContainer = ({ categoryName, footerLinks }) => {
  return (
    <div>
      <h3 className="text-slate-900 font-semibold text-xl mb-12">{categoryName}</h3>
      <ul>
        {footerLinks &&
          footerLinks.map((footerLink, index) => (
            <li  key={index} className="text-slate-700 hover:text-slate-950 mt-3 font-semibold ">
              <Link href={footerLink.href}>{footerLink.name}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default FooterLinksContainer;
