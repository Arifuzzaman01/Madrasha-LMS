import Image from "next/image";
import React from "react";
import Navigation from "./Navigation";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className=" bg-white/90 backdrop:backdrop-blur-2xl  border-b border-primary/50  sticky top-0 z-50 shadow-sm">
      <div className=" hidden   bg-primary text-white/80 py-2 sm:flex items-center justify-between px-4">
        {/* academic name */}
        <h3>Kalir Tabak Amiria Dhakil Madrasha, Barguna.</h3>
        {/* social media links */}
        <ul className="flex gap-4 mt-1">
          <li className="border hover:border-white/80 rounded-sm hover:rotate-45 p-0.5 hoverEffect hover:scale-105">
            <Link href="#" className="hover:text-emerald-300 ">
              <FaFacebookF />
            </Link>
          </li>
          <li className="border hover:border-white/90 rounded-sm hover:rotate-45 p-0.5 hoverEffect hover:scale-105">
            <Link href="#" className="hover:text-emerald-300">
              <FaYoutube />
            </Link>
          </li>
          <li className="border hover:border-white/90 rounded-sm hover:rotate-45 p-0.5 hoverEffect hover:scale-105">
            <Link href="#" className="hover:text-emerald-300">
              <FaXTwitter />
            </Link>
          </li>
          <li className="border hover:border-white/90 rounded-sm hover:rotate-45 p-0.5 hoverEffect hover:scale-105">
            <Link href="#" className="hover:text-emerald-300">
              <FaInstagram />
            </Link>
          </li>
        </ul>
        {/* contact info */}
        <div className="flex items-center gap-4">
          <p className="text-sm">Contact: 017XXXXXXXX</p>
          <p className="text-sm">Email: info@kalirtabakamiria.edu.bd</p>
        </div>
      </div>
      <div className="hidden md:flex items-center justify-between">
        <div className="flex-1">
          <Image
            src={"/nav-logo.png"}
            width={80}
            height={70}
            alt="navbar educate logo"
          />
        </div>
        <div className="flex-2">
          <Navigation />
        </div>
      </div>
      <div className=" flex items-center justify-between md:hidden">
        <div className="flex-2">
          <Navigation />
        </div>
        <div className="flex-1">
          <Image
            src={"/nav-logo.png"}
            width={80}
            height={70}
            alt="navbar educate logo"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
