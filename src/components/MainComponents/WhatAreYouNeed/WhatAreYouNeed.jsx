import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const WhatAreYouNeed = () => {
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      icon: "📦",
      q: "چه مدت طول می‌کشد تا سفارش به دستم برسد؟",
      a: "سفارش‌هایی که قبل از ساعت ۱۴ ثبت شوند، همان روز ارسال می‌شوند. زمان تحویل بسته به شهر مقصد معمولاً بین ۱ تا ۳ روز کاری است.",
    },
    {
      icon: "🛡️",
      q: "آیا محصولات دارای گارانتی هستند؟",
      a: "بله، تمامی محصولات با گارانتی معتبر شرکتی و ضمانت اصالت کالا عرضه می‌شوند.",
    },
    {
      icon: "💳",
      q: "چه روش‌های پرداختی را پشتیبانی می‌کنید؟",
      a: "امکان پرداخت آنلاین، پرداخت اقساطی (در صورت فعال بودن) و پرداخت از طریق درگاه‌های بانکی معتبر فراهم است.",
    },
    {
      icon: "🔄",
      q: "آیا امکان مرجوع کردن کالا وجود دارد؟",
      a: "بله، تا ۷ روز پس از دریافت کالا در صورت رعایت شرایط مرجوعی می‌توانید محصول را بازگردانید.",
    },
    {
      icon: "📞",
      q: "چگونه با پشتیبانی ارتباط برقرار کنم؟",
      a: "از طریق چت آنلاین، تماس تلفنی یا فرم تماس با ما می‌توانید در هر ساعت از شبانه‌روز با تیم پشتیبانی در ارتباط باشید.",
    },
  ];

  return (
    <section className="py-20 bg-slate-50" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-indigo-600 text-xs font-black uppercase tracking-widest mb-2">
            سوالات متداول
          </p>

          <h2 className="text-3xl font-black text-slate-800">
            چیزی می‌خواید بدونید؟
          </h2>

          <p className="text-slate-400 text-sm mt-2">
            پاسخ رایج‌ترین سوالات مشتریان ما
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={faq.q}
              className={`bg-white rounded-2xl border overflow-hidden transition-all duration-200 ${
                openFaq === index
                  ? "border-indigo-200 shadow-md shadow-indigo-50"
                  : "border-slate-100 hover:border-slate-200"
              }`}
            >
              <button
                onClick={() =>
                  setOpenFaq(openFaq === index ? null : index)
                }
                className="w-full flex items-center justify-between p-5 text-right gap-4 cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-8 h-8 rounded-xl flex items-center justify-center text-sm font-black flex-shrink-0 transition-colors ${
                      openFaq === index
                        ? "bg-indigo-100 text-indigo-600"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {faq.icon}
                  </div>

                  <span className="font-bold text-slate-800 text-sm text-right">
                    {faq.q}
                  </span>
                </div>

                <div
                  className={`w-7 h-7 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                    openFaq === index
                      ? "bg-indigo-600 text-white rotate-180"
                      : "bg-slate-100 text-slate-400"
                  }`}
                >
                  <IoIosArrowDown />
                </div>
              </button>

              {openFaq === index && (
                <div className="px-5 pb-5">
                  <div className="h-px bg-slate-100 mb-4"></div>

                  <p className="text-slate-500 text-sm leading-loose pr-11">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 bg-gradient-to-l from-indigo-50 to-purple-50 rounded-3xl p-8 text-center border border-indigo-100">
          <p className="text-2xl mb-3">🤔</p>

          <h3 className="font-black text-slate-800 text-lg">
            سوال دیگه‌ای دارید؟
          </h3>

          <p className="text-slate-400 text-sm mt-1.5 mb-5">
            تیم پشتیبانی ما ۲۴/۷ در خدمت شماست
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <button className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-2xl font-bold text-sm hover:bg-indigo-700 transition-all active:scale-95 shine cursor-pointer">
              💬 چت آنلاین
            </button>

            <button className="flex items-center gap-2 bg-white text-slate-700 border-2 border-slate-200 px-6 py-3 rounded-2xl font-bold text-sm hover:border-indigo-300 hover:text-indigo-600 transition-all active:scale-95 cursor-pointer">
              📞 تماس تلفنی
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatAreYouNeed;