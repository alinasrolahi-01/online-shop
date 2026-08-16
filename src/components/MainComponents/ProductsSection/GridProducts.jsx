import React, { useState } from "react";
import useBasket from "../../../hooks/useBasket";



// آیکن‌های SVG جایگزین lucide-react
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

const EyeIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const GridProducts = ({ activeCategory, products, sortValue }) => {

  const {addToBasket} = useBasket() 
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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {sortProducts.length === 0 ? (
        <p className="col-span-full text-center text-gray-400 py-10">
          محصولی در این دسته‌بندی یافت نشد.
        </p>
      ) : (
        sortProducts.map((product) => {
          const discount = Math.round(
            (1 - Number(product.price) / Number(product.oldPrice)) * 100
          );
          const isBestseller = product.views > 2000;

          return (
            <div
              key={product.id}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden flex flex-col"
            >
              <div className="relative w-full  bg-gradient-to-br from-sky-100 to-pink-100">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full "
                />

                <button
                  onClick={() => toggleLike(product.id)}
                  className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-white/80 hover:bg-white transition-colors"
                >
                  <HeartIcon filled={liked[product.id]} />
                </button>

                <div className="absolute top-3 left-3 flex flex-col gap-1.5 items-start">
                  <span
                    className={`text-xs font-medium px-2.5 py-1 rounded-full text-white ${
                      isBestseller ? "bg-orange-400" : "bg-green-500"
                    }`}
                  >
                    {isBestseller ? "پرفروش" : "جدید"}
                  </span>
                  {discount > 0 && (
                    <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-red-500 text-white">
                      {discount}%-
                    </span>
                  )}
                </div>

                {product.stock <= 5 && (
                  <span className="absolute bottom-3 right-3 text-xs font-medium px-2.5 py-1 rounded-full bg-pink-100 text-pink-600">
                    {product.stock} مانده
                  </span>
                )}
              </div>

              <div className="p-4 flex flex-col gap-2 flex-1">
                <span className="text-sm text-indigo-600 font-medium">
                  {product.brand} — {product.category}
                </span>
                <h3 className="font-bold text-gray-800 line-clamp-2 min-h-[2.75rem]">
                  {product.title}
                </h3>

                <span className="flex items-center gap-1 text-xs text-gray-400">
                  <EyeIcon />
                  {product.views.toLocaleString("fa-IR")} بازدید
                </span>

                <div className="mt-auto flex items-center justify-between pt-3">
                  <div className="flex flex-col">
                    {discount > 0 && (
                      <span className="text-xs text-gray-400 line-through">
                        {Number(product.oldPrice).toLocaleString("fa-IR")}ت
                      </span>
                    )}
                    <span className="text-base font-bold text-gray-900">
                      {Number(product.price).toLocaleString("fa-IR")}ت
                    </span>
                  </div>

                  <button
                  onClick={() => addToBasket(product.id) } 
                  className="flex items-center gap-1 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-4 py-2 rounded-xl transition-colors">
                    <PlusIcon />
                    افزودن
                  </button>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default GridProducts;