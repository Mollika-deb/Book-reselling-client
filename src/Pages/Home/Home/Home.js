import React from 'react';
import Another from '../Another/Another';
import Banner from '../Banner/Banner';
import Category from '../category/Category';

const Home = () => {
    return (
        <div>
           <Banner></Banner> 
           <Category></Category>
           <Another></Another>
        </div>
    );
};

export default Home;