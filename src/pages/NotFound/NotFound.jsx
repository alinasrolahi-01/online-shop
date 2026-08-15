import { useState } from "react";
import { Link } from "react-router";
/* ---------- static data ---------- */

const hotSearches = ["کفش ورزشی", "هدفون", "کیف چرم", "ساعت هوشمند", "عینک"];
const searchSuggestions = [
  "کفش ورزشی", "کفش پاشنه", "هدفون بیسیم", "هدفون گیمینگ", "کیف چرمی",
  "کیف لپتاپ", "ساعت هوشمند", "ساعت مچی", "عینک آفتابی", "شلوار جین",
];

const quickLinks = [
  { icon: "🏠", name: "خانه" },
  { icon: "👟", name: "کفش" },
  { icon: "👜", name: "کیف" },
  { icon: "⌚", name: "ساعت" },
  { icon: "🎧", name: "گجت" },
  { icon: "💍", name: "اکسسوری" },
  { icon: "📞", name: "تماس" },
  { icon: "❓", name: "راهنما" },
];

const helpCards = [
  { icon: "💬", title: "چت آنلاین", desc: "همین الان با کارشناسان ما صحبت کنید", action: "شروع چت", bg: "bg-indigo-50 group-hover:bg-indigo-100" },
  { icon: "📞", title: "تماس تلفنی", desc: "۰۲۱-۱۲۳۴-۵۶۷۸ در ساعات اداری", action: "تماس بگیرید", bg: "bg-green-50 group-hover:bg-green-100" },
  { icon: "📧", title: "ارسال ایمیل", desc: "پاسخ در کمتر از ۲۴ ساعت", action: "ارسال ایمیل", bg: "bg-blue-50 group-hover:bg-blue-100" },
  { icon: "❓", title: "سوالات متداول", desc: "پاسخ سریع به سوالات رایج", action: "مشاهده FAQ", bg: "bg-amber-50 group-hover:bg-amber-100" },
];

/* ---------- component ---------- */

const NotFound = () => {
  const [searchQ, setSearchQ] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [toastMsg, setToastMsg] = useState("");

  let toastTimer = null;
  const notify = (msg) => {
    setToastMsg(msg);
    setShowToast(true);
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => setShowToast(false), 2500);
  };

  const doSearch = () => {
    if (searchQ.trim()) {
      notify(`در حال جستجوی "${searchQ}"...`);
      setTimeout(() => setSearchQ(""), 1500);
    }
  };

  const filteredSuggestions = searchSuggestions.filter((s) => s.includes(searchQ)).slice(0, 4);

  return (
    <div className="hero-bg noise-bg min-h-screen overflow-x-hidden" dir="rtl">
      <style>{`
        @keyframes float { 0%,100% { transform: translateY(0px) rotate(0deg);} 50% { transform: translateY(-16px) rotate(4deg);} }
        @keyframes float2 { 0%,100% { transform: translateY(0px) rotate(0deg);} 50% { transform: translateY(-10px) rotate(-3deg);} }
        @keyframes float3 { 0%,100% { transform: translateY(0px) rotate(0deg);} 50% { transform: translateY(-8px) rotate(2deg);} }
        @keyframes gradient-shift { 0% { background-position: 0% 50%;} 50% { background-position: 100% 50%;} 100% { background-position: 0% 50%;} }
        @keyframes spin-slow { from { transform: rotate(0deg);} to { transform: rotate(360deg);} }
        @keyframes spin-reverse { from { transform: rotate(360deg);} to { transform: rotate(0deg);} }
        @keyframes number-glitch { 0%,90%,100% { transform: translate(0); filter:none;} 91% { transform: translate(-4px,2px); filter: hue-rotate(90deg);} 93% { transform: translate(4px,-2px); filter: hue-rotate(180deg);} 95% { transform: translate(-2px,4px); filter: hue-rotate(270deg);} 97% { transform: translate(3px,-1px); filter: hue-rotate(360deg);} }
        @keyframes shimmer { 0% { background-position: -200% 0;} 100% { background-position: 200% 0;} }
        @keyframes bounce-slow { 0%,100% { transform: translateY(0); animation-timing-function: cubic-bezier(0.8,0,1,1);} 50% { transform: translateY(-20px); animation-timing-function: cubic-bezier(0,0,0.2,1);} }
        @keyframes fadeInUp { from { opacity:0; transform: translateY(30px);} to { opacity:1; transform: translateY(0);} }
        @keyframes fadeInScale { from { opacity:0; transform: scale(0.8);} to { opacity:1; transform: scale(1);} }
        @keyframes orbit { from { transform: rotate(0deg) translateX(120px) rotate(0deg);} to { transform: rotate(360deg) translateX(120px) rotate(-360deg);} }
        @keyframes orbit2 { from { transform: rotate(180deg) translateX(160px) rotate(-180deg);} to { transform: rotate(540deg) translateX(160px) rotate(-540deg);} }
        @keyframes orbit3 { from { transform: rotate(90deg) translateX(90px) rotate(-90deg);} to { transform: rotate(450deg) translateX(90px) rotate(-450deg);} }

        .float-1 { animation: float 3.5s ease-in-out infinite; }
        .float-2 { animation: float2 4.5s ease-in-out infinite .5s; }
        .float-3 { animation: float3 5s ease-in-out infinite 1s; }
        .gradient-text { background: linear-gradient(135deg,#6366f1,#8b5cf6,#ec4899); background-size:200% 200%; animation: gradient-shift 3s ease infinite; -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
        .shimmer-btn { background: linear-gradient(90deg,#6366f1 0%,#8b5cf6 25%,#a78bfa 50%,#8b5cf6 75%,#6366f1 100%); background-size:200% auto; animation: shimmer 2.5s linear infinite; }
        .spin-slow { animation: spin-slow 12s linear infinite; }
        .spin-reverse { animation: spin-reverse 8s linear infinite; }
        .bounce-slow { animation: bounce-slow 2s ease-in-out infinite; }
        .orbit-1 { animation: orbit 6s linear infinite; }
        .orbit-2 { animation: orbit2 9s linear infinite; }
        .orbit-3 { animation: orbit3 4s linear infinite; }
        .fade-up-1 { animation: fadeInUp .6s ease forwards .1s; opacity:0; }
        .fade-up-2 { animation: fadeInUp .6s ease forwards .3s; opacity:0; }
        .fade-up-3 { animation: fadeInUp .6s ease forwards .5s; opacity:0; }
        .fade-up-4 { animation: fadeInUp .6s ease forwards .7s; opacity:0; }
        .fade-up-5 { animation: fadeInUp .6s ease forwards .9s; opacity:0; }
        .fade-scale { animation: fadeInScale .8s ease forwards .2s; opacity:0; }
        .glass { background: rgba(255,255,255,0.72); backdrop-filter: blur(16px); border:1px solid rgba(255,255,255,0.95); }
        .hero-bg { background: linear-gradient(135deg,#f8faff 0%,#f0f4ff 30%,#faf5ff 60%,#fff0f9 100%); }
        .card-hover { transition: all .35s cubic-bezier(.175,.885,.32,1.275); }
        .card-hover:hover { transform: translateY(-6px); box-shadow: 0 20px 40px -10px rgba(99,102,241,.18); }
        .suggestion-chip { transition: all .2s cubic-bezier(.68,-.55,.265,1.55); }
        .suggestion-chip:hover { transform: scale(1.06) translateY(-2px); }
        .error-code { font-size: clamp(80px,18vw,180px); font-weight:900; line-height:1; background: linear-gradient(135deg,#6366f1 0%,#8b5cf6 40%,#ec4899 70%,#4681ff 100%); background-size:200% 200%; animation: gradient-shift 4s ease infinite, number-glitch 5s ease-in-out infinite; -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
        .noise-bg { background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E"); }
      `}</style>

      {/* decorative bg blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-indigo-100/60 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-purple-100/50 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-pink-100/40 rounded-full blur-3xl" />
        <div className="absolute top-[30%] left-[10%] w-[200px] h-[200px] bg-cyan-100/40 rounded-full blur-2xl" />
      </div>

      {/* ===== MAIN 404 SECTION ===== */}
      <main className="relative z-10">
        <section className="min-h-[calc(100vh-64px)] flex items-center justify-center px-4 py-16">
          <div className="max-w-6xl mx-auto w-full">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* visual */}
              <div className="flex justify-center items-center order-1 lg:order-2">
                <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-indigo-200 spin-slow" />
                  <div className="absolute inset-4 rounded-full border-2 border-dashed border-purple-200 spin-reverse" />
                  <div className="absolute inset-8 rounded-full bg-gradient-to-br from-indigo-50 to-purple-50 shadow-inner" />

                  <div className="relative z-10 text-center">
                    <div className="bounce-slow inline-block">
                      <div className="w-28 h-28 rounded-3xl bg-white shadow-2xl flex items-center justify-center mx-auto">
                        <span className="text-6xl">🔍</span>
                      </div>
                    </div>
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="orbit-1 absolute">
                      <div className="w-11 h-11 bg-white rounded-2xl shadow-lg flex items-center justify-center">
                        <span className="text-xl">👟</span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="orbit-2 absolute">
                      <div className="w-10 h-10 bg-white rounded-2xl shadow-lg flex items-center justify-center">
                        <span className="text-xl">⌚</span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="orbit-3 absolute">
                      <div className="w-9 h-9 bg-white rounded-xl shadow-lg flex items-center justify-center">
                        <span className="text-lg">🎧</span>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -top-3 -right-3 float-1">
                    <div className="glass rounded-2xl px-3 py-2 shadow-xl">
                      <div className="text-[10px] text-slate-500">کد خطا</div>
                      <div className="text-sm font-black text-indigo-600">۴۰۴</div>
                    </div>
                  </div>
                  <div className="absolute -bottom-3 -left-3 float-2">
                    <div className="glass rounded-2xl px-3 py-2 shadow-xl">
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse" />
                        <div className="text-[10px] text-slate-500">صفحه یافت نشد</div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-1/2 -left-8 float-3 hidden sm:block">
                    <div className="glass rounded-xl p-2 shadow-lg">
                      <span className="text-2xl">😕</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* content */}
              <div className="order-2 lg:order-1 text-right">
                <div className="fade-scale mb-2">
                  <div className="error-code">۴۰۴</div>
                </div>

                <div className="fade-up-1">
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-800 mb-3 leading-tight">
                    اوه! صفحه‌ای که دنبالش بودید <span className="gradient-text">پیدا نشد</span>
                  </h1>
                </div>

                <div className="fade-up-2">
                  <p className="text-slate-500 text-base leading-relaxed mb-6 max-w-md">
                    ممکنه این صفحه حذف شده، منتقل شده یا اصلاً وجود نداشته باشه. نگران نباشید، همین‌جا کمکتون می‌کنیم!
                  </p>
                </div>

                <div className="fade-up-3 mb-6">
                  <div className="relative max-w-md">
                    <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-2xl px-4 py-3 shadow-sm focus-within:border-indigo-400 transition-all">
                      <svg className="w-4 h-4 text-slate-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                      <input
                        value={searchQ}
                        onChange={(e) => setSearchQ(e.target.value)}
                        type="text"
                        placeholder="جستجو در فروشگاه..."
                        className="flex-1 text-sm text-slate-700 outline-none placeholder-slate-400 bg-transparent"
                      />
                      <button onClick={doSearch} className="shimmer-btn text-white text-xs font-bold px-4 py-1.5 rounded-xl flex-shrink-0">
                        جستجو
                      </button>
                    </div>

                    {searchQ.length > 0 && (
                      <div className="absolute top-full mt-2 left-0 right-0 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden z-20">
                        <div className="p-2">
                          {filteredSuggestions.map((s) => (
                            <button key={s} onClick={() => setSearchQ(s)} className="w-full text-right flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-indigo-50 transition-colors">
                              <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                              </svg>
                              <span className="text-sm text-slate-600">{s}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="text-xs text-slate-400 self-center">جستجوهای پرطرفدار:</span>
                    {hotSearches.map((chip) => (
                      <button
                        key={chip}
                        onClick={() => setSearchQ(chip)}
                        className="suggestion-chip cursor-pointer bg-white border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50 text-slate-600 hover:text-indigo-600 text-xs font-medium px-3 py-1.5 rounded-xl shadow-sm"
                      >
                        {chip}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="fade-up-4 flex flex-wrap gap-3 mb-8">
                  <Link to="/" className="shimmer-btn text-white font-bold px-6 py-3 rounded-2xl shadow-lg shadow-indigo-200 flex items-center gap-2 text-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    برگشت به خانه
                  </Link>
                  <a href="#" className="bg-white border-2 border-slate-200 hover:border-indigo-300 text-slate-700 font-bold px-6 py-3 rounded-2xl transition-all hover:bg-indigo-50 flex items-center gap-2 text-sm shadow-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    مشاهده محصولات
                  </a>
                  <a href="#" className="bg-white border-2 border-slate-200 hover:border-purple-300 text-slate-700 font-bold px-6 py-3 rounded-2xl transition-all hover:bg-purple-50 flex items-center gap-2 text-sm shadow-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    تماس با پشتیبانی
                  </a>
                </div>

                <div className="fade-up-5">
                  <div className="text-xs text-slate-400 mb-3 font-medium">دسترسی سریع:</div>
                  <div className="flex flex-wrap gap-2">
                    {quickLinks.map((link) => (
                      <a
                        key={link.name}
                        href="#"
                        className="flex items-center gap-1.5 bg-white/80 hover:bg-white border border-slate-100 hover:border-indigo-200 rounded-xl px-3 py-1.5 text-xs text-slate-600 hover:text-indigo-600 transition-all shadow-sm font-medium"
                      >
                        <span>{link.icon}</span>
                        <span>{link.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* help cards */}
        <section className="relative z-10 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-lg font-black text-slate-700 mb-5 text-center">می‌تونیم کمک کنیم؟</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {helpCards.map((card) => (
                <div key={card.title} className="group bg-white rounded-3xl p-5 shadow-sm border border-slate-100 card-hover cursor-pointer text-center">
                  <div className={`w-12 h-12 mx-auto mb-3 rounded-2xl flex items-center justify-center transition-all duration-300 ${card.bg}`}>
                    <span className="text-2xl">{card.icon}</span>
                  </div>
                  <h3 className="font-bold text-slate-800 text-sm mb-1">{card.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{card.desc}</p>
                  <div className="mt-3 text-indigo-600 text-xs font-semibold flex items-center justify-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>{card.action}</span>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* toast */}
      {showToast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] bg-slate-800 text-white px-6 py-3.5 rounded-2xl shadow-2xl flex items-center gap-3 text-sm font-medium min-w-[220px] justify-center">
          <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
            <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <span>{toastMsg}</span>
        </div>
      )}
    </div>
  );
};

export default NotFound;
