import React from "react";
import { ShoppingBag } from "lucide-react";

export default function WelcomeBanner({ name = "علی محمدی", newOrders = 12, onViewOrders }) {
  return (
    <div className="rounded-2xl p-6 text-white flex items-center justify-between bg-gradient-to-l from-violet-600 to-violet-500">
      <div>
        <p className="text-violet-200 text-sm">خوش آمدید 👋</p>
        <h2 className="text-2xl font-bold mt-1">{name}</h2>
        <p className="text-violet-200 text-sm mt-1">امروز {newOrders} سفارش جدید دارید</p>
        <button
          onClick={onViewOrders}
          className="mt-4 bg-white text-violet-700 px-4 py-2 rounded-xl text-sm font-semibold hover:bg-violet-50 transition-colors"
        >
          مشاهده سفارش‌ها
        </button>
      </div>
      <div className="hidden md:block opacity-20">
        <ShoppingBag className="w-32 h-32" strokeWidth={1} />
      </div>
    </div>
  );
}
