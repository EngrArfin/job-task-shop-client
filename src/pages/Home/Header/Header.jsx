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

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import "daisyui/dist/full.css";
import { FaProductHunt } from "react-icons/fa";
import { MdCategory, MdHome } from "react-icons/md";
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
          {/* Sidebar content here */}
          {/* <div className="navbar bg-base-100">
                        
                            <div className="dropdown">
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[2] p-2 shadow bg-base-100 rounded-box w-52">
                                    <li><Link><MdHome />Home 1</Link></li>
                                    <li>
                                        <Link className='mr-4 uppercase mt-4'><MdHome />Home</Link>
                                        <ul className="p-2">
                                            <li><a>Home 1</a></li>
                                            <li><a>Home 2</a></li>
                                        </ul>
                                    </li>                    
                                </ul>
                            </div>
                            
                      
                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal px-1">
                                
                                <li>
                                    <details>
                                        <summary><MdHome />Home</summary>
                                        <ul className="p-2">
                                            <li><a>Home 1</a></li>
                                            <li><a>Home 2</a></li>
                                        </ul>
                                    </details>
                                </li>
                                
                            </ul>
                        </div>
                        
                    </div> */}
          <div className="navbar bg-base-100">
            <div
              className="dropdown"
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              <button className="dropdown-btn">
                <MdHome />
                Home
              </button>
              {showDropdown && (
                <ul
                  className="menu menu-sm dropdown-content mt-3 z-[2] p-2 shadow bg-base-100 rounded-box w-52"
                  id="dropdownMenu"
                >
                  <li>
                    <Link>
                      <MdHome />
                      Home 1
                    </Link>
                  </li>
                  <li>
                    <a className="mr-4 uppercase mt-4">
                      <MdHome />
                      Home
                    </a>
                    <ul className="p-2">
                      <li>
                        <Link>Home 1</Link>
                      </li>
                      <li>
                        <Link>Home 2</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              )}
            </div>
          </div>

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
              Product
            </Link>
          </li>
          <li>
            <Link to="productCategory" className="mr-4 uppercase mt-1">
              <MdCategory />
              Product Category
            </Link>
          </li>
          <li>
            <Link to="/" className="mr-4 uppercase mt-4">
              <MdHome />
              Home
            </Link>
          </li>
          <li>
            <Link to="product" className="mr-4 uppercase mt-1">
              <FaProductHunt />
              Product
            </Link>
          </li>
          <li>
            <Link to="productCategory" className="mr-4 uppercase mt-1">
              <MdCategory />
              Product Category
            </Link>
          </li>
          <li>
            <Link to="/" className="mr-4 uppercase mt-4">
              <MdHome />
              Home
            </Link>
          </li>
          <li>
            <Link to="product" className="mr-4 uppercase mt-1">
              <FaProductHunt />
              Product
            </Link>
          </li>
          <li>
            <Link to="productCategory" className="mr-4 uppercase mt-1">
              <MdCategory />
              Product Category
            </Link>
          </li>
          <li>
            <Link to="/" className="mr-4 uppercase mt-4">
              <MdHome />
              Home
            </Link>
          </li>
          <li>
            <Link to="product" className="mr-4 uppercase mt-1">
              <FaProductHunt />
              Product
            </Link>
          </li>
          <li>
            <Link to="productCategory" className="mr-4 uppercase mt-1">
              <MdCategory />
              Product Category
            </Link>
          </li>
          <li>
            <Link to="productCategory" className="mr-4 uppercase mt-1">
              <MdCategory />
              Product Category
            </Link>
          </li>
          <li>
            <Link to="productCategory" className="mr-4 uppercase mt-1">
              <MdCategory />
              Product Category
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

{
  /* <div className='flex bg-white-300 '>
            <section className="row second-row">
                <div>
                    <div className="  ">
                        <div class="mt-5 ml-20">
                            <div class="items">
                                <div >
                                    <Link to='login'><FontAwesomeIcon icon={faCoffee} /> Dashboard</Link>
                                </div>
                                <div >
                                    <Link to='login'><FontAwesomeIcon icon={faCoffee} /> Dashboard</Link>
                                </div>
                                <div >
                                    <Link to='login'><FontAwesomeIcon icon={faCoffee} /> Users</Link>
                                </div>
                                <div >
                                    <Link to='login'><FontAwesomeIcon icon={faCoffee} /> Product&SellDetails</Link>
                                </div>
                                <div >
                                    <Link to='login'><FontAwesomeIcon icon={faCoffee} /> Sales</Link>
                                </div>
                                <div >
                                    <Link to='login'><FontAwesomeIcon icon={faCoffee} /> Cashback</Link>
                                </div>
                                <div >
                                    <Link to='login'><FontAwesomeIcon icon={faCoffee} /> Sats</Link>
                                </div>
                                <div >
                                    <Link to='login'><FontAwesomeIcon icon={faCoffee} /> Sales</Link>
                                </div>
                                <div >
                                    <Link to='login'><FontAwesomeIcon icon={faCoffee} /> Dashboard</Link>
                                </div>
                                <div >
                                    <Link to='login'><FontAwesomeIcon icon={faCoffee} /> Dashboard</Link>
                                </div>
                                <div >
                                    <Link to='login'><FontAwesomeIcon icon={faCoffee} /> Users</Link>
                                </div>
                                <div >
                                    <Link to='login'><FontAwesomeIcon icon={faCoffee} /> Product&SellDetails</Link>
                                </div>
                                <div >
                                    <Link to='login'><FontAwesomeIcon icon={faCoffee} /> Sales</Link>
                                </div>
                                <div >
                                    <Link to='login'><FontAwesomeIcon icon={faCoffee} /> Cashback</Link>
                                </div>
                                <div >
                                    <Link to='login'><FontAwesomeIcon icon={faCoffee} /> Sats</Link>
                                </div>
                                <div >
                                    <Link to='login'><FontAwesomeIcon icon={faCoffee} /> Sales</Link>
                                </div>
                                <div >
                                    <Link to='login'><FontAwesomeIcon icon={faCoffee} /> Sales</Link>
                                </div>
                                <div >
                                    <Link to='login'><FontAwesomeIcon icon={faCoffee} /> Cashback</Link>
                                </div>
                                <div >
                                    <Link to='login'><FontAwesomeIcon icon={faCoffee} /> Sats</Link>
                                </div>
                                <div >
                                    <Link to='login'><FontAwesomeIcon icon={faCoffee} /> Sales</Link>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </div>


                <div className="">
                    <div className='mr-20 mt-4'>
                        <Carousel>
                            <div>
                                <img src={img1} />
                            </div>
                            <div>
                                <img src={img2} />
                            </div>
                            <div>
                                <img src={img3} />
                            </div>
                            <div>
                                <img src={img4} />
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
            </section>





        </div> */
}
