import React from "react";
import { useGetAllCategoryQuery } from "../redux/api/api";
import CategoryCard from "./CategoryCard";
type TCategory ={ 
    name: string; 
    image: string;
}


const Category = () => {
    const {data} = useGetAllCategoryQuery(undefined)
    
    
        console.log(data);

  return (
   <div>
    <h1 className="text-4xl font-bold text-center m-8 text-blue-600">All Categories</h1>
     <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
      
      {
         data?.data.map((category:TCategory)=><CategoryCard key={category.name} category={category} ></CategoryCard>)
      }
     </div>
   </div>
  );
};

export default Category;
