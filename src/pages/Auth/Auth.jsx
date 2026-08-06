import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const blobRef = useRef(null);

  useEffect(() => {
    const handleMove = (e) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div
      dir="rtl"
      className="min-h-screen w-full flex items-center justify-center p-4 relative overflow-hidden text-slate-800"
      style={{ background: "#f8fafc", fontFamily: "sans-serif" }}
    >
      <style>{`
        @keyframes softFadeUp {
          0% { opacity: 0; transform: translateY(20px) scale(0.97); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .stagger-item {
          opacity: 0;
          animation: softFadeUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .delay-1 { animation-delay: 0.05s; }
        .delay-2 { animation-delay: 0.12s; }
        .delay-3 { animation-delay: 0.19s; }
        .delay-4 { animation-delay: 0.26s; }
        .delay-5 { animation-delay: 0.33s; }
      `}</style>

      {/* گرادیان محو دنبال‌کننده موس */}
      <div
        ref={blobRef}
        className="absolute top-0 left-0 rounded-full pointer-events-none"
        style={{
          width: 600,
          height: 600,
          background:
            "linear-gradient(to top right, rgba(191,219,254,0.5), rgba(216,180,254,0.4), rgba(153,246,228,0.5))",
          filter: "blur(100px)",
          mixBlendMode: "multiply",
          zIndex: -20,
          transition: "transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)",
          transform: `translate(${mouse.x - 300}px, ${mouse.y - 300}px)`,
          willChange: "transform",
        }}
      />

      {/* دکمه بازگشت */}
      <NavLink
        to="/"
        className="absolute top-6 right-6 flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors duration-500 font-medium bg-white/50 px-5 py-2.5 rounded-2xl backdrop-blur-xl border border-white/60 z-20"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          />
        </svg>
        <span className="text-sm">بازگشت به فروشگاه</span>
      </NavLink>

      {/* کارت اصلی */}
      <div
        className="relative w-full max-w-md bg-white/60 backdrop-blur-lg border border-white/80 p-8 md:p-10 z-10 overflow-hidden"
        style={{
          borderRadius: "2.5rem",
          boxShadow: "0 20px 40px -15px rgba(0,0,0,0.05)",
        }}
      >
        {isLogin ? (
          <div key="login" className="w-full">
            <div className="text-center mb-8 stagger-item delay-1">
              <h2 className="text-3xl font-extrabold text-slate-800 mb-2">
                سلامِ دوباره!
              </h2>
              <p className="text-slate-500 text-sm">
                برای پیگیری سفارشات وارد شوید
              </p>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
              <div className="stagger-item delay-2">
                <label className="block text-sm font-medium text-slate-600 mb-2 mr-1">
                  شماره موبایل یا ایمیل
                </label>
                <input
                  type="text"
                  className="w-full bg-white/50 backdrop-blur-sm border border-slate-200 text-slate-800 rounded-2xl px-5 py-3.5 outline-none focus:bg-white focus:border-blue-300 transition-all duration-500 placeholder:text-slate-400"
                  placeholder="مثال: 09123456789"
                />
              </div>

              <div className="stagger-item delay-3">
                <div className="flex items-center justify-between mb-2 mr-1">
                  <label className="block text-sm font-medium text-slate-600">
                    رمز عبور
                  </label>
                  <a
                    href="#"
                    className="text-xs text-blue-500 hover:text-blue-700 font-medium transition-colors duration-300"
                  >
                    فراموش کرده‌اید؟
                  </a>
                </div>
                <input
                  type="password"
                  className="w-full bg-white/50 backdrop-blur-sm border border-slate-200 text-slate-800 rounded-2xl px-5 py-3.5 outline-none focus:bg-white focus:border-blue-300 transition-all duration-500 placeholder:text-slate-400"
                  placeholder="••••••••"
                />
              </div>

              <div className="stagger-item delay-4 pt-2">
                <button className="cursor-pointer w-full bg-slate-800 hover:bg-blue-600 text-white font-medium py-4 rounded-2xl transition-all duration-500 hover:-translate-y-1 active:translate-y-0 active:scale-95">
                  ورود به حساب کاربری
                </button>
              </div>
            </form>

            <p className="text-center text-sm text-slate-500 mt-8 stagger-item delay-5">
              مشتری جدید هستید؟{" "}
              <button
                onClick={() => setIsLogin(false)}
                className="text-blue-600 cursor-pointer font-bold hover:text-blue-800 transition-colors"
              >
                ثبت‌نام کنید
              </button>
            </p>
          </div>
        ) : (
          <div key="register" className="w-full">
            <div className="text-center mb-8 stagger-item delay-1">
              <h2 className="text-3xl font-extrabold text-slate-800 mb-2">
                عضویت در فروشگاه
              </h2>
              <p className="text-slate-500 text-sm">
                تجربه خریدی لذت‌بخش و راحت
              </p>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <div className="stagger-item delay-2">
                <input
                  type="text"
                  className="w-full bg-white/50 backdrop-blur-sm border border-slate-200 text-slate-800 rounded-2xl px-5 py-3.5 outline-none focus:bg-white focus:border-purple-300 transition-all duration-500 placeholder:text-slate-400"
                  placeholder="نام و نام خانوادگی"
                />
              </div>

              <div className="stagger-item delay-3">
                <input
                  type="tel"
                  className="w-full bg-white/50 backdrop-blur-sm border border-slate-200 text-slate-800 rounded-2xl px-5 py-3.5 outline-none focus:bg-white focus:border-purple-300 transition-all duration-500 placeholder:text-slate-400"
                  placeholder="شماره موبایل"
                />
              </div>

              <div className="stagger-item delay-4">
                <input
                  type="password"
                  className="w-full bg-white/50 backdrop-blur-sm border border-slate-200 text-slate-800 rounded-2xl px-5 py-3.5 outline-none focus:bg-white focus:border-purple-300 transition-all duration-500 placeholder:text-slate-400"
                  placeholder="رمز عبور"
                />
              </div>

              <div className="stagger-item delay-5 pt-2">
                <button className="cursor-pointer w-full bg-slate-800 hover:bg-purple-600 text-white font-medium py-4 rounded-2xl transition-all duration-500 hover:-translate-y-1 active:translate-y-0 active:scale-95">
                  ثبت اطلاعات و عضویت
                </button>
              </div>
            </form>

            <p className="text-center text-sm text-slate-500 mt-8 stagger-item delay-5">
              قبلاً ثبت‌نام کرده‌اید؟{" "}
              <button
                onClick={() => setIsLogin(true)}
                className="text-purple-600 cursor-pointer font-bold hover:text-purple-800 transition-colors"
              >
                وارد شوید
              </button>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
