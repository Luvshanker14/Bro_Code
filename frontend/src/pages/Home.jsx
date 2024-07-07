import React, { useState, useEffect } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/Close";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import image from "../assets/react.svg"; // Adjust the path as needed
import booksData from "../assets/UpdatedDatasetSOI.json";
import "./home.css";
import Cookies from "js-cookie";
import { useFavoriteBooks } from "../FavoriteBooksContext";
import webBook from "../assets/onlineBooks.json";
import library from "../assets/library.svg";

function Home() {
  const [books, setBooks] = useState([]);
  const [articles, setArticles] = useState([]);
  const { favoriteBooks } = useFavoriteBooks();
  const [onlineBooks, setOnlineBooks] = useState([]);

  useEffect(() => {
    // Assuming booksData is an array of book objects
    const books = booksData;

    const onlineBooks = webBook.filter((book) => book.onlineUrl);
    setOnlineBooks(onlineBooks);

    const articles = webBook.filter((book) => book.Url); // Use the first three books as articles
    setBooks(books);
    setArticles(articles);
  }, []);

  const userCookie = Cookies.get("userId");
  if (userCookie) {
    const user = JSON.parse(userCookie);
    console.log("User ID from cookie:", user);
  } else {
    console.log("User ID not found in cookie");
  }
  const user = JSON.parse(userCookie);

  const profile = {
    name: user.userName,
  };

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
  const sortedDepartments = getMostFrequentDepartment();
  let mostFrequentDepartment = null;
  let mostFrequentDepartment2 = null;
  if (sortedDepartments !== null) {
    console.log(sortedDepartments);
    mostFrequentDepartment = sortedDepartments[0];
    mostFrequentDepartment2 = sortedDepartments[1];
  }
  // Filter books to get only those from the most frequent department if favoriteBooks is not empty
  let recommendedBooks = [];
  let recommendedBooks2 = [];
  if (mostFrequentDepartment) {
    recommendedBooks = getRandomItems(
      books.filter((book) => book.department === mostFrequentDepartment),
      4
    );
    if (mostFrequentDepartment2) {
      recommendedBooks2 = getRandomItems(
        books.filter((book) => book.department === mostFrequentDepartment2),
        4
      );
    } else {
      recommendedBooks2 = getRandomItems(
        books.filter((book) => book.department !== mostFrequentDepartment),
        4
      );
    }
  } else {
    // If favoriteBooks is empty, get a random selection of up to 4 books from all books
    recommendedBooks = getRandomItems(books, 4);
    const availableBooks = books.filter(
      (book) => !recommendedBooks.includes(book)
    );
    recommendedBooks2 = getRandomItems(availableBooks, 4);
  }

  const Article = ({ title, author, Url }) => (
    <div className="p-6 max-w-sm mx-autorounded-xl border-1 rounded-xl shadow-[0_0_30px_theme('colors.slate.400')] bg-neutral-100 dark:bg-neutral-800 dark:shadow-[0_0_30px_theme('colors.black')] dark:border-black flex items-center space-x-4 hover:cursor-pointer box">
      <div className="shrink-0">
        <img className="h-12 w-12" src={image} alt={title} />
      </div>
      <div>
        <div className="text-xl font-medium text-black dark:text-blue-500">
          {title}
        </div>
        <p className="text-slate-500 dark:text-slate-100">Author: {author}</p>
        <a
          href={Url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 block hover:underline"
        >
          Read Online
        </a>
      </div>
    </div>
  );

  const OnlineBook = ({ title, onlineUrl }) => (
    <div className="p-6 max-w-sm mx-auto  border-1 rounded-xl shadow-[0_0_30px_theme('colors.slate.400')]  bg-neutral-100 dark:bg-neutral-800 dark:shadow-[0_0_30px_theme('colors.black')] dark:border-black flex items-center space-x-4 hover:cursor-pointer box">
      <div className="shrink-0">
        <img className="h-12 w-12" src={image} alt={title} />
      </div>
      <div>
        <div className="text-xl font-medium text-black dark:text-blue-500">
          {title}
        </div>
        <a
          href={onlineUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 block hover:underline"
        >
          Read Online
        </a>
      </div>
    </div>
  );

  return (
    <div className="py-8 px-4 bg-white dark:bg-neutral-900 rounded-md">
      <div className="flex flex-wrap items-center mb-8">
        <div className="w-full md:w-1/2 lg:w-3/5 mb-4 md:mb-0">
          <h1 className="sm:text-4xl text-4xl font-bold title-font mb-3 text-pink-600">
            Hello, {profile.name}
          </h1>
          <h1 className="text-3xl font-bold mb-4 text-blue-500">
            Welcome to the library
          </h1>
          <p className="mb-4 text-gray-600 dark:text-slate-100">
            Explore our vast collection of books
          </p>
        </div>
        <div className="w-full  px-2">
          <img className="bg-cover bg-fixed" src={library} alt="Logo" />
        </div>
      </div>
      <h2 className="text-2xl font-bold mb-4 text-blue-500">
        Recommended Books
      </h2>
      <div className="flex flex-wrap mb-8 ">
        {recommendedBooks.map((book, index) => (
          <div key={index} className="w-full md:w-1/2 lg:w-1/4 px-10 mb-4 ">
            <img
              className="w-full mb-3 shadow-[0_0_30px_theme('colors.slate.400')] dark:shadow-[0_0_20px_theme('colors.black')]  hover:transition hover:ease-in-out hover:delay-30 hover:-translate-y-3  hover:scale-105 hover:duration-150"
              src={book.image || image}
              alt={book.title}
            />
            <p className="font-semibold text-center text-gray-600 dark:text-slate-50">
              {book.title}
            </p>
          </div>
        ))}
        {recommendedBooks2.map((book, index) => (
          <div key={index} className="w-full md:w-1/2 lg:w-1/4 px-10 mb-4 ">
            <img
              className="w-full mb-3 shadow-[0_0_30px_theme('colors.slate.400')] dark:shadow-[0_0_20px_theme('colors.black')] hover:transition hover:ease-in-out hover:delay-30 hover:-translate-y-3  hover:scale-105 hover:duration-150"
              src={book.image || image}
              alt={book.title}
            />
            <p className="font-semibold text-center text-gray-600 dark:text-slate-50">
              {book.title}
            </p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-4 text-blue-500">
        Popular Research Articles
      </h2>
      <div className="flex flex-wrap mb-8">
        {articles.map((article, index) => (
          <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
            <Article
              title={article.title}
              author={article.author}
              Url={article.Url}
            />
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-4 text-blue-500">
        Read Books Online
      </h2>
      <div className="flex flex-wrap mb-8">
        {onlineBooks.map((book, index) => (
          <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
            <OnlineBook title={book.title} onlineUrl={book.onlineUrl} />
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-2 text-blue-500">
        Subscribe to Newsletter
      </h2>
      <p className="text-gray-400 dark:text-slate-300 mb-4">
        Receive the latest updates and offers directly to your inbox!
      </p>
      <div className="flex items-center mb-2">
        <input
          type="email"
          className="search-bar border-2 border-gray-300 dark:border-black p-3 rounded-md w-90 sm:w-96 focus:outline-none focus:border-black dark:focus:border-slate-300 dark:text-white dark:bg-neutral-800"
          placeholder="Enter your email"
        />
      </div>
      <button className="px-6 py-2 bg-blue-500 text-white hover:bg-blue-600 rounded-md mb-8">
        Subscribe
      </button>

      <h2 className="text-2xl font-bold mb-4 text-blue-500">
        Library Statistics
      </h2>
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
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="19"
      fill="none"
      viewBox="0 0 19 19"
      {...props}
    >
      <path
        fill="currentColor"
        d="M10.216.018v6h8v-6m-8 18h8v-10h-8m-10 10h8v-6h-8v10Z"
      />
    </svg>
  );
}

export default Home;
