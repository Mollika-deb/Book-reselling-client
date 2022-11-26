import React from 'react';

const AllBooks = ({ product, setBook }) => {
    const { book_title, image_url, location, resale_price, original_peice, use_year, post_time } = product
    return (
        <div className="card mt-10 bg-slate-800 shadow-2xl">
            <figure className="px-10 pt-10">
                <img src={image_url} alt="Shoes" className="rounded-xl h-64 w-64" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title font-bold text-green-600">{book_title}</h2>
            
            <div className="flex justify-between">
                    <p className='font-semibold text-orange-500'>used: {use_year} years</p>
                    <p className='ml-5 font-semibold text-orange-500'>post: {post_time} </p>
            </div>
            <div className="flex  justify-between">
                    <p className=' font-semibold text-orange-500'>Buying price: {original_peice}</p>
                <p className='ml-5 font-semibold text-orange-500'>selling price:  {resale_price}</p>
            </div>
            
                <p className='font-bold text-green-500'>location: {location}</p>
               
                <label onClick={() =>setBook(product)} htmlFor="booking-modal" className="btn bg-pink-600 w-64">Book Now</label>
              </div>
          

        </div>
    );
};

export default AllBooks;