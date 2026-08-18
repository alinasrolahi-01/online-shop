import React, { useState } from "react";
import { formatPrice } from "./productsHelpers";
import { useBasket } from "../../context/BasketContext";
import { productsData } from "../../data/productsData";


const ProductRow = ({
  product,
  isWishlisted,
  isInCart,
  onToggleWishlist,
  onToggleCart,
  addToBasket
}) => (
  <div className="product-card bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden cursor-pointer hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 group flex flex-row items-stretch">

    <div className="relative w-40 sm:w-48 flex-shrink-0 bg-white overflow-hidden">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-full object-cover"
      />
    </div>


    <div className="flex flex-col flex-1 p-4 sm:p-5">

      <h3 className="font-bold text-slate-800 text-sm mb-2">
        {product.title}
      </h3>

      <p className="text-xs text-slate-400">
        {product.brand}
      </p>


      <p className="text-xs text-slate-400 mb-3">
        {product.stock > 0
          ? `${product.stock} عدد در انبار`
          : "ناموجود"}
      </p>


      <div className="mt-auto flex items-center justify-between">

        <span className="font-black text-slate-900">
          {formatPrice(product.price)} تومان
        </span>


        <div className="flex gap-2">

          <button
            onClick={() => onToggleWishlist(product.id)}
            className={`w-9 h-9 rounded-full ${
              isWishlisted
              ? "text-red-500"
              : "text-gray-400"
            }`}
          >
            ♥
          </button>


          <button
            onClick={() => {
              console.log("clicked id:", product.id);
              addToBasket(product.id);
              onToggleCart(product.id);
            }}
            className={`w-10 h-10 rounded-xl ${
              isInCart
              ? "bg-emerald-500 text-white"
              : "bg-slate-100"
            }`}
          >
            🛒
          </button>
          <button
  onClick={() => {
    console.log("product:", product);
    console.log("id:", product.id);
    addToBasket(product.id);
  }}
>
  🛒
</button>


        </div>

      </div>

    </div>


  </div>
);



const ProductListView = () => {

  const [wishlist,setWishlist] = useState([]);
  const [cart,setCart] = useState([]);

  const {addToBasket} = useBasket();



  const products = productsData.flatMap(
    item => item.products
  );



  const toggleWishlist = (id) => {

    setWishlist(prev =>
      prev.includes(id)
      ? prev.filter(item => item !== id)
      : [...prev,id]
    );

  };



  const toggleCart = (id) => {

    setCart(prev =>
      prev.includes(id)
      ? prev.filter(item => item !== id)
      : [...prev,id]
    );

  };



  return (
    <div className="flex flex-col gap-4">

      {
        products.map(product => (

          <ProductRow

            key={product.id}

            product={product}

            isWishlisted={
              wishlist.includes(product.id)
            }

            isInCart={
              cart.includes(product.id)
            }

            onToggleWishlist={
              toggleWishlist
            }

            onToggleCart={
              toggleCart
            }

            addToBasket={
              addToBasket
            }

          />

        ))
      }


    </div>
  );
};


export default ProductListView;