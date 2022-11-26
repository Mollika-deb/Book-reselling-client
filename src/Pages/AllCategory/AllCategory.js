import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllBooks from './AllBooks';


const AllCategory = () => {
    const products = useLoaderData()
    return (
        <div>
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