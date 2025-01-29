import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useCab = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { refetch, data: cab = [] } = useQuery({
    queryKey: ["cab", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/cabs?email=${user?.email}`);
      return res.data;
    },
  });

  return [cab, refetch];
};

export default useCab;

/* 
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
const useCab = () => {
  const { user } = useContext(AuthContext);
  const { refetch, data: cab = [] } = useQuery({
    queryKey: ["cabs", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `https://sar-shop-server.vercel.app/cabs?email=${user?.email}`
      );
      return res.json();
    },
  });
  return [cab, refetch];
};

export default useCab; */
