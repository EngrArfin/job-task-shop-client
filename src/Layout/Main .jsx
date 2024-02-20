import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../pages/Home/Share/NavBar/NavBar';
import Footer from '../pages/Home/Share/Footer/Footer';
/* import NavBarTop from '../pages/Home/Share/NavBarTop/NavBarTop';
 */
const Main  = () => {
    return (
        <div>
            {/* <NavBarTop></NavBarTop> */}
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main ;