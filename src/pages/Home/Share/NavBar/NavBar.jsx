import { Link } from 'react-router-dom';
import photo1 from '../../../../assets/photo1.jpg'
import { useContext } from 'react';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';

const NavBar = () => {

    const {user, logOut} = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
        .then(() =>{})
        .catch(error => console.error(error));
    }

    return (
        <div className="space-around navbar bg-red-600 max-w-8xl max-auto z-10 text-white	">
            <div className="navbar-start">
                <div className='flex mr-20'>
                    <div to='/'>
                        <img src={photo1} alt="" className='w-12 rounded-full' />
                    </div>

                    <div className='ml-5'>
                        <label className="input input-bordered flex items-center gap-2">
                            <input type="text" className="grow" placeholder="Search" />
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                        </label>
                    </div>
                </div>
            </div>
            <div className="navbar-end pl-4 mx-auto">
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1 p-4">

                        <Link to='signup' className="mr-4 uppercase">Sign Up</Link>
                        <Link to='/outseen' className="mr-4 uppercase">Out Seen</Link>
                        <Link className=" mr-4 uppercase">|</Link>
                        

                        {
                            user ? <>
                            <button onClick={handleLogOut} className="mr-4 uppercase">LogOut</button>
                            </> : <>
                            <Link to='login' className="mr-4 uppercase">Login</Link>
                            </>
                        }



                    </ul>
                </div>
                <Link to='dashboard' tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                    <div className="indicator ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                        <span className="badge badge-sm indicator-item text-green-500">0</span>
                    </div>
                </Link>

            </div>
        </div>

    );
};

export default NavBar;