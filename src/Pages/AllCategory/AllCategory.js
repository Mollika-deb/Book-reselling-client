import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AllBooks from './AllBooks';
import BookingModal from './BookingModal/BookingModal';


const AllCategory = () => {
    const products = useLoaderData();
    const [book, setBook] = useState(null);
    return (
        <div className='grid md:grid-cols2 lg:grid-cols-3 gap-8 mb-10 mr-32 ml-32'>
           {
            products.map(product => <AllBooks id=
                {product._id}
                product={product}
                setBook = {setBook}
                ></AllBooks>)
           }
          {
            book &&
                <BookingModal
                    book={book}
                    setBook={setBook}
                ></BookingModal>
          }
        </div>
    );
};

export default AllCategory;