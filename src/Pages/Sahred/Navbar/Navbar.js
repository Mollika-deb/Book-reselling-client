import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo1.png'
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const menuItems = <React.Fragment>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/appoinment'>Appoinment</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
       

        {user?.uid ?
            <React.Fragment>
                <li><Link to='/dashboard'>Dashboard</Link></li>
                <li><button className='btn bg-pink-600 rounded-lg mr-32 ml-32' onClick={logOut}>Sign Out</button></li>
            </React.Fragment>
            :
           <>
                <li><Link to='/login'>Login</Link></li>
                <li><Link to='/signup'>Sign Up</Link></li>

           </>}



            
            
    </React.Fragment>
    return (
        <div className="navbar   mx-auto bg-gradient-to-b  bg-slate-800 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content max-w-screen-lg  mx-auto mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl pl-32">

                    <img src={logo} alt="" />
                    <p className='text-pink-600'> Book Re-selling</p>
               
                    </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            
        </div>
    );
};

export default Navbar;