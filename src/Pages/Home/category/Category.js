import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';

const Category = () => {
    const [categories, setCategories] = useState([])


    useEffect(()=>{
        fetch('https://assignment-12-server-blush.vercel.app/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    return (
        <div className='grid md:grid-cols2 lg:grid-cols-3 gap-8 mb-10 mr-32 ml-32'>
            {
                categories.map(category =><CategoryCard
                    id={category.id}
                    category={category}
                    ></CategoryCard>)
            }
        </div>
    );
};

export default Category;