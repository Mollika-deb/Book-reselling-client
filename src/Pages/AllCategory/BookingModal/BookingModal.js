import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const BookingModal = ({book, setBook}) => {
    const { book_title,  resale_price,  } = book;
    const {user} = useContext(AuthContext);


    const handleBooking = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const location = form.location.value;

        const booking ={
            bookName:book_title,
            selling_price: resale_price,
            name,
            email,
            phone,
            location
        }
        console.log(booking)
        setBook(null);

    }

    return (
        <React.Fragment>
          
<input type="checkbox" id="booking-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
     <h3 className="text-lg text-center text-green-500 font-bold">{book_title}</h3>


   <form onSubmit={handleBooking} className='  grid grid-cols-1 gap-5 mt-10 justify-center items-center'>
    <input type="email" name='email' value={user.email}  placeholder='Email' className="input input-bordered input-success w-full " />
    <input type="text" name="name" placeholder='Name' className="input input-bordered input-success w-full " />
    <input type="text" disabled value={book_title} className="input input-bordered input-success w-full " />
    <input type="text" disabled value={resale_price} className="input input-bordered input-success w-full " />
    <input type="text" placeholder='Phone no' name='phone'  className="input input-bordered input-success w-full " />
    <input type="text"  placeholder='Location' name='location'  className="input input-bordered input-success w-full " />
    <input  className='w-full  btn bg-pink-600 ' type="submit" value="Submit" />
   </form>
  </div>
</div> 
        </React.Fragment>
    );
};

export default BookingModal;