import React from 'react';

const AllBooks = ({ product }) => {
    const { book_title } = product
    return (
        <div className="card  bg-slate-800 shadow-2xl">
            <figure className="px-10 pt-10">
                <img src='' alt="Shoes" className="rounded-xl h-64 w-64" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-cyan-500">{book_title}</h2>

                <button className="btn bg-pink-600 w-64">See All</button>
            </div>

        </div>
    );
};

export default AllBooks;