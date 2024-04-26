import { NavLink, Outlet } from 'react-router-dom';
import { FaHome, FaProductHunt, FaRocketchat, FaShopify } from "react-icons/fa";
import { MdBookmarkBorder, MdDashboard, MdLocalShipping, MdOutlineMenu, MdOutlinePayments, MdSettings } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";

import useCab from '../pages/User/hook/useCab';

const Dashboard = () => {
    const [cab] = useCab();

    const isAdmin = true;

    return (
        <div className=" ml-20 drawer lg:drawer-open bg-white mx-auto">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

            <div className=" drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <Outlet></Outlet>
            </div>
            <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                Open Dashboard
            </label>

            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-green-900 text-red-content">
                    {/* Sidebar content here */}
                    {
                        isAdmin ? <>
                            {/* Admin Part */}
                            <div className="divider bg-white ">Admin Pannel</div>
                            <li><NavLink to="/dashboard/allusers" className='mr-4 uppercase bg-sky-500 text-white mt-2'> <MdDashboard></MdDashboard> Admin Dashboard</NavLink></li>
                            <li><NavLink to="/dashboard/allusers" className='mr-4 uppercase bg-sky-500 text-white mt-2'><FaProductHunt /> Add Item</NavLink></li>
                            <li><NavLink to="/dashboard/allusers" className='mr-4 uppercase bg-sky-500 text-white mt-2'><MdOutlinePayments />Manage Product</NavLink></li>
                            <li><NavLink to="/dashboard/userhome" className='mr-4 uppercase bg-sky-500 text-white mt-2'><MdLocalShipping />Manage Booking</NavLink></li>
                            <li><NavLink to="/dashboard/allusers" className='mr-4 uppercase bg-sky-500 text-white mt-2'><MdLocalShipping />All Users</NavLink></li>
                                                        
                            <li><NavLink to='/dashboard/mycab' className='mr-4 uppercase bg-sky-500 text-white mt-1' ><FaShopify> </FaShopify> Shop Cab
                                <span className='ml-4'>{cab.length || 0}</span>
                            </NavLink>
                            </li>
                        </> : <>
                            {/* User Part */}
                            <div className="divider bg-white ">User Pannel</div>
                            <li><NavLink to='/' className='mr-4 uppercase bg-sky-500 text-white mt-2'> <MdDashboard></MdDashboard> User Dashboard</NavLink></li>
                            <li><NavLink to='/' className='mr-4 uppercase bg-sky-500 text-white mt-2'><FaProductHunt /> Product</NavLink></li>
                            <li><NavLink to='/' className='mr-4 uppercase bg-sky-500 text-white mt-2'><MdOutlinePayments />Payment Details</NavLink></li>
                            <li><NavLink to='/' className='mr-4 uppercase bg-sky-500 text-white mt-2'><MdLocalShipping />Shipping</NavLink></li>
                            <li><NavLink to="/dashboard/mycab" className='mr-4 uppercase bg-sky-500 text-white mt-1' ><FaShopify> </FaShopify> Shop Cab
                                <span className='ml-4'>{cab.length || 0}</span>
                            </NavLink>
                            </li>
                        </>
                    }
                    <div className="divider bg-white ">Both Pannel</div>
                    <li><NavLink to='/' className='mr-4 uppercase bg-sky-500 text-white mt-2'><FaHome />Home</NavLink></li>
                    <li><NavLink to='/' className='mr-4 uppercase bg-sky-500 text-white mt-2'><MdOutlineMenu /> Menu</NavLink></li>
                    <li><NavLink to='/' className='mr-4 uppercase bg-sky-500 text-white mt-2'> <MdBookmarkBorder /> Order Product</NavLink></li>
                    <li><NavLink to='/' className='mr-4 uppercase bg-sky-500 text-white mt-2'><MdSettings />Setting</NavLink></li>
                    <li><NavLink to='/' className='mr-4 uppercase bg-sky-500 text-white mt-2'><FaRocketchat />Chat</NavLink></li>

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;