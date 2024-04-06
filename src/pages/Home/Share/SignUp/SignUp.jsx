import headerphoto from '../../../../assets/headerphoto.png';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { AuthContext } from "../../../../AuthProvider/AuthProvider";
import Swal from 'sweetalert2';
import SocialLogin from '../SocialLogin/SocialLogin';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = data => {

        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name)

                    .then(() => {
                        const saveUser = {name: data.name, email: data.email}
                        fetch('http://localhost:5000/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(req => req.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset();
                                    Swal.fire({
                                        position: "top-end",
                                        icon: "success",
                                        title: "Your work has been saved",
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/')

                                }
                            })


                    })

                    .catch(error => console.log(error))
            })
    }

    /* console.log(watch("example")) */

    return (
        <div>
            <div className=" max-w-8xl fixed mx-auto hero min-h-screen bg-white-100 ">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={headerphoto} className="max-w-sm rounded-lg shadow-2xl" />
                    <div className="divider divider-horizontal mx-auto">

                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name </span>
                                </label>
                                <input type="text"  {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" />
                                {errors.name && <span className="text-red-600">Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Enter email</span>
                                </label>
                                {/* <input type="email" name='email' placeholder="email" className="input input-bordered" required /> */}
                                <input type="email"  {...register("email", { required: true })} name="email" placeholder="Email" className="input input-bordered" />
                                {errors.email && <span className="text-red-600">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                {/* <input type="password" name='password' placeholder="password" className="input input-bordered" required /> */}

                                <input type="password"  {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })} placeholder="Password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                            </div>
                            <div className="form-control mt-6">

                                <input type="submit" value="Sign Up" className="btn btn-primary" />
                            </div>
                        </form>

                        <small className='flex'>
                            <p>Already have an account</p>
                            <Link to="/login" className="text-sky-500 m-2 ">
                                Login
                            </Link>
                        </small>

                        <div className="divider">Account user gmail</div>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;