import React from "react";

const Benefits = () => {
  const benefits = [
    {
      title: "Improve Your Health",
      description: "Our products help you stay fit and healthy, making exercise more enjoyable and effective.",
      image: "https://i.ibb.co.com/cg0HqGS/200401-M-BR906-002.jpg", 
    },
    {
      title: "High Quality Equipment",
      description: "Built to last with premium materials, ensuring you get the best workout experience.",
      image: "https://i.ibb.co.com/FVPT6vh/fitness-concept-illustration-1284-7547.jpg",
    },
    {
      title: "Affordable Pricing",
      description: "Top-notch fitness equipment without breaking the bank. We offer products for all budgets.",
      image: "https://i.ibb.co.com/pQyb64j/health-fitness-articles-dotwriter.jpg",
    },
    {
        title: "High Quality Equipment",
        description: "Built to last with premium materials, ensuring you get the best workout experience.",
        image:'https://i.ibb.co.com/DK9ym08/06b400f8-8822-4b0a-bfd3-4ecb3f9baa07.png',
      },
  ];

  return (
    <div className="bg-white py-16">
      <h2 className="text-4xl font-bold text-center text-blue-600 mb-8">Why Choose Us?</h2>
      <div className="container mx-auto grid lg:grid-cols-2  md:grid-cols-2 gap-8 ">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex flex-col items-center bg-gray-500 p-2 rounded-lg text-center">
            <img src={benefit.image} alt={benefit.title} className="w-64 h-64 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-semibold mb-2 text-black">{benefit.title}</h3>
            <p className="text-black">{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
