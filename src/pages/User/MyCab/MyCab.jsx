import React from "react";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import { FaTrashAlt } from "react-icons/fa";
import useCab from "../hook/useCab";
import { Link } from "react-router-dom";

const MyCab = () => {
  const [cab, refetch] = useCab();
  console.log(cab);

  // Ensure cab is an array before using reduce
  /* const total = cab.reduce((sum, item) => item.price + sum, 0); */
  const total = Array.isArray(cab)
    ? cab.reduce((sum, item) => sum + (Number(item.price) || 0), 0)
    : 0;

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://sar-shop-server.vercel.app/cabs/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div className="min-h-screen w-full py-8 px-4 sm:px-6 lg:px-8 bg-slate-50/50">
      <Helmet>
        <title>SA Shop | Dashboard</title>
      </Helmet>
      
      {/* Header Summary Box */}
      <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
          <h2 className="text-lg font-bold text-slate-800 uppercase tracking-wide">
            Total Items: <span className="text-indigo-600">{Array.isArray(cab) ? cab.length : 0}</span>
          </h2>
          <h2 className="text-lg font-bold text-slate-800 uppercase tracking-wide">
            Total Price: <span className="text-indigo-600">{total} TK</span>
          </h2>
        </div>

        {cab.length ? (
          <Link to="/dashboard/payment">
            <button className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm rounded-xl shadow-md shadow-indigo-600/10 hover:shadow-indigo-600/20 transition-all duration-150 active:scale-[0.98]">
              Proceed to Payment
            </button>
          </Link>
        ) : (
          <button disabled className="px-6 py-2.5 bg-slate-200 text-slate-400 font-semibold text-sm rounded-xl cursor-not-allowed">
            Proceed to Payment
          </button>
        )}
      </div>

      {/* Cart Items Table */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead className="bg-slate-50 text-slate-500 uppercase text-xs tracking-wider">
              <tr>
                <th className="py-4 px-6 text-left">No</th>
                <th className="py-4 px-6 text-left">Photo</th>
                <th className="py-4 px-6 text-left">Name</th>
                <th className="py-4 px-6 text-left">Price</th>
                <th className="py-4 px-6 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {Array.isArray(cab) &&
                cab.map((item, index) => (
                  <tr key={item._id} className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 px-6 font-medium text-slate-600">{index + 1}</td>
                    <td className="py-4 px-6">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12 border border-slate-100">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="object-cover w-full h-full"
                          />
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6 font-semibold text-slate-800">{item.name}</td>
                    <td className="py-4 px-6 font-bold text-slate-700">{item.price} TK</td>
                    <td className="py-4 px-6 text-center">
                      <button
                        onClick={() => handleDelete(item)}
                        className="inline-flex items-center justify-center p-2.5 bg-rose-50 text-rose-600 hover:bg-rose-600 hover:text-white rounded-xl transition-all duration-200"
                        title="Delete item"
                      >
                        <FaTrashAlt className="text-sm" />
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyCab;
