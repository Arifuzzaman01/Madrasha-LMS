import CourseFilters from "@/components/coursess/CourseFilters";
import CourseList from "@/components/coursess/CourseList";
import React from "react";

import { HiOutlineBookOpen } from "react-icons/hi";

export default function CoursesPage({ searchParams }) {
  // ডামি ডেটা যা ভবিষ্যতে API থেকে আসবে
  const initialCourses = [
    {
      id: 1,
      title: "Advanced Mathematics",
      instructor: "Dr. Ariful Islam",
      class: "10",
      price: 1200,
      rating: 4.8,
      students: 850,
      thumbnail: "/s0.png",
    },
    {
      id: 2,
      title: "English Grammar Masterclass",
      instructor: "Sumaiya Akter",
      class: "9",
      price: 1000,
      rating: 4.9,
      students: 1200,
      thumbnail: "/s0.png",
    },
    {
      id: 3,
      title: "Physics: Mechanics & Waves",
      instructor: "Tanvir Hossain",
      class: "10",
      price: 1500,
      rating: 4.7,
      students: 640,
      thumbnail: "/s0.png",
    },
    {
      id: 4,
      title: "Chemistry Essentials",
      instructor: "Rakib Ahmed",
      class: "8",
      price: 900,
      rating: 4.6,
      students: 430,
      thumbnail: "/s0.png",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Sticky Header with Search & Filter */}
      {/* wrapper div */}
      <div className="fixed bottom-0  md:sticky md:top-24 z-30 w-full">
        <CourseFilters />
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-8">
        {/* Welcome Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-emerald-100 text-emerald-700 rounded-2xl">
              <HiOutlineBookOpen size={24} />
            </div>
            <h1 className="text-2xl font-black text-gray-900 uppercase">
              Available <span className="text-emerald-700">Courses</span>
            </h1>
          </div>
        </div>

        {/* Course Grid with Scroll Pagination */}
        <CourseList initialCourses={initialCourses} />
      </div>

      {/* Mobile Floating Action Button (My Class) */}
      {/* <div className="fixed bottom-20  right-6 md:hidden z-50">
        <button className="bg-emerald-700 text-white p-2.5 rounded-full shadow-2xl flex items-center gap-2 font-bold ring-4 ring-white text-sm">
          <HiOutlineBookOpen size={20} />
          <span>My Class</span>
        </button>
      </div> */}
      
    </div>
  );
}
