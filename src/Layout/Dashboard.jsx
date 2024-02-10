import React from 'react';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <h2>This is user DashBoard</h2>
            <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;