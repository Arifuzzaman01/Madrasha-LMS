// src/components/Results/ResultTable.jsx
import Link from "next/link";
import { FaEye } from "react-icons/fa";
import { HiOutlineUserCircle } from "react-icons/hi";

export default function ResultTable({ students, startIndex }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-emerald-700 text-white uppercase text-xs tracking-widest">
            <th className="px-6 py-5">Rank</th>
            <th className="px-6 py-5">Student Name</th>
            <th className="px-6 py-5">Grade</th>
            <th className="px-6 py-5">Pass/Failed</th>
            <th className="px-6 py-5">Highest Number</th>
            <th className="px-6 py-5">Lowest Number</th>
            <th className="px-6 py-5">Total</th>
            <th className="px-6 py-5 text-center">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-50">
          {students.map((student, index) => (
            <tr key={student.id} className="hover:bg-emerald-50/50 transition-colors group">
              <td className="px-6 py-4 font-black text-emerald-700">#{startIndex + index + 1}</td>
              <td className="px-6 py-4 font-bold text-gray-900">{student.name}</td>
              <td className="px-6 py-4 font-semibold">{student?.grade}</td>
              <td className="px-6 py-4">5/1</td>
              <td className="px-6 py-4">English/97</td>
              <td className="px-6 py-4">Physic/55</td>
              <td className="px-6 py-4 font-black">{student.total}</td>
              <td className="px-6 py-4 text-center space-x-2">
                <Link 
                  href={`/results/profile/${student.id}`}
                  className="inline-flex items-center gap-2 p-1.5 bg-gray-100 text-gray-700 rounded-full text-sm font-bold group-hover:bg-emerald-700 group-hover:text-white transition-all"
                >
                  <FaEye size={18} /> 
                </Link>
                <Link 
                  href={`/results/profile/${student.id}`}
                  className="inline-flex items-center gap-2 p-1.5 bg-gray-100 text-gray-700 rounded-full text-sm font-bold group-hover:bg-emerald-700 group-hover:text-white transition-all"
                >
                  <HiOutlineUserCircle size={18} /> 
                </Link>
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}