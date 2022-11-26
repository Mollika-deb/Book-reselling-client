import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../component/Dashboard/Sidebar';

const DashboardLayout = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content  ">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
               <Sidebar></Sidebar>

            </div>
        </div>
    );
};

export default DashboardLayout;