import React, { useState } from "react";
import { productsData } from "../../data/productsData";

const categoryIcons = {
  "لپ‌تاپ": "💻",
  "گوشی": "📱",
  "هدفون": "🎧",
  "تبلت": "📲",
  "ساعت هوشمند": "⌚",
  "دوربین": "📷",
  "کنسول": "🎮",
};

const categories = productsData.map((group) => ({
  name: group.category,
  icon: categoryIcons[group.category] || "📦",
}));

export default function CategoryFilter({ onSelectCategory }) {
  const [selectedCategory, setSelectedCategory] = useState("همه");

  const handleSelect = (name) => {
    setSelectedCategory(name);
    if (onSelectCategory) onSelectCategory(name);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8" dir="rtl">
      <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2">
        <button
          onClick={() => handleSelect("همه")}
          className={`flex-shrink-0 flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 ${
            selectedCategory === "همه"
              ? "bg-violet-600 text-white shadow-lg shadow-violet-200"
              : "bg-white text-slate-600 hover:bg-slate-50 border border-slate-200 hover:border-violet-200"
          }`}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
            />
          </svg>
          همه محصولات
        </button>

        {categories.map((cat) => (
          <button
            key={cat.name}
            onClick={() => handleSelect(cat.name)}
            className={`flex-shrink-0 flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 ${
              selectedCategory === cat.name
                ? "bg-violet-600 text-white shadow-lg shadow-violet-200"
                : "bg-white text-slate-600 hover:bg-slate-50 border border-slate-200 hover:border-violet-200"
            }`}
          >
            <span className="opacity-70">{cat.icon}</span>
            <span>{cat.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
