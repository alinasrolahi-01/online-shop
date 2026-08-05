import React from "react";

const CartDropDown = () => {
  const cartItems = [
    {
      id: 1,
      title: "MacBook Pro M3",
      price: "۸۹,۹۰۰,۰۰۰",
      image: "/images/products/macbook-pro.jpg",
    },
    {
      id: 2,
      title: "AirPods Pro 2",
      price: "۱۲,۵۰۰,۰۰۰",
      image: "/images/products/airpods.jpg",
    },
  ];

  return (
    <div className="absolute top-full left-0 mt-3 w-80 bg-white rounded-2xl shadow-xl border border-slate-200 z-50 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <h3 className="font-bold text-slate-800">سبد خرید</h3>
        <span className="text-sm text-slate-500">
          {cartItems.length} محصول
        </span>
      </div>

      {/* Items */}
      <div className="max-h-72 overflow-y-auto">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-3 p-4 border-b last:border-b-0 hover:bg-slate-50 transition"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-14 h-14 rounded-xl object-cover"
            />

            <div className="flex-1">
              <p className="font-semibold text-sm text-slate-800">
                {item.title}
              </p>

              <p className="text-indigo-600 text-sm mt-1">
                {item.price} تومان
              </p>
            </div>

            <button className="text-red-500 hover:text-red-700 text-lg">
              ×
            </button>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="p-4 border-t">
        <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-bold transition">
          مشاهده سبد خرید
        </button>
      </div>
    </div>
  );
};

export default CartDropDown;