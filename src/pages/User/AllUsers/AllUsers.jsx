import React, { useContext } from "react";
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

  return (
    <div className="w-full py-8 px-4 sm:px-6 lg:px-8 bg-slate-50/50 min-h-screen">
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
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead className="bg-slate-50 text-slate-500 uppercase text-xs tracking-wider">
              <tr>
                <th className="py-4 px-6 text-left">No</th>
                <th className="py-4 px-6 text-left">Name</th>
                <th className="py-4 px-6 text-left">Email</th>
                <th className="py-4 px-6 text-center">Role</th>
                <th className="py-4 px-6 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {users.map((user, index) => (
                <tr key={user._id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-4 px-6 font-medium text-slate-600">{index + 1}</td>
                  <td className="py-4 px-6 font-semibold text-slate-800">{user.name}</td>
                  <td className="py-4 px-6 text-slate-600">{user.email}</td>
                  <td className="py-4 px-6 text-center">
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
                  <td className="py-4 px-6 text-center">
                    <button
                      onClick={() => handleDelete(user)}
                      className="inline-flex items-center justify-center p-2.5 bg-rose-50 text-rose-600 hover:bg-rose-600 hover:text-white rounded-xl transition-all duration-200"
                      title="Delete User"
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

export default AllUsers;
