import { useContext } from "react";
import { AuthContext } from "../../../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCab from "../../../User/hook/useCab";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FaShoppingCart } from "react-icons/fa";

const CategoryProductItem = ({ item }) => {
  const { name, image, price, description, _id, rating } = item || {};

  const { user } = useContext(AuthContext);
  const [, refetch] = useCab();
  const navigate = useNavigate();
  const location = useLocation();

  const handleAddToCab = (item) => {
    console.log(item);
    if (user && user.email) {
      const cabItem = {
        menuItemId: _id,
        name,
        image,
        price,
        email: user.email,
      };
      fetch("https://sar-shop-server.vercel.app/cabs", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cabItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch(); /* refetch to the cab */
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Product added to cart",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Login for Order?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login here",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { form: location } });
        }
      });
    }
  };

  return (
    <div className="w-full bg-white rounded-2xl shadow-sm border border-slate-100 hover:border-indigo-200 hover:shadow-md transition-all duration-300 flex flex-col h-full group relative overflow-hidden mt-6">
      
      {/* Product Image & Price Overlay */}
      <div className="aspect-[4/3] bg-slate-50 flex items-center justify-center p-4 overflow-hidden relative">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Floating Price Badge */}
        <div className="absolute top-3 right-3 flex flex-col items-end gap-1.5 z-10">
          <span className="bg-indigo-600 text-white font-bold text-xs px-2.5 py-1 rounded-lg shadow-sm">
            ${price}
          </span>
          <span className="bg-rose-500 text-white text-[10px] font-semibold px-2 py-0.5 rounded-lg line-through shadow-sm">
            $1600
          </span>
        </div>
      </div>

      {/* Limited Time Deal Banner */}
      <div className="bg-indigo-950 text-indigo-100 py-1.5 px-4 text-xs font-semibold flex items-center justify-between gap-2 border-y border-indigo-900/50">
        <span>20% OFF</span>
        <span className="bg-rose-600 text-white text-[9px] uppercase px-1.5 py-0.5 rounded font-bold tracking-wider">
          Limited Time Deal
        </span>
      </div>

      {/* Card Info */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="font-bold text-slate-800 text-base mb-1.5 group-hover:text-indigo-600 transition-colors line-clamp-1">
          {name}
        </h3>
        
        {/* Rating Row */}
        <div className="flex items-center gap-1.5 mb-3">
          <Rating
            style={{ maxWidth: 85 }}
            value={rating || 5}
            readOnly
          />
          <span className="text-[10px] text-slate-400 font-semibold mt-0.5">
            ({rating || 5}.0)
          </span>
        </div>

        <p className="text-slate-500 text-xs leading-relaxed mb-4 flex-grow line-clamp-2">
          {description}
        </p>

        {/* Action Button */}
        <div className="mt-auto pt-3 border-t border-slate-100">
          <button
            onClick={() => handleAddToCab(item)}
            className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2.5 px-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg active:scale-[0.98] text-sm"
          >
            <FaShoppingCart className="text-sm" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>

    </div>
  );
};

export default CategoryProductItem;
