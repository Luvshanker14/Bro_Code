import React, { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Cookies from "js-cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function EditBook() {
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState("");
  const [books, setBooks] = useState([]); // State for storing books data
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedDepartment, setSelectedDepartment] = useState("All");

  useEffect(() => {
    const getBooks = async () => {
      try {
        const res = await axios.get("http://localhost:3000/books");
        setBooks(res.data);
      } catch (error) {
        console.log("Error", error);
      }
    };
    getBooks();
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedDepartment]);

  const filterBooks = () => {
    return books.filter(
      (book) =>
        (selectedDepartment === "All" ||
          book.department === selectedDepartment) &&
        book.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const adminCookie = Cookies.get("adminId");
  const admin = JSON.parse(adminCookie);
  const name = admin.adminName;

  const handleEditButton = (bookId) => {
    navigate(`/editpage/${bookId}`);
  };

  return (
    <div className="min-h-screen rounded-md bg-white dark:bg-neutral-900 p-3">
      <div className="w-full h-full">
        <div className="flex justify-between items-center mb-4  border-b pb-2 dark:text-white">
          <h2 className="text-3xl font-semibold">
            Book List
          </h2>
          <div className="relative">
            <input
              type="text"
              placeholder="Start Books"
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
                Book ID
              </th>
              <th className="px-6 py-3 text-sm font-semibold text-black dark:text-white">
                Name
              </th>
              <th className="px-6 py-3 text-sm font-semibold text-black dark:text-white">
                Author
              </th>
              <th className="px-2 py-3 text-sm font-semibold text-black dark:text-white">
                Quantity
              </th>
              <th className="px-6 py-3 text-sm font-semibold text-black dark:text-white">
                Edit
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-slate-400">
            {filterBooks().map((book, index) => (
              <tr
                key={index}
                className="hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <td className="px-4 py-3 text-black dark:text-slate-100 text-xs md:text-sm">
                  {book._id}
                </td>
                <td className="px-4 py-3 text-black dark:text-slate-100 text-xs md:text-sm">
                  {book.title}
                </td>
                <td className="px-4 py-3 text-black dark:text-slate-100 text-xs md:text-sm">
                  {book.author}
                </td>
                <td className="px-4 py-3 text-black dark:text-slate-100 text-xs md:text-sm">
                  {book.count}/{book.count}
                </td>
                <td>
                  <button
                    onClick={() => handleEditButton(book._id)}
                    className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EditBook;
