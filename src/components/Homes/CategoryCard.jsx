// src/components/Home/CategoryCard.tsx
"use client";
import React from "react";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";

const CategoryCard = ({ category }) => {
  const { name, courseCount, icon, bgImage } = category;

  return (
    <Link 
      href={`/courses?category=${name.toLowerCase().replace(/ /g, "-")}`}
      className="block h-full" 
    >
      <div
        className="relative p-5 md:p-8 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 md:gap-6 overflow-hidden group transition-all duration-300 bg-white text-gray-900 h-full"
      >
        {/* --- Shutter Overlay --- */}
        <div className={`absolute inset-0 bg-primary transform -translate-y-full transition-transform duration-500 ease-in-out ${category.popular ? 'translate-y-0' : 'group-hover:translate-y-0'} z-0`}></div>

        {/* --- Left Icon --- */}
        <div
          className="relative z-10 p-3 md:p-4 rounded-t-full rounded-br-full bg-emerald-50 text-emerald-600 transition-all duration-300 group-hover:bg-white/20 group-hover:text-white shrink-0"
        >
          {React.cloneElement(icon, { 
            size: typeof window !== 'undefined' && window.innerWidth < 768 ? 22 : 28 
          })}
        </div>

        {/* --- Content --- */}
        <div className={`relative z-10 flex-1 min-w-0 transition-colors duration-300 ${category.popular ? 'text-white' : 'group-hover:text-white'}`}>
          <h3 className="text-lg md:text-xl font-bold truncate leading-tight">
            {name}
          </h3>
          <p className="text-xs md:text-sm font-semibold opacity-70 group-hover:opacity-100 transition-opacity">
            {courseCount} Courses
          </p>
        </div>

        {/* --- Right Arrow Button --- */}
        <div
          className="relative z-10 p-2 md:p-3 rounded-full bg-gray-50 text-gray-400 transition-all duration-300 group-hover:bg-emerald-600 group-hover:text-white shrink-0"
        >
          <HiArrowRight
            className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform"
          />
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;