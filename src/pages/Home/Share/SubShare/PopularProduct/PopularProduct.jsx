import "@smastrom/react-rating/style.css";
import { Rating } from "@smastrom/react-rating";
import { useEffect, useState } from "react";
import SectionTitle from "../../SectionTitle/SectionTitle";

const PopularProduct = () => {
  const [categorys, setCategorys] = useState([]);
  const [visibleCount, setVisibleCount] = useState(10);

  useEffect(() => {
    fetch("category.json")
      .then((res) => res.json())
      .then((data) => setCategorys(data));
  }, []);

  const handleSeeMore = () => {
    setVisibleCount((prev) => prev + 5);
  };

  return (
    <div id="popular-products" className="mt-12 mb-16 text-slate-800 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle
        heading="Popular Products"
        subHeading="Explore our most-loved and top-rated styles, handpicked for you"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {categorys.slice(0, visibleCount).map((category) => (
          <div key={category._id} className="group">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 hover:border-indigo-100 overflow-hidden hover:shadow-md transition-all duration-300 flex flex-col h-full">

              {/* Product Image */}
              <div className="aspect-[4/3] bg-slate-50 flex items-center justify-center p-4 overflow-hidden relative">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-3 right-3 bg-indigo-50 text-indigo-600 font-bold text-xs px-2.5 py-1 rounded-lg">
                  ${category.price}
                </span>
              </div>

              {/* Product Info */}
              <div className="p-5 flex flex-col flex-grow border-t border-slate-50">
                <h3 className="font-bold text-slate-800 text-base mb-1.5 group-hover:text-indigo-600 transition-colors line-clamp-1">
                  {category.name}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed mb-4 flex-grow line-clamp-2">
                  {category.description}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-1 mt-auto pt-2 border-t border-slate-50">
                  <Rating
                    style={{ maxWidth: 85 }}
                    value={category.rating}
                    readOnly
                  />
                  <span className="text-[10px] text-slate-400 font-semibold">({category.rating})</span>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

      {visibleCount < categorys.length && (
        <div className="flex justify-center mt-12">
          <button
            onClick={handleSeeMore}
            className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl shadow-md shadow-indigo-600/10 hover:shadow-indigo-600/20 active:scale-[0.98] transition-all duration-150 text-sm"
          >
            See More Products
          </button>
        </div>
      )}
    </div>
  );
};

export default PopularProduct;
