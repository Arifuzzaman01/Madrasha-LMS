import React from "react";

import ReviewSection from "@/components/Homes/ReviewSection";
import HeroBanner from "@/components/Homes/HeroBanner";
import CourseCategories from "@/components/Homes/CourseCategories";
import AboutSection from "@/components/Homes/AboutSection";
import Instructors from "@/components/Homes/Instructors";


export default function page() {
  return (
    <div>
      <div id="home">
        <HeroBanner />
      </div>
      <div id="coursesCategory">
        <CourseCategories />
      </div>
      <div id="homeAbout">
        <AboutSection />
      </div>
      <div id="teachers">
        <Instructors />
      </div>
      <div id="review">
        <ReviewSection />
      </div>
    </div>
  );
}
