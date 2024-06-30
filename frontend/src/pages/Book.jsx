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
  const [showAlert, setShowAlert] = useState(false);
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
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000); // Hide alert after 3 seconds
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
      <div className="flex items-center justify-between p-3">
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
                className="w-full object-cover  hover:transition hover:ease-in-out hover:delay-30 hover:-translate-y-3  hover:scale-105 hover:duration-150"
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

      <div className="flex justify-center">
        <nav aria-label="Pagination">
          <ul className="inline-flex items-center space-x-1 rounded-md text-sm">
            <li>
              <button
                onClick={goToPrevPage}
                disabled={currentPage === 1}
                className="inline-flex items-center space-x-2 rounded-full border border-gray-300 bg-white px-2 py-2 font-medium text-gray-500 hover:bg-gray-50"
              >
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </li>
            <li>
              <span className="inline-flex items-center space-x-1 rounded-md bg-white px-4 py-2 text-gray-500">
                Page{" "}
                <b className="mx-1">{currentPage}</b> of <b className="ml-1">{totalPages}</b>
              </span>
            </li>
            <li>
              <button
                onClick={goToNextPage}
                disabled={currentPage === totalPages}
                className="inline-flex items-center space-x-2 rounded-full border border-gray-300 bg-white px-2 py-2 font-medium text-gray-500 hover:bg-gray-50"
              >
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {selectedBook && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md">
          <div className="bg-slate-100 dark:bg-neutral-800 p-4 w-3/4 h-3/4 rounded-md relative flex flex-col lg:flex-row">
            <button
              className="absolute text-3xl top-1 right-3 text-gray-600 hover:text-black dark:text-white dark:hover:text-black"
              onClick={handleCloseModal}
            >
              &times;
            </button>
            <img
              src={image}
              alt={selectedBook.title}
              className="size-1/3 lg:w-1/3 h-auto mx-auto lg:mx-0 lg:mr-4"
            />
            <div className="mt-4 lg:pb-40 lg:pl-14 flex flex-col justify-center">
              <h2 className="text-center lg:text-left font-semibold lg:font-bold text-xl lg:text-3xl text-black dark:text-white">
                {selectedBook.title}
              </h2>
              <p className="text-left mt-2 text-md lg:text-xl text-black dark:text-white">
                <span className="text-black dark:text-slate-400 font-medium">Author:</span>{" "}
                {selectedBook.author}
              </p>
              <p className="text-left mt-2 text-md lg:text-xl text-black dark:text-white">
                <span className="text-black dark:text-slate-400 font-medium">Description:</span>{" "}
                {selectedBook.description}
              </p>
              <p className="text-left mt-2 text-md lg:text-xl text-black dark:text-white">
                <span className="text-black dark:text-slate-400 font-medium">Department:</span>{" "}
                {selectedBook.department}
              </p>
              <p className="text-left mt-2 text-md lg:text-xl text-black dark:text-white">
                <span className="text-black dark:text-slate-400 font-medium">Genre:</span>{" "}
                {selectedBook.genre}
              </p>
              <p className="text-left mt-2 text-md lg:text-xl text-black dark:text-white">
                <span className="text-black dark:text-slate-400 font-medium">Publisher:</span>{" "}
                {selectedBook.publisher}
              </p>
              <div className="w-1/2 pt-12">
                <button
                  type="button"
                  className="borrow-button transition duration-150 ease-in-out dark:border-black hover:border-neutral-800 dark:hover:border-neutral-400 hover:bg-neutral-200 hover:text-black focus:border-neutral-800  focus:bg-neutral-400 focus:text-black focus:ring-0 active:border-neutral-900 active:text-black motion-reduce:transition-none dark:text-slate-300 dark:hover:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-100 dark:focus:text-black"
                  data-twe-ripple-init
                  onClick={() => handleBorrowClick(selectedBook._id)}
                >
                  Borrow
                </button>
                <FavoriteIcon
                  className={`ml-2 0 mb-1 cursor-pointer ${selectedBook.isFavorite ? "text-red-500" : "text-gray-400"
                    }`}
                  onClick={() =>
                    handleFavoriteClick(selectedBook._id)
                  }
                  style={{ transition: "color 0.3s" }}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {showAlert && (
        <div className="fixed top-0 left-0 right-0 flex justify-center p-4 z-50">
          <div className="flex rounded-md bg-green-50 p-4 text-sm text-green-500">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="mr-3 h-5 w-5 flex-shrink-0">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
            </svg>
            <div><b>Book Request Sent Successfully.</b></div>
            <button className="ml-auto" onClick={() => setShowAlert(false)}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Books;
