import { NavLink, Outlet } from "react-router-dom";
import { FaHome, FaProductHunt, FaRocketchat, FaShopify } from "react-icons/fa";
import {
  MdBookmarkBorder,
  MdDashboard,
  MdLocalShipping,
  MdOutlineMenu,
  MdOutlinePayments,
  MdSettings,
  MdMenu,
} from "react-icons/md";
import useCab from "../pages/User/hook/useCab";

const Dashboard = () => {
  const [cab] = useCab();

  const isAdmin = true;
  /* const [isAdmin] = useAdmin(); */

  // Premium, unified styling function for sidebar nav items
  const linkStyles = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-all duration-200 select-none outline-none ${
      isActive
        ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/10"
        : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/40"
    }`;

  return (
    <div className="drawer lg:drawer-open bg-slate-50 min-h-screen">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

      {/* Main content viewport */}
      <div className="drawer-content flex flex-col items-stretch p-6 md:p-8 lg:p-10">
        
        {/* Toggle drawer button for mobile screens */}
        <div className="flex items-center justify-between lg:hidden mb-6 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
          <span className="font-bold text-slate-800 tracking-wide uppercase text-sm">
            Dashboard
          </span>
          <label
            htmlFor="my-drawer-2"
            className="flex items-center justify-center p-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl cursor-pointer transition-colors"
          >
            <MdMenu className="text-xl" />
          </label>
        </div>

        {/* Page contents render here */}
        <div className="flex-1 w-full max-w-7xl mx-auto">
          <Outlet />
        </div>
      </div>

      {/* Sidebar Navigation */}
      <div className="drawer-side z-50">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        <div className="w-72 min-h-full bg-slate-900 text-slate-300 border-r border-slate-800 p-6 flex flex-col gap-6">
          
          {/* Logo / Branding */}
          <div className="px-4 py-2">
            <span className="font-bold text-xl tracking-wider text-white bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              SAR Shop Portal
            </span>
          </div>

          <nav className="flex flex-col gap-1 flex-1">
            {isAdmin ? (
              <>
                {/* Admin Section */}
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest px-4 pt-4 pb-2">
                  Admin Panel
                </div>
                
                <NavLink to="/dashboard/allusers" className={linkStyles} end>
                  <MdDashboard className="text-lg" />
                  <span>Admin Dashboard</span>
                </NavLink>

                <NavLink to="/dashboard/addProduct" className={linkStyles}>
                  <FaProductHunt className="text-lg" />
                  <span>Add Product</span>
                </NavLink>

                <NavLink to="/dashboard/allusers" className={linkStyles}>
                  <MdOutlinePayments className="text-lg" />
                  <span>Manage Product</span>
                </NavLink>

                <NavLink to="/dashboard/userhome" className={linkStyles}>
                  <MdLocalShipping className="text-lg" />
                  <span>Manage Booking</span>
                </NavLink>

                <NavLink to="/dashboard/allusers" className={linkStyles}>
                  <MdLocalShipping className="text-lg" />
                  <span>All Users</span>
                </NavLink>

                <NavLink to="/dashboard/mycab" className={linkStyles}>
                  <FaShopify className="text-lg" />
                  <span>Shop Cab</span>
                  <span className="ml-auto bg-rose-500 text-white text-xs font-bold px-2.5 py-0.5 rounded-full shadow-sm">
                    {cab.length || 0}
                  </span>
                </NavLink>
              </>
            ) : (
              <>
                {/* User Section */}
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest px-4 pt-4 pb-2">
                  User Panel
                </div>

                <NavLink to="/" className={linkStyles} end>
                  <MdDashboard className="text-lg" />
                  <span>User Dashboard</span>
                </NavLink>

                <NavLink to="/" className={linkStyles}>
                  <FaProductHunt className="text-lg" />
                  <span>Product</span>
                </NavLink>

                <NavLink to="/" className={linkStyles}>
                  <MdOutlinePayments className="text-lg" />
                  <span>Payment Details</span>
                </NavLink>

                <NavLink to="/" className={linkStyles}>
                  <MdLocalShipping className="text-lg" />
                  <span>Shipping</span>
                </NavLink>

                <NavLink to="/dashboard/mycab" className={linkStyles}>
                  <FaShopify className="text-lg" />
                  <span>Shop Cab</span>
                  <span className="ml-auto bg-rose-500 text-white text-xs font-bold px-2.5 py-0.5 rounded-full shadow-sm">
                    {cab.length || 0}
                  </span>
                </NavLink>
              </>
            )}

            {/* Common Section */}
            <div className="text-xs font-bold text-slate-500 uppercase tracking-widest px-4 pt-6 pb-2 border-t border-slate-800/50 mt-4">
              Navigation
            </div>

            <NavLink to="/" className={linkStyles}>
              <FaHome className="text-lg" />
              <span>Home</span>
            </NavLink>

            <NavLink to="/" className={linkStyles}>
              <MdOutlineMenu className="text-lg" />
              <span>Menu</span>
            </NavLink>

            <NavLink to="/" className={linkStyles}>
              <MdBookmarkBorder className="text-lg" />
              <span>Order Product</span>
            </NavLink>

            <NavLink to="/" className={linkStyles}>
              <MdSettings className="text-lg" />
              <span>Setting</span>
            </NavLink>

            <NavLink to="/" className={linkStyles}>
              <FaRocketchat className="text-lg" />
              <span>Chat</span>
            </NavLink>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
