import React from "react";

const Banner = () => {
  return (
    <div className="relative h-screen flex items-center justify-center bg-cover bg-center" 
      style={{ backgroundImage: "url('https://i.ibb.co.com/FH88L5s/craig-lovelidge-WChqiwx-P8cw-unsplash.jpg')" }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white p-6 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">Get Fit, Stay Strong</h1>
        <p className="text-xl md:text-2xl mb-8">
          Discover premium fitness equipment for home and gym. Unleash your potential.
        </p>
        <a href="/shop"
           className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300">
          Shop Now
        </a>
      </div>
    </div>
  );
};

export default Banner;
