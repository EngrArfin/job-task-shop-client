import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const adminProduct = () => {
  const { product } = useContext(AuthContext);
  const { refetch, data: allproducts = [] } = useQuery({
    queryKey: ["allProduct", product],
    queryFn: async () => {
      const res = await fetch("https://sar-shop-server.vercel.app/product");
      return res.json();
    },
  });
  return [allproducts, refetch];
};

export default adminProduct;
