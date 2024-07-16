import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import image from "../assets/react.svg"; // Adjust the path as needed
import booksData from "../assets/UpdatedDatasetSOI.json";
import "./home.css";
import Cookies from "js-cookie";
import { useFavoriteBooks } from "../FavoriteBooksContext";
import webBook from "../assets/onlineBooks.json";
import library from "../assets/library.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import libraryint1 from "../assets/libint.jpg";
import libraryint2 from "../assets/libint2.jpg";
import Darkmode from "./Darkmode";
import { useNavigate } from "react-router-dom";
import Copyright from "./Copyright";
import axios from "axios";

function Home() {
  const [books, setBooks] = useState([]);
  const [articles, setArticles] = useState([]);
  const { favoriteBooks } = useFavoriteBooks();
  const [onlineBooks, setOnlineBooks] = useState([]);
  const [ytBooks, setytBooks] = useState([]);
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  useEffect(() => {
    const getBooks = async () => {
      try {
        const res = await axios.get("http://localhost:3000/books");
        //console.log("hehe");
        //console.log(res.data);
        const books = res.data;
        setBooks(books);
      } catch (error) {
        console.log("error", error);
      }


    }
    getBooks();

  }, [])

  useEffect(() => {
    // Assuming booksData is an array of book objects
    // const books = booksData;




    const onlineBooks = webBook.filter((book) => book.onlineUrl);
    setOnlineBooks(onlineBooks);

    const articles = webBook.filter((book) => book.Url);
    const ytplaylist = webBook.filter((book) => book.YtUrl);
    // setBooks(books);
    setArticles(articles);
    setytBooks(ytplaylist);
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

  function handleAccountButton() {
    navigate("/account")

  }
  function handleLogoutButton(event) {
    event.preventDefault();
    window.location.href = 'http://localhost:5175';
    Cookies.remove('userId', { path: '/' });
  }


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
  const OnlineBooksSlider = ({ books }) => {
    const sliderSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <Slider {...sliderSettings}>
        {books.map((book, index) => (
          <div key={index} className="p-2 py-5">
            <div className="p-6 max-w-sm mx-auto border-1 rounded-xl bg-neutral-100 dark:bg-neutral-800 shadow-[0_0_15px_theme('colors.slate.400')]  dark:shadow-[0_0_15px_theme('colors.black')] dark:border-black flex items-center space-x-4 hover:cursor-pointer box">
              <div className="shrink-0">
                <img className="h-12 w-12" src={image} alt={book.title} />
              </div>
              <div>
                <div className="text-xl font-medium text-black dark:text-blue-500">
                  {book.title}
                </div>
                <a
                  href={book.onlineUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 block hover:underline"
                >
                  Read Online
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    );
  };

  const ArticlesSlider = ({ articles }) => {
    const sliderSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <Slider {...sliderSettings}>
        {articles.map((article, index) => (
          <div key={index} className="p-2 py-5">
            <div className="p-6 max-w-sm mx-auto rounded-xl  bg-neutral-100 dark:bg-neutral-800 shadow-[0_0_15px_theme('colors.slate.400')]  dark:shadow-[0_0_15px_theme('colors.black')] dark:border-black flex items-center space-x-4 hover:cursor-pointer box">
              <div className="shrink-0 ">
                <img className="h-12 w-12" src={image} alt={article.title} />
              </div>
              <div>
                <div className="text-xl font-medium text-black dark:text-blue-500">
                  {article.title}
                </div>
                <p className="text-slate-500 dark:text-slate-100">
                  Author: {article.author}
                </p>
                <a
                  href={article.Url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 block hover:underline"
                >
                  Read Online
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    );
  };
  const Ytbook = ({ title, youtubeUrl }) => (
    <div className="p-6 max-w-sm mx-auto border-1 rounded-xl shadow-[0_0_30px_theme('colors.slate.400')] bg-neutral-200 dark:bg-neutral-800 dark:shadow-[0_0_30px_theme('colors.black')] dark:border-black flex flex-col items-center space-y-4 hover:cursor-pointer box2">
      <iframe
        width="100%"
        height="150"
        src={youtubeUrl}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div className="text-center">
        <div className="text-xl font-medium text-black dark:text-blue-500">
          {title}
        </div>
      </div>
    </div>
  );
  const LibraryCarousel = () => {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      pauseOnHover: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      swipeToSlide: true,
      arrows: false,
    };

    const images = [library, libraryint1, libraryint2]; // Replace with your image paths

    return (
      <center>
        <Slider {...settings} style={{ width: "90%" }}>
          {images.map((img, index) => (
            <div key={index}>
              <img
                src={img}
                alt={`Slide ${index}`}
                style={{ width: "100%", height: "600px", borderRadius: "20px" }}
              />
            </div>
          ))}
        </Slider>
      </center>
    );
  };

  return (
    <div className="py-8 px-4 bg-white dark:bg-neutral-900 rounded-md">
      <div className="flex flex-wrap items-center mb-8">
        <div className="absolute top-4 right-4 space-x-5 flex items-center">
          <button id="theme-toggle" data-tooltip-target="tooltip-toggle" type="button" className="text-gray-500 inline-flex items-center justify-center dark:text-gray-400 hover:bg-gray-100 w-10 h-10 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5" onClick={toggleDarkMode}>
            <svg id="theme-toggle-dark-icon" className={`w-4 h-4 ${isDarkMode ? "hidden" : "block"}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
              <path d="M17.8 13.75a1 1 0 0 0-.859-.5A7.488 7.488 0 0 1 10.52 2a1 1 0 0 0 0-.969A1.035 1.035 0 0 0 9.687.5h-.113a9.5 9.5 0 1 0 8.222 14.247 1 1 0 0 0 .004-.997Z"></path>
            </svg>
            <svg id="theme-toggle-light-icon" className={`w-4 h-4 ${isDarkMode ? "block" : "hidden"}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-11a1 1 0 0 0 1-1V1a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1Zm0 12a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1ZM4.343 5.757a1 1 0 0 0 1.414-1.414L4.343 2.929a1 1 0 0 0-1.414 1.414l1.414 1.414Zm11.314 8.486a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM4 10a1 1 0 0 0-1-1H1a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1Zm15-1h-2a1 1 0 1 0 0 2h2a1 1 0 0 0 0-2ZM4.343 14.243l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414a1 1 0 0 0-1.414-1.414ZM14.95 6.05a1 1 0 0 0 .707-.293l1.414-1.414a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 .707 1.707Z"></path>
            </svg>
          </button>
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
              className="mt-3 z-[1] p-2 shadow-[0_0_10px_theme('colors.slate.400')] dark:shadow-[0_0_10px_theme('colors.black')] menu menu-sm dropdown-content bg-white text-black dark:bg-neutral-800 dark:text-white rounded-box w-32"
            >
              <li onClick={handleAccountButton}>
                <a className="justify-between">Account</a>
              </li>
              <li>
                <a>
                  Settings
                </a>
              </li>
              <li onClick={handleLogoutButton}>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
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
        <div className="bg">
          {/* <center><img className="bg-contain" src={library} alt="Logo" /></center> */}
          <LibraryCarousel />
        </div>
      </div>
      <h2 className="text-2xl font-bold mb-4 text-blue-500">
        Recommended Books
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mb-8 pt-6 items-baseline ">
        {recommendedBooks.map((book, index) => (
          <div key={index} className="w-full px-10 mb-4 ">
            <img
              className="w-full h-40 lg:h-80 mb-3 object-fill shadow-[0_0_30px_theme('colors.slate.400')] dark:shadow-[0_0_30px_theme('colors.black')]  hover:transition hover:ease-in-out hover:delay-30 hover:-translate-y-3  hover:scale-105 hover:duration-150 border-2 border-black dark:border-neutral-200 rounded-sm p-1 dark:bg-black bg-white"
              src={`http://localhost:3000/uploads/${book.image}`}
              alt={book.title}
            />
            <p className="font-semibold text-center text-black dark:text-slate-50">
              {book.title}
            </p>
          </div>
        ))}
        {recommendedBooks2.map((book, index) => (
          <div key={index} className="w-full px-10 mb-4 ">
            <img
              className="w-full h-40 lg:h-80 mb-3 object-fill shadow-[0_0_30px_theme('colors.slate.400')] dark:shadow-[0_0_30px_theme('colors.black')]  hover:transition hover:ease-in-out hover:delay-30 hover:-translate-y-3  hover:scale-105 hover:duration-150 border-2 border-black dark:border-neutral-200 rounded-sm p-1 dark:bg-black bg-white"
              src={`http://localhost:3000/uploads/${book.image}`}
              alt={book.title}
            />
            <p className="font-semibold text-center text-black dark:text-slate-50">
              {book.title}
            </p>
          </div>
        ))}
      </div>
      <h2 className="text-2xl font-bold mb-4 text-blue-500">
        Read Books Online
      </h2>
      <div className="mb-8">
        <OnlineBooksSlider books={onlineBooks} />
      </div>

      <h2 className="text-2xl font-bold mb-4 text-blue-500">
        Popular Research Articles
      </h2>
      <div className="mb-8">
        <ArticlesSlider articles={articles} />
      </div>
      <h2 className="text-2xl font-bold mb-4 text-blue-500">
        Watch Courses on Youtube
      </h2>
      <div className="flex flex-wrap mb-8">
        {ytBooks.map((book, index) => (
          <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
            <Ytbook title={book.title} youtubeUrl={book.YtUrl} />
          </div>
        ))}
      </div>
      <section className="w-full rounded-md py-12 md:py-24 lg:py-32 bg-gray-100 shadow-md dark:shadow-black dark:bg-neutral-800">
        <div className="container mx-auto grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl dark:text-slate-300 text-gray-700 font-bold tracking-tighter md:text-4xl/tight">
              Join Our Community
            </h2>
            <p className="mx-auto max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-lg/relaxed dark:text-slate-200">
              Sign up to receive the latest news, offers, and updates from us. Don't miss out!
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-2">
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="max-w-lg dark:text-black bg-white flex-1 h-10 p-2 rounded-md border-gray-300 shadow-sm sm:text-sm"
              />
              <button
                type="submit"
                className="rounded-md bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
              >
                Submit
              </button>
            </form>
            <p className="text-xs dark:text-slate-200 text-gray-600">
              Subscribe to get notified about our latest products and offers.{" "}
              <a href="#" className="dark:text-slate-300 underline underline-offset-2">
                Terms &amp; Conditions
              </a>
            </p>
          </div>
        </div>
      </section>
      <footer className="">
        <div className="flex justify-center space-x-4 mt-8 ">
          <InstagramIcon className="hover:text-pink-500 text-2xl  hover:transition hover:ease-in-out hover:delay-30 hover:-translate-x-0  hover:scale-110" />
          <XIcon className="hover:text-black dark:hover:text-slate-200 text-2xl  hover:transition hover:ease-in-out hover:delay-30 hover:-translate-x-0  hover:scale-110" />
          <LinkedInIcon className="hover:text-blue-600 text-2xl  hover:transition hover:ease-in-out hover:delay-30 hover:-translate-x-0  hover:scale-110" />
        </div>
        <div className="text-center pt-3 text-sm ">
          <Copyright />
        </div>
      </footer>

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
