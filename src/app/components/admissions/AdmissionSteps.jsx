// src/components/Admission/AdmissionSteps.jsx
import { HiOutlineClipboardList, HiOutlineBadgeCheck, HiOutlineDesktopComputer } from "react-icons/hi";

const steps = [
  { title: "Apply Online", desc: "সঠিক তথ্য দিয়ে ফরমটি পূরণ করুন।", icon: <HiOutlineDesktopComputer size={30}/> },
  { title: "Review", desc: "আমাদের টিম আপনার তথ্য যাচাই করবে।", icon: <HiOutlineClipboardList size={30}/> },
  { title: "Success", desc: "ভর্তি নিশ্চিত হলে কনফার্মেশন পাবেন।", icon: <HiOutlineBadgeCheck size={30}/> },
];

export default function AdmissionSteps() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {steps.map((step, idx) => (
        <div key={idx} className="bg-white p-6 rounded-lg border border-gray-100 flex flex-col items-center text-center space-y-3">
          <div className="text-emerald-600 bg-emerald-50 p-4 rounded-2xl">{step.icon}</div>
          <h4 className="font-bold text-gray-900">{step.title}</h4>
          <p className="text-xs text-gray-500">{step.desc}</p>
        </div>
      ))}
    </div>
  );
}