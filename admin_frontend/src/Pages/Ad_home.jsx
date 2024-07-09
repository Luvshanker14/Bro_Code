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

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [books, setBooks] = useState([]); // State for storing books data
  const [user, setUser] = useState([]);
  const [bookCount, setBookCount] = useState(0);
  const [userCount, setUserCount] = useState(0);
  const [borrowCount, setBorrowCount] = useState(0);
  const navigate = useNavigate();

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
        const res = axios.get("http://localhost:3000/bookRequests");
        setBorrowCount(res.data);
        setBorrowCount((await res).data.length);
      } catch (error) {
        console.log("Error", error);
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
              <div className="flex flex-row absolute lg:top-6 lg:right-14 space-x-4 lg:space-x-2 mt-4 lg:mt-0">
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
              </div>
              <div className=" invisible">
                <Darkmode />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap -m-4 pt-12 lg:pt-0 text-left">
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 px-4 py-6 rounded-lg shadow-md bg-neutral-100 dark:bg-neutral-800 dark:shadow-black dark:border-black">
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
              <div className="border-2 px-4 py-6 rounded-lg shadow-md bg-neutral-100 dark:bg-neutral-800 dark:shadow-black dark:border-black">
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
              <div className="border-2 px-4 py-6 rounded-lg shadow-md bg-neutral-100 dark:bg-neutral-800 dark:shadow-black dark:border-black">
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
              <div className="border-2 px-4 py-6 rounded-lg shadow-md bg-neutral-100 dark:bg-neutral-800 dark:shadow-black dark:border-black">
                <ReceivedSvg />
                <h2 className="title-font font-semibold text-4xl text-gray-900 dark:text-white">
                  46
                </h2>
                <p className="leading-relaxed dark:text-white">
                  Received Books
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
        </div>
      </section>
    </div>
  );
}

export default Home;
