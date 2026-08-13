import { IoIosArrowDroprightCircle } from "react-icons/io";
import { Link } from "react-router-dom";

const Produt = ({ item }) => {
  const { name, image, price, description } = item || {};
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-all duration-300 flex flex-col h-full group">
      {/* Product Image */}
      <div className="aspect-[4/3] bg-slate-50 flex items-center justify-center p-4 overflow-hidden relative">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
        />
        <span className="absolute top-3 right-3 bg-rose-50 text-rose-600 font-bold text-xs px-2.5 py-1 rounded-lg">
          {price} TK
        </span>
      </div>

      {/* Product Info */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="font-bold text-slate-800 text-base mb-1.5 group-hover:text-indigo-600 transition-colors line-clamp-1">
          {name}
        </h3>
        <p className="text-slate-500 text-xs leading-relaxed mb-4 flex-grow line-clamp-2">
          {description}
        </p>

        {/* Action button */}
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-slate-50">
          <span className="text-slate-400 text-xs font-semibold">Price: {price} TK</span>
          <Link
            to="/finalorder"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-rose-50 text-rose-600 hover:bg-rose-600 hover:text-white transition-all duration-200"
            aria-label="Order Product"
          >
            <IoIosArrowDroprightCircle className="text-xl" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Produt;
