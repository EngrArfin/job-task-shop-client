import photo1 from "../../../../assets/photo1.jpg";
import { Link } from "react-router-dom";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-slate-950 text-slate-300 border-t border-slate-900 mt-16 md:mt-24">
      <footer className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        
        {/* Brand Information */}
        <aside className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <img
              src={photo1}
              alt="SAR Shop Logo"
              className="h-12 w-12 rounded-full object-cover border border-slate-800"
            />
            <span className="font-bold text-lg text-white tracking-wider">
              SAR Shop
            </span>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed">
            Providing premium quality apparel and reliable customer service since 2023. Your satisfaction is our priority.
          </p>
        </aside>

        {/* Explore Links */}
        <nav className="flex flex-col gap-3">
          <h6 className="text-white font-bold text-sm uppercase tracking-wider mb-1">Explore</h6>
          <a href="/#shop-category" className="text-sm text-slate-400 hover:text-indigo-400 transition-colors">Shop by Category</a>
          <a href="/#popular-products" className="text-sm text-slate-400 hover:text-indigo-400 transition-colors">Popular Products</a>
          <a href="/#our-collections" className="text-sm text-slate-400 hover:text-indigo-400 transition-colors">Our Collections</a>
        </nav>

        {/* Company Links */}
        <nav className="flex flex-col gap-3">
          <h6 className="text-white font-bold text-sm uppercase tracking-wider mb-1">Company</h6>
          <Link to="/about" className="text-sm text-slate-400 hover:text-indigo-400 transition-colors">About us</Link>
          <Link to="/contract" className="text-sm text-slate-400 hover:text-indigo-400 transition-colors">Contact</Link>
        </nav>

        {/* Social / Newsletter */}
        <div className="flex flex-col gap-4">
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-3">
            <h6 className="text-white font-bold text-sm uppercase tracking-wider mb-1">Newsletter</h6>
            <span className="text-xs text-slate-400">Enter your email address to stay updated</span>
            <div className="flex mt-1">
              <input
                type="email"
                placeholder="username@site.com"
                className="w-full bg-slate-900 border border-slate-800 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 rounded-l-xl px-4 py-2 text-sm focus:ring-1 focus:ring-indigo-500"
              />
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm px-4 py-2 rounded-r-xl transition-colors">
                Subscribe
              </button>
            </div>
          </form>

          {/* Social Icons */}
          <div className="flex gap-4 mt-2">
            <a 
              href="https://web.facebook.com/engrarfin/" 
              target="_blank" 
              rel="noreferrer" 
              className="text-slate-400 hover:text-indigo-400 text-xl transition-colors" 
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a 
              href="https://whatsapp.com/dl/" 
              target="_blank" 
              rel="noreferrer" 
              className="text-slate-400 hover:text-indigo-400 text-xl transition-colors" 
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

      </footer>
      
      {/* Bottom copyright footer */}
      <footer className="footer footer-center py-6 border-t border-slate-900/60 bg-slate-950 text-slate-500 text-sm">
        <aside>
          <p>Copyright © 2026 - All rights reserved by SAR Shop</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
