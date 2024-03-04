import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import NavBar from '../pages/Home/Share/NavBar/NavBar';
import Footer from '../pages/Home/Share/Footer/Footer';
 
const Main  = () => {
    const location = useLocation();
    console.log(location);
    const noHeaderFooter = location.pathname.includes('login') || 
    location.pathname.includes('signup')
    return (
        <div>
            
            <NavBar></NavBar>
            <Outlet></Outlet>
            { noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main ;