import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../component/Dashboard/Sidebar';

const DashboardLayout = () => {
    return (
        <div className='md:flex relative min-h-screen'>
           <Sidebar></Sidebar>
            <div className='bg-red-400 flex-1'>
            content
            </div>
        </div>
    );
};

export default DashboardLayout;