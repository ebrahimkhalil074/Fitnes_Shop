import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard"; // Assuming you have a product card component
import { useGetProductsQuery } from "../redux/api/api";

const FeaturedProducts = () => {
    const {data} = useGetProductsQuery(undefined)
    const products =data?.data?.result ||[]
  return (
    <div className="bg-gray-100 py-10">
      <h2 className="text-4xl font-bold text-center text-blue-600 mb-8">Featured Products</h2>
      <div className="container mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-8">
        {products.slice(0, 6).map((product) => (
          <ProductCard key={product?._id} product={product} />
        ))}
      </div>
      <div className="text-center mt-8">
        <Link to="/products">
          <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700">
            Explore More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedProducts;
