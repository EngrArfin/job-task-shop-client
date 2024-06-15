import React from "react";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import { FaTrashAlt } from "react-icons/fa";
import useCab from "../hook/useCab";

const MyCab = () => {
  const [cab, refetch] = useCab();

  // Ensure cab is an array before using reduce
  const total = cab.reduce((sum, item) => item.price + sum, 0);

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
        fetch(`http://localhost:5000/cabs/${item._id}`, {
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
    <div className="w-full mt-10 w-full px-20 pl-20">
      <Helmet>
        <title>SA Shop | Dashboard</title>
      </Helmet>
      <div className="uppercase flex h-9 font-semibold justify-evenly">
        <h2 className="text-2xl ">
          {" "}
          Total Item: {Array.isArray(cab) ? cab.length : 0}{" "}
        </h2>
        <h2 className="text-2xl ml-5"> Total Price: TK {total}</h2>
        <button className="btn btn-warning btn-xs ml-5">Pay</button>
      </div>

      <div className="overflow-x-auto mt-10">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>No</th>
              <th>Photo</th>
              <th>Name</th>
              <th>Price</th>
              <th>Delete Item</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(cab) &&
              cab.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <th>
                    <button
                      onClick={() => handleDelete(item)}
                      className="btn btn-ghost bg-red-700 text-white"
                    >
                      <FaTrashAlt></FaTrashAlt>
                    </button>
                  </th>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCab;
