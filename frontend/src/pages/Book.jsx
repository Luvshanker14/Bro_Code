import React, { useState, useEffect } from "react";
import image from "../assets/react.svg";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import booksData from "../assets/UpdatedDatasetSOI.json"; // Make sure this path is correct
import axios from 'axios'

function Books() {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [selectedBook, setSelectedBook] = useState(null);
  const booksPerPage = 20;

  useEffect(() => {
    const getBook = async()=>{
      try {
        const res=await axios.get('http://localhost:3000/books')
        setBooks(res.data);
      } catch(error) {
        console.log('Error',error)
      }
    }
    getBook();
    // const transformedBooks = booksData.map((book) => ({
    //   ...book,
    //   image: image,
    //   isFavorite: false,
    // }));
  }, []);

  const handleFavoriteClick = (index) => {
    const updatedBooks = [...books];
    updatedBooks[index].isFavorite = !updatedBooks[index].isFavorite;
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

  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  const handleCloseModal = () => {
    setSelectedBook(null);
  };

  const filteredBooks = filterBooks();

  // Calculate the books to be displayed on the current page
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
    <div>
      <div className="flex items-center justify-between p-3">
        <div className="relative w-3/4 sm:w-1/2 p-2">
          <input
            type="text"
            placeholder="Start Searching..."
            className="search-bar"
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
              <a className="justify-between">Account</a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
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
            className={`inline-block px-3 py-1.5 mb-2 mr-2 bg-gray-100 rounded-sm text-black text-sm cursor-pointer leading-4 ${
              selectedDepartment === department
                ? "selected bg-gray-600 text-white transition ease-in-out delay-30 -translate-y-0.5  scale-10 duration-150 shadow-md shadow-slate-400 "
                : " "
            }`}
            onClick={() => setSelectedDepartment(department)}
          >
            {department}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {currentBooks.map((book, index) => (
          <div key={book.title} className="p-4 rounded-md">
            <button
              type="button"
              className="w-full object-cover"
              onClick={() => handleBookClick(book)}
            >
              <img
                src={book.image}
                alt={book.title}
                className="w-full object-cover"
              />
            </button>
            <h3 className="text-center mt-2 text-sm truncate">{book.title}</h3>
            <div className="flex items-center">
              <button
                type="button"
                className="borrow-button transition duration-150 ease-in-out hover:border-neutral-800 hover:bg-neutral-100 hover:text-white focus:border-neutral-800 focus:bg-neutral-100 focus:text-white focus:ring-0 active:border-neutral-900 active:text-neutral-900 motion-reduce:transition-none dark:text-neutral-600 dark:hover:bg-neutral-900 dark:focus:bg-neutral-900"
                data-twe-ripple-init
              >
                Borrow
              </button>
              <FavoriteIcon
                className={`ml-3 mt-2 cursor-pointer ${
                  book.isFavorite ? "text-red-500" : "text-gray-400"
                }`}
                onClick={() => handleFavoriteClick(indexOfFirstBook + index)}
                style={{ transition: "color 0.3s" }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="pagination">
        <div className="inline-flex gap-6 bg-slate-100 rounded-md">
          <button onClick={goToPrevPage} disabled={currentPage === 1}>
            <span className="sr-only">Prev Page</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
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
              className="h-8 w-12 rounded border border-gray-900 bg-white p-0 text-center text-xl font-bold text-gray-900 [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none focus:outline-none"
              min="1"
              max={totalPages}
              value={currentPage}
              onChange={handlePageChange}
              id="PaginationPage"
            />
          </div>
          <button onClick={goToNextPage} disabled={currentPage === totalPages}>
            <span className="sr-only">Next Page</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
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
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md ">
          <div className=" bg-slate-100 p-4 w-3/4 h-3/4 rounded-md relative flex flex-col lg:flex-row ">
            <button
              className="absolute text-3xl top-1 right-3 text-gray-600 hover:text-black"
              onClick={handleCloseModal}
            >
              &times;
            </button>
            <img
              src={selectedBook.image}
              alt={selectedBook.title}
              className="size-1/3 lg:w-1/3 h-auto mx-auto lg:mx-0 lg:mr-4"
            />
            <div className="mt-4 lg:pb-40 lg:pl-14 flex flex-col justify-center">
              <h2 className="text-center lg:text-left font-semibold lg:font-bold text-xl lg:text-3xl text-black">
                {selectedBook.title}
              </h2>
              <p className="text-left mt-2 text-md lg:text-xl text-black">
                <span className="text-black font-medium">Author:</span>{" "}
                {selectedBook.author}
              </p>
              <p className="text-left mt-2 text-md lg:text-xl text-black">
                <span className="text-black font-medium">Description:</span>{" "}
                {selectedBook.description}
              </p>
              <p className="text-left mt-2 text-md lg:text-xl text-black">
                <span className="text-black font-medium">Department:</span>{" "}
                {selectedBook.department}
              </p>
              <p className="text-left mt-2 text-md lg:text-xl text-black">
                <span className="text-black font-medium">Genre:</span>{" "}
                {selectedBook.genre}
              </p>
              <p className="text-left mt-2 text-md lg:text-xl text-black">
                <span className="text-black font-medium">Publisher:</span>{" "}
                {selectedBook.publisher}
              </p>
              <div className="w-1/2 pt-12">
                <button
                  type="button"
                  className="borrow-button transition duration-150 ease-in-out hover:border-neutral-800 hover:bg-neutral-100 hover:text-white focus:border-neutral-800 focus:bg-neutral-100 focus:text-white focus:ring-0 active:border-neutral-900 active:text-neutral-900 motion-reduce:transition-none dark:text-neutral-600 dark:hover:bg-neutral-900 dark:focus:bg-neutral-900"
                  data-twe-ripple-init
                >
                  Borrow
                </button>
                <FavoriteIcon
                  className={`ml-2 0 mb-1 cursor-pointer ${
                    selectedBook.isFavorite ? "text-red-500" : "text-gray-400"
                  }`}
                  onClick={() =>
                    handleFavoriteClick(books.indexOf(selectedBook))
                  }
                  style={{ transition: "color 0.3s" }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Books;
