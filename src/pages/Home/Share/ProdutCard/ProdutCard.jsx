import { useEffect, useState } from "react";
import Produt from "../Produt/Produt";
import SectionTitle from "../SectionTitle/SectionTitle";

const ProdutCard = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("https://sar-shop-server.vercel.app/product")
      .then((res) => res.json())
      .then((data) => {
        const PopularItems = data.filter((item) => item.category === "popular");
        setMenu(PopularItems);
      });
  }, []);
  return (
    <div className="">
      <SectionTitle
        heading="Product"
        subHeading="open fooer here"
      ></SectionTitle>
      <div className="grid md:grid-cols-4 gap-5">
        {menu.map((item) => (
          <Produt key={item._id} item={item}></Produt>
        ))}
      </div>
    </div>
  );
};

export default ProdutCard;
