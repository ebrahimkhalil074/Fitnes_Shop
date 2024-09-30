
import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({category}) => {
  return (
    <div>
     <div className="card  shadow-xl bg-gray-500">
  <figure className="px-4 pt-4">
    <img
    
      src={category.image}
      alt="Shoes"
      className="rounded-xl w-[250px] h-[250px]" />
  </figure>
  <div className="card-body items-center text-center">
    
    <div className="card-actions">
      <Link to={`/${category.name}`}>
      <button className="btn btn-primary">{category.name}</button>
      </Link>
    </div>
  </div>
</div>
    </div>
  );
};

export default CategoryCard;