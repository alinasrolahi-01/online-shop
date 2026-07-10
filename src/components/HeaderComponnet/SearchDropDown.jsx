import React from "react";
import { Link } from "react-router";
import { quickSearchCategories } from "../../data/quickSearchCategories";

const SearchDropDown = () => {
  return (
    <div className="w-full bg-white rounded-xl shadow p-4 space-y-4 ">
      <p className="font-dana text-[12px] text-gray-700">جستجوی سریع</p>

      <div className="flex flex-wrap gap-3">
        {quickSearchCategories.map((category) => {
          const Icon = category.icon;

          return (
            <Link
              key={category.id}
              to={category.link}
              className="flex items-center justify-center gap-2 bg-gray-100 rounded-2xl text-[12px] text-gray-500 px-3 py-2 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
            >
              <Icon className="text-lg" />
              <span>{category.title}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SearchDropDown;