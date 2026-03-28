import React from 'react'
import HeroBanner from '../components/Homes/HeroBanner'
import CourseCategories from '../components/Homes/CourseCategories'
import AboutSection from '../components/Homes/AboutSection'

export default function page() {
  return (
    <div>
      <HeroBanner />
      <CourseCategories />
      <AboutSection />
      </div>
  )
}
