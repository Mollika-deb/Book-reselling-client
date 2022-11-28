import React from 'react';


const AllUserCard = ({user}) => {
    const {email, name} = user;
    const handleAdmin = id =>{
        fetch(`http://localhost:5000/users/admin/${id}`,{
            method: 'PUT'
        })
        .then(res => res.json())
        .then(data => {
            
        })
    }
    return (
        <div className="card mt-10 bg-slate-800 text-neutral-content mr-32">
            <div className="card-body items-center text-center">
                <h2 className="card-title text-white">email: {email}</h2>
                <p className='font-semibold text-orange-600'>Name: {name}</p>
                <div className="card-actions justify-between">
                    {user?.role !== 'admin' && <button onClick={() => handleAdmin(user._id)} className="btn bg-orange-600 ">Make Admin</button>}
                    <button className="btn bg-cyan-600 px-10">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default AllUserCard;