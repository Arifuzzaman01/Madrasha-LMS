import React from "react";
import ReviewSlider from "./ReviewSlider";
import { FaQuoteLeft } from "react-icons/fa";

const reviewsData = [
  {
    id: 1,
    name: "আরিফুজ্জামান রাকিব",
    role: "MERN Stack Developer",
    image: "/user1.jpg",
    review:
      "Educate প্ল্যাটফর্মের কোর্সগুলো অত্যন্ত গোছানো। বিশেষ করে তাদের সাপোর্ট সিস্টেম এবং ওস্তাদদের বোঝানোর ক্ষমতা অসাধারণ।",
    rating: 5,
  },
  {
    id: 2,
    name: "মাসুম বিল্লাহ",
    role: "Software Engineer",
    image: "/user2.jpg",
    review:
      "আমি এখান থেকে RESTful API এর কোর্সটি করেছি। প্রজেক্ট ভিত্তিক লার্নিং আমাকে অনেক সাহায্য করেছে।",
    rating: 5,
  },
  {
    id: 3,
    name: "আব্দুল্লাহ আল মামুন",
    role: "UI/UX Designer",
    image: "/user3.jpg",
    review:
      "ডিজাইন এবং ডেভেলপমেন্টের এত সুন্দর কম্বিনেশন খুব কম প্ল্যাটফর্মেই দেখা যায়। হাইলি রেকমেন্ডেড!ডিজাইন এবং ডেভেলপমেন্টের এত সুন্দর কম্বিনেশন খুব কম প্ল্যাটফর্মেই দেখা যায়। হাইলি রেকমেন্ডেড!ডিজাইন এবং ডেভেলপমেন্টের এত সুন্দর কম্বিনেশন খুব কম প্ল্যাটফর্মেই দেখা যায়। হাইলি রেকমেন্ডেড!",
    rating: 4,
  },
];

const ReviewSection = () => {
  return (
    <section className="py-0 bg-emerald-50/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-12 gap-6">
          <div className="hidden md:block"></div>
          <div className="space-y-4 max-w-xl text-center md:text-left">
            <span className="text-emerald-700 font-bold tracking-widest uppercase text-sm">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-primary md:text-end leading-tight">
              What Our Students <br />{" "}
              <span className="text-emerald-700">Say About Us</span>
            </h2>
          </div>
          <div className="hidden md:block">
            <FaQuoteLeft className="text-emerald-100" size={80} />
          </div>
        </div>

        {/* Client Slider */}
        <ReviewSlider reviews={reviewsData} />
      </div>
    </section>
  );
};

export default ReviewSection;
