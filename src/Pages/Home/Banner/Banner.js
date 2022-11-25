import React from 'react';
import img from '../../../assets/book.jpg'

const Banner = () => {
    return (
        <div className="hero min-h-screen mt-10 mb-10" style={{backgroundImage: `url(${img})`} }>
            <div className="hero-overlay bg-black bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-3xl text-cyan-500 font-bold">Welcome To Book-Re-Selling</h1>
                    <p className="mb-5">Book-Re-Selling helps you sell, buy, rent textbooks and used books for the best price by comparing offers from over 30 vendors with a single search..</p>
                    <button className="btn bg-pink-600">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;