// src/components/Hero/HeroBanner.tsx
import React from "react";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";
import { FaGraduationCap, FaStar, FaPlay } from "react-icons/fa";
import { IoLibraryOutline } from "react-icons/io5";
import { FiUsers } from "react-icons/fi";
import StatCard from "./StatCard"; // Import the client component
import Btn from "./Btn";

const HeroBanner = () => {
  return (
    <section
      className="relative bg-white py-8 md:py-12 lg:py-14 overflow-hidden"
      style={{
        backgroundImage: `url(${"/banner.png"})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {/* Background Shapes */}
      <div className="absolute top-20 left-10 w-6 h-6 bg-blue-400 rounded-full blur-xl opacity-30 animate-pulse"></div>
      <span className="absolute inset-0 bg-black/30 z-0"></span>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Server Side Content */}
          <div className="space-y-8 z-10 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-xs font-bold border border-emerald-100">
              <FaGraduationCap size={18} />
              <span>KEEP LEARNING</span>
            </div>

            <h1 className="text-3xl md:text-[50px] font-black text-white/70 leading-[1.2]">
              মৃত্যু অবদি শিক্ষার ধারা অভ্যাহত থাকুক, <br /> তবেই হবে- <br />
              <span className="text-4xl md:text-6xl text-emerald-600"> প্রকৃত জ্ঞানী</span>
            </h1>

            <p className="text-green-100/80 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed">
              আপনার দ্বীনি ও আধুনিক শিক্ষার সমন্বয়ে তৈরি সেরা অনলাইন
              প্ল্যাটফর্ম। অভিজ্ঞ ওস্তাদদের তত্ত্বাবধানে ডিজিটাল পদ্ধতিতে শিখুন
              কিতাব ও আধুনিক বিষয়সমূহ।
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
              {/* <Link
                href="/courses"
                className="group flex items-center gap-2 px-8 py-4 bg-emerald-700 text-white rounded-full font-bold shadow-lg shadow-emerald-200 hover:bg-emerald-800 transition-all active:scale-95"
              >
                Find Courses
                <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link> */}
              <Btn text="Find Courses" href="/courses" />

              <div className="flex items-center gap-3">
                <div className="flex text-emerald-500">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <FaStar key={i} size={14} />
                  ))}
                </div>
                <div className="text-white/90 font-bold">
                  4.8{" "}
                  <span className="text-gray-400 font-medium text-sm ml-1">
                    Rating
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Visual Components */}
          <div className="relative">
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Stat Card 1 (Client Component for interaction) */}
              <StatCard
                icon={<FiUsers size={30} />}
                count="1250+"
                label="Enrolled Students"
                variant="green"
                className="lg:-translate-y-10"
              />

              {/* Stat Card 2 (Client Component) */}
              <StatCard
                icon={<IoLibraryOutline size={30} />}
                count="3652+"
                label="Finished Session"
                variant="white"
                borderBR
                image="/s0.png"
              />

              {/* Course Preview Card (Server Side) */}
              <div className="hidden md:col-span-2 bg-white p-6 rounded-[2.5rem] shadow-md border border-gray-100 md:flex flex-col md:flex-row gap-6 items-center">
                <div className="w-full md:w-40 h-32 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-700">
                  <FaPlay size={24} />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-2 text-[10px] font-bold text-emerald-600 uppercase mb-1">
                    <span className="bg-emerald-100 px-2 py-0.5 rounded">
                      Success Rate
                    </span>
                    <span className="flex items-center">
                      <FaStar className="text-amber-500 mr-1" /> 4.8
                    </span>
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg"></h3>
                  <p className="text-gray-400  mt-1">
                    250 Lessons • 450+ Students
                  </p>
                </div>
                {/* <div className="text-2xl font-black text-emerald-700">$120.00</div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
