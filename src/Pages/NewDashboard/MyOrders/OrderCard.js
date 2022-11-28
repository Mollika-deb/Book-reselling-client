import React from 'react';

const OrderCard = ({order}) => {
    const { image_url, book_title, resale_price, location  } = order
    return (
        <div className="card mt-10 bg-slate-800 shadow-2xl">
            <figure className="px-10 pt-10">
                <img src={image_url} alt="Shoes" className="rounded-xl h-64 w-64" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title font-bold text-green-600">{book_title}</h2>

                
                
                <p className='ml-5 font-semibold text-orange-500'>selling price:  {resale_price}</p>
                </div>

                <p className='font-bold text-center  text-green-500'>location: {location}</p>

                <label  htmlFor="booking-modal"  className="btn bg-pink-600 w-full">Book Now</label>
            </div>


        
    );
};

export default OrderCard;