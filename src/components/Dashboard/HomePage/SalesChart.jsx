import React, { useState } from "react";

export const DEFAULT_CHART_DATA = [
  { day: "شنبه", value: 4, amount: "۴.۲M تومان" },
  { day: "یک‌شنبه", value: 6, amount: "۶.۱M تومان" },
  { day: "دوشنبه", value: 3, amount: "۳.۵M تومان" },
  { day: "سه‌شنبه", value: 8, amount: "۸.۳M تومان" },
  { day: "چهارشنبه", value: 5, amount: "۵.۰M تومان" },
  { day: "پنج‌شنبه", value: 9, amount: "۹.۲M تومان" },
  { day: "جمعه", value: 7, amount: "۷.۴M تومان" },
];

export default function SalesChart({ data = DEFAULT_CHART_DATA }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const max = Math.max(...data.map((d) => d.value));

  return (
    <div className="lg:col-span-2 bg-white rounded-2xl p-6 border border-slate-100">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="font-bold text-slate-800">نمودار فروش</h3>
          <p className="text-xs text-slate-400 mt-0.5">۷ روز گذشته</p>
        </div>
        <div className="flex gap-2">
          <button className="text-xs px-3 py-1.5 bg-violet-100 text-violet-600 rounded-lg font-medium">
            هفتگی
          </button>
          <button className="text-xs px-3 py-1.5 text-slate-400 hover:bg-slate-100 rounded-lg font-medium">
            ماهانه
          </button>
        </div>
      </div>
      <div className="flex items-end gap-3 h-40">
        {data.map((bar, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-2">
            <span className="text-xs text-slate-400">{bar.value}M</span>
            <div
              className={`w-full rounded-t-lg relative cursor-pointer transition-colors ${
                activeIndex === i ? "bg-violet-500" : "bg-slate-100 hover:bg-violet-200"
              }`}
              style={{ height: `${(bar.value / max) * 100}%` }}
              onMouseEnter={() => setActiveIndex(i)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              {activeIndex === i && (
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded-lg whitespace-nowrap">
                  {bar.amount}
                </div>
              )}
            </div>
            <span className="text-xs text-slate-400">{bar.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
