import headerphoto from "../../../../assets/headerphoto.png";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../SocialLogin/SocialLogin";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name)
        .then(() => {
          const saveUser = { name: data.name, email: data.email };
          fetch("https://sar-shop-server.vercel.app/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(saveUser),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                reset();
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Your work has been saved",
                  showConfirmButton: false,
                  timer: 1500,
                });
                navigate("/");
              }
            });
        })
        .catch((error) => console.log(error));
    });
  };

  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center bg-gradient-to-br from-slate-50 via-slate-100/50 to-slate-200/30 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl w-full bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row border border-slate-100">
        
        {/* Left Column - Visual side (Hidden on screens below lg) */}
        <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-tr from-indigo-600 via-indigo-700 to-violet-800 p-12 text-white flex-col justify-between relative overflow-hidden">
          {/* Decorative shapes in background */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl -ml-20 -mb-20"></div>
          
          <div className="relative z-10">
            <Link to="/" className="inline-flex items-center gap-2 group">
              <span className="font-bold text-2xl tracking-wider text-white">SAR Shop</span>
            </Link>
            <h2 className="text-3xl font-extrabold tracking-tight text-white mt-12 leading-tight">
              Manage your store & client orders in one place
            </h2>
            <p className="mt-4 text-indigo-100 text-sm leading-relaxed">
              Create your account to start managing your orders, track shop inventory, and complete checkouts seamlessly.
            </p>
          </div>

          {/* Hero Image frame */}
          <div className="relative z-10 mt-8 flex justify-center items-center">
            <img
              src={headerphoto}
              className="max-h-[300px] object-contain rounded-2xl shadow-xl border border-white/10 transition-transform duration-500 hover:scale-102"
              alt="SAR Shop Portal"
            />
          </div>

          <div className="relative z-10 text-xs text-indigo-200">
            © 2026 SAR Shop. All rights reserved.
          </div>
        </div>

        {/* Right Column - SignUp Form */}
        <div className="w-full lg:w-1/2 p-8 sm:p-12 md:p-16 flex flex-col justify-center bg-white">
          {/* Mobile brand header (visible on < lg) */}
          <div className="lg:hidden flex items-center justify-between mb-8">
            <span className="font-bold text-2xl tracking-wider bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              SAR Shop
            </span>
            <img
              src={headerphoto}
              className="w-12 h-12 object-contain rounded-lg shadow-md"
              alt="SAR Shop"
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-slate-800 tracking-tight">Create Account</h3>
            <p className="text-slate-500 text-sm mt-2">Join us today! Please fill in your details.</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-4">
            {/* Name field */}
            <div className="form-control">
              <label className="label py-1">
                <span className="label-text font-semibold text-slate-600 text-xs uppercase tracking-wider">Full Name</span>
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                name="name"
                placeholder="John Doe"
                className="input input-bordered w-full pl-4 pr-4 py-3 rounded-xl border-slate-200 bg-slate-50/50 text-slate-800 text-sm focus:outline-none focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 transition-all"
              />
              {errors.name && (
                <span className="text-rose-500 text-xs mt-1 block">Name is required</span>
              )}
            </div>

            {/* Email field */}
            <div className="form-control">
              <label className="label py-1">
                <span className="label-text font-semibold text-slate-600 text-xs uppercase tracking-wider">Email Address</span>
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                name="email"
                placeholder="admin@sarshop.com"
                className="input input-bordered w-full pl-4 pr-4 py-3 rounded-xl border-slate-200 bg-slate-50/50 text-slate-800 text-sm focus:outline-none focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 transition-all"
              />
              {errors.email && (
                <span className="text-rose-500 text-xs mt-1 block">Email is required</span>
              )}
            </div>

            {/* Password field */}
            <div className="form-control">
              <label className="label py-1">
                <span className="label-text font-semibold text-slate-600 text-xs uppercase tracking-wider">Password</span>
              </label>
              <input
                type="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                })}
                placeholder="••••••••"
                className="input input-bordered w-full pl-4 pr-4 py-3 rounded-xl border-slate-200 bg-slate-50/50 text-slate-800 text-sm focus:outline-none focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 transition-all"
              />
              {errors.password?.type === "required" && (
                <p className="text-rose-500 text-xs mt-1 block">Password is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-rose-500 text-xs mt-1 block">Password must be at least 6 characters</p>
              )}
              {errors.password?.type === "maxLength" && (
                <p className="text-rose-500 text-xs mt-1 block">Password must be less than 20 characters</p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-rose-500 text-xs mt-1 block">
                  Password must have one Uppercase, one lowercase, one number, and one special character.
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl shadow-md shadow-indigo-600/10 hover:shadow-indigo-600/20 active:scale-[0.99] transition-all duration-150 text-sm"
              >
                Sign Up
              </button>
            </div>
          </form>

          {/* Redirect Link */}
          <p className="text-slate-500 text-sm text-center mt-6">
            Already have an account?{" "}
            <Link to="/login" className="text-indigo-600 hover:text-indigo-700 font-semibold hover:underline transition-colors">
              Sign In
            </Link>
          </p>

          {/* Social Login Section */}
          <div className="mt-6">
            <div className="relative animate__animated animate__fadeInUp">
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-slate-200"></div>
              </div>
              <div className="relative flex justify-center text-sm font-medium leading-6">
                <span className="bg-white px-6 text-slate-400">Or sign up with</span>
              </div>
            </div>
            <SocialLogin />
          </div>

        </div>

      </div>
    </div>
  );
};

export default SignUp;
