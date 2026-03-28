import React from "react";
import Link from "next/link";
import Image from "next/image";
import { HiCheckCircle } from "react-icons/hi";
import { FaGraduationCap } from "react-icons/fa";
import Btn from "../common/Btn";

const AboutSection = () => {
  const points = [
    "আধুনিক ডিজিটাল মাদরাসা কারিকুলাম",
    "অভিজ্ঞ ওস্তাদ ও আইটি বিশেষজ্ঞদের সমন্বয়",
    "লাইভ ক্লাস এবং রেকর্ডেড লেকচার সুবিধা",
    "কুইজ এবং প্রগ্রেস ট্র্যাকিং সিস্টেম",
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* --- Left Side: Content --- */}
          <div className="space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-sm font-bold">
                <FaGraduationCap size={20} />
                <span>ABOUT OUR EDUCATE</span>
              </div>
              <h2 className="text-2xl md:text-4xl font-black text-gray-900 leading-tight">
                Empowering Students with <br />
                <span className="text-emerald-700">Digital Islamic Education</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Educate একটি পূর্ণাঙ্গ ডিজিটাল লার্নিং প্ল্যাটফর্ম যা মাদরাসার ঐতিহ্যবাহী শিক্ষার সাথে আধুনিক প্রযুক্তির মেলবন্ধন ঘটায়। আমাদের লক্ষ্য হলো প্রতিটি শিক্ষার্থীর কাছে মানসম্মত দ্বীনি ও আধুনিক শিক্ষা পৌঁছে দেওয়া।
              </p>
            </div>

            {/* Feature Points */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {points.map((point, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-700 font-medium">
                  <HiCheckCircle className="text-emerald-600 shrink-0" size={24} />
                  {point}
                </li>
              ))}
            </ul>

            <div className="pt-4">
             <Btn   text="আরও জানুন" href="/about" />
            </div>
          </div>

          {/* --- Right Side: Image Composition --- */}
          <div className="relative order-1 lg:order-2 h-[300px] sm:h-[400px] md:h-[500px] ">
            {/* Main Large Image */}
            <div className="absolute top-0 right-0 w-full sm:w-[85%] h-[100%] sm:h-[90%] rounded-md sm:rounded-[3rem] overflow-hidden sm:border-8 border-white shadow-2xl z-10 group">
               <Image 
                src="/about2.jpg" 
                alt="Students studying"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
               />
               {/* Shutter Overlay on Hover */}
               <div className="absolute inset-0 bg-black/30 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            </div>

            {/* Secondary Small Floating Image */}
            <div className="absolute bottom-0 left-0 w-[50%] h-[50%] rounded-[2rem] overflow-hidden border-8 border-white shadow-2xl z-20 group hidden sm:block">
               <Image 
                src="/about1.webp" 
                alt="Online class"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
               />
               <div className="absolute inset-0 bg-emerald-700/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-emerald-100 rounded-full -z-10 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-50 rounded-full -z-10"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;