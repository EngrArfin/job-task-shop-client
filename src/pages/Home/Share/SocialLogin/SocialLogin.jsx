import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../../AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      const loggedInUser = result.user;
      console.log(loggedInUser);
      const saveUser = {
        name: loggedInUser.displayName,
        email: loggedInUser.email,
      };
      fetch("https://sar-shop-server.vercel.app/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(saveUser),
      })
        .then((res) => res.json())
        .then(() => {
          navigate(from, { replace: true });
        });
    });
  };

  return (
    <div className="w-full text-center mt-4">
      <button
        onClick={handleGoogleSignIn}
        type="button"
        className="flex items-center justify-center gap-3 w-full py-3 px-4 border border-slate-200 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-semibold shadow-sm transition-all duration-150 active:scale-[0.99] text-sm focus:outline-none focus:ring-4 focus:ring-slate-100"
      >
        <FaGoogle className="text-rose-500 text-lg" />
        <span>Continue with Google</span>
      </button>
    </div>
  );
};

export default SocialLogin;
