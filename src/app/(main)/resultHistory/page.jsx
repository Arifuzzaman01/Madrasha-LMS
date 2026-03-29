import ResultTable from "@/app/components/resultHistory/ResultTable";
import TabSwitcher from "@/app/components/resultHistory/TabSwitcher";
import { CLASSES, getStudentsByClass } from "@/libs/mockData";
import React from "react";


export default async function ResultHistoryPage({ searchParams }) {
  // Default values
  const currentClass = await searchParams;
  const currentPage = parseInt(currentClass.page) || 1;
  const itemsPerPage = 20;

  const allStudents = getStudentsByClass(currentClass.class);
  
  // Pagination Logic
  const totalStudents = allStudents.length;
  const totalPages = Math.ceil(totalStudents / itemsPerPage);
  const paginatedData = allStudents.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
console.log(currentClass.page);
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 min-h-screen">
      <header className="mb-10 space-y-2">
        <h1 className="text-3xl font-black text-gray-900 uppercase tracking-tight">
          Academic <span className="text-emerald-700">Result History</span>
        </h1>
        <p className="text-gray-500">মেধা তালিকা অনুযায়ী সকল ক্লাসের ফলাফল দেখুন।</p>
      </header>

      {/* Reusable Tab Switcher */}
      <TabSwitcher classes={CLASSES} activeClass={currentClass.class} />

      {/* Result Table Component */}
      <div className="bg-white rounded-[2rem] shadow-xl shadow-emerald-100/50 border border-gray-100 overflow-hidden mt-8">
        <ResultTable students={paginatedData} startIndex={(currentPage - 1) * itemsPerPage} />
      </div>

      {/* Pagination Component */}
      <div className="mt-10">
        {/* <Pagination totalPages={totalPages} currentPage={currentPage} currentClass={currentClass} /> */}
      </div>
    </div>
  );
}