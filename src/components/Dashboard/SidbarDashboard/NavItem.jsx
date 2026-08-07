import { NavLink } from "react-router";

export default function NavItem({ item, activePage, sidebarOpen, onSelect }) {
  const isActive = activePage === item.id;

  return (
    <NavLink 
    to={item.id !== "dashboard" ? `/dashboard/${item.id}` : "/dashboard"}
      onClick={() => onSelect(item.id)}
      className={`w-full flex cursor-pointer items-center gap-3 px-3 py-2.5 rounded-xl sidebar-item group relative ${
        isActive
          ? "bg-violet-50 text-violet-700"
          : "text-slate-500 hover:bg-slate-50 hover:text-slate-700"
      }`}
    >
      <div
        className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
          isActive ? "bg-violet-100" : "bg-slate-100 group-hover:bg-slate-200"
        }`}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
        </svg>
      </div>

      {sidebarOpen && (
        <span className="text-sm font-medium">{item.label}</span>
      )}

      {item.badge && sidebarOpen && (
        <span
          className={`mr-auto text-white text-xs rounded-full w-5 h-5 flex items-center justify-center ${
            isActive ? "bg-violet-500" : "bg-red-500"
          }`}
        >
          {item.badge}
        </span>
      )}

      {item.badge && !sidebarOpen && (
        <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full notification-dot border-2 border-white"></span>
      )}
    </NavLink>
  );
}
