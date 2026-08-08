import React from "react";

/**
 * Generic pill/badge — pass a `variants` map from value -> tailwind classes,
 * or just a `className` for a one-off badge.
 *
 * Usage:
 *   <StatusBadge value={order.status} variants={ORDER_STATUS_VARIANTS} />
 *   <StatusBadge value="۱۲ عدد" className="bg-green-100 text-green-600" />
 */
export default function StatusBadge({ value, variants = {}, className = "", size = "sm" }) {
  const style = variants[value] || className || "bg-slate-100 text-slate-500";
  const sizeClasses = size === "xs" ? "text-xs px-2 py-1" : "text-xs px-3 py-1";

  return <span className={`${sizeClasses} rounded-full font-medium whitespace-nowrap ${style}`}>{value}</span>;
}
