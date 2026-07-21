import React, { useState } from "react";

const HeartIcon = ({ filled }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill={filled ? "#ef4444" : "none"} stroke={filled ? "#ef4444" : "#6b7280"} strokeWidth="2">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const PlusIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 5v14M5 12h14" strokeLinecap="round" />
  </svg>
);

const StarIcon = ({ filled }) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill={filled ? "#f59e0b" : "#e5e7eb"} stroke="none">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const RowsProducts = ({ activeCategory, products, sortValue }) => {
  const [liked, setLiked] = useState({});

  const toggleLike = (id) => {
    setLiked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredProducts =
    activeCategory !== "همه"
      ? products.find((item) => item.category === activeCategory)?.products || []
      : products.flatMap((item) => item.products);

  const sortProducts = [...filteredProducts].sort((a, b) => {
    switch (sortValue) {
      case "cheap":
        return Number(a.price) - Number(b.price);
      case "expensive":
        return Number(b.price) - Number(a.price);
      default:
        return 0;
    }
  });

  return (
    <div className="flex flex-col gap-5">
      {sortProducts.length === 0 ? (
        <p className="text-center text-gray-400 py-10">
          محصولی در این دسته‌بندی یافت نشد.
        </p>
      ) : (
        sortProducts.map((product) => {
          const discount = Math.round(
            (1 - Number(product.price) / Number(product.oldPrice)) * 100
          );
          // rating موقتی؛ وقتی فیلد واقعی داشتی این خط رو حذف کن
          const rating = (4 + (product.views % 10) / 10).toFixed(1);
          const description = `${product.brand} ${product.category} با کیفیت ساخت بالا و طراحی مدرن، مناسب استفاده‌ی روزمره و حرفه‌ای.`;

          return (
            <div
              key={product.id}
              className="flex items-center gap-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 p-4"
            >
              {/* تصویر */}
              <div className="relative w-40 flex-shrink-0 rounded-xl overflow-hidden bg-gradient-to-br from-sky-100 to-pink-100">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full "
                />
                {discount > 0 && (
                  <span className="absolute top-2 right-2 text-xs font-medium px-2 py-1 rounded-full bg-red-500 text-white">
                    {discount}%-
                  </span>
                )}
              </div>

              {/* محتوا */}
              <div className="flex-1 flex flex-col gap-1 text-right">
                <span className="text-sm text-indigo-600 font-medium">
                  {product.brand} | {product.category}
                </span>
                <h3 className="font-bold text-gray-800">{product.title}</h3>
                <p className="text-sm text-gray-400 line-clamp-1">{description}</p>

                <div className="flex items-center justify-end gap-3 mt-2">
                  {product.stock <= 5 && (
                    <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-pink-100 text-pink-600">
                      فقط {product.stock} عدد
                    </span>
                  )}
                  <div className="flex items-center gap-1">
                    <span className="text-xs text-gray-400">({product.views.toLocaleString("fa-IR")})</span>
                    <span className="text-sm font-medium text-gray-600">{rating}</span>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} filled={i < Math.round(rating)} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* اکشن‌ها و قیمت */}
              <div className="flex flex-col items-end gap-3 flex-shrink-0">
                <div className="flex items-center gap-2">
                  <button className="flex items-center gap-1 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-4 py-2 rounded-xl transition-colors">
                    <PlusIcon />
                    افزودن
                  </button>
                  <button
                    onClick={() => toggleLike(product.id)}
                    className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
                  >
                    <HeartIcon filled={liked[product.id]} />
                  </button>
                </div>

                <div className="flex flex-col items-end">
                  {discount > 0 && (
                    <span className="text-xs text-gray-400 line-through">
                      {Number(product.oldPrice).toLocaleString("fa-IR")}ت
                    </span>
                  )}
                  <span className="text-lg font-bold text-gray-900">
                    {Number(product.price).toLocaleString("fa-IR")}ت
                  </span>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default RowsProducts;