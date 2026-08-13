import React, { useContext, useState, useEffect } from "react";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import { Helmet } from "react-helmet";
import userData from "../hook/userData";
import Swal from "sweetalert2";

/* import alluser from "../hook/alluser"; */

const AllUsers = () => {
  /* const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("https://sar-shop-server.vercel.app/users");
    return res.json();
  }); */

  const [users, refetch] = userData();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Auto-sync current page if users are deleted
  useEffect(() => {
    if (Array.isArray(users)) {
      const maxPage = Math.ceil(users.length / itemsPerPage);
      if (maxPage > 0 && currentPage > maxPage) {
        setCurrentPage(maxPage);
      }
    }
  }, [users, currentPage]);

  const handleMakeAdmin = (user) => {
    fetch(`https://sar-shop-server.vercel.app/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is admin`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  const handleDelete = (user) => {
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
        fetch(`https://sar-shop-server.vercel.app/users/${user._id}`, {
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
  const paginatedUsers = Array.isArray(users)
    ? users.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
    : [];

  return (
    <div className="w-full bg-slate-50/50 min-h-screen">
      <Helmet>
        <title>SA Shop | All Users</title>
      </Helmet>

      {/* Title Box */}
      <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm mb-8">
        <h2 className="text-xl font-bold text-slate-800 uppercase tracking-wide">
          All Registered Users: <span className="text-indigo-600">{users.length}</span>
        </h2>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto w-full">
          <table className="w-full border-collapse">
            {/* head */}
            <thead>
              <tr className="bg-slate-50">
                <th className="py-4 px-6 text-left text-slate-700 font-bold text-xs uppercase tracking-wider border-b border-slate-200">No</th>
                <th className="py-4 px-6 text-left text-slate-700 font-bold text-xs uppercase tracking-wider border-b border-slate-200">Name</th>
                <th className="py-4 px-6 text-left text-slate-700 font-bold text-xs uppercase tracking-wider border-b border-slate-200">Email</th>
                <th className="py-4 px-6 text-center text-slate-700 font-bold text-xs uppercase tracking-wider border-b border-slate-200">Role</th>
                <th className="py-4 px-6 text-center text-slate-700 font-bold text-xs uppercase tracking-wider border-b border-slate-200">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {paginatedUsers.map((user, index) => {
                const overallIndex = (currentPage - 1) * itemsPerPage + index + 1;
                return (
                  <tr key={user._id} className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 px-6 font-medium text-slate-600 border-b border-slate-100">{overallIndex}</td>
                    <td className="py-4 px-6 font-semibold text-slate-800 border-b border-slate-100">{user.name}</td>
                    <td className="py-4 px-6 text-slate-600 border-b border-slate-100">{user.email}</td>
                    <td className="py-4 px-6 text-center border-b border-slate-100">
                      {user.role === "admin" ? (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                          Admin
                        </span>
                      ) : (
                        <button
                          onClick={() => handleMakeAdmin(user)}
                          className="inline-flex items-center justify-center p-2.5 bg-indigo-50 text-indigo-600 hover:bg-indigo-600 hover:text-white rounded-xl transition-all duration-200"
                          title="Make Admin"
                        >
                          <FaUserShield className="text-sm" />
                        </button>
                      )}
                    </td>
                    <td className="py-4 px-6 text-center border-b border-slate-100">
                      <button
                        onClick={() => handleDelete(user)}
                        className="inline-flex items-center justify-center p-2.5 bg-rose-50 text-rose-600 hover:bg-rose-600 hover:text-white rounded-xl transition-all duration-200"
                        title="Delete User"
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
        {Array.isArray(users) && users.length > itemsPerPage && (
          <div className="bg-slate-50 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100">
            <div className="text-xs font-semibold text-slate-500">
              Showing <span className="text-slate-700">{(currentPage - 1) * itemsPerPage + 1}</span> to{" "}
              <span className="text-slate-700">{Math.min(currentPage * itemsPerPage, users.length)}</span> of{" "}
              <span className="text-slate-700">{users.length}</span> entries
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
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, Math.ceil(users.length / itemsPerPage)))}
                disabled={currentPage === Math.ceil(users.length / itemsPerPage)}
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

export default AllUsers;
