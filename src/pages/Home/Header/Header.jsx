import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../../../assets/cover/cover1.png';
import img2 from '../../../assets/cover/cover2.jpg';
import img3 from '../../../assets/cover/cover2.jpg';
import img4 from '../../../assets/cover/cover2.jpg';
import img5 from '../../../assets/cover/cover2.jpg';
import img6 from '../../../assets/cover/cover2.jpg';
import { Link } from 'react-router-dom';


import '../Header/Header.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import 'daisyui/dist/full.css';

const Header = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}

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

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    <li><a>User Product</a></li>
                    <li><a>User Buy</a></li>
                    <li><a>User Product</a></li>
                    <li><a>User Buy</a></li>
                    <li><a>User Product</a></li>
                    <li><a>User Buy</a></li>
                    <li><a>User Product</a></li>
                    <li><a>User Buy</a></li>
                    <li><a>User Product</a></li>
                    <li><a>User Buy</a></li>
                </ul>

            </div>
        </div>

    );
};

export default Header;

{/* <div className='flex bg-white-300 '>
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





        </div> */}