"use client";
import React from "react";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaGraduationCap,
} from "react-icons/fa";
import { HiOutlineBookOpen } from "react-icons/hi";
import Link from "next/link";

const InstructorCard = ({ instructor }) => {
  return (
    <div className="w-fit">
      <div className=" group relative bg-gray-50 p-4 md:pt-10 pb-6 transition-all duration-500 overflow-hidden h-full flex flex-col items-center  rounded-lg ">
        {/* Opacity Shutter Overlay */}

        {/* Floating Social Links */}
        <div className="absolute left-[85%] top-8 lg:pt-5 flex flex-col gap-3 z-30 ">
          {[FaFacebookF, FaTwitter, FaYoutube].map((Icon, i) => (
            <Link
              key={i}
              href="#"
              className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors shadow-md"
            >
              <Icon size={14} />
            </Link>
          ))}
        </div>

        {/* --- Profile Image with Clip Path --- */}
        <div className=" relative w-[280px] h-[300px] rounded-md responsive-path overflow-hidden z-0 bg-gray-200">
          <Image
            src={"/about1.webp"}
            alt={instructor.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-black/40 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 z-10 pointer-events-none"></div>
        </div>

        {/* --- Info Card (White Floating Card) --- */}
        <div className="relative z-20 bg-white w-full rounded-3xl p-6 shadow-sm group-hover:shadow-none transition-all -mt-20 border border-gray-50">
          <h3 className="text-xl font-bold text-gray-950 text-center">
            {instructor.name}
          </h3>
          <p className="text-sm text-gray-500 text-center mb-4">
            {instructor.role}
          </p>

          <div className="flex justify-between items-center text-[11px] font-bold text-emerald-700 border-t border-gray-100 pt-4">
            <div className="flex items-center gap-1.5 uppercase tracking-wider">
              <HiOutlineBookOpen size={16} />
              {instructor.courses} Courses
            </div>
            <div className="flex items-center gap-1.5 uppercase tracking-wider">
              <FaGraduationCap size={16} />
              {instructor.students} Students
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;
