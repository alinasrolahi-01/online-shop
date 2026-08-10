import React from "react";

const stats = [
  {
    icon: "🚀",
    label: "ارسال سریع",
    value: "۲۴ ساعته",
    iconBg: "bg-violet-50",
    hoverBorder: "hover:border-violet-200",
  },
  {
    icon: "🔒",
    label: "پرداخت",
    value: "امن و مطمئن",
    iconBg: "bg-fuchsia-50",
    hoverBorder: "hover:border-fuchsia-200",
  },
  {
    icon: "♻️",
    label: "بازگشت کالا",
    value: "۷ روزه رایگان",
    iconBg: "bg-purple-50",
    hoverBorder: "hover:border-purple-200",
  },
  {
    icon: "🎯",
    label: "پشتیبانی",
    value: "۲۴/۷",
    iconBg: "bg-indigo-50",
    hoverBorder: "hover:border-indigo-200",
  },
];

function StatCard({ icon, label, value, iconBg, hoverBorder }) {
  return (
    <div
      className={`group bg-white rounded-2xl p-4 shadow-sm border border-slate-100 flex items-center gap-4 hover:shadow-md ${hoverBorder} hover:-translate-y-1 transition-all duration-300 cursor-default`}
    >
      <div
        className={`w-12 h-12 rounded-xl ${iconBg} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}
      >
        {icon}
      </div>
      <div>
        <p className="text-xs text-slate-500 font-medium mb-0.5">{label}</p>
        <p className="text-sm font-bold text-slate-800">{value}</p>
      </div>
    </div>
  );
}

export default function NavInfo() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-6" dir="rtl">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>
    </div>
  );
}
