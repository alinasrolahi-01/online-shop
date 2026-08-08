import React from "react";
import { Plus } from "lucide-react";

const CATEGORIES = ["همه دسته‌ها", "لپ‌تاپ", "موبایل", "لوازم جانبی"];
const SORT_OPTIONS = ["مرتب‌سازی", "پرفروش‌ترین", "جدیدترین", "ارزان‌ترین"];

export default function ProductFilters({
  category,
  onCategoryChange,
  sort,
  onSortChange,
  onAddProduct,
}) {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <div className="flex items-center gap-3 w-full sm:w-auto">
        <select
          value={category}
          onChange={(e) => onCategoryChange?.(e.target.value)}
          className="w-1/2 sm:w-auto text-sm border border-slate-200 rounded-xl px-3 py-2 text-slate-600 focus:outline-none focus:border-violet-300"
        >
          {CATEGORIES.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
        <select
          value={sort}
          onChange={(e) => onSortChange?.(e.target.value)}
          className="w-1/2 sm:w-auto text-sm border border-slate-200 rounded-xl px-3 py-2 text-slate-600 focus:outline-none focus:border-violet-300"
        >
          {SORT_OPTIONS.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </div>
      <button
        onClick={onAddProduct}
        className="w-full sm:w-auto flex items-center justify-center gap-2 bg-violet-600 text-white px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-violet-700 transition-colors"
      >
        <Plus className="w-4 h-4" />
        افزودن محصول
      </button>
    </div>
  );
}
