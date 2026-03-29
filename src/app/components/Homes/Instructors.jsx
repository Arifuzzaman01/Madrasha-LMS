
"use client";

import Image from "next/image";
import { useState } from "react";

import InstructorCard from "./InstructorCard";

const instructorsData = [
  {
    id: 1,
    name: "MD. Arifuzzaman",
    title: "English Lecturer",
    courses: 54,
    students: 125,
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "MD. Monaym Billah",
    title: "English Lecturer",
    courses: 35,
    students: 125,
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: 3,
    name: "Rakib Hasan",
    title: "English Lecturer",
    courses: 23,
    students: 125,
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 4,
    name: "MD. Kibria Zaman",
    title: "Web Developer",
    courses: 60,
    students: 125,
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    id: 5,
    name: "MD. Monaym Billah",
    title: "Web Developer",
    courses: 60,
    students: 125,
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    id: 6,
    name: "MD. Monaym Billah",
    title: "English Lecturer",
    courses: 35,
    students: 125,
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: 7,
    name: "MD. Monaym Billah",
    title: "English Lecturer",
    courses: 23,
    students: 125,
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 8,
    name: "MD. Monaym Billah",
    title: "Web Developer",
    courses: 60,
    students: 125,
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    id: 9,
    name: "MD. Monaym Billah",
    title: "Web Developer",
    courses: 60,
    students: 125,
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

export default function Instructors() {
  const [activeIndex, setActiveIndex] = useState(0);

  // For demonstration, we'll show 3 cards at a time on desktop
  // and slide by changing the active set
  const itemsPerPage = 4;
  const totalSlides = Math.ceil(instructorsData.length / itemsPerPage);

  const handleRadioChange = (index) => {
    setActiveIndex(index);
  };

  const getVisibleInstructors = () => {
    const start = activeIndex * itemsPerPage;
    const end = start + itemsPerPage;
    return instructorsData.slice(start, end);
  };

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center  space-y-4">
          <span className="text-emerald-700 font-bold tracking-widest uppercase text-sm">
            Our Instructors
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight">
           আমাদের দক্ষ শিক্ষকরা
          </h2>
          <div className="w-32 h-1 bg-emerald-600 rounded-full mx-auto transform rotate-2"></div>
        </div>

        {/* Instructor Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-8 justify-items-center">
          {getVisibleInstructors().map((instructor) => (
           <InstructorCard key={instructor?.id} instructor={instructor} />
          ))}
        </div>

        {/* Radio Button Slider Controls */}
        {totalSlides > 1 && (
          <div className="flex justify-center mt-12 space-x-3">
            {Array.from({ length: totalSlides }).map((_, idx) => (
              <label
                key={idx}
                className="cursor-pointer"
                onClick={() => handleRadioChange(idx)}
              >
                <input
                  type="radio"
                  name="instructor-slide"
                  checked={activeIndex === idx}
                  onChange={() => {}}
                  className="hidden peer"
                />
                <span
                  className={`block w-3 h-3 rounded-full transition-all duration-300 ${
                    activeIndex === idx
                      ? "bg-primary scale-125"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                ></span>
              </label>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
