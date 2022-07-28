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
                {/* <!-- Sidebar content here --> */}
                <li><Link to="/dashboard" className='btn'>My Profile</Link></li>
                <li><Link to="/dashboard/addareview" className='btn'>Add A Review</Link></li>
                <li><Link to="/dashboard/orders" className='btn'>My Orders</Link></li>
                {/* { admin && <>
                    <li><Link to="/dashboard/users">All Users</Link></li>
                    <li><Link to="/dashboard/addDoctor">Add a Doctor</Link></li>
                    <li><Link to="/dashboard/manageDoctor">Manage Doctors</Link></li>
                </>} */}
            </ul>

        </div>
    </div>
    );
};

export default Dashboard;