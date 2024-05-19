import React from "react";

const FooterEnding = () => {
  return (
    <div className="h-12 bg-black w-full flex justify-center items-center">
      <div className="flex justify-between items-center gap-x-3 w-full max-w-[1400px]">
        <div>
            &copy; <span>OutFit Collections {new Date().getFullYear()}</span>
        </div>
        <div>
            <ul className="flex justify-center gap-x-3 items-center text-gray-50">
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
                <li>Cookies Policy</li>
            </ul>
        </div>
        
      </div>
    </div>
  );
};

export default FooterEnding;
