// src/components/Home/CourseCategories.tsx
import React from "react";
import { FaPalette, FaBullhorn, FaBrain, FaCogs } from "react-icons/fa";
import { MdOutlineComputer, MdPhoneIphone, MdOutlineDonutLarge, MdFitnessCenter, MdOutline3dRotation } from "react-icons/md";
import { AiOutlineDollarCircle } from "react-icons/ai";
import CategoryCard from "./CategoryCard"; // Client Component
import Btn from "../Common/Btn"; // Assuming you have your custom Button component

// ডামি ডাটা (বাস্তবে ডাটাবেজ থেকে আসবে)
const categoriesData = [
  { id: 1, name: "Art & Design", courseCount: 5, icon: <FaPalette />, bgImage: null },
  { id: 2, name: "Web Development", courseCount: 10, icon: <MdOutlineComputer />, bgImage: "/web-dev-bg.jpg" }, // Add an image path for the background
  { id: 3, name: "Finance Account", courseCount: 6, icon: <AiOutlineDollarCircle />, bgImage: null },
  { id: 4, name: "Marketing", courseCount: 3, icon: <FaBullhorn />, bgImage: null },
  { id: 5, name: "Mobile Application", courseCount: 8, icon: <MdPhoneIphone />, bgImage: null },
  { id: 6, name: "Data Science", courseCount: 4, icon: <MdOutlineDonutLarge />, bgImage: null },
  { id: 7, name: "Marketing", courseCount: 3, icon: <FaBrain />, bgImage: null },
  { id: 8, name: "Health and Fitness", courseCount: 8, icon: <MdFitnessCenter />, bgImage: null },
  { id: 9, name: "3D Animation", courseCount: 4, icon: <MdOutline3dRotation />, bgImage: null },
];

const CourseCategories = () => {
  return (
    <section className=" py-10 ">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center">
        
        {/* --- Header Section --- */}
        <div className="text-center mb-12 max-w-2xl mx-auto space-y-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary_text leading-tight">
            আমাদের অনলাইন কোর্সের ক্যাটাগরি সমূহ
          </h2>
          {/* Blue decorative line from image */}
          <div className="w-48 h-1 bg-emerald-600 rounded-full mx-auto transform -rotate-2"></div>
        </div>

        {/* --- Categories Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {categoriesData.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>

        {/* --- Footer Button --- */}
        <div className=" w-full mt-10 flex justify-end  ">
          <Btn text="সব কোর্স দেখুন" href="/courses" />
        </div>

      </div>
    </section>
  );
};

export default CourseCategories;