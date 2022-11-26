import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AllCategory = () => {
    const products = useLoaderData()
    return (
        <div>
            <h2>{products.length}</h2>
        </div>
    );
};

export default AllCategory;