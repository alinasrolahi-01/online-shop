import React from "react";
import { Eye } from "lucide-react";
import Table from "../HomePage/ui/Table";
import StatusBadge from "../HomePage/ui/StatusBadge";
import { ORDER_STATUS_VARIANTS } from "../HomePage/RecentOrders";

export const DEFAULT_ALL_ORDERS = [
  { id: "#10234", customer: "علی محمدی", product: "لپ‌تاپ ایسوس ROG", date: "۱۴۰۳/۰۵/۱۲", amount: "۴۵.۰M", status: "تحویل شد" },
  { id: "#10233", customer: "سارا احمدی", product: "هدفون سونی", date: "۱۴۰۳/۰۵/۱۱", amount: "۳.۲M", status: "در حال ارسال" },
  { id: "#10232", customer: "رضا کریمی", product: "ماوس لاجیتک", date: "۱۴۰۳/۰۵/۱۱", amount: "۱.۱M", status: "در انتظار" },
  { id: "#10231", customer: "مریم حسینی", product: "کیبورد مکانیکال", date: "۱۴۰۳/۰۵/۱۰", amount: "۲.۴M", status: "لغو شد" },
  { id: "#10230", customer: "امیر رضایی", product: "مانیتور سامسونگ", date: "۱۴۰۳/۰۵/۰۹", amount: "۹.۸M", status: "تحویل شد" },
  { id: "#10229", customer: "نگار صادقی", product: "کیف لپ‌تاپ", date: "۱۴۰۳/۰۵/۰۸", amount: "۰.۹M", status: "در انتظار" },
];

export default function OrdersTable({ orders = DEFAULT_ALL_ORDERS, onView }) {
  const columns = [
    {
      header: "شناسه",
      accessor: "id",
      render: (row) => <span className="font-mono text-violet-600 font-semibold">{row.id}</span>,
    },
    {
      header: "مشتری",
      accessor: "customer",
      render: (row) => (
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-violet-100 flex items-center justify-center text-violet-500 text-xs font-bold shrink-0">
            {row.customer.charAt(0)}
          </div>
          <span className="text-sm font-medium text-slate-700">{row.customer}</span>
        </div>
      ),
    },
    { header: "محصول", accessor: "product", hideOnMobile: true },
    {
      header: "تاریخ",
      accessor: "date",
      hideOnMobile: true,
      render: (row) => <span className="text-slate-400">{row.date}</span>,
    },
    {
      header: "مبلغ",
      accessor: "amount",
      render: (row) => <span className="font-semibold text-slate-700">{row.amount}</span>,
    },
    {
      header: "وضعیت",
      accessor: "status",
      render: (row) => <StatusBadge value={row.status} variants={ORDER_STATUS_VARIANTS} />,
    },
    {
      header: "عملیات",
      accessor: "actions",
      render: (row) => (
        <button
          onClick={() => onView?.(row)}
          className="w-7 h-7 rounded-lg bg-slate-100 hover:bg-violet-100 flex items-center justify-center transition-colors"
        >
          <Eye className="w-3.5 h-3.5 text-slate-500 hover:text-violet-600" />
        </button>
      ),
    },
  ];

  return <Table columns={columns} data={orders} keyField="id" />;
}
