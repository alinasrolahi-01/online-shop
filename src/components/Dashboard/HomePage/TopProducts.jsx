import React from "react";
import { Package } from "lucide-react";

export const DEFAULT_TOP_PRODUCTS = [
  { id: 1, name: "لپ‌تاپ ایسوس ROG", progress: 82, sold: 128 },
  { id: 2, name: "هدفون بی‌سیم سونی", progress: 64, sold: 96 },
  { id: 3, name: "ماوس گیمینگ لاجیتک", progress: 47, sold: 71 },
  { id: 4, name: "کیبورد مکانیکال", progress: 35, sold: 52 },
];

export default function TopProducts({ products = DEFAULT_TOP_PRODUCTS }) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-100">
      <h3 className="font-bold text-slate-800 mb-4">پرفروش‌ترین‌ها</h3>
      <div className="space-y-4">
        {products.map((product) => (
          <div key={product.id} className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-violet-50 flex items-center justify-center shrink-0">
              <Package className="w-5 h-5 text-violet-400" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-slate-700 truncate">{product.name}</p>
              <div className="flex items-center gap-2 mt-1">
                <div className="flex-1 bg-slate-100 rounded-full h-1.5">
                  <div
                    className="bg-violet-500 h-1.5 rounded-full transition-all"
                    style={{ width: `${product.progress}%` }}
                  />
                </div>
                <span className="text-xs text-slate-400 whitespace-nowrap">{product.sold} فروش</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
