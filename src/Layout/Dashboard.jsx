import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Profile</th>
                                <th>Name</th>
                                <th>Position</th>
                                <th>Job</th>
                                <th>Favorite Color</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr>
                                <th>
                                    1
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">Hart Hagerty</div>
                                            <div className="text-sm opacity-50">United States</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    Zemlak, Daniel and Leannon
                                    <br />
                                    <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                </td>
                                <td>Purple</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">details</button>
                                </th>
                            </tr>
                            
                        </tbody>
                       

                    </table>
                </div>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-yellow-900 text-red-content">
                    {/* Sidebar content here */}
                    <li><Link to='/' className='mr-4 uppercase bg-sky-500 text-white mt-2'>Home</Link></li>
                    <li><Link to='/dashboard' className='mr-4 uppercase bg-sky-500 text-white mt-2'>User List</Link></li>
                    <li><Link className='mr-4 uppercase bg-sky-500 text-white mt-1'>User Add List</Link></li>
                    <li><Link className='mr-4 uppercase bg-sky-500 text-white mt-1'>User Add List</Link></li>
                    <li><Link className='mr-4 uppercase bg-sky-500 text-white mt-1'>User Add List</Link></li>
                    <li><Link className='mr-4 uppercase bg-sky-500 text-white mt-1'>User Add List</Link></li>
                    <li><Link className='mr-4 uppercase bg-sky-500 text-white mt-1'>User Add List</Link></li>
                    <li><Link className='mr-4 uppercase bg-sky-500 text-white mt-1'>User Add List</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;