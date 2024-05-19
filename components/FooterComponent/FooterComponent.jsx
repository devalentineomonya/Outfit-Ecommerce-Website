import React from "react";
import FooterNewsLetter from "./FooterNewsLetter/FooterNewsLetter";
import FooterNavLinks from "./FooterNavLinks/FooterNavLinks";
import MaxWidthContainer from "../MaxWidthContainer/MaxWidthContainer";

const FooterComponent = () => {
  return (
    <MaxWidthContainer>
      <div className="h-[300px] w-full flex lg:flex-row flex-col ">
        <FooterNewsLetter />
        <FooterNavLinks />
      </div>
    </MaxWidthContainer>
  );
};

export default FooterComponent;
