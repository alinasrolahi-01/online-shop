import { createContext, useContext, useState } from "react";
import { productsData } from "../data/productsData";
import toast from 'react-hot-toast';


const BasketContext = createContext();

const notify = () => toast.success('به سبد خرید افزوده شد');
const failNotif = () => toast.error('این محصول از قبل در سبد خرید موجود میباشد')

export const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);

  const addToBasket = (id) => {
    
    const allProducts = productsData.flatMap((category) => category.products);
    const productSelected = allProducts.find((product) => product.id === id);

    if (!productSelected) {
      console.warn(`محصولی با id=${id} پیدا نشد`);
      return;
    }

    const alreadyInBasket = basket.some((item) => item.id === id);
    if (alreadyInBasket) {
      failNotif()
      return;
    }
    notify()

    setBasket((prev) => [...prev, productSelected]);
  };

  const removeFromBasket = (id) => {
    setBasket((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    
    
    <BasketContext.Provider value={{ basket, addToBasket, removeFromBasket }}>
      {children}
    </BasketContext.Provider>
    
    
  );
};

// این هوک رو به جای useBasket صدا می‌زنیم
export const useBasket = () => {
  const context = useContext(BasketContext);
  if (!context) {
    throw new Error("useBasket باید داخل BasketProvider استفاده بشه");
  }
  return context;
};