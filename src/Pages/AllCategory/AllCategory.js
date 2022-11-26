import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllBooks from './AllBooks';


const AllCategory = () => {
    const products = useLoaderData()
    return (
        <div className='grid md:grid-cols2 lg:grid-cols-3 gap-8 mb-10 mr-32 ml-32'>
           {
            products.map(product => <AllBooks id=
                {product._id}
                product={product}
                ></AllBooks>)
           }
        </div>
    );
};

export default AllCategory;