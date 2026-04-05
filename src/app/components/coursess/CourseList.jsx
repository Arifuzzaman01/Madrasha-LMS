// src/components/Courses/CourseList.jsx
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiStar, HiUsers, HiArrowNarrowRight } from "react-icons/hi";

export default function CourseList({ initialCourses }) {
  const [courses, setCourses] = useState(initialCourses);
  const [loading, setLoading] = useState(false);

  const loadMoreCourses = () => {
    setLoading(true);
    setTimeout(() => {
      const more = initialCourses.map((c) => ({ ...c, id: Math.random() }));
      setCourses((prev) => [...prev, ...more]);
      setLoading(false);
    }, 1500);
  };

  // ২. তারপর useEffect লিখুন
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 500 &&
        !loading
      ) {
        loadMoreCourses();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {courses.map((course) => (
        <div
          key={course.id}
          className="group bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-emerald-100/50 transition-all duration-500"
        >
          {/* Thumbnail */}
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src={course.thumbnail}
              alt={course.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
              Class {course.class}
            </div>
          </div>

          {/* Details */}
          <div className="p-6 space-y-4">
            <div className="flex justify-between items-center text-xs font-bold text-emerald-600 uppercase">
              <span className="flex items-center gap-1">
                <HiStar className="text-amber-500" /> {course.rating}
              </span>
              <span className="flex items-center gap-1">
                <HiUsers className="text-gray-400" /> {course.students} Students
              </span>
            </div>

            <h3 className="text-lg font-black text-gray-900 leading-tight group-hover:text-primary transition-colors">
              {course.title}
            </h3>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-emerald-100 border border-emerald-200"></div>
              <span className="text-sm text-gray-500 font-medium">
                {course.instructor}
              </span>
            </div>

            <div className="pt-4 border-t border-gray-50 flex items-center justify-between">
              <div className="text-xl font-black text-gray-900">
                {course.price} <span className="text-xs">BDT</span>
              </div>
              <Link
                href={`/courses/${course.id}`}
                className="flex items-center gap-2 text-sm font-bold text-emerald-700 hover:gap-3 transition-all"
              >
                View Details <HiArrowNarrowRight />
              </Link>
            </div>
          </div>
        </div>
      ))}

      {loading && (
        <div className="col-span-full py-10 flex justify-center">
          <div className="w-8 h-8 border-4 border-emerald-700 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
}
