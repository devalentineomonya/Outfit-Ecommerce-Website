import { Button } from "@nextui-org/button";
import React from "react";

const FooterNewsLetter = () => {
  return (
    <div className="flex flex-1 w-1/2 flex-col  bg-gray-50 p-3">
      <h1 className="text-5xl text-slate-900 font-bold">KNECOMP</h1>
      <p p className="text-slate-700 font-semibold ">
        Sign up to our news letter to get update when we upload or make any
        modifications to our projects.
      </p>
      <div className="flex justify-start items-center mt-4 gap-x-2">
        <input type="text" className="w-1/2 min-w-52 h-10 rounded-full px-6 py-3 text-slate-950 font-lg outline-none border" placeholder="Enter you email to sign up " />
        <Button className="bg-slate-900 text-gray-50 rounded-full ">
          Subscribe
        </Button>
      </div>
    </div>
  );
};

export default FooterNewsLetter;
