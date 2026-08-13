import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import { FaTrashAlt } from "react-icons/fa";
import useCab from "../hook/useCab";
import { Link } from "react-router-dom";

const MyCab = () => {
  const [cab, refetch] = useCab();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  console.log(cab);

  // Ensure cab is an array before using reduce
  const total = Array.isArray(cab)
    ? cab.reduce((sum, item) => sum + (Number(item.price) || 0), 0)
    : 0;

  // Auto-sync current page if items are deleted
  useEffect(() => {
    if (Array.isArray(cab)) {
      const maxPage = Math.ceil(cab.length / itemsPerPage);
      if (maxPage > 0 && currentPage > maxPage) {
        setCurrentPage(maxPage);
      }
    }
  }, [cab, currentPage]);

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

  // Sliced page content
  const paginatedCab = Array.isArray(cab)
    ? cab.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
    : [];

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

        {Array.isArray(cab) && cab.length ? (
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
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto w-full">
          <table className="w-full border-collapse">
            {/* head */}
            <thead>
              <tr className="bg-slate-50">
                <th className="py-4 px-6 text-left text-slate-700 font-bold text-xs uppercase tracking-wider border-b border-slate-200">No</th>
                <th className="py-4 px-6 text-left text-slate-700 font-bold text-xs uppercase tracking-wider border-b border-slate-200">Photo</th>
                <th className="py-4 px-6 text-left text-slate-700 font-bold text-xs uppercase tracking-wider border-b border-slate-200">Name</th>
                <th className="py-4 px-6 text-left text-slate-700 font-bold text-xs uppercase tracking-wider border-b border-slate-200">Price</th>
                <th className="py-4 px-6 text-center text-slate-700 font-bold text-xs uppercase tracking-wider border-b border-slate-200">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {paginatedCab.map((item, index) => {
                const overallIndex = (currentPage - 1) * itemsPerPage + index + 1;
                return (
                  <tr key={item._id} className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 px-6 font-medium text-slate-600 border-b border-slate-100">{overallIndex}</td>
                    <td className="py-4 px-6 border-b border-slate-100">
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
                    <td className="py-4 px-6 font-semibold text-slate-800 border-b border-slate-100">{item.name}</td>
                    <td className="py-4 px-6 font-bold text-slate-700 border-b border-slate-100">{item.price} TK</td>
                    <td className="py-4 px-6 text-center border-b border-slate-100">
                      <button
                        onClick={() => handleDelete(item)}
                        className="inline-flex items-center justify-center p-2.5 bg-rose-50 text-rose-600 hover:bg-rose-600 hover:text-white rounded-xl transition-all duration-200"
                        title="Delete item"
                      >
                        <FaTrashAlt className="text-sm" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Pagination Footer */}
        {Array.isArray(cab) && cab.length > itemsPerPage && (
          <div className="bg-slate-50 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100">
            <div className="text-xs font-semibold text-slate-500">
              Showing <span className="text-slate-700">{(currentPage - 1) * itemsPerPage + 1}</span> to{" "}
              <span className="text-slate-700">{Math.min(currentPage * itemsPerPage, cab.length)}</span> of{" "}
              <span className="text-slate-700">{cab.length}</span> entries
            </div>
            
            <div className="flex gap-2">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-3.5 py-1.5 bg-white border border-slate-200 text-slate-600 rounded-lg text-xs font-semibold hover:bg-slate-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed select-none"
              >
                Previous
              </button>
              <button
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, Math.ceil(cab.length / itemsPerPage)))}
                disabled={currentPage === Math.ceil(cab.length / itemsPerPage)}
                className="px-3.5 py-1.5 bg-indigo-600 text-white rounded-lg text-xs font-semibold hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed select-none shadow-sm shadow-indigo-600/10"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyCab;
