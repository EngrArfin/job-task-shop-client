import headerphoto from "../../../../assets/headerphoto.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import { useContext } from "react";
import { AuthContext } from "../../../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  // Redirect the user to where they came from after login
  const from = location.state?.from?.pathname || "/";

  // Handle login form submission
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    // Perform the sign-in action
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);

        // Show a success alert after successful login
        Swal.fire({
          title: "User Login Successful",
          showClass: {
            popup: `animate__animated animate__fadeInUp animate__faster`,
          },
          hideClass: {
            popup: `animate__animated animate__fadeOutDown animate__faster`,
          },
        });

        // Navigate to the previous page or home page
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          title: "Login Failed",
          text: error.message,
          icon: "error",
        });
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
              Welcome back! Sign in to access your admin tools or browse and complete your checkout orders seamlessly.
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

        {/* Right Column - Login Form */}
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
            <h3 className="text-2xl font-bold text-slate-800 tracking-tight">Sign In</h3>
            <p className="text-slate-500 text-sm mt-2">Please enter your account details to continue.</p>
          </div>

          {/* Recruiter Quick Access Banner */}
          <div className="mt-6 p-4 bg-indigo-50 border border-indigo-100 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-left">
              <p className="text-xs font-bold text-indigo-950">Recruiter Quick Access</p>
              <p className="text-[10px] text-indigo-700 mt-1">
                Instant 1-click login using demo credentials.
              </p>
              <p className="text-[9px] text-slate-400 font-mono mt-0.5">
                user@gmail.com / User123@
              </p>
            </div>
            <button
              onClick={() => {
                signIn("user@gmail.com", "User123@")
                  .then((result) => {
                    Swal.fire({
                      title: "Recruiter Login Successful",
                      text: "Welcome back to SAR Shop!",
                      icon: "success",
                      confirmButtonColor: '#4f46e5'
                    });
                    navigate(from, { replace: true });
                  })
                  .catch((error) => {
                    Swal.fire({
                      title: "Login Failed",
                      text: error.message,
                      icon: "error"
                    });
                  });
              }}
              className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl text-xs shadow-md shadow-indigo-600/10 active:scale-[0.98] transition-all shrink-0"
            >
              Demo Login
            </button>
          </div>

          <form onSubmit={handleLogin} className="mt-8 space-y-6">
            <div className="space-y-4">
              
              {/* Email field */}
              <div className="form-control">
                <label className="label py-1.5">
                  <span className="label-text font-semibold text-slate-600 text-xs uppercase tracking-wider">Email Address</span>
                </label>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    placeholder="user@gmail.com"
                    className="input input-bordered w-full pl-4 pr-4 py-3 rounded-xl border-slate-200 bg-slate-50/50 text-slate-800 text-sm focus:outline-none focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 transition-all"
                    required
                  />
                </div>
              </div>

              {/* Password field */}
              <div className="form-control">
                <label className="label py-1.5">
                  <span className="label-text font-semibold text-slate-600 text-xs uppercase tracking-wider">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="User123@"
                  className="input input-bordered w-full pl-4 pr-4 py-3 rounded-xl border-slate-200 bg-slate-50/50 text-slate-800 text-sm focus:outline-none focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 transition-all"
                  required
                />
              </div>

              {/* Remember me & Forgot Password */}
              <div className="flex items-center justify-between pt-1">
                <label className="flex items-center gap-2 cursor-pointer select-none">
                  <input 
                    type="checkbox" 
                    className="checkbox checkbox-primary checkbox-sm rounded" 
                  />
                  <span className="text-slate-600 text-xs font-medium">Remember me</span>
                </label>
                <a 
                  href="#" 
                  className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 hover:underline transition-colors"
                >
                  Forgot password?
                </a>
              </div>

            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full py-3.5 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl shadow-md shadow-indigo-600/10 hover:shadow-indigo-600/20 active:scale-[0.99] transition-all duration-150 text-sm"
              >
                Sign In
              </button>
            </div>
          </form>

          {/* Redirect Link (Clean typography, no text-white) */}
          <p className="text-slate-500 text-sm text-center mt-6">
            New Here?{" "}
            <Link to="/signup" className="text-indigo-600 hover:text-indigo-700 font-semibold hover:underline transition-colors">
              Create an Account
            </Link>
          </p>

          {/* Social Login Section */}
          <div className="mt-6">
            <div className="relative animate__animated animate__fadeInUp">
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-slate-200"></div>
              </div>
              <div className="relative flex justify-center text-sm font-medium leading-6">
                <span className="bg-white px-6 text-slate-400">Or continue with</span>
              </div>
            </div>
            <SocialLogin />
          </div>

        </div>

      </div>
    </div>
  );
};

export default Login;
