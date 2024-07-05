import React, { useState, useEffect } from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/Close';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import image from '../assets/react.svg'; // Adjust the path as needed
import booksData from '../assets/UpdatedDatasetSOI.json';
import './home.css';
import { useFavoriteBooks } from "../FavoriteBooksContext";

function Home() {
  const [books, setBooks] = useState([]);
  const [articles, setArticles] = useState([]);
  const { favoriteBooks } = useFavoriteBooks();

  useEffect(() => {
    // Assuming booksData is an array of book objects
    const books = booksData;
    const articles = books.slice(0, 3); // Use the first three books as articles
    setBooks(books);
    setArticles(articles);
  }, []);

  // Function to get a random selection of items from an array
  const getRandomItems = (array, numItems) => {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, numItems);
  };

  // Function to find the department with the maximum count in favoriteBooks
  const getMostFrequentDepartment = () => {
    if (favoriteBooks.length === 0) {
      // If favoriteBooks is empty, return null
      return null;
    }

    const departmentCounts = favoriteBooks.reduce((acc, book) => {
      const department = book.department;
      if (acc[department]) {
        acc[department]++;
      } else {
        acc[department] = 1;
      }
      return acc;
    }, {});
    const sortedDepartments = Object.entries(departmentCounts)
      .sort(([, countA], [, countB]) => countB - countA)
      .map(([department]) => department);

    return sortedDepartments.slice(0, 2);

    // return mostFrequentDepartment;
  };

  // Get the most frequent department from favoriteBooks
  const sortedDepartments=getMostFrequentDepartment()
  let mostFrequentDepartment=null
  let mostFrequentDepartment2=null
  if(sortedDepartments!==null)
  {
  console.log(sortedDepartments)
   mostFrequentDepartment = sortedDepartments[0];
  mostFrequentDepartment2 = sortedDepartments[1];
  }
  // Filter books to get only those from the most frequent department if favoriteBooks is not empty
  let recommendedBooks = [];
  let recommendedBooks2 = [];
  if (mostFrequentDepartment) {
    recommendedBooks = getRandomItems(books.filter(book => book.department === mostFrequentDepartment),4);
    if(mostFrequentDepartment2)
    {
      recommendedBooks2 = getRandomItems(books.filter(book => book.department === mostFrequentDepartment2),4);
    }
    else{
      recommendedBooks2 = getRandomItems(books.filter(book => book.department !== mostFrequentDepartment),4);
    }
  } else {
    // If favoriteBooks is empty, get a random selection of up to 4 books from all books
    recommendedBooks = getRandomItems(books, 4);
    const availableBooks = books.filter(book => !recommendedBooks.includes(book));
    recommendedBooks2 = getRandomItems(availableBooks, 4);
  }

  const Article = ({ title, author, imageUrl }) => (
    <div className="p-6 max-w-sm mx-auto bg-white dark:bg-neutral-700 rounded-xl shadow-lg flex items-center space-x-4 hover:cursor-pointer box">
      <div className="shrink-0">
        <img className="h-12 w-12" src={imageUrl} alt={title} />
      </div>
      <div>
        <div className="text-xl font-medium text-black dark:text-blue-500">{title}</div>
        <p className="text-slate-500 dark:text-slate-100">Author: {author}</p>
      </div>
    </div>
  );

  return (
    <div className="py-8 px-4 bg-white dark:bg-neutral-900 rounded-md">
      <div className="flex flex-wrap items-center mb-8">
        <div className="w-full md:w-1/2 lg:w-3/5 mb-4 md:mb-0">
          <h1 className="text-3xl font-bold mb-4 text-blue-500">Welcome to the library</h1>
          <p className="mb-4 text-gray-600 dark:text-slate-100">Explore our vast collection of books</p>
        </div>
        <div className="w-full md:w-1/2 lg:w-2/5 px-2">
          <img className="w-1/2" src={image} alt="Logo" />
        </div>
      </div>
      <h2 className="text-2xl font-bold mb-4 text-blue-500">Recommended Books</h2>
      <div className="flex flex-wrap mb-8">
        {recommendedBooks.map((book, index) => (
          <div key={index} className="w-full md:w-1/2 lg:w-1/4 px-2 mb-4">
            <img className="w-full mb-3" src={image} alt={book.title} />
            <p className="font-semibold text-center text-gray-600 dark:text-slate-50">{book.title}</p>
          </div>
        ))}
        {recommendedBooks2.map((book, index) => (
          <div key={index} className="w-full md:w-1/2 lg:w-1/4 px-2 mb-4">
            <img className="w-full mb-3" src={image} alt={book.title} />
            <p className="font-semibold text-center text-gray-600 dark:text-slate-50">{book.title}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-4 text-blue-500">Popular Articles</h2>
      <div className="flex flex-wrap mb-8">
        {articles.map((article, index) => (
          <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
            <Article title={article.title} author={article.author} imageUrl={image} />
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-2 text-blue-500">Subscribe to Newsletter</h2>
      <p className="text-gray-400 dark:text-slate-300 mb-4">Receive the latest updates and offers directly to your inbox!</p>
      <div className="flex items-center mb-2">
        <input
          type="email"
          className="px-4 py-2 rounded-md w-5/12 border bg-white dark:bg-neutral-700 dark:text-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your email"
        />
      </div>
      <button className="px-6 py-2 bg-blue-500 text-white hover:bg-blue-600 rounded-md mb-8">Subscribe</button>

      <h2 className="text-2xl font-bold mb-4 text-blue-500">Library Statistics</h2>
      <div className="flex flex-wrap items-center mb-8">
        <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4 text-gray-600 dark:text-slate-300">
          <p>Total Books: 500+</p>
          <p>Total Active Members: 200+</p>
        </div>
      </div>

      

      <div className="flex justify-center space-x-4 mt-8">
        <InstagramIcon className="hover:text-pink-500 text-2xl" />
        <XIcon className="hover:text-black text-2xl" />
        <LinkedInIcon className="hover:text-blue-600 text-2xl" />
      </div>
    </div>
  );
}
function HomeIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="none" viewBox="0 0 19 19" {...props}>
      <path fill="currentColor" d="M10.216.018v6h8v-6m-8 18h8v-10h-8m-10 10h8v-6h-8v10Z" />
    </svg>
  );
}

export default Home;
