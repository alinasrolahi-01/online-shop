import React from "react";

const CommentsBox = () => {
  const reviews = [
    {
      id: 1,
      avatar: "ع",
      name: "علی محمدی",
      date: "۲ روز پیش",
      rating: 5,
      text: "کیفیت محصول فوق‌العاده بود و دقیقاً مطابق تصاویر سایت به دستم رسید. ارسال هم خیلی سریع انجام شد و از خریدم کاملاً راضی هستم.",
      product: "iPhone 16 Pro",
      color: "#4F46E5",
    },
    {
      id: 2,
      avatar: "س",
      name: "سارا احمدی",
      date: "۱ هفته پیش",
      rating: 5,
      text: "بسته‌بندی عالی بود و کالا کاملاً سالم به دستم رسید. پشتیبانی هم پاسخگو و حرفه‌ای بود.",
      product: "MacBook Air M3",
      color: "#EC4899",
    },
    {
      id: 3,
      avatar: "م",
      name: "محمد رضایی",
      date: "۱۰ روز پیش",
      rating: 4,
      text: "از نظر کیفیت هیچ ایرادی نداشت. فقط دوست داشتم زمان ارسال کمی کوتاه‌تر باشد.",
      product: "Galaxy S25 Ultra",
      color: "#0EA5E9",
    },
    {
      id: 4,
      avatar: "ن",
      name: "نگار حسینی",
      date: "۲ هفته پیش",
      rating: 5,
      text: "اولین بار بود از سیلکی خرید می‌کردم و تجربه بسیار خوبی داشتم. حتماً دوباره خرید می‌کنم.",
      product: "AirPods Pro",
      color: "#10B981",
    },
    {
      id: 5,
      avatar: "ا",
      name: "امیر کریمی",
      date: "۳ هفته پیش",
      rating: 5,
      text: "قیمت نسبت به فروشگاه‌های دیگر مناسب‌تر بود و گارانتی معتبر هم داشت.",
      product: "PlayStation 5",
      color: "#F59E0B",
    },
    {
      id: 6,
      avatar: "ر",
      name: "رضا موسوی",
      date: "۱ ماه پیش",
      rating: 5,
      text: "از ثبت سفارش تا تحویل همه چیز عالی بود. پیشنهاد می‌کنم اگر دنبال خرید مطمئن هستید از این فروشگاه خرید کنید.",
      product: "ASUS ROG Strix",
      color: "#EF4444",
    },
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      {reviews.map((review) => (
        <div
          key={review.id}
          className="bg-white rounded-2xl p-5 border border-slate-100 hover:shadow-xl hover:border-indigo-100 transition-all flex flex-col"
        >
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div
                className="w-11 h-11 rounded-2xl flex items-center justify-center text-white font-black text-sm flex-shrink-0"
                style={{ background: review.color }}
              >
                {review.avatar}
              </div>

              <div>
                <p className="font-black text-slate-800 text-sm">
                  {review.name}
                </p>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  {review.date}
                </p>
              </div>
            </div>

            <div className="flex gap-0.5">
              {[...Array(review.rating)].map((_, index) => (
                <svg
                  key={index}
                  className="w-3.5 h-3.5 text-amber-400 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>

          <p className="text-slate-600 text-sm leading-loose flex-1">
            {review.text}
          </p>

          <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-100">
            <span className="text-xs bg-indigo-50 text-indigo-600 font-bold px-2.5 py-1 rounded-xl">
              {review.product}
            </span>

            <span className="text-xs text-slate-400">
              ✓ خرید تأیید‌شده
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentsBox;