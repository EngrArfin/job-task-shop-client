import React, { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import { Link } from "react-router-dom";
import "@smastrom/react-rating/style.css";

const Category = () => {
  const [categorys, setCategorys] = useState([]);

  useEffect(() => {
    fetch("category.json")
      .then((res) => res.json())
      .then((data) => setCategorys(data));
  }, []);
  return (
    <Link to="/" className="mt-3 mb-4 text-black bg-white-500">
      <SectionTitle
        className="mb-10"
        heading=" Shop Product Category"
        /* subHeading="Click here for difference category Product here" */
      ></SectionTitle>
      <div className="grid md:grid-cols-6 gap-5">
        {categorys.map((category) => (
          <div key={category._id}>
            <div className="ml-2 w-50 h-55 bg-white-500 shadow-xl ">
              <figure>
                <img src={category.image} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title justify-center">{category.name}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Link>
  );
};

export default Category;
