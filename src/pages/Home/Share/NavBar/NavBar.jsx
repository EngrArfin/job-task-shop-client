import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import photo1 from "../../../../assets/photo1.jpg";
import { AuthContext } from "../../../../AuthProvider/AuthProvider";
import useCab from "../../../User/hook/useCab";
import useAuth from "../../../User/hook/useAuth";
import {
  MdLocationOn,
  MdOutlineContactPhone,
  MdOutlineWifiCalling3,
  MdClose,
  MdMenu,
  MdSearch,
} from "react-icons/md";
import { FcAbout } from "react-icons/fc";

const NavBar = () => {
  const { user } = useAuth();
  const { logOut } = useContext(AuthContext);
  const [cab] = useCab();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <section className="w-full">
      {/* Top Bar */}
      <div className="hidden md:flex justify-between items-center px-6 py-2 bg-slate-50 border-b border-slate-200/60 text-xs text-slate-600 font-medium">
        <p className="uppercase tracking-wider font-semibold text-indigo-600">Welcome to SAR Shop</p>
        <div className="flex space-x-6 items-center">
          <Link
            to="https://whatsapp.com/dl/"
            className="flex items-center text-slate-500 hover:text-indigo-600 transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdOutlineWifiCalling3 className="mr-1.5 text-base text-indigo-500" />
            <span>+880 1952-487468</span>
          </Link>
          <Link
            to="https://maps.app.goo.gl/NGUUB1qKBiXLgVYg7"
            className="flex items-center text-slate-500 hover:text-indigo-600 transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdLocationOn className="mr-1.5 text-base text-indigo-500" />
            <span>Shop Location</span>
          </Link>
          <Link
            to="/about"
            className="flex items-center text-slate-500 hover:text-indigo-600 transition-colors duration-200"
          >
            <FcAbout className="mr-1.5 text-base" />
            <span>About</span>
          </Link>
          <Link
            to="/contract"
            className="flex items-center text-slate-500 hover:text-indigo-600 transition-colors duration-200"
          >
            <MdOutlineContactPhone className="mr-1.5 text-base text-indigo-500" />
            <span>Contact</span>
          </Link>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20 gap-4">
            
            {/* Logo and Branding */}
            <div className="flex items-center gap-3 shrink-0">
              <Link to="/" className="flex items-center gap-2 group">
                <img
                  src={photo1}
                  alt="SAR Shop Logo"
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border border-slate-200 shadow-sm transition-transform duration-300 group-hover:scale-105"
                />
                <span className="font-bold text-lg md:text-xl tracking-tight bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  SAR Shop
                </span>
              </Link>
            </div>

            {/* Desktop Search Bar */}
            <div className="hidden md:flex flex-1 max-w-md mx-4 relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-4 pr-10 py-2 rounded-full border border-slate-200 bg-slate-50 text-slate-700 text-sm transition-all duration-200 focus:outline-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-500/10"
              />
              <MdSearch className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-xl pointer-events-none" />
            </div>

            {/* Desktop Action Items */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Cart Icon */}
              <Link
                to="/dashboard/mycab"
                className="relative p-2.5 text-slate-600 hover:text-indigo-600 hover:bg-slate-50 rounded-full transition-all duration-200"
                aria-label="View Shopping Cart"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                {cab?.length > 0 && (
                  <span className="absolute top-0 right-0 flex h-5 w-5 items-center justify-center rounded-full bg-rose-500 text-[10px] font-bold text-white shadow-sm border border-white animate-pulse">
                    {cab.length}
                  </span>
                )}
              </Link>

              {/* User Dropdown / Auth Menu */}
              <div className="flex items-center">
                {user ? (
                  <div className="dropdown dropdown-end">
                    <div 
                      tabIndex={0} 
                      role="button" 
                      className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 hover:border-indigo-500 overflow-hidden cursor-pointer transition-all duration-200"
                    >
                      <img 
                        src={user?.photoURL || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"} 
                        alt={user?.displayName || "User"} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <ul 
                      tabIndex={0} 
                      className="dropdown-content mt-3 z-[100] p-2 shadow-xl border border-slate-100 bg-white rounded-2xl w-48 text-slate-700 animate-in fade-in slide-in-from-top-2 duration-200"
                    >
                      <li className="px-3 py-2 border-b border-slate-50">
                        <p className="font-bold text-xs text-slate-800 line-clamp-1">{user?.displayName || "User"}</p>
                        <p className="text-[10px] text-slate-400 truncate mt-0.5">{user?.email}</p>
                      </li>
                      <li className="mt-1">
                        <Link 
                          to="/dashboard/mycab" 
                          className="flex items-center gap-2 px-3 py-2 text-sm font-semibold rounded-xl hover:bg-slate-50 hover:text-indigo-600 transition-colors"
                        >
                          <span>Dashboard</span>
                        </Link>
                      </li>
                      <li>
                        <button 
                          onClick={handleLogOut}
                          className="w-full flex items-center gap-2 px-3 py-2 text-sm font-semibold rounded-xl text-rose-600 hover:bg-rose-50 transition-colors text-left"
                        >
                          Logout
                        </button>
                      </li>
                    </ul>
                  </div>
                ) : (
                  <div className="flex items-center gap-3">
                    <Link
                      to="/login"
                      className="px-4 py-2 text-sm font-semibold text-slate-700 hover:text-indigo-600 transition-colors duration-200"
                    >
                      Login
                    </Link>
                    <Link
                      to="/signup"
                      className="px-4 py-2 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-full shadow-sm transition-all duration-200 transform hover:-translate-y-0.5"
                    >
                      Sign Up
                    </Link>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Header Icons & Hamburger */}
            <div className="flex lg:hidden items-center gap-2">
              {/* Cart Icon (Visible on Mobile) */}
              <Link
                to="/dashboard/mycab"
                className="relative p-2 text-slate-600 hover:text-indigo-600 rounded-full transition-all"
                aria-label="View Shopping Cart"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                {cab?.length > 0 && (
                  <span className="absolute top-0 right-0 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-rose-500 text-[9px] font-bold text-white shadow-sm border border-white">
                    {cab.length}
                  </span>
                )}
              </Link>

              {/* Hamburger Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-slate-600 hover:text-indigo-600 rounded-full hover:bg-slate-100 focus:outline-none transition-colors duration-200"
                aria-expanded={isMenuOpen}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <MdClose className="text-2xl" />
                ) : (
                  <MdMenu className="text-2xl" />
                )}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Dropdown Panel */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-slate-100 bg-white shadow-lg animate-[slideDown_0.2s_ease-out]">
            <div className="px-4 py-4 space-y-4">
              
              {/* Search Bar on Mobile */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full pl-4 pr-10 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-700 text-sm focus:outline-none focus:border-indigo-500 focus:bg-white"
                />
                <MdSearch className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-xl pointer-events-none" />
              </div>

              {/* Navigation Links */}
              <div className="flex flex-col gap-1">
                <span className="px-3 py-1.5 text-xs font-semibold text-slate-400 uppercase tracking-wider">Quick Links</span>
                <Link
                  to="https://whatsapp.com/dl/"
                  className="flex items-center px-3 py-2.5 rounded-xl text-slate-600 hover:bg-slate-50 hover:text-indigo-600 font-medium transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <MdOutlineWifiCalling3 className="mr-3 text-lg text-indigo-500" />
                  +880 1952-487468
                </Link>
                <Link
                  to="https://maps.app.goo.gl/NGUUB1qKBiXLgVYg7"
                  className="flex items-center px-3 py-2.5 rounded-xl text-slate-600 hover:bg-slate-50 hover:text-indigo-600 font-medium transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <MdLocationOn className="mr-3 text-lg text-indigo-500" />
                  Shop Location
                </Link>
                <Link
                  to="/about"
                  className="flex items-center px-3 py-2.5 rounded-xl text-slate-600 hover:bg-slate-50 hover:text-indigo-600 font-medium transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <FcAbout className="mr-3 text-lg" />
                  About
                </Link>
                <Link
                  to="/contract"
                  className="flex items-center px-3 py-2.5 rounded-xl text-slate-600 hover:bg-slate-50 hover:text-indigo-600 font-medium transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <MdOutlineContactPhone className="mr-3 text-lg text-indigo-500" />
                  Contact
                </Link>
              </div>

              <hr className="border-slate-100" />

              {/* Account Actions */}
              <div className="flex flex-col gap-2.5 pt-2">
                {user ? (
                  <div className="flex flex-col gap-2">
                    <Link
                      to="/dashboard/mycab"
                      className="w-full py-3 text-center text-sm font-semibold text-indigo-650 border border-indigo-200 hover:bg-indigo-50 rounded-xl transition-all"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Dashboard
                    </Link>
                    <button
                      onClick={() => {
                        handleLogOut();
                        setIsMenuOpen(false);
                      }}
                      className="w-full py-3 text-center text-sm font-semibold text-rose-600 border border-rose-200 hover:bg-rose-50 rounded-xl transition-all"
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col gap-2">
                    <Link
                      to="/login"
                      className="w-full py-3 text-center text-sm font-semibold text-slate-700 border border-slate-200 hover:bg-slate-50 rounded-xl transition-all"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Login
                    </Link>
                    <Link
                      to="/signup"
                      className="w-full py-3 text-center text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl transition-all shadow-sm"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Sign Up
                    </Link>
                  </div>
                )}
              </div>

            </div>
          </div>
        )}
      </nav>
    </section>
  );
};

export default NavBar;
