// src/components/Admission/AdmissionForm.jsx
"use client";
import React from "react";
import { useForm } from "react-hook-form";

export default function AdmissionForm({ classes }) {
  // react-hook-form initialization
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      studentName: "",
      targetClass: "Class 10",
      gender: "Male",
      phone: "",
    },
  });

  // এই ফাংশনটি ভবিষ্যতে TanStack Query এর `mutate` ফাংশনের সাথে রিপ্লেস হবে
  const onSubmit = async (data) => {
    console.log("Form Data:", data);

    // ডামি ডিলে (API কল সিমুলেশন)
    await new Promise((resolve) => setTimeout(resolve, 2000));

    alert("Admission Success!");
    reset(); // ফর্ম ক্লিয়ার করা
  };

  return (
    <div className="bg-white p-8 rounded-[2rem] shadow-md shadow-emerald-100 border border-emerald-50">
      <h3 className="text-2xl font-black text-gray-900 mb-6 uppercase">
        Apply for <span className="text-emerald-700">Admission</span>
      </h3>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Student Name */}
        <div>
          <label className="text-sm font-bold text-gray-700 block mb-2">
            Student Full Name
          </label>
          <input
            {...register("studentName", {
              required: "Name is required",
              minLength: { value: 3, message: "Min 3 chars" },
            })}
            type="text"
            placeholder="Enter name"
            className={`w-full px-5 py-3 rounded-xl bg-gray-50 border ${errors.studentName ? "border-red-500" : "border-gray-100"} focus:border-emerald-500 outline-none transition-all`}
          />
          {errors.studentName && (
            <span className="text-red-500 text-xs mt-1">
              {errors.studentName.message}
            </span>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4">
          {/* Select Class */}
          <div>
            <label className="text-sm font-bold text-gray-700 block mb-2">
              Select Class
            </label>
            <select
              {...register("targetClass")}
              className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:border-emerald-500 outline-none cursor-pointer"
            >
              {classes
                .filter((c) => new Date() <= new Date(c.deadline)) // শুধু ভ্যালিড ডেডলাইনগুলো দেখাবে
                .map((c) => (
                  <option key={c.name} value={c.name}>
                    {c.name}
                  </option>
                ))}
            </select>
          </div>

          {/* Gender */}
          <div>
            <label className="text-sm font-bold text-gray-700 block mb-2">
              Gender
            </label>
            <select
              {...register("gender")}
              className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:border-emerald-500 outline-none"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
        </div>

        {/* Guardian Phone */}
        <div>
          <label className="text-sm font-bold text-gray-700 block mb-2">
            {"Guardian's Phone"}
          </label>
          <input
            {...register("phone", {
              required: "Phone is required",
              pattern: {
                value: /^01[3-9]\d{8}$/,
                message: "Invalid BD Phone Number",
              },
            })}
            type="tel"
            placeholder="017XXXXXXXX"
            className={`w-full px-5 py-3 rounded-xl bg-gray-50 border ${errors.phone ? "border-red-500" : "border-gray-100"} focus:border-emerald-500 outline-none transition-all`}
          />
          {errors.phone && (
            <span className="text-red-500 text-xs mt-1">
              {errors.phone.message}
            </span>
          )}
        </div>

        <div className="pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 bg-emerald-700 text-white font-black rounded-xl shadow-lg shadow-emerald-200 hover:bg-emerald-800 transition-all active:scale-95 disabled:opacity-70"
          >
            {isSubmitting ? "PROCESSING..." : "CONFIRM ADMISSION"}
          </button>
        </div>
      </form>
    </div>
  );
}
