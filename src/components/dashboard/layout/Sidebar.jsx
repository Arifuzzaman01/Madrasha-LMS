"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  HiOutlineHome,
  HiOutlineChartBar,
  HiOutlineChevronLeft,
  HiOutlineAcademicCap,
  HiOutlineX,
} from "react-icons/hi";
import { IoIosArrowForward } from "react-icons/io";
import { Tooltip } from "react-tooltip";

const menuItems = [
  {
    id: "dash",
    name: "Dashboard",
    icon: <HiOutlineHome size={22} />,
    path: "/dashboard",
  },
  {
    id: "course",
    name: "My Courses",
    icon: <HiOutlineAcademicCap size={22} />,
    path: "/dashboard/courses",
  },
  {
    id: "stats",
    name: "Analytics",
    icon: <HiOutlineChartBar size={22} />,
    path: "/dashboard/stats",
  },{
    id:"add-course",
    name:"Add New Course",
    icon:<HiOutlineAcademicCap size={22} />,
    path: "/dashboard/publishCourses"

  }
];

export default function Sidebar({ isMobile ,setIsMenuOpen}) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState("dash");

  return (
    <aside
      className={`relative h-screen bg-white border-r border-gray-100 transition-all duration-300 ${isMobile ? "block" : "hidden"} md:flex flex-col z-50
      ${isCollapsed ? "w-20" : "w-64"}`}
    >
      {/* Toggle Button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className={`absolute -right-3 top-2/5 bg-emerald-600 text-white p-1 rounded-full shadow-lg transition-transform hover:scale-110 ${isMobile ? "hidden" : "block"}`}
      >
        {isCollapsed ? <IoIosArrowForward  /> : <HiOutlineChevronLeft />}
      </button>

      {/* Brand Logo */}
      <div className="flex justify-between items-center">
        <Link href="/" className="p-6 flex items-end gap-3 overflow-hidden hover:bg-green-50 w-full">
        <div className="w-10 h-8  rounded-lg flex-shrink-0" >
          <Image src={"/footer-logo.png"} width={80} height={80} alt="Dashboard Logo" />
        </div>
        {!isCollapsed && (
          <span className="font-black text-xl tracking-tight text-gray-900 -mb-2">
            XyZ LMS
          </span>
        )}
      </Link>
      <div className=" border-gray-50 md:hidden">
        <button
          onClick={() => setIsMenuOpen(false)}
          className="rounded-lg bg-gray-50 text-gray-500"
        >
          <HiOutlineX size={20} />
        </button>
      </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 space-y-2 mt-4">
        {menuItems.map((item) => (
          <div key={item.id}>
            <Link href={item?.path} onClick={()=> setActiveItem(item.id)}
              data-tooltip-id="sidebar-tooltip"
              data-tooltip-content={isCollapsed ? item.name : ""}
              className={`flex items-center gap-4 p-3 rounded-sm cursor-pointer transition-all 
                ${isCollapsed ? "justify-center" : "hover:bg-emerald-50 hover:text-emerald-700 font-bold text-sm"} ${activeItem === item?.id && "bg-primary text-gray-100"}`}
            >
              <div className="flex-shrink-0">{item.icon}</div>
              {!isCollapsed && <span>{item.name}</span>}
            </Link>
          </div>
        ))}
      </nav>

      {/* Tooltip Configuration */}
      <Tooltip
        id="sidebar-tooltip"
        place="right"
        style={{
          backgroundColor: "#065f46",
          fontSize: "12px",
          borderRadius: "8px",
          fontWeight: "bold",
        }}
      />
    </aside>
  );
}
