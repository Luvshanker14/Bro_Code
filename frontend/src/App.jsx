import React, { useState, useEffect } from 'react';
import image from "./assets/react.svg";
import Status from "./pages/Status";
import Navbar from './pages/Navbar';
import Account from "./pages/Account";
import FavoriteIcon from '@mui/icons-material/Favorite';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SearchIcon from '@mui/icons-material/Search';
import booksData from "./assets/UpdatedDatasetSOI.json";


import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';
import Books from './pages/Book';
 import Home from './pages/Home';

function App() {
  const [selected, setSelected] = useState('Home');

  return (
    <div style={{ backgroundColor: 'white', display: 'flex' }}>
      <Navbar selected={selected} setSelected={setSelected} />
      <MainContent selected={selected} />
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


<>
<Books></Books>
<Home></Home> 
</>




 




// function Home() {
//   const [books, setBooks] = useState([]);
//   const [articles, setArticles] = useState([]);

//   useEffect(() => {
//     // Assuming booksData is an array of book objects
//     const books = booksData;
//     const articles = books.slice(0, 3); // Use the first two books as articles
//     setBooks(books);
//     setArticles(articles);
//   }, []);

//   const Article = ({ title, author, imageUrl }) => (
//     <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
//       <div className="shrink-0">
//         <img className="h-12 w-12" src={imageUrl} alt={title} />
//       </div>
//       <div>
//         <div className="text-xl font-medium text-black">{title}</div>
//         <p className="text-slate-500">Author: {author}</p>
//       </div>
//     </div>
//   );

//   return (
//     <div className="container mx-auto py-8">
//       <div className="flex flex-wrap items-center mb-8">
//         <div className="w-full md:w-1/2 lg:w-3/5 mb-4 md:mb-0">
//           <h1 className="text-3xl font-bold mb-4 text-blue-500">Welcome to the library</h1>
//           <p className="mb-4 text-gray-600">Explore our vast collection of books</p>
//         </div>
//         <div className="w-full md:w-1/2 lg:w-2/5 px-2">
//           <img className="w-1/2" src={image} alt="Logo" />
//         </div>
//       </div>

//       <h2 className="text-2xl font-bold mb-4 text-blue-500">Featured Books</h2>
//       <div className="flex flex-wrap mb-8">
//         {books.slice(4, 8).map((book, index) => (
//           <div key={index} className="w-full md:w-1/2 lg:w-1/4 px-2 mb-4">
//             <img className="w-full mb-3" src={image} alt={book.title} />
//             <p className="font-semibold text-center text-gray-600">{book.title}</p>
//           </div>
//         ))}
//       </div>

//       <h2 className="text-2xl font-bold mb-4 text-blue-500">Popular Articles</h2>
//       <div className="flex flex-wrap mb-8">
//         {articles.map((article, index) => (
//           <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
//             <Article title={article.title} author={article.author} imageUrl={image} />
//           </div>
//         ))}
//       </div>

//       <h2 className="text-2xl font-bold mb-2 text-blue-500">Subscribe to Newsletter</h2>
//       <p className="text-gray-400 mb-4">Receive the latest updates and offers directly to your inbox!</p>
//       <div className="flex items-center mb-2">
//         <input
//           type="email"
//           className="px-4 py-2 rounded-md w-5/12 border bg-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           placeholder="Enter your email"
//         />
//       </div>
//       <button className="px-6 py-2 bg-blue-500 text-white hover:bg-blue-600 rounded-md mb-8">Subscribe</button>

//       <h2 className="text-2xl font-bold mb-4 text-blue-500">Library Statistics</h2>
//       <div className="flex flex-wrap items-center mb-8">
//         <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4 text-gray-600">
//           <p>Total Books: 500+</p>
//           <p>Total Active Members: 200+</p>
//         </div>
//       </div>

//       <div class="flex flex-col items-center w-full max-w-screen-md p-6 pb-6 bg-white rounded-lg sm:p-8">
//         <h2 class="text-xl font-bold text-gray-600">Monthly Visitors</h2>
//         <span class="text-sm font-semibold text-gray-500">2024</span>
//         <div class="flex items-end flex-grow w-full mt-2 space-x-2 sm:space-x-3">
//           <div class="relative flex flex-col items-center flex-grow pb-5 group">
//             <span class="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">65</span>
//             <div class="relative flex justify-center w-full h-8 bg-indigo-200"></div>
//             <div class="relative flex justify-center w-full h-6 bg-indigo-300"></div>
//             <div class="relative flex justify-center w-full h-16 bg-indigo-400"></div>
//             <span class="absolute bottom-0 text-xs font-bold">Jan</span>
//           </div>
//           <div class="relative flex flex-col items-center flex-grow pb-5 group">
//             <span class="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">69</span>
//             <div class="relative flex justify-center w-full h-10 bg-indigo-200"></div>
//             <div class="relative flex justify-center w-full h-6 bg-indigo-300"></div>
//             <div class="relative flex justify-center w-full h-20 bg-indigo-400"></div>
//             <span class="absolute bottom-0 text-xs font-bold">Feb</span>
//           </div>
//           <div class="relative flex flex-col items-center flex-grow pb-5 group">
//             <span class="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">70</span>
//             <div class="relative flex justify-center w-full h-10 bg-indigo-200"></div>
//             <div class="relative flex justify-center w-full h-8 bg-indigo-300"></div>
//             <div class="relative flex justify-center w-full h-20 bg-indigo-400"></div>
//             <span class="absolute bottom-0 text-xs font-bold">Mar</span>
//           </div>
//           <div class="relative flex flex-col items-center flex-grow pb-5 group">
//             <span class="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">71</span>
//             <div class="relative flex justify-center w-full h-10 bg-indigo-200"></div>
//             <div class="relative flex justify-center w-full h-6 bg-indigo-300"></div>
//             <div class="relative flex justify-center w-full h-24 bg-indigo-400"></div>
//             <span class="absolute bottom-0 text-xs font-bold">Apr</span>
//           </div>
//           <div class="relative flex flex-col items-center flex-grow pb-5 group">
//             <span class="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">70</span>
//             <div class="relative flex justify-center w-full h-10 bg-indigo-200"></div>
//             <div class="relative flex justify-center w-full h-8 bg-indigo-300"></div>
//             <div class="relative flex justify-center w-full h-20 bg-indigo-400"></div>
//             <span class="absolute bottom-0 text-xs font-bold">May</span>
//           </div>
//           <div class="relative flex flex-col items-center flex-grow pb-5 group">
//             <span class="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">73</span>
//             <div class="relative flex justify-center w-full h-12 bg-indigo-200"></div>
//             <div class="relative flex justify-center w-full h-8 bg-indigo-300"></div>
//             <div class="relative flex justify-center w-full h-24 bg-indigo-400"></div>
//             <span class="absolute bottom-0 text-xs font-bold">Jun</span>
//           </div>
//           <div class="relative flex flex-col items-center flex-grow pb-5 group">
//             <span class="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">76</span>
//             <div class="relative flex justify-center w-full h-12 bg-indigo-200"></div>
//             <div class="relative flex justify-center w-full h-16 bg-indigo-300"></div>
//             <div class="relative flex justify-center w-full h-20 bg-indigo-400"></div>
//             <span class="absolute bottom-0 text-xs font-bold">Jul</span>
//           </div>
//           <div class="relative flex flex-col items-center flex-grow pb-5 group">
//             <span class="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">72</span>
//             <div class="relative flex justify-center w-full h-12 bg-indigo-200"></div>
//             <div class="relative flex justify-center w-full h-10 bg-indigo-300"></div>
//             <div class="relative flex justify-center w-full h-24 bg-indigo-400"></div>
//             <span class="absolute bottom-0 text-xs font-bold">Aug</span>
//           </div>
//           <div class="relative flex flex-col items-center flex-grow pb-5 group">
//             <span class="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">78</span>
//             <div class="relative flex justify-center w-full h-12 bg-indigo-200"></div>
//             <div class="relative flex justify-center w-full h-12 bg-indigo-300"></div>
//             <div class="relative flex justify-center w-full bg-indigo-400 h-28"></div>
//             <span class="absolute bottom-0 text-xs font-bold">Sep</span>
//           </div>
//           <div class="relative flex flex-col items-center flex-grow pb-5 group">
//             <span class="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">78</span>
//             <div class="relative flex justify-center w-full h-12 bg-indigo-200"></div>
//             <div class="relative flex justify-center w-full h-8 bg-indigo-300"></div>
//             <div class="relative flex justify-center w-full h-32 bg-indigo-400"></div>
//             <span class="absolute bottom-0 text-xs font-bold">Oct</span>
//           </div>
//           <div class="relative flex flex-col items-center flex-grow pb-5 group">
//             <span class="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">80</span>
//             <div class="relative flex justify-center w-full h-8 bg-indigo-200"></div>
//             <div class="relative flex justify-center w-full h-8 bg-indigo-300"></div>
//             <div class="relative flex justify-center w-full h-40 bg-indigo-400"></div>
//             <span class="absolute bottom-0 text-xs font-bold">Nov</span>
//           </div>
//           <div class="relative flex flex-col items-center flex-grow pb-5 group">
//             <span class="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">100</span>
//             <div class="relative flex justify-center w-full h-12 bg-indigo-200"></div>
//             <div class="relative flex justify-center w-full h-8 bg-indigo-300"></div>
//             <div class="relative flex justify-center w-full h-40 bg-indigo-400"></div>
//             <span class="absolute bottom-0 text-xs font-bold">Dec</span>
//           </div>
//         </div>
//       </div>
//       <div className="flex justify-center space-x-4 mt-8">
//         <InstagramIcon className="hover:text-pink-500 text-2xl" />
//         <XIcon className="hover:text-black text-2xl" />
//         <LinkedInIcon className="hover:text-blue-600 text-2xl" />
//       </div>
//     </div>
//   );
// }


function HomeIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="none" viewBox="0 0 19 19" {...props}>
      <path fill="currentColor" d="M10.216.018v6h8v-6m-8 18h8v-10h-8m-10 10h8v-6h-8v10Z" />
    </svg>
  );
}


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