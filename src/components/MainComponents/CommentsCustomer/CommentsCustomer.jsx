import React from "react";
import CommentsBox from "./CommentsBox";

const CommentsCustomer = () => {
  const ratingBars = [
    { star: 5, pct: 92 },
    { star: 4, pct: 6 },
    { star: 3, pct: 1 },
    { star: 2, pct: 0.5 },
    { star: 1, pct: 0.5 },
  ];

  return (
   <>
    <section className="py-20 bg-slate-50" id="reviews">
       <div className=" wrapper">
            <div className="max-w-7xl mx-auto ">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-indigo-600 text-xs font-black uppercase tracking-widest mb-2">
            نظرات مشتریان
          </p>

          <h2 className="text-3xl font-black text-slate-800">
            مشتریان ما چه می‌گویند؟
          </h2>

          <p className="text-slate-400 text-sm mt-2">
            بیش از ۲۰,۰۰۰ نظر تأیید‌شده از خریداران واقعی
          </p>
        </div>

        {/* Rating Summary */}
        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8 sm:p-10 mb-8 flex flex-col sm:flex-row gap-8 items-center">
          <div className="text-center flex-shrink-0">
            <div className="text-6xl sm:text-7xl font-black text-slate-800">
              ۴.۹
            </div>

            <div className="flex justify-center gap-1 mt-2.5">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  className="w-5 h-5 text-amber-400 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            <p className="text-slate-400 text-sm mt-1.5">
              از ۲۰,۸۴۱ نظر
            </p>
          </div>

          <div className="flex-1 w-full space-y-3">
            {ratingBars.map((item) => (
              <div
                key={item.star}
                className="flex items-center gap-3"
              >
                <span className="text-sm font-black text-slate-600 w-4 text-left flex-shrink-0">
                  {item.star}
                </span>

                <svg
                  className="w-3.5 h-3.5 text-amber-400 fill-current flex-shrink-0"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>

                <div className="flex-1 h-2.5 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-amber-400 rounded-full transition-all duration-1000"
                    style={{ width: `${item.pct}%` }}
                  />
                </div>

                <span className="text-sm text-slate-400 font-bold w-9 text-left flex-shrink-0">
                  {item.pct}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

         <CommentsBox/>

       </div>

    </section>

   </>
  );
};

export default CommentsCustomer;