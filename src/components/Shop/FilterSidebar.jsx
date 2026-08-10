import React, { useState } from "react";

const DEFAULT_PRICE_RANGE = { min: 0, max: 10000000 };

export default function FilterSidebar({ onFilterChange }) {
  const [priceRange, setPriceRange] = useState(DEFAULT_PRICE_RANGE);
  const [filterOnSale, setFilterOnSale] = useState(false);
  const [filterNew, setFilterNew] = useState(false);
  const [filterInStock, setFilterInStock] = useState(false);

  const applyFilters = (updated = {}) => {
    const nextState = {
      priceRange,
      filterOnSale,
      filterNew,
      filterInStock,
      ...updated,
    };
    if (onFilterChange) onFilterChange(nextState);
  };

  const handlePriceMinChange = (value) => {
    const min = Number(value);
    setPriceRange((prev) => {
      const next = { ...prev, min };
      applyFilters({ priceRange: next });
      return next;
    });
  };

  const handlePriceMaxChange = (value) => {
    const max = Number(value);
    setPriceRange((prev) => {
      const next = { ...prev, max };
      applyFilters({ priceRange: next });
      return next;
    });
  };

  const resetFilters = () => {
    setPriceRange(DEFAULT_PRICE_RANGE);
    setFilterOnSale(false);
    setFilterNew(false);
    setFilterInStock(false);
    applyFilters({
      priceRange: DEFAULT_PRICE_RANGE,
      filterOnSale: false,
      filterNew: false,
      filterInStock: false,
    });
  };

  return (
    <aside className="w-full lg:w-72 flex-shrink-0 hidden lg:block">
      <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-6 sticky top-24">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-base font-bold text-slate-800">فیلتر محصولات</h3>
          <button
            onClick={resetFilters}
            className="text-xs text-violet-600 hover:text-violet-700 font-medium bg-violet-50 px-3 py-1.5 rounded-lg transition-colors"
          >
            پاک کردن
          </button>
        </div>

        {/* Price Range */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-slate-700 mb-4">محدوده قیمت (تومان)</h4>
          <div className="space-y-4">
            {/* Number Inputs */}
            <div className="flex items-center gap-3">
              <div className="flex-1">
                <label className="text-[10px] text-slate-400 mb-1 block">از</label>
                <input
                  type="number"
                  value={priceRange.min}
                  onChange={(e) => handlePriceMinChange(e.target.value)}
                  className="w-full text-sm border border-slate-200 rounded-xl px-3 py-2 focus:ring-2 focus:ring-violet-200 focus:border-violet-500 outline-none transition-all"
                />
              </div>
              <div className="flex-1">
                <label className="text-[10px] text-slate-400 mb-1 block">تا</label>
                <input
                  type="number"
                  value={priceRange.max}
                  onChange={(e) => handlePriceMaxChange(e.target.value)}
                  className="w-full text-sm border border-slate-200 rounded-xl px-3 py-2 focus:ring-2 focus:ring-violet-200 focus:border-violet-500 outline-none transition-all"
                />
              </div>
            </div>

            {/* Range Sliders */}
            <div className="relative pt-2">
              <input
                type="range"
                min="0"
                max="10000000"
                step="100000"
                value={priceRange.min}
                onChange={(e) => handlePriceMinChange(e.target.value)}
                className="w-full absolute top-0 pointer-events-none appearance-none bg-transparent [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:bg-violet-600 [&::-webkit-slider-thumb]:rounded-full z-20"
              />
              <input
                type="range"
                min="0"
                max="10000000"
                step="100000"
                value={priceRange.max}
                onChange={(e) => handlePriceMaxChange(e.target.value)}
                className="w-full absolute top-0 pointer-events-none appearance-none bg-slate-200 h-1.5 rounded-full [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:bg-violet-600 [&::-webkit-slider-thumb]:rounded-full z-30"
              />
            </div>
          </div>
        </div>

        <div className="h-px bg-slate-100 mb-6" />

        {/* Special Filters */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-slate-700 mb-3">وضعیت محصول</h4>
          <div className="space-y-3">
            <label className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={filterOnSale}
                onChange={(e) => {
                  setFilterOnSale(e.target.checked);
                  applyFilters({ filterOnSale: e.target.checked });
                }}
                className="w-4 h-4 rounded border-slate-300 text-violet-600 focus:ring-violet-500"
              />
              <span className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors">
                فقط تخفیف‌دار
              </span>
            </label>

            <label className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={filterNew}
                onChange={(e) => {
                  setFilterNew(e.target.checked);
                  applyFilters({ filterNew: e.target.checked });
                }}
                className="w-4 h-4 rounded border-slate-300 text-violet-600 focus:ring-violet-500"
              />
              <span className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors">
                محصولات جدید
              </span>
            </label>

            <label className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={filterInStock}
                onChange={(e) => {
                  setFilterInStock(e.target.checked);
                  applyFilters({ filterInStock: e.target.checked });
                }}
                className="w-4 h-4 rounded border-slate-300 text-violet-600 focus:ring-violet-500"
              />
              <span className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors">
                موجود در انبار
              </span>
            </label>
          </div>
        </div>
      </div>
    </aside>
  );
}
