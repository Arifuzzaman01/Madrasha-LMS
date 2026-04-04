// src/app/admissions/page.js
import AdmissionForm from "@/app/components/admissions/AdmissionForm";
import AdmissionSteps from "@/app/components/admissions/AdmissionSteps";
import React from "react";

import {
  HiOutlineInformationCircle,
  HiOutlineCalendar,
  HiOutlineCurrencyBangladeshi,
} from "react-icons/hi";

const classInfo = [
  {
    name: "Class 10",
    fees: "5000",
    seats: 40,
    available: 5,
    deadline: "2026-01-30",
  },
  {
    name: "Class 9",
    fees: "4500",
    seats: 45,
    available: 12,
    deadline: "2026-08-28",
  },
  {
    name: "Class 8",
    fees: "4000",
    seats: 50,
    available: 18,
    deadline: "2026-05-30",
  },
  {
    name: "Class 7",
    fees: "3500",
    seats: 50,
    available: 25,
    deadline: "2026-07-31",
  },
  {
    name: "Class 5",
    fees: "3000",
    seats: 60,
    available: 30,
    deadline: "2026-02-20",
  },
];

export default function AdmissionsPage() {
  const date = new Date();
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* --- Hero Section --- */}
      <section className="bg-emerald-900 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight">
            Academic <span className="text-emerald-400">Admission 2026</span>
          </h1>
          <p className="text-emerald-100 max-w-2xl mx-auto text-lg">
            আপনার সন্তানের উজ্জ্বল ভবিষ্যৎ গড়তে আজই সঠিক ক্লাসে ভর্তি নিশ্চিত
            করুন। আমাদের অভিজ্ঞ ওস্তাদ এবং আধুনিক কারিকুলাম আপনার অপেক্ষায়।
          </p>
        </div>
      </section>

      <div className=" px-2 md:px-5 -mt-12 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* --- Left Side: Info & Guidelines (2 Columns) --- */}
          <div className="lg:col-span-2 space-y-8 ">
            {/* Admission Steps */}
            <AdmissionSteps />

            {/* Fee Structure Table */}
            <div className="bg-white py-6 px-2 md:p-8 rounded-md shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <HiOutlineCurrencyBangladeshi
                  className="text-emerald-600"
                  size={28}
                />
                <h3 className="text-2xl font-bold text-gray-900">
                  Class-wise Fee Structure
                </h3>
              </div>
              <div className="w-full overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-emerald-700 text-white uppercase text-xs tracking-widest">
                      <th className="px-6 py-5 align-top whitespace-nowrap">
                        Class Name
                      </th>
                      <th className="px-6 py-5 align-top whitespace-nowrap">
                        Admission Fee
                      </th>
                      <th className="px-6 py-5 align-top whitespace-nowrap">
                        Total Seats
                      </th>
                      <th className="px-6 py-5 align-top whitespace-nowrap">
                        Deadline
                      </th>
                      <th className="px-6 py-5 align-top whitespace-nowrap">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {classInfo.map((item, idx) => {
                      const isDeadlineOver =
                        new Date() > new Date(item.deadline);

                      return (
                        <tr
                          key={idx}
                          className="hover:bg-emerald-50/50 transition-colors group"
                        >
                          {/* align-top ব্যবহার করা হয়েছে যাতে বড় টেক্সট থাকলেও সব ডাটা ওপর থেকে শুরু হয় */}
                          <td className="px-6 py-4 font-bold text-gray-800 align-top whitespace-nowrap">
                            {item.name}
                          </td>

                          <td className="px-6 py-4 font-black text-emerald-700 align-top whitespace-nowrap">
                            {item.fees} BDT
                          </td>

                          <td className="px-6 py-4 text-gray-500 align-top whitespace-nowrap">
                            {item.seats}
                          </td>

                          {/* যদি এই ফিল্ডটি কোনো কারণে ভেঙে যায় (wrap হয়), এটি ওপরের দিকেই থাকবে */}
                          <td
                            className={`px-6 py-4 font-medium align-top ${isDeadlineOver ? "text-red-500 font-bold" : "text-gray-500"}`}
                          >
                            <div className="flex flex-col">
                              <span>{item.deadline}</span>
                              {isDeadlineOver && (
                                <span className="text-[10px] text-red-400 mt-1 uppercase">
                                  Admission Closed
                                </span>
                              )}
                            </div>
                          </td>

                          <td className="px-6 py-4 align-top">
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap ${
                                isDeadlineOver
                                  ? "bg-red-100 text-red-600"
                                  : "bg-emerald-100 text-emerald-600"
                              }`}
                            >
                              {isDeadlineOver ? "Closed" : "Open"}
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Important Notice */}
            <div className="bg-blue-50 p-6 rounded-2xl border-l-8 border-red-600 flex gap-4">
              <HiOutlineInformationCircle
                className="text-red-500 shrink-0"
                size={24}
              />
              <p className="text-red-600 text-sm font-medium">
                ভর্তির সময় অবশ্যই শিক্ষার্থীর জন্ম নিবন্ধন কার্ডের কপি এবং ২ কপি
                পাসপোর্ট সাইজ ছবি সাথে আনতে হবে। অনলাইন পেমেন্টের ক্ষেত্রে
                ট্রানজিশন আইডি সংগ্রহ করুন।
              </p>
            </div>
          </div>

          {/* --- Right Side: Admission Form (1 Column) --- */}
          <div className="lg:col-span-1">
            <div className="sticky top-28">
              <AdmissionForm classes={classInfo} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
