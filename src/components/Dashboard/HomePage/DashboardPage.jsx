import React, { useState } from "react";
import WelcomeBanner from "./WelcomeBanner";
import StatsGrid from "./StatsGrid";
import SalesChart from "./SalesChart";
import TopProducts from "./TopProducts";
import RecentOrders from "./RecentOrders";

export default function DashboardPage() {
  const [, setActivePage] = useState("dashboard");

  return (
    <div dir="rtl" className="p-6 space-y-6" style={{ fontFamily: "Vazirmatn, Tahoma, sans-serif" }}>
      <WelcomeBanner onViewOrders={() => setActivePage("orders")} />
      <StatsGrid />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <SalesChart />
        <TopProducts />
      </div>
      <RecentOrders onViewAll={() => setActivePage("orders")} />
    </div>
  );
}
