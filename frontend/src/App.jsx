import React, { useState } from 'react';
import image from "./assets/react.svg";
import Status from "./pages/Status";
import Account from "./pages/Account";
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Dashboard';
import AccountIcon from '@mui/icons-material/Person';
import BooksIcon from '@mui/icons-material/AutoStories';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SearchIcon from '@mui/icons-material/Search';

function App() {
  const [selected, setSelected] = useState('Home');

  return (
    <div style={{ backgroundColor: 'white', display: 'flex' }}>
      <Navbar selected={selected} setSelected={setSelected} />
      <MainContent selected={selected} />
    </div>
  );
}

function Navbar({ selected, setSelected }) {
  const menuItems = [
    { name: 'Home', icon: HomeIcon },
    { name: 'Books', icon: BooksIcon },
    { name: 'Status', icon: StatusIcon },
    { name: 'Account', icon: AccountIcon },
  ];

  return (
    <div className="navbar-container">
      <div>
        <div className="navbar-logo">
          <span>
            Logo
          </span>
        </div>
        <div className="navbar-divider">
          <div className="px-2">
            <div className="py-4">
              {menuItems.map((item) => (
                <MenuItem
                  key={item.name}
                  name={item.name}
                  icon={item.icon}
                  selected={selected}
                  setSelected={setSelected}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="logout-button">
        <form action="#">
          <button
            type="submit"
            className="logout-button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5 opacity-75"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            <span>
              Logout
            </span>
          </button>
        </form>
      </div>
    </div>
  );
}

function MenuItem({ name, icon: Icon, selected, setSelected }) {
  const isSelected = selected === name;

  return (
    <div className="menu-item">
      <a
        href="#"
        onClick={() => setSelected(name)}
        className={`menu-link ${isSelected ? 'selected' : ''}`}
      >
        <Icon className={`menu-link-icon ${isSelected ? 'selected' : ''}`}  />
        <span>
          {name}
        </span>
      </a>
    </div>
  );
}

function MainContent({ selected }) {
  return (
    <div className="flex-1 p-4">
      {/* Render different components based on the selected menu */}
      {selected === 'Books' && <Books />}
      {selected === 'Home' && <Home />}
      {selected === 'Account' && <Account />}
      {selected === 'Status' && <Status />}
    </div>
  );
}

function Books() {
  const [books, setBooks] = useState([
    { title: 'Amadeus: A Play', image: image, isFavorite: false },
    { title: 'Annotated Alice: ...', image: image, isFavorite: false },
    { title: 'Applied Numeric.', image: image, isFavorite: false },
    { title: 'Artaud Anthology', image: image, isFavorite: false },
    { title: 'Asterios Polyp', image: image, isFavorite: false },
    { title: 'Batman: Year One', image: image, isFavorite: false },
    { title: 'The Great Gatsby', image: image, isFavorite: false },
    { title: 'To Kill a Mockingbird', image: image, isFavorite: false },
    { title: '1984', image: image, isFavorite: false },
    { title: 'Moby-Dick', image: image, isFavorite: false },
    // Add more book data here
  ]);

  const handleFavoriteClick = (index) => {
    const updatedBooks = [...books];
    updatedBooks[index].isFavorite = !updatedBooks[index].isFavorite;
    setBooks(updatedBooks);
  };

  return (
    <div>
      <div className="flex items-center justify-between p-2">
        <div className="relative w-3/4 sm:w-1/2 p-2">
          <input
            type="text"
            placeholder="Start Searching..."
            className="pl-8 border rounded bg-white w-full h-10"
          />
          <SearchIcon className="absolute text-gray-500 left-3 top-4" />
        </div>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-white text-black rounded-box w-52">
            <li>
              <a className="justify-between">
                Account
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>
      <div className="flex flex-wrap ml-4 mb-6">
        <span className="inline-block px-3 py-1.5 mb-2 mr-2 bg-gray-200 rounded-lg cursor-pointer text-black text-xs">All</span>
        <span className="inline-block px-3 py-1.5 mb-2 mr-2 bg-gray-200 rounded-lg cursor-pointer text-black text-xs">CSE</span>
        <span className="inline-block px-3 py-1.5 mb-2 mr-2 bg-gray-200 rounded-lg cursor-pointer text-black text-xs">Electrical</span>
        <span className="inline-block px-3 py-1.5 mb-2 mr-2 bg-gray-200 rounded-lg cursor-pointer text-black text-xs">Mechanical</span>
        <span className="inline-block px-3 py-1.5 mb-2 mr-2 bg-gray-200 rounded-lg cursor-pointer text-black text-xs">Chemical</span>
        <span className="inline-block px-3 py-1.5 mb-2 mr-2 bg-gray-200 rounded-lg cursor-pointer text-black text-xs">Civil</span>
        <span className="inline-block px-3 py-1.5 mb-2 mr-2 bg-gray-200 rounded-lg cursor-pointer text-black text-xs">Physics</span>
        <span className="inline-block px-3 py-1.5 mb-2 mr-2 bg-gray-200 rounded-lg cursor-pointer text-black text-xs">Mathematics</span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {books.map((book, index) => (
          <div key={book.title} className="p-4">
            <img src={book.image} alt={book.title} className="w-full h-40 object-cover" />
            <div className="text-center mt-2 text-sm">{book.title}</div>
            <div>
              <button
                type="button"
                className="mt-2 w-3/4 inline-block rounded border-2 border-neutral-800 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-800 transition duration-150 ease-in-out hover:border-neutral-800 hover:bg-neutral-100 hover:text-white focus:border-neutral-800 focus:bg-neutral-100 focus:text-white focus:ring-0 active:border-neutral-900 active:text-neutral-900 motion-reduce:transition-none dark:text-neutral-600 dark:hover:bg-neutral-900 dark:focus:bg-neutral-900"
                data-twe-ripple-init
              >
                Borrow
              </button>
              <FavoriteIcon
                className={`ml-2 stroke-black stroke-2 cursor-pointer ${book.isFavorite ? 'text-red-500 stroke-none' : 'text-white'}`}
                onClick={() => handleFavoriteClick(index)}
                style={{ transition: 'color 0.3s' }} // Smooth transition for color change
              />
            </div>

          </div>
        ))}
      </div>

      {/* Pagination Component */}
      <div className="flex justify-center">
        <div className="inline-flex gap-1">
          <a
            href="#"
            className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
          >
            <span className="sr-only">Prev Page</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </a>

          <div>
            <label htmlFor="PaginationPage" className="sr-only">Page</label>

            <input
              type="number"
              className="h-8 w-12 rounded border border-gray-100 bg-white p-0 text-center text-xs font-medium text-gray-900 [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
              min="1"
              value="1"
              id="PaginationPage"
            />
          </div>

          <a
            href="#"
            className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
          >
            <span className="sr-only">Next Page</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 0 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

function Home() {
  const books = [{ title: "Book Title 1", imageUrl: image },
  { title: "Book Title 2", imageUrl: image },
  { title: "Book Title 3", imageUrl: image },
  ];

  const articles = [
    { title: "Article Title 1", author: "Author 1", imageUrl: image },
    { title: "Article Title 2", author: "Author 2", imageUrl: image },
  ];

  return (
    <div className="container mx-auto py-8">
      <div className="flex flex-wrap items-center mb-8">
        <div className="w-full md:w-1/2 lg:w-3/5 mb-4 md:mb-0">
          <h1 className="text-3xl font-bold mb-4 text-blue-500">Welcome to the library</h1>
          <p className="mb-4 text-gray-600">Explore our vast collection of books</p>
        </div>
        <div className="w-full md:w-1/2 lg:w-2/5 px-2">
          <img className="w-1/2" src={image} alt="Logo" />
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-4 text-blue-500">Featured Books</h2>
      <div className="flex flex-wrap mb-8">
        {books.map((book, index) => (
          <div key={index} className="w-full md:w-1/2 lg:w-1/4 px-2 mb-4">
            <img className="w-full mb-3" src={book.imageUrl} alt={book.title} />
            <p className="font-semibold text-center text-gray-600">{book.title}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-4 text-blue-500">Popular Articles</h2>
      <div className="flex flex-wrap mb-8">
        {articles.map((article, index) => (
          <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
            <div className="flex items-center mb-2">
              <img className="w-12 h-12 mr-2" src={article.imageUrl} alt={article.title} />
              <div>
                <p className="font-semibold text-gray-600">{article.title}</p>
                <p className="text-gray-500">{article.author}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-2 text-blue-500">Subscribe to Newsletter</h2>
      <p className="text-gray-400 mb-4">Receive the latest updates and offers directly to your inbox!</p>
      <div className="flex items-center mb-2">
        <input
          type="email"
          className="px-4 py-2 rounded-md w-5/12 border bg-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your email"
        />
      </div>
      <button className="px-6 py-2 bg-blue-500 text-white hover:bg-blue-600 rounded-md mb-8">Subscribe</button>

      <h2 className="text-2xl font-bold mb-4 text-blue-500">Library Statistics</h2>
      <div className="flex flex-wrap items-center mb-8">
        <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4 text-gray-600">
          <p>Total Books: 500+</p>
          <p>Total Active Members: 200+</p>
        </div>
      </div>

      <div class="flex flex-col items-center w-full max-w-screen-md p-6 pb-6 bg-white rounded-lg sm:p-8">
        <h2 class="text-xl font-bold text-gray-600">Monthly Visitors</h2>
        <span class="text-sm font-semibold text-gray-500">2024</span>
        <div class="flex items-end flex-grow w-full mt-2 space-x-2 sm:space-x-3">
          <div class="relative flex flex-col items-center flex-grow pb-5 group">
            <span class="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">65</span>
            <div class="relative flex justify-center w-full h-8 bg-indigo-200"></div>
            <div class="relative flex justify-center w-full h-6 bg-indigo-300"></div>
            <div class="relative flex justify-center w-full h-16 bg-indigo-400"></div>
            <span class="absolute bottom-0 text-xs font-bold">Jan</span>
          </div>
          <div class="relative flex flex-col items-center flex-grow pb-5 group">
            <span class="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">69</span>
            <div class="relative flex justify-center w-full h-10 bg-indigo-200"></div>
            <div class="relative flex justify-center w-full h-6 bg-indigo-300"></div>
            <div class="relative flex justify-center w-full h-20 bg-indigo-400"></div>
            <span class="absolute bottom-0 text-xs font-bold">Feb</span>
          </div>
          <div class="relative flex flex-col items-center flex-grow pb-5 group">
            <span class="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">70</span>
            <div class="relative flex justify-center w-full h-10 bg-indigo-200"></div>
            <div class="relative flex justify-center w-full h-8 bg-indigo-300"></div>
            <div class="relative flex justify-center w-full h-20 bg-indigo-400"></div>
            <span class="absolute bottom-0 text-xs font-bold">Mar</span>
          </div>
          <div class="relative flex flex-col items-center flex-grow pb-5 group">
            <span class="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">71</span>
            <div class="relative flex justify-center w-full h-10 bg-indigo-200"></div>
            <div class="relative flex justify-center w-full h-6 bg-indigo-300"></div>
            <div class="relative flex justify-center w-full h-24 bg-indigo-400"></div>
            <span class="absolute bottom-0 text-xs font-bold">Apr</span>
          </div>
          <div class="relative flex flex-col items-center flex-grow pb-5 group">
            <span class="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">70</span>
            <div class="relative flex justify-center w-full h-10 bg-indigo-200"></div>
            <div class="relative flex justify-center w-full h-8 bg-indigo-300"></div>
            <div class="relative flex justify-center w-full h-20 bg-indigo-400"></div>
            <span class="absolute bottom-0 text-xs font-bold">May</span>
          </div>
          <div class="relative flex flex-col items-center flex-grow pb-5 group">
            <span class="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">73</span>
            <div class="relative flex justify-center w-full h-12 bg-indigo-200"></div>
            <div class="relative flex justify-center w-full h-8 bg-indigo-300"></div>
            <div class="relative flex justify-center w-full h-24 bg-indigo-400"></div>
            <span class="absolute bottom-0 text-xs font-bold">Jun</span>
          </div>
          <div class="relative flex flex-col items-center flex-grow pb-5 group">
            <span class="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">76</span>
            <div class="relative flex justify-center w-full h-12 bg-indigo-200"></div>
            <div class="relative flex justify-center w-full h-16 bg-indigo-300"></div>
            <div class="relative flex justify-center w-full h-20 bg-indigo-400"></div>
            <span class="absolute bottom-0 text-xs font-bold">Jul</span>
          </div>
          <div class="relative flex flex-col items-center flex-grow pb-5 group">
            <span class="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">72</span>
            <div class="relative flex justify-center w-full h-12 bg-indigo-200"></div>
            <div class="relative flex justify-center w-full h-10 bg-indigo-300"></div>
            <div class="relative flex justify-center w-full h-24 bg-indigo-400"></div>
            <span class="absolute bottom-0 text-xs font-bold">Aug</span>
          </div>
          <div class="relative flex flex-col items-center flex-grow pb-5 group">
            <span class="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">78</span>
            <div class="relative flex justify-center w-full h-12 bg-indigo-200"></div>
            <div class="relative flex justify-center w-full h-12 bg-indigo-300"></div>
            <div class="relative flex justify-center w-full bg-indigo-400 h-28"></div>
            <span class="absolute bottom-0 text-xs font-bold">Sep</span>
          </div>
          <div class="relative flex flex-col items-center flex-grow pb-5 group">
            <span class="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">78</span>
            <div class="relative flex justify-center w-full h-12 bg-indigo-200"></div>
            <div class="relative flex justify-center w-full h-8 bg-indigo-300"></div>
            <div class="relative flex justify-center w-full h-32 bg-indigo-400"></div>
            <span class="absolute bottom-0 text-xs font-bold">Oct</span>
          </div>
          <div class="relative flex flex-col items-center flex-grow pb-5 group">
            <span class="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">80</span>
            <div class="relative flex justify-center w-full h-8 bg-indigo-200"></div>
            <div class="relative flex justify-center w-full h-8 bg-indigo-300"></div>
            <div class="relative flex justify-center w-full h-40 bg-indigo-400"></div>
            <span class="absolute bottom-0 text-xs font-bold">Nov</span>
          </div>
          <div class="relative flex flex-col items-center flex-grow pb-5 group">
            <span class="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">100</span>
            <div class="relative flex justify-center w-full h-12 bg-indigo-200"></div>
            <div class="relative flex justify-center w-full h-8 bg-indigo-300"></div>
            <div class="relative flex justify-center w-full h-40 bg-indigo-400"></div>
            <span class="absolute bottom-0 text-xs font-bold">Dec</span>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-4 text-blue-500">Location of Library</h2>
      <p className="text-gray-600">Library Address</p>

      <div className="flex justify-center space-x-4 mt-8">
        <InstagramIcon className="hover:text-pink-500 text-2xl" />
        <XIcon className="hover:text-black text-2xl" />
        <LinkedInIcon className="hover:text-blue-600 text-2xl" />
      </div>
    </div>
  );
};


// function HomeIcon(props) {
//   return (
//     <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="none" viewBox="0 0 19 19" {...props}>
//       <path fill="currentColor" d="M10.216.018v6h8v-6m-8 18h8v-10h-8m-10 10h8v-6h-8v10Z" />
//     </svg>
//   );
// }


// function BooksIcon(props) {
//   return (
//     <svg xmlns="http://www.w3.org/2000/svg" width="36" height="37" fill="none" viewBox="0 0 36 37" stroke="currentColor" strokeWidth="2" {...props}>
//       <path strokeLinecap="round" fill="currentColor" strokeLinejoin="round" stroke="white" d="M17.1 6.878c-1.37-.909-3.422-1.462-5.85-1.462-4.433 0-7.65 1.823-7.65 4.336v20.864a.9.9 0 1 0 1.8 0c0-1.277 2.403-2.7 5.85-2.7 1.9 0 3.483.432 4.521 1.034.591.343 1.329-.104 1.329-.788V6.878Zm7.65-1.462c-2.428 0-4.48.553-5.85 1.462v21.284c0 .684.738 1.13 1.329.788 1.038-.602 2.622-1.034 4.521-1.034 3.447 0 5.85 1.423 5.85 2.7a.9.9 0 1 0 1.8 0V9.752c0-2.513-3.217-4.336-7.65-4.336Z" />
//     </svg>
//   );
// }

function StatusIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="37" fill="none" viewBox="0 0 36 37" stroke="currentColor" strokeWidth="2" {...props}>
      <path strokeLinecap="round" fill="currentColor" strokeLinejoin="round" stroke="currentColor" d="M9.9 3.616H4.5a.9.9 0 0 0-.9.9v5.4a.9.9 0 0 0 .9.9h5.4a.9.9 0 0 0 .9-.9v-5.4a.9.9 0 0 0-.9-.9Zm21.6 21.6h-5.4a.9.9 0 0 0-.9.9v5.4a.9.9 0 0 0 .9.9h5.4a.9.9 0 0 0 .9-.9v-5.4a.9.9 0 0 0-.9-.9Zm-23.4-1.8v-10.8H6.3v10.8a6.307 6.307 0 0 0 6.3 6.3h10.8v-1.8H12.6a4.506 4.506 0 0 1-4.5-4.5Zm19.8-10.8v10.8h1.8v-10.8a6.307 6.307 0 0 0-6.3-6.3H12.6v1.8h10.8a4.505 4.505 0 0 1 4.5 4.5Z" />
    </svg>
  );
}

// function AccountIcon(props) {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       className="size-5 opacity-75"
//       fill="none"
//       viewBox="0 0 24 24"
//       stroke="currentColor"
//       strokeWidth="2"
//       {...props}
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         fill="currentColor"
//         d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
//       />
//     </svg>
//   );
// }

export default App;