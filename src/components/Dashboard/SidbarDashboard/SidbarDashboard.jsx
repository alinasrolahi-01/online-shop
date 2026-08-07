import { useState } from "react";
import NavItem from "./NavItem";
import UserProfile from "./UserProfile";

const navItems = [
  {
    id: "dashboard",
    label: "داشبورد",
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
  },
  {
    id: "order",
    label: "سفارش‌ها",
    icon: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z",
    badge: 5,
  },
  {
    id: "product",
    label: "محصولات",
    icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
  },
  {
    id: "customer",
    label: "مشتریان",
    icon: "M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-1.13a4 4 0 10-4-4 4 4 0 004 4zm6 0a4 4 0 10-4-4",
  },
];

export default function SidbarDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activePage, setActivePage] = useState("dashboard");
  const [showToast, setShowToast] = useState(false);

  const handleSelect = (id) => {
    setActivePage(id);
    if (id !== "orders") setShowToast(false);
  };

  return (
    <aside
      className={`fixed md:relative top-0 right-0 z-50 bg-white border-l border-slate-200 flex flex-col transition-all duration-300 h-full ${
        sidebarOpen ? "w-64 translate-x-0" : "w-64 translate-x-61 md:w-20 md:translate-x-0"
      }`}
    >
      {/* Logo */}
      <div className="p-5 border-b border-slate-100 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
        </div>
        {sidebarOpen && (
          <div>
            <p className="font-bold text-slate-800 text-sm">پیشخوان</p>
            <p className="text-xs text-slate-400">پنل مدیریت</p>
          </div>
        )}
      </div>

      {/* Nav Items */}
      <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
        {navItems.map((item) => (
          <NavItem
            key={item.id}
            item={item}
            activePage={activePage}
            sidebarOpen={sidebarOpen}
            onSelect={handleSelect}
          />
        ))}
      </nav>

      {/* User Profile */}
      <UserProfile sidebarOpen={sidebarOpen} />

      {/* Toggle Button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="absolute top-1/2 -left-3 w-6 h-6 bg-white border border-slate-200 rounded-full shadow-sm flex items-center justify-center text-slate-400 hover:text-violet-600 hover:border-violet-300 transition-all z-50"
      >
        <svg
          className={`w-3 h-3 transition-transform ${sidebarOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
    </aside>
  );
}
