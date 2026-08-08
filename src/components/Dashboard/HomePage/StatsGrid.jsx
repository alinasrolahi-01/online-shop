import React from "react";
import { Wallet, ShoppingBag, Users, TrendingUp } from "lucide-react";

export const DEFAULT_STATS = [
  { id: 1, label: "فروش امروز", value: "۱۲.۴M", change: 8.2, icon: Wallet, bg: "bg-violet-100", color: "text-violet-600" },
  { id: 2, label: "سفارش‌های جدید", value: "۱۲", change: 4.1, icon: ShoppingBag, bg: "bg-blue-100", color: "text-blue-600" },
  { id: 3, label: "مشتریان جدید", value: "۳۲۸", change: -2.4, icon: Users, bg: "bg-amber-100", color: "text-amber-600" },
  { id: 4, label: "نرخ تبدیل", value: "۳.۸٪", change: 1.6, icon: TrendingUp, bg: "bg-green-100", color: "text-green-600" },
];

export function StatCard({ stat }) {
  const Icon = stat.icon;
  const positive = stat.change > 0;
  return (
    <div className="bg-white rounded-2xl p-5 border border-slate-100 hover:shadow-md transition-shadow cursor-pointer">
      <div className="flex items-start justify-between mb-4">
        <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${stat.bg}`}>
          <Icon className={`w-5 h-5 ${stat.color}`} />
        </div>
        <span
          className={`text-xs font-semibold px-2 py-1 rounded-lg ${
            positive ? "text-green-500 bg-green-50" : "text-red-500 bg-red-50"
          }`}
        >
          {positive ? "+" : ""}
          {stat.change}%
        </span>
      </div>
      <p className="text-2xl font-bold text-slate-800">{stat.value}</p>
      <p className="text-sm text-slate-400 mt-1">{stat.label}</p>
    </div>
  );
}

export default function StatsGrid({ stats = DEFAULT_STATS }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <StatCard key={stat.id} stat={stat} />
      ))}
    </div>
  );
}
