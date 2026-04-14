// src/components/Results/TabSwitcher.jsx
"use client";
import Link from "next/link";

export default function TabSwitcher({ classes, activeClass }) {
  return (
    <div className="flex flex-wrap  border-b border-gray-200">
      {classes.map((cls) => (
        <Link
          key={cls}
          href={`?class=${cls}&page=1`}
          className={`px-8 py-3  font-bold transition-all ${
            activeClass === cls
              ? "bg-emerald-700 text-white shadow-lg shadow-emerald-200 rounded-t-xl mb-2"
              : "bg-gray-100 text-gray-500 hover:bg-emerald-50 hover:text-emerald-700 border-b-2 border-primary "
          }`}
        >
          Class {cls}
        </Link>
      ))}
    </div>
  );
}