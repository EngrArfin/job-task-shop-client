import React from 'react';
import { Link } from 'react-router-dom';
import photo1 from '../../../../assets/photo1.jpg'

const NavBar = () => {
    return (
        <div>
            <div className="navbar bg-red-600  max-w-8xl fixed z-10  text-white	">
                <div className="navbar-start">
                    
                    <div className='flex mr-20'>
                        <div>
                            <img src={photo1} alt="" className='w-12 rounded-full' />
                        </div>
                        <div className="form-control ">
                            <input type="text" placeholder="Search SA Shop" className="input bg-white-100  w-24 md:w-auto" />
                        </div>
                    </div>
                </div>
                <div className="navbar-middle pl-4">
                    <div className="navbar-center hidden lg:flex ">
                        <ul className="menu menu-horizontal px-1 p-4">
                            <Link to='/' className="mr-4 uppercase">Home</Link>
                            <Link to='product' className="mr-4 uppercase">Product</Link>
                            <Link to='productCategory' className="mr-4 uppercase">Product Category</Link>
                            <Link to='userhome' className="mr-4 uppercase">Sign Up</Link>
                            <Link to='adminhome' className="mr-4 uppercase">admin</Link>
                            <Link to='login' className="mr-4 uppercase">Login</Link>
                        </ul>
                    </div>
                    <button className="btn btn-black btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                            <span className="badge badge-xs badge-primary indicator-item"></span>
                        </div>
                    </button>
                    {/* <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                    </div> */}

                </div>
            </div>


            <div className="navbar bg-red-600 mx-auto max-w-3xl text-white	">
                <div className="">
                    <Link to='/' className="mr-4 uppercase">Help Support</Link>
                    <Link to='/' className="mr-4 uppercase">Contract: +880 1952487468</Link>

                </div>
                <div className="navbar-middle pl-4">
                    <div className="navbar-center hidden lg:flex ">
                        <ul className="menu menu-horizontal px-1 p-4">
                            <Link to='/' className="mr-4 uppercase">Save More Apps</Link>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;