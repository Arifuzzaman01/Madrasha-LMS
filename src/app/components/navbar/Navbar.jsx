import Image from "next/image";
import React from "react";
import Navigation from "./Navigation";
import Link from "next/link";
import { FaBell, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Search from "./Search";
import Notification from "./Notification";

const Navbar = () => {
  return (
    <div className="  bg-white/90 backdrop:backdrop-blur-2xl  border-b border-primary/50  sticky top-0 z-50 shadow-sm">
      <div className=" hidden   bg-primary text-white/80 py-2 sm:flex items-center justify-between px-4">
        {/* academic name */}
        <h3>Kalir Tabak Amiria Dhakil Madrasha, Barguna.</h3>
        {/* social media links */}
        <ul className="flex gap-4 mt-1">
          <li className=" border border-primary hover:border-white/80 rounded-sm hover:rotate-45 p-0.5 hoverEffect hover:scale-105">
            <Link href="#" className="hover:text-emerald-300 ">
              <FaFacebookF />
            </Link>
          </li>
          <li className=" hover:border border-white/90 rounded-sm hover:rotate-45 p-0.5 hoverEffect hover:scale-105">
            <Link href="#" className="hover:text-emerald-300">
              <FaYoutube />
            </Link>
          </li>
          <li className=" hover:border border-white/90 rounded-sm hover:rotate-45 p-0.5 hoverEffect hover:scale-105">
            <Link href="#" className="hover:text-emerald-300">
              <FaXTwitter />
            </Link>
          </li>
          <li className=" hover:border border-white/90 rounded-sm hover:rotate-45 p-0.5 hoverEffect hover:scale-105">
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
      {/* desktop view */}
      <div className="hidden md:flex items-center justify-between px-3">
        <Link href={"/"} className="flex-1">
          <Image
            src={"/nav-logo.png"}
            width={140}
            height={80}
            alt="navbar educate logo"
          />
        </Link>
        <div className="flex-2">
          <Navigation />
        </div>
      </div>
      {/* mobile view */}
      <div className=" flex items-center justify-between md:hidden mx-2">
        <div className="flex-1">
          <Navigation />
        </div>

        <Link href={"/"} className="flex-1">
          <Image
            src={"/nav-logo.png"}
            width={100}
            height={70}
            alt="navbar educate logo"
          />
        </Link>
        <div className="flex items-center gap-2">
           <Notification />
        <div >
          <Search />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
