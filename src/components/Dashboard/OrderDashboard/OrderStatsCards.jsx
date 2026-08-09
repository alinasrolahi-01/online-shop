import React from "react";

export const DEFAULT_ORDER_STATS = [
  { label: "کل سفارش‌ها", count: 248, pct: 100, color: "bg-violet-500" },
  { label: "در انتظار", count: 32, pct: 40, color: "bg-amber-500" },
  { label: "در حال ارسال", count: 54, pct: 60, color: "bg-blue-500" },
  { label: "تحویل شده", count: 162, pct: 85, color: "bg-green-500" },
];

export default function OrderStatsCards({ stats = DEFAULT_ORDER_STATS }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((os) => (
        <div
          key={os.label}
          className="bg-white rounded-2xl p-4 border border-slate-100 hover:shadow-md transition-shadow cursor-pointer"
        >
          <p className="text-2xl font-bold text-slate-800">{os.count}</p>
          <p className="text-sm text-slate-400 mt-1">{os.label}</p>
          <div className="w-full bg-slate-100 h-1 rounded-full mt-3">
            <div className={`h-1 rounded-full transition-all ${os.color}`} style={{ width: `${os.pct}%` }} />
          </div>
        </div>
      ))}
    </div>
  );
}
