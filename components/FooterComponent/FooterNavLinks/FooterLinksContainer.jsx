import Link from "next/link";
import React from "react";

const FooterLinksContainer = ({ categoryName, footerLinks }) => {
  return (
    <div>
      <h3 className="">{categoryName}</h3>
      <ul>
        {footerLinks &&
          footerLinks.map((footerLink) => (
            <li>
              <Link href={footerLink.href}>{footerLink.name}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default FooterLinksContainer;
