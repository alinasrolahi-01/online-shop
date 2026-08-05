import React from "react";

const BrandTitle = () => {
  const brands = [
    "Apple",
    "Samsung",
    "Xiaomi",
    "Sony",
    "ASUS",
    "Lenovo",
    "HP",
    "Dell",
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <p className="text-center text-slate-400 text-xs font-black uppercase tracking-widest mb-10">
          برندهای رسمی همکار ما
        </p>

        <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-16">
          {brands.map((brand) => (
            <span
              key={brand}
              className="text-2xl sm:text-3xl font-black text-slate-200 hover:text-slate-600 transition-colors duration-300 cursor-default select-none"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandTitle;