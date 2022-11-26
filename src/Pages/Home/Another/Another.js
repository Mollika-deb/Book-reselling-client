import React from 'react';
import book from '../../../assets/img1.jpg'

const Another = () => {
    return (
       <div className="hero bg-slate-800 text-white py-16 my-16">
            <div className="hero-content flex-col mx-32 lg:flex-row-reverse">
                <img src={book} alt='' className="rounded-lg shadow-2xl ml-6 w-1/2" />
                <div className='w-1/2 shadow-2xl p-5 pr-6'>
                    <h1 className="text-5xl font-bold">Book Re-Sale!</h1>
                    <p className="py-6">Sell your books and textbooks back for cash!Compare multiple offers and get the best prices.Sell used books and textbooks..</p>
                    <button className="btn bg-rose-500">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Another;