import React, { useState } from "react";
import Modal from "./Modal";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/features/cartSlice";
import { Link } from "react-router-dom";
const ProductCart = ({ product }: { product: any }) => {


 

  


  
  return (
    <div className="relative">
      

<div
 
  className="border rounded-lg shadow-lg overflow-hidden bg-gray-500 transition-transform transform hover:scale-105 hover:shadow-2xl flex flex-col h-full"
>
  <img 
    src={product.image}
    alt={product.name}
    className="w-full h-64 object-cover transition-opacity duration-300 hover:opacity-75"
  />
  <div className="p-4 flex flex-col flex-grow">
    <h3 className="text-xl font-semibold text-white mb-2">
      {product.category}
    </h3>
    <h3 className="text-xl font-semibold text-white mb-2">
      {product.name}
    </h3>
    <p className="text-gray-300 mb-4 flex-grow">{product.description}</p>
    <p className="text-lg font-bold text-white mb-4">{product.price}</p>
   <Link to={`/product/${product._id}`}>
   <button
     
      className="bg-white text-black font-semibold py-2 px-4 rounded-lg hover:bg-gray-800 hover:text-white transition duration-300 shadow-md hover:shadow-lg"
    >
     Product Details
    </button></Link>
  </div>
</div>

    </div>
  );
};

export default ProductCart;
