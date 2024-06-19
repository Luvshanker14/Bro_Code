import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SearchIcon from "@mui/icons-material/Search";
import booksData from "../assets/UpdatedDatasetSOI.json";

function Bookspage() {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const transformedBooks = booksData.map((book) => ({
      title: book.title,
      image: image,
      isFavorite: false,
    }));
    setBooks(transformedBooks);
  }, []);

  const handleFavoriteClick = (index) => {
    const updatedBooks = [...books];
    updatedBooks[index].isFavorite = !updatedBooks[index].isFavorite;
    setBooks(updatedBooks);
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
        <span className="category-tag">All</span>
        <span className="category-tag">CSE</span>
        <span className="category-tag">Electrical</span>
        <span className="category-tag">Mechanical</span>
        <span className="category-tag">Chemical</span>
        <span className="category-tag">Civil</span>
        <span className="category-tag">Physics</span>
        <span className="category-tag">Mathematics</span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {filteredBooks.map((book, index) => (
          <div key={book.title} className="p-4 rounded-md">
            <img
              src={book.image}
              alt={book.title}
              className="w-full object-cover"
            />
            <h3 className="text-center mt-2 text-sm">{book.title}</h3>
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
                  book.isFavorite
                    ? "text-red-500"
                    : "text-gray-400 hover:text-red-500"
                }`}
                onClick={() => handleFavoriteClick(index)}
                style={{ transition: "color 0.3s" }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="pagination">
        <div className="inline-flex gap-1">
          <a href="#">
            <span className="sr-only">Prev Page</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <div>
            <label htmlFor="PaginationPage" className="sr-only">
              Page
            </label>
            <input
              type="number"
              className="h-8 w-12 rounded border border-gray-100 bg-white p-0 text-center text-xs font-medium text-gray-900 [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none focus:outline-none"
              min="1"
              id="PaginationPage"
            />
          </div>
          <a href="#">
            <span className="sr-only">Next Page</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Bookspage;
