import { productsData } from "../../data/productsData";

// Flatten productsData into a single array, attaching category to each product
export const allProducts = productsData.flatMap((group) =>
  group.products.map((product, index) => {
    const oldPrice = Number(product.oldPrice);
    const price = Number(product.price);
    const discount = oldPrice > price ? Math.round((1 - price / oldPrice) * 100) : 0;

    // Deterministic "creative" fields derived from existing data (no rating/new in source data)
    const rating = (3.8 + (product.views % 120) / 100).toFixed(1);
    const isNew = index < 2; // first two items per category treated as new arrivals

    return {
      ...product,
      category: group.category,
      discount,
      rating,
      isNew,
    };
  })
);

export const formatPrice = (value) => Number(value).toLocaleString("fa-IR");
