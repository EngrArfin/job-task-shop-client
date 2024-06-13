import { IoIosArrowDroprightCircle } from "react-icons/io";
import { Link } from "react-router-dom";
const Produt = ({ item }) => {
  const { name, image, price, description } = item || {};
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
          <div className="badge badge-secondary">{price} TK</div>
        </h2>
        <p>{description}</p>

        <div>
          <div className="card-actions justify-start">
            <div className="badge badge-outline">{price}</div>
            <div className="badge badge-outline">{price}</div>
          </div>
          <div className="card-actions justify-center">
            <Link
              to="/finalorder"
              className="btn btn-outline bg-red-600  border-0 border-b-4 mt-4"
            >
              <IoIosArrowDroprightCircle />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Produt;
