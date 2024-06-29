import React, { useState, useEffect } from "react";
import image from "../assets/react.svg";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import axios from 'axios';
import Cookies from 'js-cookie';

function Books() {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [selectedBook, setSelectedBook] = useState(null);
  const booksPerPage = 20;

  const userCookie = Cookies.get('userId');
  const user = JSON.parse(userCookie);

  useEffect(() => {
    const getBooks = async () => {
      try {
        const res = await axios.get('http://localhost:3000/books');
        setBooks(res.data);
      } catch (error) {
        console.log('Error', error);
      }
    };
    getBooks();
  }, []);

  function handleLogout() {
    Cookies.remove('userId', { path: '/' });
    window.location.href = 'http://localhost:5175';
  }

  const handleFavoriteClick = (bookId) => {
    const updatedBooks = books.map(book =>
      book._id === bookId ? { ...book, isFavorite: !book.isFavorite } : book
    );
    setBooks(updatedBooks);
  };

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

  const handleBorrowClick = async (bookId) => {
    try {
      const res = await axios.post('http://localhost:3000/bookRequests/borrow', {
        userId: user.userId,
        bookId: bookId
      });
      console.log('Book borrowed successfully', res.data);
    } catch (error) {
      console.log('Error borrowing book', error);
    }
  };

  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  const handleCloseModal = () => {
    setSelectedBook(null);
  };

  const filteredBooks = filterBooks();

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);

  const totalPages = Math.ceil(filteredBooks.length / booksPerPage);

  const handlePageChange = (event) => {
    const pageNumber = Number(event.target.value);
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="rounded-sm bg-white dark:bg-neutral-900">
      <div className="flex items-center justify-between p-3 ">
        <div className="relative w-3/4 sm:w-1/2 p-2">
          <input
            type="text"
            placeholder="Start Searching..."
            className="search-bar text-black dark:text-white dark:bg-neutral-800"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <SearchIcon className="search-icon" />
        </div>

        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-white text-black rounded-box w-52"
          >
            <li>
              <a className="justify-between" >Account</a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a onClick={handleLogout}>Logout</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-wrap ml-5 mb-6">
        {[
          "All",
          "Computer Science",
          "Electrical Engineering",
          "Mechanical Engineering",
          "Chemical Engineering",
          "Civil Engineering",
          "Engineering Physics",
        ].map((department) => (
          <span
            key={department}
            className={`inline-block px-3 py-1.5 mb-2 mr-2 bg-gray-100 dark:bg-neutral-800 rounded-sm text-black dark:text-white text-sm cursor-pointer leading-4 ${selectedDepartment === department
                ? "selected bg-neutral-300 text-black transition ease-in-out delay-30 -translate-y-0.5  scale-10 duration-150 shadow-md shadow-slate-400 dark:shadow-white"
                : " "
              }`}
            onClick={() => setSelectedDepartment(department)}
          >
            {department}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {currentBooks.map((book) => (
          <div key={book._id} className="p-4 rounded-md">
            <button
              type="button"
              className="w-full object-cover"
              onClick={() => handleBookClick(book)}
            >
              <img
                src={image}
                alt={book.title}
                className="w-full object-cover"
              />

              <h3 className="text-center mt-2 text-sm truncate text-black dark:text-white">{book.title}</h3>
            </button>
            <div className="flex items-center">
              <button
                type="button"
                className="borrow-button transition duration-150 ease-in-out hover:border-neutral-800 dark:hover:border-neutral-400 hover:bg-neutral-200 hover:text-black focus:border-neutral-800 focus:bg-neutral-400  focus:text-black focus:ring-0 active:border-neutral-900 active:text-black motion-reduce:transition-none dark:text-slate-300 dark:hover:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-100 dark:focus:text-black"
                data-twe-ripple-init
                onClick={() => handleBorrowClick(book._id)}
              >
                Borrow
              </button>
              <FavoriteIcon
                className={`ml-3 mt-2 cursor-pointer ${book.isFavorite ? "text-red-500" : "text-gray-400"
                  }`}
                onClick={() => handleFavoriteClick(book._id)}
                style={{ transition: "color 0.3s" }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="pagination">
        <div className="inline-flex gap-6 bg-slate-300 dark:bg-slate-800 rounded-md">
          <button onClick={goToPrevPage} disabled={currentPage === 1}>
            <span className="sr-only">Prev Page</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <div>
            <label htmlFor="PaginationPage" className="sr-only">
              Page
            </label>
            <input
              type="number"
              className="h-8 w-12 rounded border border-gray-900 bg-white dark:bg-neutral-700 p-0 text-center text-xl font-semibold text-gray-900 dark:text-white [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
              min={1}
              max={totalPages}
              id="PaginationPage"
              value={currentPage}
              onChange={handlePageChange}
            />
            <span className="text-gray-900 dark:text-white"> of {totalPages}</span>
          </div>
          <button onClick={goToNextPage} disabled={currentPage === totalPages}>
            <span className="sr-only">Next Page</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>

      {selectedBook && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-3/4 sm:w-1/2">
            <h2 className="text-xl mb-4">{selectedBook.title}</h2>
            <img
              src={image}
              alt={selectedBook.title}
              className="w-full object-cover mb-4"
            />
            <p className="text-black dark:text-white">{selectedBook.description}</p>
            <div className="flex justify-end mt-4">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                onClick={() => handleBorrowClick(selectedBook._id)}
              >
                Borrow
              </button>
              <button
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleCloseModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Books;
