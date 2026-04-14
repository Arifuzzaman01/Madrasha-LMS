"use client";
import React, { useState, useEffect } from "react";
import {
  HiOutlineSearch,
  HiOutlineBell,
  HiOutlineUserCircle,
  HiOutlineMenuAlt2,
  HiOutlineX,
} from "react-icons/hi";
import { Tooltip } from "react-tooltip";
import Sidebar from "./Sidebar";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // লজিক: মিডিয়াম ডিভাইসের উপরে গেলে অটোমেটিক মেনু বন্ধ হবে
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header className="h-16 bg-white border-b border-gray-100 flex items-center justify-between px-6 sticky top-0 z-40">
        {/* Hamburger Menu - Only visible on Mobile */}
        <button
          onClick={() => setIsMenuOpen(true)}
          className="p-2.5 rounded-xl md:hidden hover:bg-gray-50 transition-colors"
        >
          <HiOutlineMenuAlt2 size={22} className="text-gray-600" />
        </button>

        {/* Search Bar */}
        <div className="relative w-full max-w-md hidden sm:block">
          <HiOutlineSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search for courses..."
            className="w-full pl-12 pr-4 py-2 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-emerald-500/10 text-sm outline-none font-medium"
          />
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-4">
          <button className="p-2.5 text-gray-500 hover:bg-gray-50 rounded-xl transition-colors">
            <HiOutlineBell size={22} />
          </button>

          {/* User Profile */}
          <div data-tooltip-id="profile-tooltip" className="flex items-center gap-3 cursor-pointer p-1 pr-3 rounded-2xl hover:bg-gray-50 transition-all border border-transparent hover:border-gray-100">
            <div className="relative w-9 h-9 rounded-xl overflow-hidden bg-emerald-100 flex items-center justify-center text-emerald-700">
              <HiOutlineUserCircle size={28} />
            </div>
            <div className="hidden lg:block text-left">
              <p className="text-xs font-black text-gray-900 leading-none">Arifuzzaman</p>
              <p className="text-[9px] text-gray-400 mt-1 uppercase font-black">Pro Developer</p>
            </div>
          </div>
          
          <Tooltip id="profile-tooltip" clickable place="bottom-end" /* style configurations as before */ />
        </div>
      </header>

      {/* --- Mobile Drawer (Smooth Effect) --- */}
      <div className="md:hidden">
        {/* Backdrop overlay */}
        <div 
          className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] transition-opacity duration-300 ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Sidebar Container */}
        <div 
          className={`fixed top-0 left-0 h-full w-[280px] bg-white z-[70] shadow-2xl transition-transform duration-300 ease-in-out transform ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          {/* Close Button inside Drawer */}
          
          
          {/* Sidebar Component with custom mobile prop if needed */}
          <div className="h-full">
             <Sidebar isMobile={true} setIsMenuOpen={setIsMenuOpen} />
          </div>
        </div>
      </div>
    </>
  );
}