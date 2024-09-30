// // import React from "react";
// // import { useGetProductsQuery } from "../redux/api/api";
// // import ProductCart from "../components/ProductCard";
// // import { useParams } from "react-router-dom";

// // const Products = () => {
// //   const { category } = useParams();
// //   console.log(category)
// //   const { data, isLoading,error } =useGetProductsQuery([{name:'category',value:category}]);
// //   if (isLoading) return <p>Loading...</p>;
// //   console.log(data,error)
// //   return (
// //     <div className="container">
// //     <h1 className="text-4xl font-bold my-10">All Products</h1>
// //     <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
// //       {data?.data?.result.length > 0 ? (
// //         data.data.result.map((product) => (
// //           <ProductCart key={product.id} product={product} />
// //         ))
// //       ) : (
// //         <p>No products found in this category.</p>
// //       )}
// //     </div>
// //   </div>
// //   );
// // };

// // export default Products;

// // import React, { useState, useEffect } from "react";
// // import { useGetProductsQuery } from "../redux/api/api";
// // import ProductCart from "../components/ProductCard";
// // import { useParams } from "react-router-dom";

// // const Products = () => {
// //   const { category } = useParams();
  
// //   const [searchTerm, setSearchTerm] = useState('');
// //   const [selectedCategories, setSelectedCategories] = useState([]);
// //   const [priceRange, setPriceRange] = useState([0, 1000]); // Example range: 0 to 1000
// //   const [sortOrder, setSortOrder] = useState('asc');
  
// //   const { data, isLoading, error } = useGetProductsQuery([{
// //     name: 'category',
// //     value: 'Cardio Machines',},
// //     { name: 'category',
// //       value: 'Free Weights',},
// //     {name:"searchTerm",value:searchTerm},
// //   //  { categories: selectedCategories},
// //   //  { priceRange},
// //   //  { sort: sortOrder}
// //   ]);

// //   const handleSearch = (e) => {
// //     setSearchTerm(e.target.value);
// //   };

// //   const handleCategoryChange = (e) => {
// //     const { value, checked } = e.target;
// //     setSelectedCategories((prev) =>
// //       checked ? [...prev, value] : prev.filter((category) => category !== value)
// //     );
// //   };

// //   const handlePriceRangeChange = (e) => {
// //     const { name, value } = e.target;
// //     setPriceRange((prev) => ({
// //       ...prev,
// //       [name]: value,
// //     }));
// //   };

// //   const handleSortChange = (e) => {
// //     setSortOrder(e.target.value);
// //   };

// //   const clearFilters = () => {
// //     setSearchTerm('');
// //     setSelectedCategories([]);
// //     setPriceRange([0, 1000]);
// //     setSortOrder('asc');
// //   };

// //   if (isLoading) return <p>Loading...</p>;
// //   if (error) return <p>Error loading products</p>;
// // const productsCategory =[
// //   "Free Weights",
// //   "Cardio Machines",
// //   "Yoga & Pilates",
// //   "Exercise Accessories",
// //   "Recovery Equipment",
// //   "Bodyweight Equipment"
// // ]
// //   return (
// //     <div className="container">
// //       <h1 className="text-4xl font-bold my-10">All Products</h1>

// //       {/* Search Bar */}
// //       <input
// //         type="text"
// //         placeholder="Search products"
// //         value={searchTerm}
// //         onChange={handleSearch}
// //         className="border p-2 mb-4"
// //       />

// //       {/* Filters */}
// //       <div className="flex gap-4 mb-4">
// //         {/* Category Filter */}
// //         <div>
// //           <h3>Categories</h3>
// //           {productsCategory.map((category) => (
// //             <label key={category}>

// //               <input
// //                 type="checkbox"
// //                 value={category}
// //                 onChange={handleCategoryChange}
// //                 checked={selectedCategories.includes(category)}
// //               />{" "}
// //               {category}
// //             </label>))}
          
// //           {/* Add more categories as needed */}
// //         </div>

// //         {/* Price Range Filter */}
// //         <div>
// //           <h3>Price Range</h3>
// //           <input
// //             type="number"
// //             name="min"
// //             value={priceRange[0]}
// //             onChange={handlePriceRangeChange}
// //             placeholder="Min"
// //             className="border p-1"
// //           />
// //           <input
// //             type="number"
// //             name="max"
// //             value={priceRange[1]}
// //             onChange={handlePriceRangeChange}
// //             placeholder="Max"
// //             className="border p-1"
// //           />
// //         </div>

// //         {/* Sort Options */}
// //         <div>
// //           <h3>Sort by Price</h3>
// //           <select onChange={handleSortChange} value={sortOrder} className="border p-2">
// //             <option value="asc">Price: Low to High</option>
// //             <option value="desc">Price: High to Low</option>
// //           </select>
// //         </div>
// //       </div>

// //       {/* Clear Filter Button */}
// //       <button onClick={clearFilters} className="border p-2 bg-red-500 text-white mb-4">
// //         Clear Filters
// //       </button>

// //       {/* Product Listings */}
// //       <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
// //         {data?.data?.result.length > 0 ? (
// //           data.data.result.map((product) => (
// //             <ProductCart key={product.id} product={product} />
// //           ))
// //         ) : (
// //           <p>No products found.</p>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Products;

// import React, { useState, useEffect } from "react";
// import { useGetAllCategoryQuery, useGetProductsQuery,  } from "../redux/api/api";
// import ProductCart from "../components/ProductCard";
// import { useParams } from "react-router-dom";
// import { Pagination } from "antd";

// const Products = () => {
//   const { category } = useParams();
//   const [page, setPage] = useState(1);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedCategories, setSelectedCategories] = useState([category]);
//   const [priceRange, setPriceRange] = useState([0, 1000]); // Example range: 0 to 1000
//   const [sortOrder, setSortOrder] = useState();
  
//   // Dynamically build query parameters
//   let queryParams = [];

//   // Push searchTerm if not empty
//   if (searchTerm) {
//     queryParams.push({ name: 'searchTerm', value: searchTerm });
//   }

//   // Push selected categories dynamically
//   selectedCategories.forEach((cat) => {
//     queryParams.push({ name: 'category', value: cat });
//   });

//     queryParams.push({ name: 'page', value:page });
//     queryParams.push({ name: 'sort', value:sortOrder });

  

//   // Use the query parameters in the query
//   const { data, isLoading, error } = useGetProductsQuery(queryParams);
//   const metaData = data?.data?.meta;
// console.log(data)
// console.log(metaData)
//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const handleCategoryChange = (e) => {
//     const { value, checked } = e.target;
//     setSelectedCategories((prev) =>
//       checked ? [...prev, value] : prev.filter((category) => category !== value)
//     );
//   };

//   const handlePriceRangeChange = (e) => {
//     const { name, value } = e.target;
//     setPriceRange((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSortChange = (e) => {
//     console.log(e.target.value)
//     setSortOrder(e.target.value);
//   };

//   const clearFilters = () => {
//     setSearchTerm('');
//     setSelectedCategories([]);
//     setPriceRange([0, 1000]);
//     setSortOrder('asc');
//   };
//   const { data: categoryData, isLoading: isCategoryLoading } = useGetAllCategoryQuery({});
  

//   if (isLoading || isCategoryLoading) return <p>Loading...</p>;
//   if (error) return <p>Error loading products</p>;

//    const sortedProducts = [...(data?.data?.result || [])].sort((a, b) => {
//      if (sortOrder === 'asc') {
//        return a.price - b.price; // Ascending order
//      } else {
//        return b.price - a.price; // Descending order
//      }
//    });


//   return (
//     <div className="container">
//       <h1 className="text-4xl font-bold my-10">All Products</h1>

//       {/* Search Bar */}
//       <input
//         type="text"
//         placeholder="Search products"
//         value={searchTerm}
//         onChange={handleSearch}
//         className="border p-2 mb-4"
//       />

//       {/* Filters */}
//       <div className="flex gap-4 mb-4">
//         {/* Category Filter */}
//         <div>
//           <h3>Categories</h3>
//           {categoryData?.data?.map((category) => (
//             <label key={category.name}>
//               <input
//                 type="checkbox"
//                 value={category?.name}
//                 onChange={handleCategoryChange}
//                 checked={selectedCategories.includes(category?.name)}
//               />{" "}
//               {category?.name}
//             </label>
//           ))}
//         </div>

//         {/* Price Range Filter */}
//         <div>
//           <h3>Price Range</h3>
//           <input
//             type="number"
//             name="min"
//             value={priceRange[0]}
//             onChange={handlePriceRangeChange}
//             placeholder="Min"
//             className="border p-1"
//           />
//           <input
//             type="number"
//             name="max"
//             value={priceRange[1]}
//             onChange={handlePriceRangeChange}
//             placeholder="Max"
//             className="border p-1"
//           />
//         </div>

//         {/* Sort Options */}
//          {/* Sort Options */}
//         <div>
//           <h3>Sort by Price</h3>
//           <select onChange={handleSortChange} value={sortOrder} className="border p-2">
//             <option value="asc">Price: Low to High</option>
//             <option value="desc">Price: High to Low</option>
//           </select>
//         </div>
//       </div>

//       {/* Clear Filter Button */}
//       <button onClick={clearFilters} className="border p-2 bg-red-500 text-white mb-4">
//         Clear Filters
//       </button>

//       {/* Product Listings */}
//       <div className="grid md:grid-cols-2  grid-cols-1 gap-10">
//         {data?.data?.result.length > 0 ? (
//           data.data.result.map((product) => (
//             <ProductCart key={product.id} product={product} />
//           ))
//         ) : (
//           <p>No products found.</p>
//         )}
//       </div>
//       <Pagination
//         current={page}
//         onChange={(value) => setPage(value)}
//         pageSize={metaData?.limit}
//         total={metaData?.total}
//       />
//     </div>
//   );
// };

// export default Products;


import React, { useState, } from "react";
import { useGetAllCategoryQuery, useGetProductsQuery } from "../redux/api/api";
import ProductCart from "../components/ProductCard";
import { useParams } from "react-router-dom";
import { Pagination } from "antd";

const Products = () => {
  const { category } = useParams();
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  console.log(category)
  let allData=[];
if (category=='products') {
  allData.push({})
}else{
  allData.push(category)
}
  const [selectedCategories, setSelectedCategories] = useState(allData);
  const [priceRange, setPriceRange] = useState([0, 1000]); // Example range: 0 to 1000
  const [sortOrder, setSortOrder] = useState("asc"); // Default sort order

  // Dynamically build query parameters
  let queryParams = [];

  if (searchTerm) {
    queryParams.push({ name: 'searchTerm', value: searchTerm });
  }

  selectedCategories.forEach((cat) => {
    queryParams.push({ name: 'category', value: cat });
  });

  queryParams.push({ name: 'page', value: page });

  // Use the query parameters in the query
  const { data, isLoading, error } = useGetProductsQuery(queryParams);
  const metaData = data?.data?.meta;

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (e) => {
    const { value, checked } = e.target;
    setSelectedCategories((prev) =>
      checked ? [...prev, value] : prev.filter((category) => category !== value)
    );
  };

  const handlePriceRangeChange = (e) => {
    const { name, value } = e.target;
    setPriceRange((prev) => ({
      ...prev,
      [name === 'min' ? 0 : 1]: Number(value), // Update min or max price
    }));
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategories([]);
    setPriceRange([0, 1000]);
    setSortOrder('asc');
  };

  const { data: categoryData, isLoading: isCategoryLoading } = useGetAllCategoryQuery({});

  if (isLoading || isCategoryLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading products</p>;

  // Frontend sorting logic based on sortOrder
  const filteredAndSortedProducts = [...(data?.data?.result || [])]
    .filter((product) => product.price >= priceRange[0] && product.price <= priceRange[1])
    .sort((a, b) => {
      if (sortOrder === "asc") {
        return a.price - b.price; // Low to high
      } else {
        return b.price - a.price; // High to low
      }
    });

  return (
    <div className="container">
    
<div className="flex justify-center items-center gap-4 bg-gray-400">
{/*  */}
<div className="flex-1">
<h3 className="text-blue-600 text-2xl p-4 font-bold  italic">Categories</h3>
<div className="">
 
        {/* Category Filter */}
        <div className=" grid md:grid-cols-2 gap-4 " >
         
          {categoryData?.data?.map((category) => (
           
             <label key={category.name}>
              <input
             
                type="checkbox"
                value={category?.name}
                onChange={handleCategoryChange}
                checked={selectedCategories.includes(category?.name)}
              />{" "}
              {category?.name}
            </label>
           
          ))}
        </div>   
      </div>
</div>
{/*  */}
<div className="flex-1 ">
<div className=" grid justify-center grid-cols-12 items-center gap-4 p-4">
  {/* Search Bar */}
  <input
        type="text"
        placeholder="Search products"
        value={searchTerm}
        onChange={handleSearch}
        className="border p-2 mb-4 col-span-12 rounded-lg"
      />


<div className="col-span-4">
          <h3>Price Range</h3>
          <input
            type="number"
            name="min"
            value={priceRange[0]}
            onChange={handlePriceRangeChange}
            placeholder="Min"
            className="border p-1"
          />
          <input
            type="number"
            name="max"
            value={priceRange[1]}
            onChange={handlePriceRangeChange}
            placeholder="Max"
            className="border p-1"
          />
        </div>

<div className="col-span-4">
          <h3>Sort by Price</h3>
          <select onChange={handleSortChange} value={sortOrder} className="border p-2 ">
            <option value="asc">Price: Low to High</option>
            <option value="desc">Price: High to Low</option>
          </select>
        </div>

<div className="col-span-4">
   <h2>Reset Filter</h2>
    <button onClick={clearFilters} className="border   bg-blue-500 text-white p-2 px-4 mb-4">
        All Product
      </button>
</div>
</div>

</div>
</div>
    

      
      {/* Product Listings */}
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10 mt-4">
        {filteredAndSortedProducts.length > 0 ? (
          filteredAndSortedProducts.map((product) => (
            <ProductCart key={product.id} product={product} />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>

      {/* Pagination */}
      <Pagination
        current={page}
        onChange={(value) => setPage(value)}
        pageSize={metaData?.limit}
        total={metaData?.total}
      />
    </div>
  );
};

export default Products;
