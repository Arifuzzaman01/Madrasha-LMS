"use client";
import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

const ReviewSlider = ({ reviews }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {reviews.map((item) => (
        <div 
          key={item.id} 
          className="group relative bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-100 overflow-hidden"
        >
          {/* --- Shutter Overlay --- */}
          <div className="absolute inset-0 bg-emerald-900/90 -translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-0 pointer-events-none"></div>

          {/* Content Wrapper */}
          <div className="relative z-10 space-y-6">
            {/* Rating Stars */}
            <div className="flex gap-1 text-amber-500">
              {[...Array(item.rating)].map((_, i) => (
                <FaStar key={i} size={16} />
              ))}
            </div>

            {/* Review Text */}
            <p className="text-gray-600 text-lg italic leading-relaxed transition-colors duration-500 group-hover:text-emerald-50 line-clamp-5 ">
              {item.review}
            </p>

            {/* User Info */}
            <div className="flex items-center gap-4 pt-4 border-t border-gray-50 group-hover:border-emerald-700 transition-colors">
              <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-emerald-100">
                <Image 
                  src={"/reviwer.png"} 
                  alt={item.name} 
                  fill 
                  className="object-cover" 
                />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 group-hover:text-white transition-colors">
                  {item.name}
                </h4>
                <p className="text-xs text-emerald-600 group-hover:text-emerald-200 font-medium">
                  {item.role}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewSlider;