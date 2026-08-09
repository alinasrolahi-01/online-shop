import React from "react";

/**
 * Generic horizontally-scrollable pill filter bar.
 *
 * Usage:
 *   <FilterTabs
 *     options={['همه', 'در انتظار', ...]}
 *     active={orderFilter}
 *     onChange={setOrderFilter}
 *   />
 */
export default function FilterTabs({ options, active, onChange }) {
  return (
    <div className="flex gap-2 w-full lg:w-auto overflow-x-auto pb-2 lg:pb-0 [&::-webkit-scrollbar]:hidden">
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onChange?.(option)}
          className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-colors whitespace-nowrap shrink-0 ${
            active === option ? "bg-violet-100 text-violet-600" : "bg-slate-100 text-slate-500 hover:bg-slate-200"
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
