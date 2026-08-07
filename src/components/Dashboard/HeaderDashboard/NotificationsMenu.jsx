import { useState, useRef, useEffect } from "react";

const notifications = [
  {
    id: 1,
    title: "سفارش جدید ثبت شد",
    time: "۵ دقیقه پیش",
    color: "bg-violet-500",
    icon: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9",
    unread: true,
  },
  {
    id: 2,
    title: "موجودی محصول رو به اتمام است",
    time: "۱ ساعت پیش",
    color: "bg-amber-500",
    icon: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",
    unread: true,
  },
  {
    id: 3,
    title: "نظر جدید ثبت شد",
    time: "دیروز",
    color: "bg-sky-500",
    icon: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-4l-4 4v-4z",
    unread: false,
  },
];

const NotificationsMenu = () => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickAway = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickAway);
    return () => document.removeEventListener("mousedown", handleClickAway);
  }, []);

  return (
    <div className="relative" ref={containerRef}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="relative w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition-colors"
      >
        <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          />
        </svg>
        <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full notification-dot border-2 border-white"></span>
      </button>

      {open && (
        <div className="fixed md:absolute inset-x-4 top-20 md:inset-auto md:left-0 md:top-14 md:w-80 bg-white rounded-2xl shadow-2xl border border-slate-100 dropdown-animation z-[60] p-2">
          <div className="px-3 py-2 flex items-center justify-between">
            <span className="text-sm font-bold text-slate-700">اعلان‌ها</span>
            <span className="text-xs bg-red-100 text-red-500 px-2 py-0.5 rounded-full">۳ جدید</span>
          </div>

          {notifications.map((notif) => (
            <div
              key={notif.id}
              className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 cursor-pointer"
            >
              <div
                className={`${notif.color} w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0`}
              >
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={notif.icon} />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-slate-700">{notif.title}</p>
                <p className="text-xs text-slate-400 mt-0.5">{notif.time}</p>
              </div>
              {notif.unread && <div className="w-2 h-2 bg-violet-500 rounded-full mt-1"></div>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NotificationsMenu;
