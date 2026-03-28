"use client";
import Link from "next/link";
import React, { useState } from "react";
import { IoIosArrowDown, IoMdMenu, IoMdClose } from "react-icons/io";
import { HiOutlineUserCircle } from "react-icons/hi";
import Search from "./Search";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  const menuItems = [
    {
      name: "Home",
      href: "/",
      subMenu: [
        { name: "Service", href: "/service" },
        { name: "Features", href: "/features" },
      ],
    },
    {
      name: "About",
      href: "/about",
      subMenu: [
        { name: "Our Vision", href: "/vision" },
        { name: "Teachers", href: "/teachers" },
      ],
    },
    { name: "Courses", href: "/courses" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const toggleSubMenu = (idx) => {
    setActiveSubMenu(activeSubMenu === idx ? null : idx);
  };

  return (
    <nav >
      <div className="flex justify-between items-center h-16">
        {/* 2. Desktop Menu (Hidden on Mobile) */}
        <ul className="hidden md:flex gap-8 items-center font-semibold text-gray-600">
          {menuItems.map((item, idx) => (
            <li key={idx} className="group relative py-5">
              <div className="flex gap-1 items-center cursor-pointer hover:text-emerald-600 transition-all">
                <Link href={item.href}>{item.name}</Link>
                {item.subMenu && (
                  <IoIosArrowDown className="group-hover:rotate-180 transition-transform duration-300" />
                )}
              </div>

              {/* Underline Hover Effect */}
              <span className="absolute bottom-4 left-0 w-0 h-0.5 bg-emerald-600 transition-all duration-300 group-hover:w-full"></span>

              {/* Desktop Dropdown */}
              {item.subMenu && (
                <div className="absolute top-full left-0 w-48 bg-white shadow-xl  rounded-b-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0 overflow-hidden">
                  <ul className="py-2">
                    {item.subMenu.map((sub, sIdx) => (
                      <li key={sIdx}>
                        <Link
                          href={sub.href}
                          className="block px-5 py-3 text-sm hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
                        >
                          {sub.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* 3. Right Side Actions (Login Button) */}
        <div className="hidden md:flex items-center gap-4">
            <Search />
          <button className="flex items-center gap-2 px-5 py-2.5 bg-emerald-700 text-white rounded-full font-medium hover:bg-emerald-800 transition-all">
            <HiOutlineUserCircle size={20} />
            Login
          </button>
        </div>

        {/* 4. Mobile Menu Toggle Button */}
        <button
          className="md:hidden p-2 text-gray-700 bg-gray-50 rounded-lg"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <IoMdMenu size={28} />
        </button>
      </div>

      {/* 5. Mobile Sidebar Menu (Drawer) */}
      <div
        className={`fixed inset-0 bg-black/60 z-[60] md:hidden transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div
          className={`absolute top-0 right-0 h-full w-[300px] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out p-6 ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
          onClick={(e) => e.stopPropagation()} 
        >
          <div className="flex justify-between items-center mb-10">
            <span className="text-xl font-bold text-emerald-700">
              Educate Menu
            </span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 bg-gray-100 rounded-full"
            >
              <IoMdClose size={24} />
            </button>
          </div>

          <ul className="space-y-4">
            {menuItems.map((item, idx) => (
              <li key={idx}>
                <div className="flex justify-between items-center py-2 text-gray-800 font-semibold border-b border-gray-50">
                  <Link
                    href={item.href}
                    onClick={() => !item.subMenu && setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.subMenu && (
                    <button onClick={() => toggleSubMenu(idx)} className="p-1">
                      <IoIosArrowDown
                        className={`transition-transform duration-300 ${activeSubMenu === idx ? "rotate-180" : ""}`}
                      />
                    </button>
                  )}
                </div>

                {/* Mobile Sub-menu Accordion */}
                {item.subMenu && activeSubMenu === idx && (
                  <ul className="mt-2 space-y-1 bg-gray-50 rounded-xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-300">
                    {item.subMenu.map((sub, sIdx) => (
                      <li key={sIdx}>
                        <Link
                          href={sub.href}
                          className="block px-4 py-3 text-gray-600 text-sm active:bg-emerald-100"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {sub.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          <div className="absolute bottom-8 left-6 right-6">
            <button className="w-full bg-emerald-700 text-white py-4 rounded-2xl font-bold shadow-md shadow-emerald-100">
              Student Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
