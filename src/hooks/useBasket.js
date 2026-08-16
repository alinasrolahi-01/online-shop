import { useState } from "react";
import productsData from "../data/productsData";

const useBasket = () => {
  const [basket, setBasket] = useState([]);

  const addToBasket = (id) => {
    const products = productsData.flatMap((item) => item.products);

    const productSelected = products.find((product) => product.id === id);

    if (!productSelected) {
      console.warn(`محصولی با id=${id} پیدا نشد`);
      return;
    }

    setBasket((prev) => [...prev, productSelected]);
  };

  return { basket, addToBasket };
};

export default useBasket;