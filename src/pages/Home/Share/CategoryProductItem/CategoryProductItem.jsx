import { useContext } from "react";
import { AuthContext } from "../../../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCab from "../../../User/hook/useCab";
import Category from "../Category/Category";
import { Rating } from "@smastrom/react-rating";

const CategoryProductItem = ({ item }) => {
  const { name, image, price, description, _id } = item || {};

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
              title: "Product add on cab",
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
    <div className="mt-10 card w-96 bg-white shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div>
        <p className="  bg-green-900 text-white">
          20% off / <sup className="bg-red-900 ">Limioted Time deal</sup>
        </p>
      </div>
      <div className=" absolute right-0  mr-4 mt-4">
        <div>
          {
            <p className="absolute right-0  mr-4 mt-4 bg-green-900 text-white">
              ${price}
            </p>
          }
        </div>
        <br />
        <br />
        <div>
          <p className="absolute right-0  mr-4 mb-10 bg-red-700 text-white">
            <del>1600</del>
          </p>
        </div>
      </div>

      <div className="card-body">
        <h2 className="card-title">
          {name}
          <div></div>
          <Rating
            className="badge bg-green-900 w-5 "
            style={{ maxWidth: 180 }}
            value={Category.rating}
            readOnly
          />
        </h2>
        <p>{description}</p>

        <div>
          <div className="card-actions justify-start">
            <div className="badge badge-outline">{price}</div>
            <div className="badge badge-outline">{price}</div>
          </div>
          <div className="flex justify-center  ">
            <div className="card-actions ml-5 text-white">
              <button
                onClick={() => handleAddToCab(item)}
                className="bg-green-900  border-3 border-b-4 mt-4"
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryProductItem;
