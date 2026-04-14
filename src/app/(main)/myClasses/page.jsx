// src/app/my-classes/page.js
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HiOutlinePlay, HiOutlineDocumentText, HiCheckCircle } from "react-icons/hi";

const myCourses = [
  { id: "c1", title: "Advanced React Patterns", teacher: "Arifuzzaman Rakib", progress: 65, type: "video", thumbnail: "/s0.png" },
  { id: "c2", title: "Next.js 15 Deep Dive", teacher: "Sumaiya Akter", progress: 100, type: "video", thumbnail: "/s0.png" },
  { id: "c3", title: "PostgreSQL for Beginners", teacher: "Tanvir Hossain", progress: 20, type: "pdf", thumbnail: "/s0.png" },
];

export default function MyClassesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-gray-50 min-h-screen ">
      <h1 className="text-3xl font-black text-gray-900 mb-10 uppercase tracking-tight">
        My <span className="text-emerald-700">Learning</span> Journey
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {myCourses.map((course) => (
          <div key={course.id} className="bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 group">
            
            {/* Part 1: Thumbnail */}
            <div className="relative h-48 w-full">
              <Image src={course.thumbnail} alt={course.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md p-2 rounded-xl shadow-sm text-emerald-700">
                {course.type === "video" ? <HiOutlinePlay size={20} /> : <HiOutlineDocumentText size={20} />}
              </div>
            </div>

            {/* Part 2: Content */}
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-bold text-gray-900 leading-snug group-hover:text-emerald-700 transition-colors">
                {course.title}
              </h3>
              <p className="text-sm text-gray-500 font-medium">By {course.teacher}</p>

              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-emerald-700">{course.progress}% Completed</span>
                  {course.progress === 100 && <HiCheckCircle className="text-emerald-500" size={16}/>}
                </div>
                <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-emerald-600 h-full transition-all duration-1000" style={{ width: `${course.progress}%` }}></div>
                </div>
              </div>

              <Link href={`/myClasses/${course.id}`} className="block w-full py-4 bg-gray-900 text-white text-center rounded-xl font-black text-sm hover:bg-emerald-700 transition-all shadow-lg active:scale-95">
                CONTINUE LEARNING
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}