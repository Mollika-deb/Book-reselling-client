import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className='w-64'>
            
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                  
                    <li><Link>Sidebar Item 1</Link></li>
                    <li><a>Sidebar Item 2</a></li>
                </ul>

            </div>
        </div>
    );
};

export default Sidebar;