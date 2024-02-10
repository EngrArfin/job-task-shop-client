import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h2>this is home pages</h2>
            <Link to='home' className="btn">Home</Link>
            <Link to='userhome' className="btn">user</Link>
            <Link to='adminhome' className="btn">admin</Link>
            <Link to='home' className="btn">Login</Link>
            
        </div>
    );
};

export default Home;