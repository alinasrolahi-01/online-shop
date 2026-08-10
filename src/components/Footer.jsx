import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 relative mt-[100px] md:mt-[150px] overflow-hidden">
      <div className="wrapper py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* معرفی */}
          <div>
            <h2 className="text-2xl font-black text-white mb-4">
              Silky
            </h2>

            <p className="text-sm leading-7 text-slate-400">
              سیلکی، فروشگاه اینترنتی تخصصی محصولات دیجیتال با
              تضمین اصالت کالا، بهترین قیمت و ارسال سریع به سراسر
              کشور.
            </p>
          </div>

          {/* لینک‌ها */}
          <div>
            <h3 className="font-bold text-white mb-4">
              دسترسی سریع
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition">
                  صفحه اصلی
                </Link>
              </li>

              <li>
                <Link to="/products" className="hover:text-white transition">
                  محصولات
                </Link>
              </li>

              <li>
                <Link to="/about" className="hover:text-white transition">
                  درباره ما
                </Link>
              </li>

              <li>
                <Link to="/contact" className="hover:text-white transition">
                  تماس با ما
                </Link>
              </li>
            </ul>
          </div>

          {/* خدمات */}
          <div>
            <h3 className="font-bold text-white mb-4">
              خدمات مشتریان
            </h3>

            <ul className="space-y-3 text-sm">
              <li>پیگیری سفارش</li>
              <li>شرایط بازگشت کالا</li>
              <li>سوالات متداول</li>
              <li>حریم خصوصی</li>
            </ul>
          </div>

          {/* تماس */}
          <div>
            <h3 className="font-bold text-white mb-4">
              ارتباط با ما
            </h3>

            <div className="space-y-3 text-sm">
              <p>📍 تهران، خیابان آزادی</p>
              <p>📞 ۰۲۱-۱۲۳۴۵۶۷۸</p>
              <p>✉️ info@silky.ir</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-10 pt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} تمامی حقوق این وب‌سایت برای
          <span className="text-white font-bold mx-1">Silky</span>
          محفوظ است.
        </div>
      </div>
    </footer>
  );
};

export default Footer;