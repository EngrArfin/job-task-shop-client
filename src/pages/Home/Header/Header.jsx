import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../../../assets/cover/cover1.jpg";
import img2 from "../../../assets/cover/cover2.jpg";
import img3 from "../../../assets/cover/cover3.jpg";
import img4 from "../../../assets/cover/cover4.jpg";
import img5 from "../../../assets/cover/cover5.jpg";
import img6 from "../../../assets/cover/cover5.jpg";

import { Link } from "react-router-dom";

import "../Header/Header.css";

import "daisyui/dist/full.css";
import { FaBaby, FaHatCowboy, FaProductHunt } from "react-icons/fa";
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

  const handleMouseOver = () => {
    setShowDropdown(true);
  };

  const handleMouseOut = () => {
    setShowDropdown(false);
  };

  return (
    <div className=" drawer lg:drawer-open text-black bg-white">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <div className="">
          <div className="mr-10 ">
            <Carousel>
              <div>
                <img src={img1} />
              </div>
              <div>
                <img src={img6} />
              </div>
              <div>
                <img src={img3} />
              </div>
              <div>
                <img src={img6} />
              </div>
              <div>
                <img src={img5} />
              </div>
              <div>
                <img src={img6} />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
      <div className="drawer-side ml-20">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full text-black bg-white">
          {/* Space */}

          <li>
            <Link to="/" className="mr-4 uppercase mt-4">
              {" "}
              <MdHome />
              Home
            </Link>
          </li>
          <li>
            <Link to="product" className="mr-4 uppercase mt-1">
              <FaProductHunt />
              All Products
            </Link>
          </li>

          {/* dropdown button */}
          <div className="navbar mr-4 uppercase mx-auto ">
            <div
              className="dropdown "
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              <button className=" mr-4 uppercase  ">
                <div className="flex ">
                  <div className="pl-2">
                    <GiClothes />
                  </div>

                  <div className="pl-3">Clothing</div>
                </div>
              </button>
              {showDropdown && (
                <ul
                  className="menu menu-sm dropdown-content  z-[2] shadow bg-yellow-100  rounded-box w-52"
                  id="dropdownMenu"
                >
                  <li>
                    <Link to="product" className="mr-4 uppercase mt-1">
                      <FaHatCowboy />
                      Men's Clothing
                    </Link>
                  </li>
                  <li>
                    <Link to="productCategory" className="mr-4 uppercase mt-1">
                      <MdGirl />
                      Women Cloth
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="mr-4 uppercase mt-4">
                      <FaBaby />
                      Kids Clothing
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          </div>
          <li>
            <Link to="/" className="mr-4 uppercase mt-4">
              <MdOutlineElectricalServices />
              Electronics
            </Link>
          </li>
          <li>
            <Link to="product" className="mr-4 uppercase mt-1">
              <MdSmartphone />
              Smartphones
            </Link>
          </li>
          <li>
            <Link to="productCategory" className="mr-4 uppercase mt-1">
              <MdLaptopChromebook />
              Laptops / Tab
            </Link>
          </li>
          <li>
            <Link to="/" className="mr-4 uppercase mt-4">
              <MdImportantDevices />
              Accessories
            </Link>
          </li>

          <li>
            <Link to="product" className="mr-4 uppercase mt-1">
              <MdContactPhone />
              Contact
            </Link>
          </li>
          <li>
            <Link to="productCategory" className="mr-4 uppercase mt-1">
              <MdChat />
              Chat With Us
            </Link>
          </li>
          <li>
            <Link to="productCategory" className="mr-4 uppercase mt-1">
              <MdAppSettingsAlt />
              Setting
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
