import React, { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Userlist() {
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState("");
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedUser, setSelectedUser] = useState("All");

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await axios.get("http://localhost:3000/user");
        setUsers(res.data);
      } catch (error) {
        console.log("Error", error);
      }
    };
    getUsers();
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedUser]);

  const filterUsers = () => {
    return users.filter(
      (user) =>
        (selectedUser === "All" || user.type === selectedUser) &&
        (user.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          user.email?.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  };
  return (
    <div className="min-h-screen rounded-md bg-white dark:bg-neutral-900 p-3">
      <div className="w-full h-full">
        <div className="flex justify-between items-center mb-4 border-b pb-2 dark:text-white">
          <h2 className="text-3xl font-semibold">User List</h2>
          <div className="relative">
            <input
              type="text"
              placeholder="Search Users"
              className="search-bar border-2 h-8 border-gray-300 dark:border-black p-3 rounded-md w-80 sm:w-96 focus:outline-none focus:border-black dark:focus:border-slate-300 dark:text-white dark:bg-neutral-800"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <SearchIcon className="absolute top-1 right-3 text-gray-500" />
          </div>
        </div>
        <table className="w-full table-auto bg-white dark:bg-neutral-800 shadow-md dark:shadow-black rounded-md">
          <thead className="bg-gray-300 dark:bg-neutral-600">
            <tr className="text-left">
              <th className="px-6 py-3 text-sm font-semibold text-black dark:text-white">
                User ID
              </th>
              <th className="px-6 py-3 text-sm font-semibold text-black dark:text-white">
                Name
              </th>
              <th className="px-6 py-3 text-sm font-semibold text-black dark:text-white">
                Email
              </th>
              {/* <th className="px-6 py-3 text-sm font-semibold text-black dark:text-white">
                Type
              </th>
              <th className="px-6 py-3 text-sm font-semibold text-black dark:text-white">
                Edit
              </th> */}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-slate-400">
            {filterUsers().map((user, index) => (
              <tr key={index} className="hover:bg-gray-100 dark:hover:bg-gray-800">
                <td className="px-4 py-3 dark:text-white text-xs md:text-sm">
                  {user._id}
                </td>
                <td className="px-4 py-3 dark:text-white text-sm md:text-base">
                  {user.name}
                </td>
                <td className="px-4 py-3 dark:text-white text-sm md:text-base">
                  {user.email}
                </td>
                {/* <td className="px-4 py-3 dark:text-white text-sm md:text-base">
                  {user.type}
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Userlist;
