import React, { useState } from "react";
import ProductFilters from "./ProductFilters";
import ProductsGrid, { DEFAULT_PRODUCTS } from "./ProductsGrid";

export default function ProductsPage({ products = DEFAULT_PRODUCTS }) {
  const [category, setCategory] = useState("همه دسته‌ها");
  const [sort, setSort] = useState("مرتب‌سازی");
  const [items, setItems] = useState(products);
  const [showAddProduct, setShowAddProduct] = useState(false);

  const filtered =
    category === "همه دسته‌ها" ? items : items.filter((p) => p.category === category);

  const handleDelete = (id) => {
    setItems((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div dir="rtl" className="p-6 space-y-6" style={{ fontFamily: "Vazirmatn, Tahoma, sans-serif" }}>
      <ProductFilters
        category={category}
        onCategoryChange={setCategory}
        sort={sort}
        onSortChange={setSort}
        onAddProduct={() => setShowAddProduct(true)}
      />

      <ProductsGrid products={filtered} onDelete={handleDelete} />

      {showAddProduct && (
        <p className="text-xs text-slate-400">(اینجا مودال «افزودن محصول» باز می‌شود)</p>
      )}
    </div>
  );
}
