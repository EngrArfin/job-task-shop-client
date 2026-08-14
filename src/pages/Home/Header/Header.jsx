import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../../../assets/cover/cover1.jpg";
import img3 from "../../../assets/cover/cover3.jpg";
import img5 from "../../../assets/cover/cover5.jpg";
import img6 from "../../../assets/cover/cover5.jpg";

import "../Header/Header.css";

const Header = () => {
  return (
    <div className="w-full text-slate-800 bg-slate-50 border-b border-slate-200/50 py-6 px-4 md:py-8 md:px-8">
      <div className="w-full max-w-7xl mx-auto overflow-hidden">
        <div className="rounded-[2rem] overflow-hidden shadow-2xl border border-slate-100 bg-white">
          <Carousel
            showArrows={true}
            showStatus={false}
            showThumbs={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={4000}
            className="main-carousel"
          >
            <div>
              <img 
                src={img1} 
                alt="SAR Shop Offer 1" 
                className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] object-cover" 
              />
            </div>
            <div>
              <img 
                src={img6} 
                alt="SAR Shop Offer 2" 
                className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] object-cover" 
              />
            </div>
            <div>
              <img 
                src={img3} 
                alt="SAR Shop Offer 3" 
                className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] object-cover" 
              />
            </div>
            <div>
              <img 
                src={img5} 
                alt="SAR Shop Offer 4" 
                className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] object-cover" 
              />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Header;
