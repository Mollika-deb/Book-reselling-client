import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
    const { id, category_title, category_Url } = category
    return (
        <div className="card  bg-slate-800 shadow-2xl">
  <figure className="px-10 pt-10">
    <img  src={category_Url} alt="Shoes" className="rounded-xl h-64 w-64" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-cyan-500">{category_title}</h2>
    
          <Link to={`/categories/${id}`}><button className="btn bg-pink-600 w-64">See All</button></Link>
    </div>
 
</div>
    );
};

export default CategoryCard;