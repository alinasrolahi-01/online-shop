import React, { useState } from "react";

const DiscountEmailBox = () => {
  const [email, setEmail] = useState("");

  const newsPerks = [
    {
      icon: "🎁",
      text: "تخفیف‌های اختصاصی",
    },
    {
      icon: "⚡",
      text: "اطلاع از آفرهای ویژه",
    },
    {
      icon: "🆕",
      text: "معرفی محصولات جدید",
    },
  ];

  const subscribeEmail = () => {
    if (!email.trim()) return;

    alert(`ایمیل ${email} ثبت شد.`);
    setEmail("");
  };

  return (
    <section className="py-20 bg-white" id="newsletter">
      <div className="max-w-xl mx-auto px-4 sm:px-6 text-center">
        <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 rounded-3xl p-10 sm:p-14 border border-indigo-100">
          <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-5">
            📬
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-slate-800">
            از تخفیف‌ها عقب نمانید!
          </h2>

          <p className="text-slate-500 text-sm mt-3 leading-loose">
            عضو خبرنامه شوید و اولین نفری باشید که از آفرهای ویژه باخبر
            می‌شود.
          </p>

          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="ایمیل شما..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && subscribeEmail()}
              className="flex-1 px-5 py-3.5 bg-white border border-slate-200 rounded-2xl text-sm focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition-all font-semibold"
            />

            <button
              onClick={subscribeEmail}
              className="bg-gradient-to-l from-indigo-600 to-purple-600 cursor-pointer text-white px-7 py-3.5 rounded-2xl font-black text-sm hover:shadow-xl hover:shadow-indigo-200 transition-all active:scale-95 shine whitespace-nowrap"
            >
              عضویت رایگان 🎁
            </button>
          </div>

          <p className="text-xs text-slate-400 mt-4">
            🔒 اطلاعات شما محفوظ است — هر زمان لغو عضویت کنید
          </p>

          <div className="grid grid-cols-3 gap-3 mt-6">
            {newsPerks.map((item) => (
              <div
                key={item.text}
                className="bg-white/70 rounded-2xl p-3 border border-white"
              >
                <p className="text-xl mb-1">{item.icon}</p>

                <p className="text-[11px] font-bold text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscountEmailBox;