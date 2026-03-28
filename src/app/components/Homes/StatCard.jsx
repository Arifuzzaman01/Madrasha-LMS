// src/components/Hero/StatCard.tsx
"use client";
import React from "react";

const StatCard = ({ icon, count, label, variant, borderBR, image, className = "" }) => {
  const isGreen = variant === "green";
  
  return (
    <div 
      className={`relative p-8 rounded-[2rem] shadow-2xl flex flex-col items-center lg:items-start space-y-3 transition-all duration-500 overflow-hidden group hover:scale-[1.02]
        ${isGreen ? "bg-emerald-700 text-white shadow-emerald-200/50" : "bg-white text-gray-900 shadow-gray-200/50"} 
        ${className} 
        ${borderBR ? "border-r-4 border-b-2 border-emerald-600/90" : ""}
      `}
      style={{
        backgroundImage: image ? `url(${image})` : 'none',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }}
    >
      {/* Black Opacity Shutter/Sutter Down Effect */}
      {image && (
        <div className="absolute inset-0 bg-black/60 transform -translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0 z-0"></div>
      )}

      {/* Content Wrap - z-10 ensures text stays above the shutter */}
      <div className="relative z-10 flex flex-col items-center lg:items-start space-y-3 w-full">
        <div className={`p-4 rounded-2xl transition-colors duration-300 ${
            isGreen 
              ? "bg-white/10 text-emerald-100 group-hover:bg-white/20" 
              : "bg-emerald-50 text-emerald-600 group-hover:bg-emerald-100"
          }`}>
          {icon}
        </div>
        
        <h2 className={`text-4xl font-black transition-colors duration-300 ${image ? "group-hover:text-emerald-400" : "text-white/90"}`}>
          {count}
        </h2>
        
        <p className={`font-semibold uppercase tracking-wider text-[10px] transition-colors duration-300 ${
            isGreen || image ? "text-emerald-50 group-hover:text-white" : "text-gray-400"
          }`}>
          {label}
        </p>
      </div>
    </div>
  );
};

export default StatCard;