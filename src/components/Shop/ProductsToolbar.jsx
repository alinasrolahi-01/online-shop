import React, { useState, useRef, useEffect } from "react";

const sortOptions = {
  default: "مرتب‌سازی: پیش‌فرض",
  "price-asc": "ارزان‌ترین",
  "price-desc": "گران‌ترین",
  rating: "بهترین امتیاز",
  newest: "جدیدترین",
};

function SortDropdown({ sortBy, onSortChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (value) => {
    onSortChange(value);
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className="relative w-full sm:w-64 font-sans" dir="rtl">
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className="w-full flex items-center justify-between px-4 py-3 bg-white/40 backdrop-blur-md border border-white/50 shadow-sm rounded-xl text-slate-700 font-medium transition-all duration-300 hover:bg-white/50 focus:outline-none focus:ring-2 focus:ring-violet-300 focus:bg-white/60"
      >
        <span>{sortOptions[sortBy]}</span>
        <svg
          className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute z-10 w-full mt-2 py-1 bg-white/50 backdrop-blur-xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-xl overflow-hidden">
          {Object.entries(sortOptions).map(([value, label]) => (
            <div
              key={value}
              onClick={() => handleSelect(value)}
              className={`px-4 py-2.5 cursor-pointer text-slate-700 hover:bg-white/60 hover:text-violet-700 transition-colors duration-200 text-sm font-medium ${
                sortBy === value ? "bg-white/60 text-violet-700" : ""
              }`}
            >
              <span>{label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function ProductsToolbar({
  productCount = 0,
  onToggleMobileFilter,
  onSortChange,
  viewMode = "grid",
  onViewModeChange,
}) {
  const [sortBy, setSortBy] = useState("default");

  const handleSortChange = (value) => {
    setSortBy(value);
    if (onSortChange) onSortChange(value);
  };

  return (
    <div className="flex flex-wrap items-center justify-between mb-6 bg-white rounded-2xl p-4 border border-slate-100 shadow-sm gap-4">
      <div className="flex items-center gap-3">
        <span className="text-sm text-slate-500">
          <span className="font-bold text-slate-800">{productCount}</span> محصول یافت شد
        </span>

        {/* Mobile Filter Button */}
        <button
          onClick={onToggleMobileFilter}
          className="lg:hidden flex items-center gap-2 text-sm font-medium text-slate-600 bg-slate-50 border border-slate-200 px-4 py-2 rounded-xl"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
            />
          </svg>
          فیلتر
        </button>
      </div>

      <div className="flex items-center gap-3 w-full sm:w-auto">
        <SortDropdown sortBy={sortBy} onSortChange={handleSortChange} />

        {/* View Toggle */}
        <div className="hidden sm:flex bg-slate-50 rounded-xl p-1 border border-slate-200">
          <button
            onClick={() => onViewModeChange && onViewModeChange("grid")}
            className={`p-2 rounded-lg transition-all ${
              viewMode === "grid" ? "bg-white shadow-sm text-violet-600" : "text-slate-400 hover:text-slate-600"
            }`}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 3h7v7H3V3zm11 0h7v7h-7V3zm-11 11h7v7H3v-7zm11 0h7v7h-7v-7z" />
            </svg>
          </button>
          <button
            onClick={() => onViewModeChange && onViewModeChange("list")}
            className={`p-2 rounded-lg transition-all ${
              viewMode === "list" ? "bg-white shadow-sm text-violet-600" : "text-slate-400 hover:text-slate-600"
            }`}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
