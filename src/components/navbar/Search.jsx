"use client";
import React, { useState, useEffect, useRef } from "react";
import { IoSearch, IoClose } from "react-icons/io5";

const Search = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const inputRef = useRef(null);

  // সার্চ ওপেন হলে অটোমেটিক ইনপুট বক্সে ফোকাস হবে
  useEffect(() => {
    if (isSearchOpen) {
      inputRef.current?.focus();
    }
  }, [isSearchOpen]);

  return (
    <div className="flex items-center">
      {/* Search Toggle Button */}
      <button
        onClick={() => setIsSearchOpen(true)}
        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
      >
        <IoSearch size={24} className="text-emerald-700" />
      </button>

      {/* Full Width Search Overlay (Slide Down Animation) */}
      <div
        className={`absolute top-0 left-0 w-full h-16 bg-white z-[70] flex items-center px-4 md:px-8 shadow-md transition-all duration-300 ease-in-out ${
          isSearchOpen 
            ? "translate-y-0 opacity-100 visible" 
            : "-translate-y-full opacity-0 invisible"
        }`}
      >
        <div className="max-w-7xl mx-auto w-full flex items-center gap-4">
          <IoSearch size={22} className="text-gray-400" />
          
          <input
            ref={inputRef}
            type="text"
            placeholder="Search courses, lessons, or resources..."
            className="flex-1 h-full bg-transparent border-none focus:outline-none text-gray-700 text-lg font-medium"
          />

          {/* Close Button */}
          <button 
            onClick={() => setIsSearchOpen(false)}
            className="p-2 hover:bg-gray-100 rounded-full transition-all active:scale-90"
          >
            <IoClose size={26} className="text-gray-500" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;