import React, { useState, useEffect } from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { LineChart } from "@mui/x-charts/LineChart";
import SearchIcon from "@mui/icons-material/Search";
import {
  UserSvg,
  BorrowSvg,
  TotalBookSvg,
  ReceivedSvg,
} from "./Home_components/HomeSvg";
import Time from "./Home_components/Time";
import { PieChart } from "@mui/x-charts/PieChart";
import Cookies from "js-cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Darkmode from "../Darkmode";
import { colors } from "@mui/material";
import Copyright from "./Home_components/Copyright";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [books, setBooks] = useState([]); // State for storing books data
  const [user, setUser] = useState([]);
  const [bookCount, setBookCount] = useState(0);
  const [userCount, setUserCount] = useState(0);
  const [borrowCount, setBorrowCount] = useState(0);
  const [pendingCount, setPendingCount] = useState(0);
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
        setBooks(res.data);
        setBookCount(res.data.length); // book count
      } catch (error) {
        console.log("Error", error);
      }
    };
    getBooks();
  }, []);

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get("http://localhost:3000/user");
        setUser(res.data);
        setUserCount(res.data.length); // user count
      } catch (error) {
        console.log("Error", error);
      }
    };
    getUser();
  }, []);

  useEffect(() => {
    const getBorrow = async () => {
      try {
        const res = await axios.get("http://localhost:3000/bookRequests");
        console.log(res.data); // Log the response to inspect its structure
        if (Array.isArray(res.data)) {
          const borrowCount = res.data.filter(
            (request) => request.status === "approved"
          );
          const pendingCount = res.data.filter(
            (request) => request.status === "pending"
          );
          setBorrowCount(borrowCount.length);
          setPendingCount(pendingCount.length);
        } else {
          console.error("Unexpected response data format", res.data);
        }
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };

    getBorrow();
  }, []);

  const adminCookie = Cookies.get("adminId");
  const admin = JSON.parse(adminCookie);
  const name = admin.adminName;

  const handleAddBook = () => {
    navigate("/books");
  };

  const handleShowall = () => {
    navigate("/editBook");
  };

  const handleShowallUser = () => {
    navigate("/userlist");
  };

  return (
    <div className="  flex h-full w-full">
      <section className="flex  bg-white rounded-md text-gray-900 dark:bg-neutral-900 body-font h-full w-full pl-5">
        <div className="container px-5 py-6 mx-auto">
          <div className="flex flex-row justify-between items-center w-full mb-10">
            <div>
              <h1 className="sm:text-4xl text-4xl font-bold title-font mb-3 text-pink-600">
                Hello, {name}
              </h1>
              <h2 className="xl:text-3xl sm:text-2xl text-2xl font-normal title-font text-black dark:text-white">
                <Time />
              </h2>
              <div className="flex flex-row items-center absolute lg:top-6 lg:right-14 space-x-4 lg:space-x-2 mt-4 lg:mt-0">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search"
                    className="search-bar border-2 border-gray-300 dark:border-black p-3 rounded-md w-80 sm:w-96 focus:outline-none focus:border-black dark:focus:border-slate-300 dark:text-white dark:bg-neutral-800"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <SearchIcon className="absolute top-3 right-3 text-gray-500" />
                </div>
                <button
                  id="theme-toggle"
                  data-tooltip-target="tooltip-toggle"
                  type="button"
                  className="text-gray-500 inline-flex items-center justify-center dark:text-gray-400 hover:bg-gray-100 w-10 h-10 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
                  onClick={toggleDarkMode}
                >
                  <svg
                    id="theme-toggle-dark-icon"
                    className={`w-4 h-4 ${isDarkMode ? "hidden" : "block"}`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 20"
                  >
                    <path d="M17.8 13.75a1 1 0 0 0-.859-.5A7.488 7.488 0 0 1 10.52 2a1 1 0 0 0 0-.969A1.035 1.035 0 0 0 9.687.5h-.113a9.5 9.5 0 1 0 8.222 14.247 1 1 0 0 0 .004-.997Z"></path>
                  </svg>
                  <svg
                    id="theme-toggle-light-icon"
                    className={`w-4 h-4 ${isDarkMode ? "block" : "hidden"}`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-11a1 1 0 0 0 1-1V1a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1Zm0 12a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1ZM4.343 5.757a1 1 0 0 0 1.414-1.414L4.343 2.929a1 1 0 0 0-1.414 1.414l1.414 1.414Zm11.314 8.486a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM4 10a1 1 0 0 0-1-1H1a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1Zm15-1h-2a1 1 0 1 0 0 2h2a1 1 0 0 0 0-2ZM4.343 14.243l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414a1 1 0 0 0-1.414-1.414ZM14.95 6.05a1 1 0 0 0 .707-.293l1.414-1.414a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 .707 1.707Z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap -m-4 pt-12 lg:pt-0 text-left">
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 px-4 py-6 rounded-lg shadow-md bg-neutral-100 dark:bg-neutral-800 dark:shadow-black dark:border-black hover:transition hover:ease-in-out hover:delay-30 hover:-translate-x-0  hover:scale-105 hover:duration-500">
                <UserSvg />
                <h2 className="title-font font-semibold text-4xl text-gray-900 dark:text-white">
                  {userCount}
                </h2>
                <p className="leading-relaxed dark:text-white">
                  Total Visitors
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 px-4 py-6 rounded-lg shadow-md bg-neutral-100 dark:bg-neutral-800 dark:shadow-black dark:border-black hover:transition hover:ease-in-out hover:delay-30 hover:-translate-x-0  hover:scale-105 hover:duration-500">
                <a className="text-indigo-500  ">
                  {" "}
                  <TotalBookSvg />
                </a>
                <h2 className="title-font font-semibold text-4xl text-gray-900 dark:text-white">
                  {bookCount}
                </h2>
                <p className="leading-relaxed dark:text-white">Total Books</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 px-4 py-6 rounded-lg shadow-md bg-neutral-100 dark:bg-neutral-800 dark:shadow-black dark:border-black hover:transition hover:ease-in-out hover:delay-30 hover:-translate-x-0  hover:scale-105 hover:duration-500">
                <BorrowSvg />
                <h2 className="title-font font-semibold text-4xl text-gray-900 dark:text-white">
                  {borrowCount}
                </h2>
                <p className="leading-relaxed dark:text-white">
                  Borrowed Books
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 px-4 py-6 rounded-lg shadow-md bg-neutral-100 dark:bg-neutral-800 dark:shadow-black dark:border-black hover:transition hover:ease-in-out hover:delay-30 hover:-translate-x-0  hover:scale-105 hover:duration-500">
                <ReceivedSvg />
                <h2 className="title-font font-semibold text-4xl text-gray-900 dark:text-white">
                  {pendingCount}
                </h2>
                <p className="leading-relaxed dark:text-white">
                  Prnding Request
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col pr-9 xl:flex-row w-full pt-16">
            <div className="flex flex-col items-center space-y-4">
              <h3 className="text-lg font-semibold text-center dark:text-white">
                Number of Books
              </h3>
              <BarChart
                xAxis={[
                  {
                    scaleType: "band",
                    data: ["group A", "group B", "group C"],
                  },
                ]}
                series={[
                  { data: [4, 3, 5] },
                  { data: [1, 6, 3] },
                  { data: [2, 5, 6] },
                ]}
                width={400}
                height={250}
              />
              <h3 className="text-lg font-semibold text-center dark:text-white">
                Books Borrowed Over Time
              </h3>
              <LineChart
                xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                series={[
                  {
                    data: [2, 5.5, 2, 8.5, 1.5, 5],
                  },
                ]}
                width={400}
                height={250}
              />
            </div>

            <div className="flex flex-wrap w-full pl-8">
              <div className="w-full">
                <div className="border-2 dark:border-black rounded-md shadow-md bg-neutral-100 dark:bg-neutral-800 dark:shadow-black p-4">
                  <h3 className="text-lg font-semibold mb-4 dark:text-white">
                    Books List
                  </h3>
                  <div className="overflow-x-auto ">
                    <div className="max-h-96 overflow-y-auto">
                      <table className="min-w-full bg-white dark:bg-neutral-900 rounded-md">
                        <thead className="bg-gray-100 dark:bg-neutral-800 ">
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
                            <th className="px-6 py-3 text-sm font-semibold text-black dark:text-white">
                              Quantity
                            </th>
                          </tr>
                        </thead>
                        <tbody
                          loading="lazy"
                          className="divide-y divide-gray-200 dark:divide-slate-400"
                        >
                          {books.map((book, index) => (
                            <tr key={index}>
                              <td className="px-4 py-3 dark:text-slate-100 break-words text-xs md:text-sm">
                                {book._id}
                              </td>
                              <td className="px-4 py-3 dark:text-slate-100 text-sm md:text-base">
                                {book.title}
                              </td>
                              <td className="px-4 py-3 dark:text-slate-100 text-sm md:text-base">
                                {book.author}
                              </td>
                              <td className="px-4 py-3 dark:text-slate-100 text-sm md:text-base">
                                {book.count}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="flex justify-between">
                      <button
                        onClick={handleAddBook}
                        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
                      >
                        Add New Book
                      </button>
                      <button onClick={handleShowall}>
                        <a className="text-pink-500 mt-6">Show All</a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex pt-6 justify-between flex-col lg:flex-row">
            <div className="w-full">
              <div className="border-2 dark:border-black bg-neutral-100 dark:bg-neutral-800 rounded-md shadow-md p-4 dark:shadow-black">
                <h3 className="text-lg font-semibold mb-4 dark:text-white">
                  User List
                </h3>
                <div className="overflow-x-auto">
                  <div className="max-h-96 overflow-y-auto">
                    <table className="min-w-full bg-white dark:bg-neutral-900 rounded-md">
                      <thead className="bg-gray-100 dark:bg-neutral-800">
                        <tr className="text-left">
                          <th className="px-6 py-3 text-sm font-semibold text-black dark:text-white">
                            User ID
                          </th>
                          <th className="px-6 py-3 text-sm font-semibold text-black dark:text-white">
                            Name
                          </th>
                          <th className="px-6 py-3 text-sm font-semibold text-black dark:text-white">
                            Email
                          </th>
                          {/* <th className="px-6 py-3 text-sm font-semibold text-black dark:text-white">
                            Branch
                          </th> */}
                        </tr>
                      </thead>
                      <tbody
                        loading="lazy"
                        className="divide-y divide-gray-200 dark:divide-slate-400"
                      >
                        {user.map((user, index) => (
                          <tr key={index}>
                            <td className="px-4 py-3 dark:text-slate-100  text-xs md:text-sm">
                              {user._id}
                            </td>
                            <td className="px-4 py-3 dark:text-slate-100 text-sm md:text-base">
                              {user.name}
                            </td>
                            <td className="px-4 py-3 dark:text-slate-100 text-sm md:text-base">
                              {user.email}
                            </td>
                            {/* <td className="px-4 py-3 dark:text-slate-100 text-sm md:text-base">
                              {user.count}
                            </td> */}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="flex justify-between">
                  <button onClick={handleShowallUser}>
                    <a className="text-pink-500 mt-6">Show All</a>
                  </button>
                </div>
              </div>
            </div>

            <div className="ml-4 pt-6 flex-shrink-0 flex items-center">
              <PieChart
                series={[
                  {
                    data: [
                      { id: 0, value: 10, label: "Returned" },
                      { id: 1, value: 3, label: "Not Returned" },
                    ],
                  },
                ]}
                width={500}
                height={300}
              />
            </div>
          </div>
          <div className="text-sm text-slate-500 text-center pt-3">
            <Copyright />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
