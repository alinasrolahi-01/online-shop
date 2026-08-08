import React from "react";
import ProductCard from "./ProductCard";

export const DEFAULT_PRODUCTS = [
  { id: 1, name: "لپ‌تاپ ایسوس ROG", category: "لپ‌تاپ", price: "۴۵.۰M", oldPrice: "۴۹.۰M", rating: 4.8, stock: 14, badge: "پرفروش", img: "" },
  { id: 2, name: "هدفون بی‌سیم سونی", category: "لوازم جانبی", price: "۳.۲M", rating: 4.5, stock: 6, img: "" },
  { id: 3, name: "ماوس گیمینگ لاجیتک", category: "لوازم جانبی", price: "۱.۱M", rating: 4.2, stock: 0, img: "" },
  { id: 4, name: "کیبورد مکانیکال", category: "لوازم جانبی", price: "۲.۴M", rating: 4.6, stock: 22, img: "" },
];

export default function ProductsGrid({ products = DEFAULT_PRODUCTS, onEdit, onDelete }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
}
