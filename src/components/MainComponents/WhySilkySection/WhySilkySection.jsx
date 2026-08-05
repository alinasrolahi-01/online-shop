import React from "react";

const WhySilkySection = () => {

  const whyUs = [
    {
      icon: "🏆",
      title: "محصولات ۱۰۰٪ اورجینال",
      desc: "تمام محصولات ما مستقیماً از نمایندگی‌های رسمی تأمین می‌شوند و دارای کد رهگیری اصالت هستند.",
    },
    {
      icon: "⚡",
      title: "سریع‌ترین ارسال",
      desc: "انبار ما در تهران و ۱۲ شهر بزرگ آماده است. سفارش قبل از ساعت ۱۴ همان روز ارسال می‌شود.",
    },
    {
      icon: "💰",
      title: "بهترین قیمت",
      desc: "اگر جای دیگری ارزان‌تر پیدا کردید، ما تفاوت قیمت را با ۵٪ اضافه‌تر برمی‌گردانیم.",
    },
  ];


  const metrics = [
    {
      val: "+۱۲۰K",
      label: "مشتری فعال",
    },
    {
      val: "+۳,۵۰۰",
      label: "محصول متنوع",
    },
    {
      val: "۹۸٪",
      label: "رضایت مشتریان",
    },
    {
      val: "+۸ سال",
      label: "سابقه فعالیت",
    },
  ];


  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 relative overflow-hidden">

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 blob"></div>
        <div 
          className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/10 blob"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>


      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        <div className="text-center mb-14">
          <p className="text-indigo-400 text-xs font-black uppercase tracking-widest mb-2">
            چرا سیلکی؟
          </p>

          <h2 className="text-3xl sm:text-4xl font-black text-white">
            ما متفاوتیم
          </h2>

          <p className="text-slate-400 text-sm mt-2 max-w-lg mx-auto">
            از انتخاب تا تحویل، هر قدم را با شما همراهیم
          </p>
        </div>


        <div className="grid md:grid-cols-3 gap-6 mb-12">

          {
            whyUs.map((item) => (
              <div
                key={item.title}
                className="group bg-white/5 border border-white/10 rounded-3xl p-8 text-center hover:bg-white/10 hover:border-indigo-400/30 transition-all card-shine"
              >

                <div className="text-5xl mb-5 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>


                <h3 className="font-black text-white text-lg mb-3">
                  {item.title}
                </h3>


                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.desc}
                </p>

              </div>
            ))
          }

        </div>



        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          {
            metrics.map((item) => (
              <div
                key={item.label}
                className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center hover:bg-white/10 transition-all"
              >

                <p className="text-3xl font-black text-white mb-1">
                  {item.val}
                </p>


                <p className="text-slate-400 text-xs font-semibold">
                  {item.label}
                </p>

              </div>
            ))
          }

        </div>


      </div>

    </section>
  );
};


export default WhySilkySection;