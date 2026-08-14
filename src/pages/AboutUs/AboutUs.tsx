import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../Home/Share/SectionTitle/SectionTitle';

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] bg-slate-50 text-slate-700 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Page Title & Intro */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <SectionTitle
            heading="About Our Brand"
            subHeading="Discover who we are and what drives us at SAR Shop"
          />
          <p className="text-slate-500 text-sm leading-relaxed max-w-2xl mx-auto mt-2">
            Since our launch in 2023, we have been dedicated to providing a premium curated collection of clothing, smartphones, laptops, and everyday essentials.
          </p>
        </div>

        {/* Our Story & Focus */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch bg-white rounded-2xl p-8 md:p-12 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            <div>
              <span className="bg-rose-50 text-rose-600 font-bold text-xs px-3.5 py-1.5 rounded-lg uppercase tracking-wider">
                Our Journey
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800 tracking-tight">
              Crafting a Seamless Shopping Experience
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed">
              We started with a simple belief: everyone deserves access to top-tier products without the premium markups. Every apparel piece, electronic gadget, and accessory in our collection is handpicked and quality-checked.
            </p>
            <p className="text-slate-500 text-sm leading-relaxed">
              Our partnership with verified international manufacturers allows us to deliver cutting-edge technology and fashion trends directly to your door with reliability you can trust.
            </p>
          </div>
          <div className="lg:col-span-5 bg-slate-50 border border-slate-100 rounded-2xl p-8 flex flex-col justify-center items-center text-center space-y-4 min-h-[300px]">
            <div className="w-16 h-16 rounded-full bg-rose-50 flex items-center justify-center text-2xl shadow-sm text-rose-600 font-bold">
              ✓
            </div>
            <h3 className="text-lg font-bold text-slate-800">100% Quality Guaranteed</h3>
            <p className="text-xs text-slate-500 max-w-xs leading-relaxed">
              Every single product undergoes multi-stage inspections before dispatch to ensure client satisfaction.
            </p>
          </div>
        </div>

        {/* Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 text-xl font-bold">
              🚀
            </div>
            <h3 className="font-bold text-lg text-slate-800">Our Mission</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              To supply premium, reliable clothing and modern tech products, offering the ultimate e-commerce experience across Bangladesh.
            </p>
          </div>

          <div className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 text-xl font-bold">
              👁️
            </div>
            <h3 className="font-bold text-lg text-slate-800">Our Vision</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              To become the first choice destination for fashion and technology by implementing smart, transparent supply chains.
            </p>
          </div>

          <div className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-pink-50 flex items-center justify-center text-pink-600 text-xl font-bold">
              🤝
            </div>
            <h3 className="font-bold text-lg text-slate-800">Our Values</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Customer obsession, honest pricing, Swift shipping, and transparent communication in every transaction.
            </p>
          </div>
        </div>

        {/* Call to action section */}
        <div className="bg-white rounded-2xl p-8 md:p-12 border border-slate-100 shadow-sm text-center max-w-4xl mx-auto space-y-6 hover:shadow-md transition-all duration-300">
          <h2 className="text-2xl font-bold text-slate-800">Need Custom Orders or Quick Assistance?</h2>
          <p className="text-slate-500 text-sm max-w-md mx-auto leading-relaxed">
            Our 24/7 dedicated support team is here to answer your questions and coordinate wholesale requirements.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link 
              to="/contract" 
              className="px-8 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl shadow-md shadow-indigo-600/10 hover:shadow-indigo-600/20 active:scale-[0.98] transition-all duration-150 text-sm"
            >
              Contact Us Now
            </Link>
            <Link 
              to="/product" 
              className="px-8 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl active:scale-[0.98] transition-all duration-150 text-sm"
            >
              Explore Products
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutUs;
