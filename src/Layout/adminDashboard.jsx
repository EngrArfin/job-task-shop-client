import React from 'react';
import { Outlet } from 'react-router-dom';

const adminDashboard = () => {
    return (
        <div>
            <h2>Admin Dashboard</h2>
            <Outlet></Outlet>
        </div>
    );
};

export default adminDashboard;