import { getAllUsers } from "@/lib/user.service";
import React from "react";

const Users = async () => {
  const users = await getAllUsers();
  return (
    <>
      <div className="max-w-4xl mx-auto mt-10">
        {/* Heading */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Users List</h2>

        {/* Table */}
        <div className="overflow-x-auto shadow-lg rounded-2xl">
          <table className="w-full border-collapse bg-white text-left">
            {/* Table Header */}
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="p-4">#</th>
                <th className="p-4">Name</th>
                <th className="p-4">Email</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {users.map((user, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-gray-100 transition"
                >
                  {/* Serial Number */}
                  <td className="p-4 font-semibold text-gray-600">
                    {index + 1}
                  </td>

                  {/* Name */}
                  <td className="p-4 text-gray-800 font-medium">{user.name}</td>

                  {/* Email */}
                  <td className="p-4 text-gray-500">{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Users;
