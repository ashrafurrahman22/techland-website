import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
        <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
            <h2 style={{fontFamily:"inter"}} className='text-5xl text-left ml-3 my-3 font-bold text-purple-500'>Dashboard</h2>
            <Outlet></Outlet>
        </div>
        <div class="drawer-side">
            <label for="dashboard-sidebar" class="drawer-overlay"></label>
            <ul class="menu p-4 overflow-y-auto w-48 gap-5 text-white text-base-content">
                
                <li><Link to="/dashboard" className='btn text-white'>My Orders</Link></li>
                <li><Link to="/dashboard/profile" className='btn text-white'>My Profile</Link></li>
                <li><Link to="/dashboard/addareview" className='btn text-white'>Add A Review</Link></li>
            </ul>

        </div>
    </div>
    );
};

export default Dashboard;