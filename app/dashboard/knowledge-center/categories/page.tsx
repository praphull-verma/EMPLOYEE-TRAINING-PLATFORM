"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, BookOpen } from "lucide-react";

const categories = [
  {
    name: "Frontend",
    resources: 76,
    image: "/images/frontend.png",
    bg: "bg-indigo-50",
  },
  {
    name: "Backend",
    resources: 76,
    image: "/images/backend.png",
    bg: "bg-green-50",
  },
  {
    name: "Database",
    resources: 76,
    image: "/images/database.png",
    bg: "bg-purple-50",
  },
  {
    name: "AI & ML",
    resources: 76,
    image: "/images/aiml.png",
    bg: "bg-yellow-50",
  },
  {
    name: "Cloud Computing",
    resources: 76,
    image: "/images/cloud.png",
    bg: "bg-indigo-50",
  },
  {
    name: "DevOps",
    resources: 76,
    image: "/images/devops.png",
    bg: "bg-green-50",
  },
  {
    name: "Cyber Security",
    resources: 76,
    image: "/images/cyber-security.png",
    bg: "bg-indigo-50",
  },
];

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-white px-5 py-5 font-roboto md:px-7 lg:px-8">

      {/* HEADER */}
      <div className="mb-7 flex items-center justify-between">

        <div>
          <div className="mb-2 flex items-center gap-2">

            <Link
              href="/dashboard/knowledge-center"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-indigo-100 bg-white text-slate-600 transition hover:bg-indigo-50 hover:text-blue-600"
            >
              <ArrowLeft size={15} />
            </Link>

            <span className="text-[11px] font-semibold text-blue-600">
              KNOWLEDGE CENTER
            </span>

          </div>

          <h1 className="text-2xl font-semibold text-slate-800">
            Categories
          </h1>

          <p className="mt-1 text-[13px] text-gray-500">
            Explore all available learning categories.
          </p>
        </div>

        <div className="hidden items-center gap-2 rounded-xl bg-indigo-50 px-4 py-3 sm:flex">
          <BookOpen size={16} className="text-blue-600" />

          <span className="text-[12px] font-semibold text-slate-700">
            {categories.length} Categories
          </span>
        </div>

      </div>


      {/* CATEGORY GRID */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

        {categories.map((category) => (

          <div
            key={category.name}
            className={`${category.bg} group rounded-2xl p-4 transition duration-200 hover:-translate-y-1 hover:shadow-md`}
          >

            {/* IMAGE */}
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-white shadow-sm">
              <Image
                src={category.image}
                alt={category.name}
                width={42}
                height={42}
                className="object-contain"
              />
            </div>


            {/* CATEGORY INFO */}
            <h2 className="text-[15px] font-semibold text-slate-700">
              {category.name}
            </h2>

            <p className="mt-1 font-dmserif text-[12px] font-semibold text-gray-500">
              {category.resources}+ resources
            </p>


            {/* EXPLORE */}
            <div className="mt-5 flex items-center justify-between">

              <span className="text-[11px] font-semibold text-blue-600 opacity-0 transition group-hover:opacity-100">
                Explore
              </span>

              <span className="text-[11px] font-medium text-gray-400">
                Knowledge Center
              </span>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}