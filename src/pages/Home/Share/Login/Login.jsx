import headerphoto from '../../../../assets/headerphoto.png';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useContext } from 'react';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
const Login = () => {

    const {signIn} = useContext(AuthContext);

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        
        signIn(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);

            Swal.fire({
                title: "User Login Successful",
                showClass: {
                  popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                  `
                },
                hideClass: {
                  popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                  `
                }
              });


        })


    }

    return (
        <div>
            <div className=" max-w-8xl fixed mx-auto hero min-h-screen bg-white-100 ">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={headerphoto} className="max-w-sm rounded-lg shadow-2xl" />
                    <div className="divider divider-horizontal mx-auto">
                        
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">admin / clien email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                                <div className='flex space-between'>
                                    <div className="form-control">
                                        <label className="label cursor-pointer">
                                            <input type="checkbox" className="toggle" checked />
                                            <span className="label-text">Remember me</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="label">
                                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-control mt-6">
                               
                                <input type="submit" value="Login" className="btn btn-primary"/>
                            </div>
                        </form>
                        <p>
                            <small className="text-white">
                                New Here?
                                <Link to="/signup" className="text-sky-500 m-2 ">
                                    Create an Account
                                </Link>
                            </small>
                        </p>
                        <div className="divider">OR</div>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;