import React, { useState } from "react";
import OrderStatsCards from "./OrderStatsCards";
import FilterTabs from "./ui/FilterTabs";
import OrdersTable, { DEFAULT_ALL_ORDERS } from "./OrdersTable";

const FILTERS = ["همه", "در انتظار", "در حال ارسال", "تحویل شد", "لغو شد"];

export default function OrdersPage({ orders = DEFAULT_ALL_ORDERS }) {
  const [orderFilter, setOrderFilter] = useState("همه");

  const filteredOrders =
    orderFilter === "همه" ? orders : orders.filter((o) => o.status === orderFilter);

  return (
    <div dir="rtl" className="p-6 space-y-6" style={{ fontFamily: "Vazirmatn, Tahoma, sans-serif" }}>
      <OrderStatsCards />

      <div className="bg-white rounded-2xl border border-slate-100">
        <div className="p-4 sm:p-6 border-b border-slate-100 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          <h3 className="font-bold text-slate-800 whitespace-nowrap">لیست سفارش‌ها</h3>
          <FilterTabs options={FILTERS} active={orderFilter} onChange={setOrderFilter} />
        </div>

        <OrdersTable orders={filteredOrders} onView={(order) => console.log("view order", order.id)} />
      </div>
    </div>
  );
}
