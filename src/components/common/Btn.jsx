import Link from "next/link";
import React from "react";
import { HiArrowRight } from "react-icons/hi";

const Btn = ({ text, href = "#", Icon ,clsName}) => {
  return (
    <div className="relative inline-block overflow-hidden rounded-full group">
      <Link
        href={href}
        className={`relative z-10 flex items-center gap-2  bg-primary text-white font-bold shadow-lg shadow-emerald-200 active:scale-95 transition-all duration-300 ${clsName ? clsName : 'px-8 py-4'}`}
      >
        {/* টেক্সট এবং আইকন z-10 এ থাকায় শ্যাটারের উপরে থাকবে */}
        {Icon ? (
          <span className="relative z-20 flex items-center gap-2">
            {text}
            < Icon className="group-hover:translate-x-1 transition-transform duration-300" />
          </span>
        ) : (
          <span className="relative z-20 flex items-center gap-2">
            {text}
            <HiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
          </span>
        )}

        {/* Black Opacity Shutter - z-0 তে রাখা হয়েছে */}
        <div className="absolute inset-0 bg-black/50 transform -translate-x-full transition-transform duration-500 ease-in-out group-hover:translate-x-0 z-0 pointer-events-none"></div>
      </Link>
    </div>
  );
};

export default Btn;
