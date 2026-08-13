import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../../../assets/cover/cover1.jpg";
import img3 from "../../../assets/cover/cover3.jpg";
import img5 from "../../../assets/cover/cover5.jpg";
import img6 from "../../../assets/cover/cover5.jpg";

import { Link } from "react-router-dom";

import "../Header/Header.css";

import "daisyui/dist/full.css";
import { FaBaby, FaHatCowboy, FaProductHunt, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { GiClothes } from "react-icons/gi";

import {
  MdAppSettingsAlt,
  MdChat,
  MdContactPhone,
  MdGirl,
  MdHome,
  MdImportantDevices,
  MdLaptopChromebook,
  MdOutlineElectricalServices,
  MdSmartphone,
} from "react-icons/md";
import { useState } from "react";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="drawer lg:drawer-open text-slate-800 bg-slate-50 border-b border-slate-200/50">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      
      {/* Main Content Area (Slider) */}
      <div className="drawer-content flex flex-col items-center justify-center p-6 md:p-10 lg:p-12 bg-slate-50">
        <div className="w-full max-w-5xl mx-auto overflow-hidden">
          <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-100 bg-white">
            <Carousel
              showArrows={true}
              showStatus={false}
              showThumbs={false}
              infiniteLoop={true}
              autoPlay={true}
              interval={4000}
              className="main-carousel"
            >
              <div>
                <img src={img1} alt="SAR Shop Offer 1" className="w-full max-h-[350px] md:max-h-[420px] object-cover" />
              </div>
              <div>
                <img src={img6} alt="SAR Shop Offer 2" className="w-full max-h-[350px] md:max-h-[420px] object-cover" />
              </div>
              <div>
                <img src={img3} alt="SAR Shop Offer 3" className="w-full max-h-[350px] md:max-h-[420px] object-cover" />
              </div>
              <div>
                <img src={img5} alt="SAR Shop Offer 4" className="w-full max-h-[350px] md:max-h-[420px] object-cover" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>

      {/* Sidebar Navigation */}
      <div className="drawer-side border-r border-slate-200/60 z-30 overflow-y-auto bg-white">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="p-6 w-72 min-h-full bg-white flex flex-col justify-between select-none">
          <div className="space-y-6">
            
            {/* General Section */}
            <div>
              <p className="px-3.5 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">General</p>
              <ul className="space-y-1">
                <li>
                  <Link to="/" className="flex items-center gap-3 px-3.5 py-2 text-slate-650 hover:text-indigo-600 font-semibold text-[13px] transition-all duration-150">
                    <MdHome className="text-lg text-slate-400 group-hover:text-indigo-500" />
                    <span>Home</span>
                  </Link>
                </li>
                <li>
                  <Link to="product" className="flex items-center gap-3 px-3.5 py-2 text-slate-650 hover:text-indigo-600 font-semibold text-[13px] transition-all duration-150">
                    <FaProductHunt className="text-base text-slate-400" />
                    <span>All Products</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Categories Section */}
            <div>
              <p className="px-3.5 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Categories</p>
              <ul className="space-y-1">
                
                {/* Clothing Dropdown */}
                <li>
                  <div className="flex flex-col items-stretch p-0">
                    <button
                      onClick={() => setShowDropdown(!showDropdown)}
                      className="w-full flex items-center justify-between px-3.5 py-2 text-slate-655 hover:text-indigo-600 font-semibold text-[13px] transition-all duration-150"
                    >
                      <div className="flex items-center gap-3">
                        <GiClothes className="text-lg text-slate-400" />
                        <span>Clothing</span>
                      </div>
                      {showDropdown ? <FaChevronUp className="text-[10px] text-slate-400" /> : <FaChevronDown className="text-[10px] text-slate-400" />}
                    </button>

                    {showDropdown && (
                      <div className="w-full pl-9 pr-2 py-1.5 space-y-1">
                        <Link to="product" className="flex items-center gap-2.5 py-1.5 px-3 text-xs text-slate-500 hover:text-indigo-600 font-medium transition-all">
                          <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                          <span>Men's Clothing</span>
                        </Link>
                        <Link to="productCategory" className="flex items-center gap-2.5 py-1.5 px-3 text-xs text-slate-500 hover:text-indigo-600 font-medium transition-all">
                          <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                          <span>Women's Clothing</span>
                        </Link>
                        <Link to="/" className="flex items-center gap-2.5 py-1.5 px-3 text-xs text-slate-500 hover:text-indigo-600 font-medium transition-all">
                          <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                          <span>Kids' Clothing</span>
                        </Link>
                      </div>
                    )}
                  </div>
                </li>

                <li>
                  <Link to="/" className="flex items-center gap-3 px-3.5 py-2 text-slate-650 hover:text-indigo-600 font-semibold text-[13px] transition-all duration-150">
                    <MdOutlineElectricalServices className="text-lg text-slate-400" />
                    <span>Electronics</span>
                  </Link>
                </li>
                <li>
                  <Link to="product" className="flex items-center gap-3 px-3.5 py-2 text-slate-650 hover:text-indigo-600 font-semibold text-[13px] transition-all duration-150">
                    <MdSmartphone className="text-lg text-slate-400" />
                    <span>Smartphones</span>
                  </Link>
                </li>
                <li>
                  <Link to="productCategory" className="flex items-center gap-3 px-3.5 py-2 text-slate-650 hover:text-indigo-600 font-semibold text-[13px] transition-all duration-150">
                    <MdLaptopChromebook className="text-lg text-slate-400" />
                    <span>Laptops / Tabs</span>
                  </Link>
                </li>
                <li>
                  <Link to="/" className="flex items-center gap-3 px-3.5 py-2 text-slate-650 hover:text-indigo-600 font-semibold text-[13px] transition-all duration-150">
                    <MdImportantDevices className="text-lg text-slate-400" />
                    <span>Accessories</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Help & Support Section */}
            <div>
              <p className="px-3.5 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Support</p>
              <ul className="space-y-1">
                <li>
                  <Link to="product" className="flex items-center gap-3 px-3.5 py-2 text-slate-650 hover:text-indigo-600 font-semibold text-[13px] transition-all duration-150">
                    <MdContactPhone className="text-lg text-slate-400" />
                    <span>Contact</span>
                  </Link>
                </li>
                <li>
                  <Link to="productCategory" className="flex items-center gap-3 px-3.5 py-2 text-slate-650 hover:text-indigo-600 font-semibold text-[13px] transition-all duration-150">
                    <MdChat className="text-lg text-slate-400" />
                    <span>Chat With Us</span>
                  </Link>
                </li>
                <li>
                  <Link to="productCategory" className="flex items-center gap-3 px-3.5 py-2 text-slate-650 hover:text-indigo-600 font-semibold text-[13px] transition-all duration-150">
                    <MdAppSettingsAlt className="text-lg text-slate-400" />
                    <span>Settings</span>
                  </Link>
                </li>
              </ul>
            </div>

          </div>

          <div className="pt-6 border-t border-slate-100 text-center text-[10px] text-slate-400 font-semibold tracking-wide">
            © 2026 SAR Shop Portal
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
