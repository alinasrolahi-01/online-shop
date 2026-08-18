import React, { useState } from "react";
import { allProducts, formatPrice } from "./productsHelpers";
import { useBasket } from "../../context/BasketContext";

const ProductCard = ({ product, isWishlisted, isInCart, onToggleWishlist, onToggleCart , addToBasket }) => (
  <a
    href="#"
    className="product-card bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col"
  >
    {/* Image Container */}
    <div className="relative h-56 bg-white overflow-hidden">
      <img
        src={product.image}
        alt={product.title}
        className="w-[80%] mx-auto h-full object-cover group-hover:scale-105 transition-transform duration-700"
      />

      {/* Badges */}
      <div className="absolute top-3 right-3 flex flex-col gap-2">
        {product.discount > 0 && (
          <span className="bg-rose-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
            {product.discount}% تخفیف
          </span>
        )}
        {product.isNew && (
          <span className="bg-violet-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
            جدید
          </span>
        )}
      </div>

      {/* Quick Actions */}
      <div className="absolute top-3 left-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-2 group-hover:translate-x-0">
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onToggleWishlist(product.id);
          }}
          className={`w-9 h-9 rounded-full bg-white/90 backdrop-blur shadow-md flex items-center justify-center transition-all hover:scale-110 ${
            isWishlisted ? "text-rose-500" : "text-slate-400 hover:text-rose-500"
          }`}
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </button>
      </div>
    </div>

    {/* Content */}
    <div className="p-5 flex flex-col flex-1">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs text-violet-600 font-medium bg-violet-50 px-2 py-1 rounded-md">
          {product.category}
        </span>
        <div className="flex items-center gap-1 bg-amber-50 px-2 py-1 rounded-md">
          <svg className="w-3.5 h-3.5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="text-xs font-medium text-amber-700">{product.rating}</span>
        </div>
      </div>

      <p className="text-xs text-slate-400 mb-1">{product.brand}</p>
      <h3 className="font-bold text-slate-800 text-sm leading-relaxed mb-4 line-clamp-2">{product.title}</h3>

      <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-50">
        <div className="flex flex-col">
          {product.discount > 0 && (
            <span className="text-xs text-slate-400 line-through mb-0.5">{formatPrice(product.oldPrice)}</span>
          )}
          <span className="font-black text-slate-900 text-base">{formatPrice(product.price)} تومان</span>
        </div>

        <button
          onClick={(e) => {
            e.preventDefault();
            onToggleCart(product.id);
            addToBasket(product.id)
          }}
          className={`flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300 ${
            isInCart
              ? "bg-emerald-500 text-white shadow-md shadow-emerald-200"
              : "bg-slate-100 text-slate-700 hover:bg-violet-600 hover:text-white hover:shadow-md hover:shadow-violet-200"
          }`}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  </a>
);

const ProductGridView = () => {
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);
  const {addToBasket} = useBasket();

  const toggleWishlist = (id) => {
    setWishlist((prev) => (prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]));
  };

  const toggleCart = (id) => {
    setCart((prev) => (prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]));
  };

  if (allProducts.length === 0) return null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
      {allProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          isWishlisted={wishlist.includes(product.id)}
          isInCart={cart.includes(product.id)}
          onToggleWishlist={toggleWishlist}
          onToggleCart={toggleCart}
          addToBasket={addToBasket}
        />
      ))}
    </div>
  );
};

export default ProductGridView;
