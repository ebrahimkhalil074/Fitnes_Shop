import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { useGetSingleProductsQuery } from "../redux/api/api";
import { addToCart } from "../redux/features/cartSlice";
import { Button } from "antd";


const ProductDetails = () => {
  const { id } = useParams(); // Assuming product ID is in the route params
  const { data, isLoading, error } = useGetSingleProductsQuery(id);
 // Fetch current cart items
const product =data?.data
// 
const dispatch = useDispatch();
// const [showModal, setShowModal] = useState(false);
// const [selectedProduct, setSelectedProduct] = useState<any>(null);

// const handleShowModal = (product: any) => {
//   setSelectedProduct(product);
//   setShowModal(true);
// };

// const handleCloseModal = () => {
//   setSelectedProduct(null);
//   setShowModal(false);
// };

const handleAddToCart = (product: any) => {
  dispatch(addToCart(product));
}
// onClick={(e) => {
//   e.stopPropagation();
//   handleAddToCart(product);
// }}
//  onClick={() => handleShowModal(product)}

  return (
    <div className="container mx-auto py-10">
      {/* Product Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div>
       <img src={product?.image} alt="product" />
        </div>

        {/* Product Details */}
        <div >
          <h1 className="text-4xl font-bold mb-4">{product?.name}</h1>
          <p className="text-xl mb-2">Price: ${product?.price}</p>
          <p className="text-md mb-2">Category: {product?.category}</p>
          <p className="text-md mb-2">In Stock: {product?.stock}</p>
          <p className="text-md mb-4">{product?.description}</p>
        

          {/* Add to Cart Button */}
          <Button
            onClick={()=> handleAddToCart(product)}
            className={`p-2  `}
          >
            Add to Cart
          </Button>
        
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
