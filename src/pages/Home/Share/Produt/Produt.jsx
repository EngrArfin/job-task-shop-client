
const Produt = ({ item }) => {
  const { name, image, price, recipe } = item || {};
  return (

    <div className="card w-96 bg-base-100 shadow-xl">
      <figure><img src={image} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
          <div className="badge badge-secondary">{price}</div>
        </h2>
        <p>{recipe}</p>
        
        <div>
        <div className="card-actions justify-start">
          <div className="badge badge-outline">{price}</div>
          <div className="badge badge-outline">{price}</div>
        </div>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Produt;