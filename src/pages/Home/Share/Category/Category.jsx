import React, { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import { Link } from "react-router-dom";

const Category = () => {
  const [categorys, setCategorys] = useState([]);

  useEffect(() => {
    fetch("category.json")
      .then((res) => res.json())
      .then((data) => setCategorys(data));
  }, []);

  return (
    <div className="mt-8 mb-12 text-slate-800">
      <SectionTitle
        className="mb-8"
        heading="Shop Product Category"
      />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 px-4">
        {categorys.map((category) => (
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
    </div>
  );
};

export default Category;
