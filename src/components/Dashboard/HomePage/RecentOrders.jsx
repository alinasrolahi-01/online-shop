import React from "react";
import Table from "./ui/Table";
import StatusBadge from "./ui/StatusBadge";

export const ORDER_STATUS_VARIANTS = {
  "تحویل شد": "bg-green-100 text-green-600",
  "در حال ارسال": "bg-blue-100 text-blue-600",
  "در انتظار": "bg-amber-100 text-amber-600",
  "لغو شد": "bg-red-100 text-red-600",
};

export const DEFAULT_ORDERS = [
  { id: "#10234", customer: "علی محمدی", product: "لپ‌تاپ ایسوس ROG", amount: "۴۵.۰M", status: "تحویل شد" },
  { id: "#10233", customer: "سارا احمدی", product: "هدفون سونی", amount: "۳.۲M", status: "در حال ارسال" },
  { id: "#10232", customer: "رضا کریمی", product: "ماوس لاجیتک", amount: "۱.۱M", status: "در انتظار" },
  { id: "#10231", customer: "مریم حسینی", product: "کیبورد مکانیکال", amount: "۲.۴M", status: "لغو شد" },
  { id: "#10230", customer: "امیر رضایی", product: "مانیتور سامسونگ", amount: "۹.۸M", status: "تحویل شد" },
];

const columns = [
  { header: "شناسه سفارش", accessor: "id", render: (row) => <span className="font-mono">{row.id}</span> },
  {
    header: "مشتری",
    accessor: "customer",
    render: (row) => (
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-violet-100 flex items-center justify-center text-violet-500 text-xs font-bold">
          {row.customer.charAt(0)}
        </div>
        <span className="text-sm font-medium text-slate-700">{row.customer}</span>
      </div>
    ),
  },
  { header: "محصول", accessor: "product", hideOnMobile: true },
  { header: "مبلغ", accessor: "amount", render: (row) => <span className="font-semibold text-slate-700">{row.amount}</span> },
  {
    header: "وضعیت",
    accessor: "status",
    render: (row) => <StatusBadge value={row.status} variants={ORDER_STATUS_VARIANTS} />,
  },
];

export default function RecentOrders({ orders = DEFAULT_ORDERS, onViewAll, maxRows = 5 }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-100">
      <div className="p-6 flex items-center justify-between border-b border-slate-100">
        <h3 className="font-bold text-slate-800">سفارش‌های اخیر</h3>
        <button onClick={onViewAll} className="text-sm text-violet-600 hover:text-violet-700 font-medium">
          مشاهده همه
        </button>
      </div>
      <Table columns={columns} data={orders} keyField="id" maxRows={maxRows} />
    </div>
  );
}
