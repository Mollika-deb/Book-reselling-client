import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import useAdmin from '../hooks/useAdmin';

import Navbar from '../Pages/Sahred/Navbar/Navbar';

const DashboardLayout = () => {
    const {user} = useContext(AuthContext)
    const [isAdmin]= useAdmin(user?.email)
    return (
        <div>
        <Navbar></Navbar>

            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side ">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu mt-10 p-4 w-80 bg-slate-800  mr-10 ml-32 rounded-xl tsxt-white">
                        
                        <li className='bg-pink-600 mt-10 font-bold text-2xl rounded-xl'><Link to='/dashboard/myorder'>My Order</Link></li>
                       {
                        isAdmin && <>
                                <li className='bg-pink-600 mt-10 font-bold text-2xl rounded-xl'><Link to='/dashboard/allusers'>All Users</Link></li>
                        </>
                       }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;