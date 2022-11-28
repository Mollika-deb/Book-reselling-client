import React from 'react';
import useTitle from '../../../hooks/useTitle';
import Another from '../Another/Another';
import Banner from '../Banner/Banner';
import Category from '../category/Category';

const Home = () => {
    useTitle("Home")
    return (
        <div>
           <Banner></Banner> 
           <Category></Category>
           <Another></Another>
        </div>
    );
};

export default Home;