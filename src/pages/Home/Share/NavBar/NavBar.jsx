import { useContext } from "react";
import { Link } from "react-router-dom";
import photo1 from "../../../../assets/photo1.jpg";
import { AuthContext } from "../../../../AuthProvider/AuthProvider";
import useCab from "../../../User/hook/useCab";
import useAuth from "../../../User/hook/useAuth";
import {
  MdLocationOn,
  MdOutlineContactPhone,
  MdOutlineWifiCalling3,
} from "react-icons/md";
import { FcAbout } from "react-icons/fc";

const NavBar = () => {
  const { user } = useAuth();
  const { logOut } = useContext(AuthContext);
  const [cab] = useCab();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <section>
      {/* Top Bar */}
      <div className="flex justify-between items-center px-4 py-2 bg-white border-b border-gray-200">
        <p className="uppercase">Welcome to SAR Shop</p>
        <div className="flex space-x-4 items-center">
          <Link
            to="https://whatsapp.com/dl/"
            className="flex items-center text-gray-600 hover:text-black"
          >
            <MdOutlineWifiCalling3 className="mr-1" />
            <span>+880 1952-487468</span>
          </Link>
          <Link
            to="https://maps.app.goo.gl/NGUUB1qKBiXLgVYg7"
            className="flex items-center text-gray-600 hover:text-black"
          >
            <MdLocationOn className="mr-1" />
            Shop Location
          </Link>
          <Link
            to="https://web.facebook.com/engrarfin/"
            className="flex items-center text-gray-600 hover:text-black"
          >
            <FcAbout className="mr-1" />
            About
          </Link>
          <Link
            to="https://web.facebook.com/engrarfin/"
            className="flex items-center text-gray-600 hover:text-black"
          >
            <MdOutlineContactPhone className="mr-1" />
            Contact
          </Link>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="flex justify-between items-center px-4 py-4 bg-white shadow-md">
        {/* Logo and Search */}
        <div className="flex items-center">
          <img
            src={photo1}
            alt="Logo"
            className="w-12 h-12 rounded-full mr-4"
          />
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-64 pr-10"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-2 right-2 w-6 h-6 text-gray-500"
              viewBox="0 0 16 16"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        {/* Menu Items */}
        <div className="flex items-center space-x-6">
          <ul className="flex space-x-4 items-center">
            <Link
              to="/signup"
              className="uppercase text-gray-600 hover:text-black"
            >
              Sign Up
            </Link>
            <span className="text-gray-400">|</span>
            {user ? (
              <button
                onClick={handleLogOut}
                className="uppercase text-gray-600 hover:text-black"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="uppercase text-gray-600 hover:text-black"
              >
                Login
              </Link>
            )}
          </ul>
          {/* Cart Icon */}
          <Link
            to="/dashboard/mycab"
            className="btn btn-ghost btn-circle relative"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 22 22"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className="badge badge-primary absolute top-0 right-0">
              {cab?.length || 0}
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NavBar;
