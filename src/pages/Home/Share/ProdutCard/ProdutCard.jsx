import { useEffect, useState } from "react";
import Produt from "../Produt/Produt";
import SectionTitle from "../SectionTitle/SectionTitle";

const ProdutCard = () => {
  const [menu, setMenu] = useState([]);
  const [visibleCount, setVisibleCount] = useState(8);

  useEffect(() => {
    fetch("https://sar-shop-server.vercel.app/product")
      .then((res) => res.json())
      .then((data) => {
        const PopularItems = data.filter((item) => item.category === "popular");
        setMenu(PopularItems);
      });
  }, []);

  const handleSeeMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <SectionTitle
        heading="Our Collections"
        subHeading="Discover the latest additions to our premium apparel catalog"
      ></SectionTitle>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {menu.slice(0, visibleCount).map((item) => (
          <Produt key={item._id} item={item}></Produt>
        ))}
      </div>

      {visibleCount < menu.length && (
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

export default ProdutCard;
