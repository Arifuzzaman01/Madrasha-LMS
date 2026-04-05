// src/components/Courses/CourseFilters.jsx
"use client";
import React, { useState, useRef, useEffect } from "react";
import {
  HiOutlineSearch,
  HiOutlineFilter,
  HiOutlineBookOpen,
  HiChevronDown,
} from "react-icons/hi";
import Btn from "../common/Btn";
import { FaArrowDownAZ, FaArrowDownZA } from "react-icons/fa6";

export default function CourseFilters() {
  const [showClasses, setShowClasses] = useState(false);
  const [selectedClass, setSelectedClass] = useState("All");
  const [sortOrder, setSortOrder] = useState("recent");
  const dropdownRef = useRef(null);

  // ক্লিক আউটসাইড করলে ড্রপডাউন বন্ধ করার লজিক
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowClasses(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const classes = ["All", "10", "9", "8", "7", "5"];

  return (
    <div className=" z-40 w-full ">
      <div className="bg-white/90 backdrop-blur-md border border-emerald-100 md:p-4  shadow-sm flex flex-col md:flex-row items-center gap-4">
        {/* --- ১. Search Bar --- */}
        <div className="relative w-full md:flex-1 group hidden md:block">
          <HiOutlineSearch
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-emerald-600 transition-colors"
            size={20}
          />
          <input
            type="text"
            placeholder="Search by subject or teacher..."
            className="w-full pl-12 pr-4 py-3 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-emerald-500/20 outline-none text-sm font-bold text-gray-700 transition-all placeholder:text-gray-400"
          />
        </div>

        {/* --- ২. Action Controls --- */}
        <div className="flex items-center justify-between w-full md:w-auto gap-3">
          {/* Class Filter Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setShowClasses(!showClasses)}
              className={`p-3 rounded-xl border flex items-center gap-2 transition-all duration-300 ${
                showClasses
                  ? "bg-emerald-700 text-white border-emerald-700 shadow-lg shadow-emerald-100"
                  : "bg-white text-gray-600 border-gray-100 hover:border-emerald-200"
              }`}
            >
              <HiOutlineFilter size={20} />
              <span className="text-xs font-black uppercase hidden sm:block">
                {selectedClass === "All" ? "Class" : `Class ${selectedClass}`}
              </span>
              <HiChevronDown
                className={`transition-transform duration-300 ${showClasses ? "rotate-180" : ""}`}
              />
            </button>

            {/* Dropdown Menu */}
            {showClasses && (
              <div className="absolute bottom-full md:top-full -right-24 md:right-0 mt-3 w-44 h-fit bg-white shadow-sm rounded-2xl border border-gray-50 p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                <p className="text-[10px] font-black text-gray-400 px-3 py-2 uppercase tracking-tighter">
                  Filter by Class
                </p>
                <div className="grid grid-cols-1 gap-1">
                  {classes.map((cls) => (
                    <button
                      key={cls}
                      onClick={() => {
                        setSelectedClass(cls);
                        setShowClasses(false);
                      }}
                      className={`w-full text-left px-4 py-2.5 text-sm font-bold rounded-xl transition-all ${
                        selectedClass === cls
                          ? "bg-emerald-50 text-emerald-700"
                          : "text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      Class {cls}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sort by Date */}
          <div
            className="p-1 bg-white text-gray-600 border border-gray-100 rounded-xl hover:border-emerald-200 hover:text-emerald-700 transition-all group flex items-center gap-2"
            title="Sort by Newest"
          >
            <button onClick={()=> setSortOrder("recent")} className={`${
              sortOrder === "recent"
                ? "bg-primary text-white"
                : "hover:bg-primary hover:text-white hoverEffect"
            } p-2.5 rounded-xl`}>
              <FaArrowDownAZ />
            </button>
            <span className="text-sm">Sort</span>
            <button onClick={()=> setSortOrder("oldest")} className={`${
              sortOrder === "oldest"
                ? "bg-primary text-white"
                : "hover:bg-primary hover:text-white hoverEffect"
            } p-2.5 rounded-xl`}>
              <FaArrowDownZA />
            </button>
          </div>

          {/* Vertical Divider (Hidden on mobile) */}
          <div className="hidden md:block w-[1px] h-8 bg-gray-100 mx-1"></div>

          {/* My Enrolled Classes Button */}
          <div className="hidden md:block">
            <Btn
            text="My Classes"
            href="/myCourses"
            Icon={HiOutlineBookOpen}
            clsName="md:py-3 md:px-5 text-sm"
          ></Btn>
          </div>
          <div className=" md:hidden">
            <Btn
          
            href="/myCourses"
            Icon={HiOutlineBookOpen}
            clsName="md:py-3 md:px-5 text-3xl"
          ></Btn>
          </div>
        </div>
      </div>
    </div>
  );
}
