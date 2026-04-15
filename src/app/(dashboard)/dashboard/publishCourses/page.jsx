"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

import {
  HiOutlineCloudUpload,
  HiOutlineBookOpen,
  HiOutlineCurrencyDollar,
  HiOutlineCalendar,
  HiOutlinePhotograph,
} from "react-icons/hi";
import { generateId } from "@/utils/idGenerator";
import { IoIosOptions } from "react-icons/io";
import toast from "react-hot-toast";
import { uploadImage } from "@/utils/uploadImage";
import Image from "next/image";
import { GiDuration } from "react-icons/gi";

export default function AddCoursePage() {
  const [preview, setPreview] = React.useState(null);
  const [imageFile, setImageFile] = React.useState(null);
  const [uploading, setUploading] = React.useState(false);
  const [uploadedUrl, setUploadedUrl] = React.useState(null);
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file); // স্টেটে রাখলেন ফিউচার ইউজের জন্য
      setPreview(URL.createObjectURL(file));

      await handleUpload(file);
    }
  };

  const handleUpload = async (fileToUpload) => {
    if (!fileToUpload) return;

    setUploading(true);
    try {
      const url = await uploadImage(fileToUpload);
      if (url) {
        setUploadedUrl(url);
        alert("Image Uploaded Successfully!");
      } else {
        console.error("Upload failed: URL is null");
      }
    } catch (error) {
      console.error("Upload Error:", error);
    } finally {
      setUploading(false);
    }
  };
  // TanStack Query Mutation
  const mutation = useMutation({
    mutationFn: async (newCourse) => {
      // Demo API (Replace with your real endpoint)
      return await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        newCourse,
      );
    },
    onSuccess: () => {
      toast.success("Course added successfully! (Status: Pending)");
      reset();
    },
    onError: (error) => {
      console.error("Error adding course:", error);
      toast.error("Failed to add course.");
    },
  });

  const onSubmit = (data) => {
    const courseData = {
      ...data,
      icon: uploadedUrl,
      courseId: generateId(data.courseName),
      status: "pending",
      teacherId: "T-8801", // এইটা ডেমো, রিয়েল অ্যাপ্লিকেশনে ইউজারের আইডি থেকে আসবে
    };
    mutation.mutate(courseData);
  };
  console.log(uploadedUrl, "preview");
  return (
    <div className="max-w-7xl mx-auto ">
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-black text-primary_text">
          Create New Course
        </h1>
        <p className="text-gray-500 font-medium">
          Draft your course details for review.
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 bg-white p-5 sm:p-8 md:p-10 rounded-md border border-gray-100 shadow-sm"
      >
        {/* Section 1: Basic Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-black text-gray-700  flex items-center gap-2">
              <HiOutlineBookOpen className="text-emerald-600" /> Course Name
            </label>
            <input
              {...register("courseName", {
                required: "Course name is required",
              })}
              className="w-full p-3 bg-gray-50 rounded-sm border border-gray-300 focus:ring-1 focus:ring-primary/20 outline-none  text-gray-800"
              placeholder="e.g. Master MERN Stack 2026"
            />
            {errors.courseName && (
              <span className="text-red-500 text-xs font-bold">
                {errors.courseName.message}
              </span>
            )}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-black text-gray-700  flex items-center gap-2">
              Teacher Name
            </label>
            <input
              {...register("teacherName")}
              className="w-full p-3 bg-gray-50 rounded-sm border border-gray-300 focus:ring-1 focus:ring-primary/20 outline-none  text-gray-800"
              placeholder="Arifuzzaman Rakib"
            />
          </div>
        </div>
        {/* subject & Category */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-black text-gray-700 flex items-center gap-2">
              <IoIosOptions className="text-emerald-600" /> Course Category
            </label>

            <select
              {...register("courseCategory", {
                required: "Category is required",
              })}
              className="w-full p-3 bg-gray-50 rounded-sm border border-gray-300 focus:ring-1 focus:ring-primary/20 outline-none text-gray-800 font-medium cursor-pointer appearance-none"
              defaultValue=""
            >
              <option value="" disabled>
                Select a category
              </option>
              <option value="web-development">Web Development</option>
              <option value="app-development">App Development</option>
              <option value="ui-ux-design">UI/UX Design</option>
              <option value="digital-marketing">Digital Marketing</option>
              <option value="graphics-design">Graphics Design</option>
              <option value="data-science">Data Science</option>
            </select>

            {/* Error Message */}
            {errors.courseCategory && (
              <span className="text-red-500 text-xs font-bold uppercase tracking-tighter">
                {errors.courseCategory.message}
              </span>
            )}
          </div>
          <div className="space-y-2">
            <label className="text-sm font-black text-gray-700  flex items-center gap-2">
              Subject
            </label>
            <input
              {...register("subject", { required: "Subject is required" })}
              className="w-full p-3 bg-gray-50 rounded-sm border border-gray-300 focus:ring-1 focus:ring-primary/20 outline-none  text-gray-800"
              placeholder="e.g. JavaScript"
            />
          </div>
        </div>
        {/* Section 2: Pricing & Icon */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-black text-gray-700  flex items-center gap-2">
              <HiOutlineCurrencyDollar className="text-emerald-600" /> Course
              Fee (BDT)
            </label>
            <input
              type="number"
              {...register("courseFee", { required: "Course fee is required" })}
              className="w-full p-3 bg-gray-50 rounded-sm border border-gray-300 focus:ring-1 focus:ring-primary/20 outline-none  text-gray-800"
              placeholder="5000"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-black text-gray-700  flex items-center gap-2">
              Course Icon
            </label>

            <div className="flex flex-col md:flex-row items-center gap-6">
              {/* Image Preview Box */}
              <div className="w-12 h-12 rounded-2xl border-2 border-dashed border-gray-200 flex items-center justify-center overflow-hidden bg-gray-50">
                {preview ? (
                  <Image
                    src={preview}
                    width={20}
                    height={20}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <HiOutlinePhotograph size={40} className="text-gray-300" />
                )}
              </div>

              {/* Upload Inputs */}
              <div className="flex-1 w-full space-y-3   bg-gray-50 rounded-sm border border-gray-300 focus:ring-1 focus:ring-primary/20 outline-none  text-gray-800">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  disabled={uploading || uploadedUrl} // Disable if uploading or already uploaded
                  className={`block w-full text-sm text-gray-500 file:mr-4 file:py-4 file:px-4 file:bg-primary file:rounded-l-sm file:border-0 file:text-sm file:font-bold file:text-gray-200 hover:file:bg-emerald-100 hover:file:text-primary cursor-pointer ${uploading || uploadedUrl ? "cursor-not-allowed opacity-50 file:bg-gray-500" : ""}`}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Dates */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-black text-gray-700  flex items-center gap-2">
              <HiOutlineCalendar className="text-emerald-600" /> Enrollment
              Start
            </label>
            <input
              type="date"
              {...register("enrollStart", {
                required: "Enrollment start date is required",
              })}
              className="w-full p-3 bg-gray-50 rounded-sm border border-gray-300 focus:ring-1 focus:ring-primary/20 outline-none  text-gray-800"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-black text-gray-700  flex items-center gap-2">
              Enrollment End
            </label>
            <input
              type="date"
              {...register("enrollEnd", {
                required: "Enrollment end date is required",
              })}
              className="w-full p-3 bg-gray-50 rounded-sm border border-gray-300 focus:ring-1 focus:ring-primary/20 outline-none  text-gray-800"
            />
          </div>
        </div>
        {/* duration */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-black text-gray-700  flex items-center gap-2">
             <GiDuration /> Courses Duration (in weeks)
            </label>
            <input
              type="number"
              {...register("duration", {
                required: "Duration is required",
                min: 1,
              })}
              className="w-full p-3 bg-gray-50 rounded-sm border border-gray-300 focus:ring-1 focus:ring-primary/20 outline-none  text-gray-800"
            />
          </div>
          {/* course type */}
          <div className="space-y-2">
            <label className="text-sm font-black text-gray-700 flex items-center gap-2">
              Courses Type
            </label>

            <select
              {...register("courseType", {
                required: "Course type is required",
              })}
              className="w-full p-3 bg-gray-50 rounded-sm border border-gray-300 focus:ring-1 focus:ring-primary/20 outline-none text-gray-800 font-medium cursor-pointer appearance-none"
              defaultValue="online"
            >
              <option value="" disabled>
                Select a category
              </option>
              <option value="online">Online</option>
              <option value="offline">Off Line</option>
              
            </select>

            {/* Error Message */}
            {errors.courseType && (
              <span className="text-red-500 text-xs font-bold uppercase tracking-tighter">
                {errors.courseType.message}
              </span>
            )}
          </div>
        </div>
        {/* Section 4: Course Requirements */}
        <div className="space-y-2">
          <label className="text-sm font-black text-gray-700 uppercase">
            Course Requirements
          </label>
          <textarea
            {...register("requirements")}
            rows="3"
            className="w-full p-3 bg-gray-50 rounded-sm border border-gray-300 focus:ring-1 focus:ring-primary/20 outline-none  text-gray-800"
            placeholder="What should students know before joining?"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={mutation.isPending}
          className="w-full py-5 bg-gray-900 text-white rounded-xl font-black tracking-widest hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-900/10 flex items-center justify-center gap-3 active:scale-95 disabled:bg-gray-400"
        >
          {mutation.isPending ? (
            "SUBMITTING..."
          ) : (
            <>
              <HiOutlineCloudUpload size={22} /> PUBLISH COURSE
            </>
          )}
        </button>
      </form>
    </div>
  );
}
