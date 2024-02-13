import React from 'react';
import SocialLogin from '../SocialLogin/SocialLogin';

const SignUp = () => {
    return (
        <div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">admin / clien email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" required />

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
                        <button className="btn btn-primary">Login</button>
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
    );
};

export default SignUp;