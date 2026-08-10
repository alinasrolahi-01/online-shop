import React from "react";

export default function BannerShop() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8" dir="rtl">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-16px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>

      {/* Main Container */}
      <div className="relative bg-white rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-100 flex flex-col lg:flex-row items-center justify-between p-8 lg:p-16 gap-12 group cursor-default">

        {/* Abstract Soft Backgrounds */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-fuchsia-200/60 rounded-full mix-blend-multiply filter blur-[80px] animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-200/60 rounded-full mix-blend-multiply filter blur-[80px]" />

        {/* Text Content (Right Side) */}
        <div className="relative z-10 w-full lg:w-1/2 flex flex-col items-start text-right">

          {/* Modern Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-50 border border-violet-100 text-violet-700 text-sm font-medium mb-6 hover:bg-violet-100 transition-colors">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500" />
            </span>
            تخفیف‌های استثنایی این ماه
          </div>

          {/* Typography */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-tight tracking-tight mb-6">
            آینده خرید آنلاین، <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-violet-600 to-fuchsia-600">
              در دستان شماست.
            </span>
          </h1>

          <p className="text-slate-600 text-base sm:text-lg mb-10 max-w-md leading-relaxed font-light">
            تجربه‌ای متفاوت از کیفیت و سرعت. همین حالا به جمع هزاران کاربر راضی ما بپیوندید و از پیشنهادهای ویژه لذت ببرید.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
            <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-2xl font-bold text-sm shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 hover:-translate-y-1 transition-all duration-300 active:scale-95 flex justify-center items-center gap-2">
              شروع کنید
              <svg className="w-4 h-4 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>

            <button className="w-full sm:w-auto px-8 py-4 bg-slate-50 text-slate-700 border border-slate-200 rounded-2xl font-semibold text-sm hover:bg-slate-100 hover:text-slate-900 transition-all duration-300 active:scale-95 text-center">
              مشاهده کاتالوگ
            </button>
          </div>
        </div>

        {/* Visual/Graphic Area (Left Side) */}
        <div className="relative z-10 w-full lg:w-5/12 h-64 sm:h-80 lg:h-96 hidden sm:flex justify-center items-center [perspective:1000px]">
          {/* 3D Abstract Composition */}
          <div className="relative w-full h-full transform transition-transform duration-700 ease-out group-hover:rotate-x-12 group-hover:rotate-y-12">
            {/* Card 1 */}
            <div className="absolute inset-0 m-auto w-48 h-64 bg-gradient-to-tr from-violet-500 to-fuchsia-500 rounded-3xl backdrop-blur-md border border-white/50 shadow-2xl shadow-violet-500/20 transform rotate-6 hover:rotate-12 transition-transform duration-500 animate-float" />
            {/* Card 2 */}
            <div
              className="absolute inset-0 m-auto w-48 h-64 bg-white/70 rounded-3xl backdrop-blur-xl border border-white shadow-xl transform -rotate-12 hover:-rotate-6 transition-transform duration-500"
              style={{ animation: "float 6s ease-in-out infinite reverse" }}
            />
            {/* Floating Icon */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-7xl drop-shadow-xl">
              🚀
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
