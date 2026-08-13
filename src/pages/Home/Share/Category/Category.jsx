import React, { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import { Link } from "react-router-dom";

const Category = () => {
  const [categorys, setCategorys] = useState([]);
  const [visibleCount, setVisibleCount] = useState(12);

  useEffect(() => {
    fetch("category.json")
      .then((res) => res.json())
      .then((data) => setCategorys(data));
  }, []);

  const handleSeeMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <div className="mt-8 mb-12 text-slate-800 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle
        heading="Shop by Category"
        subHeading="Browse our collection by apparel type to find exactly what you need"
      />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
        {categorys.slice(0, visibleCount).map((category) => (
          <Link
            to={`/productCategory?category=${category.name}`}
            key={category._id}
            className="group block"
          >
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 hover:border-indigo-100 overflow-hidden hover:shadow-md transition-all duration-300 flex flex-col h-full">
              <div className="aspect-square bg-slate-50 flex items-center justify-center p-4 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 text-center flex-grow flex items-center justify-center border-t border-slate-50">
                <h2 className="font-semibold text-sm text-slate-700 group-hover:text-indigo-600 transition-colors">
                  {category.name}
                </h2>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {visibleCount < categorys.length && (
        <div className="flex justify-center mt-10">
          <button
            onClick={handleSeeMore}
            className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl shadow-md shadow-indigo-600/10 hover:shadow-indigo-600/20 active:scale-[0.98] transition-all duration-150 text-sm"
          >
            See More Categories
          </button>
        </div>
      )}
    </div>
  );
};

export default Category;
