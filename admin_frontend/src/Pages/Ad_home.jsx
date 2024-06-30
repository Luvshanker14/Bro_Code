import React, { useState } from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { LineChart } from "@mui/x-charts/LineChart";
import SearchIcon from "@mui/icons-material/Search";
import Time from "./Home_components/Time";
import { PieChart } from "@mui/x-charts/PieChart";
import Cookies from 'js-cookie';


function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const adminCookie = Cookies.get('adminId');
  const admin=JSON.parse(adminCookie);
  const name=admin.adminName;

  return (
    <div className="flex h-full w-full">
      <section className="flex bg-white rounded-md text-gray-900 dark:bg-neutral-900 body-font h-full w-full pl-5">
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
                    placeholder="Start Books"
                    className="search-bar border-2 border-gray-300 p-3 rounded-md w-80 sm:w-96 focus:outline-none focus:border-black dark:text-white dark:bg-neutral-800"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <SearchIcon className="absolute top-3 right-3 text-gray-500" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap -m-4 pt-12 lg:pt-0 text-left">
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 px-4 py-6 rounded-lg shadow-md bg-neutral-100 dark:bg-neutral-800 dark:shadow-black dark:border-black">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="text-indigo-500 w-10 h-8 mb-2 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                </svg>
                <h2 className="title-font font-semibold text-4xl text-gray-900 dark:text-white">
                  2.7K
                </h2>
                <p className="leading-relaxed dark:text-white">Total Visitors</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 px-4 py-6 rounded-lg shadow-md bg-neutral-100 dark:bg-neutral-800 dark:shadow-black dark:border-black">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="text-indigo-500 w-10 h-8 mb-2 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                </svg>
                <h2 className="title-font font-semibold text-4xl text-gray-900 dark:text-white">
                  1.3K
                </h2>
                <p className="leading-relaxed dark:text-white">Borrowed Books</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 px-4 py-6 rounded-lg shadow-md bg-neutral-100 dark:bg-neutral-800 dark:shadow-black dark:border-black">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="text-indigo-500 w-10 h-8 mb-2 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 18v-6a9 9 0 0118 0v6"></path>
                  <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
                </svg>
                <h2 className="title-font font-semibold text-4xl text-gray-900 dark:text-white">
                  74
                </h2>
                <p className="leading-relaxed dark:text-white">Overdue Books</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 px-4 py-6 rounded-lg shadow-md bg-neutral-100 dark:bg-neutral-800 dark:shadow-black dark:border-black">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="text-indigo-500 w-10 h-8 mb-2 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
                <h2 className="title-font font-semibold text-4xl text-gray-900 dark:text-white">
                  46
                </h2>
                <p className="leading-relaxed dark:text-white">Reserved Books</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col pr-9 lg:flex-row w-full pt-6">
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
                <div className="border-2 dark:border-black rounded-md shadow-md dark:shadow-black p-4">
                  <h3 className="text-lg font-semibold mb-4 dark:text-white">Books List</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full bg-white dark:bg-neutral-800 border dark:border-slate-400 rounded-md">
                      <thead className="bg-gray-100 dark:bg-neutral-600">
                        <tr className="text-left">
                          <th className="px-6 py-3 text-sm font-semibold text-gray-600 dark:text-white">
                            Book ID
                          </th>
                          <th className="px-6 py-3 text-sm font-semibold text-gray-600 dark:text-white">
                            Name
                          </th>
                          <th className="px-6 py-3 text-sm font-semibold text-gray-600 dark:text-white">
                            Author
                          </th>
                          <th className="px-6 py-3 text-sm font-semibold text-gray-600 dark:text-white">
                            Quantity
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 dark:divide-slate-400">
                        <tr className="text-left">
                          <td className="px-6 py-4 whitespace-nowrap dark:text-slate-100">
                            B-10201-30
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap dark:text-slate-100">
                            Ancestor Trouble
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap dark:text-slate-100">
                            Maud Newton
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap dark:text-slate-100">30</td>
                        </tr>
                        <tr className="text-left">
                          <td className="px-6 py-4 whitespace-nowrap dark:text-slate-100">
                            B-35201-31
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap dark:text-slate-100">
                            Life Is Everywhere
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap dark:text-slate-100">
                            Lucy Ives
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap dark:text-slate-100">23</td>
                        </tr>
                        <tr className="text-left">
                          <td className="px-6 py-4 whitespace-nowrap dark:text-slate-100">
                            C-24510-45
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap dark:text-slate-100">
                            Life Of Pie
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap dark:text-slate-100">XXXXX</td>
                          <td className="px-6 py-4 whitespace-nowrap dark:text-slate-100">15</td>
                        </tr>
                        <tr className="text-left">
                          <td className="px-6 py-4 whitespace-nowrap dark:text-slate-100">
                            G-95501-31
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap dark:text-slate-100">
                            Stroller
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap dark:text-slate-100">
                            Amanda Parrish
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap dark:text-slate-100">90</td>
                        </tr>
                        <tr className="text-left">
                          <td className="px-6 py-4 whitespace-nowrap dark:text-slate-100">
                            G-95501-31
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap dark:text-slate-100">
                            Stroller
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap dark:text-slate-100">
                            Amanda Parrish
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap dark:text-slate-100">90</td>
                        </tr>
                        <tr className="text-left">
                          <td className="px-6 py-4 whitespace-nowrap dark:text-slate-100">
                            G-95501-31
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap dark:text-slate-100">
                            Stroller
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap dark:text-slate-100">
                            Amanda Parrish
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap dark:text-slate-100">90</td>
                        </tr>
                        <tr className="text-left">
                          <td className="px-6 py-4 whitespace-nowrap dark:text-slate-100">
                            R-773521-67
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap dark:text-slate-100">
                            The Secret Syllabus
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap dark:text-slate-100">
                            Terence C. Burnham
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap dark:text-slate-100">06</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="flex justify-between">
                    <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
                      Add New Book
                    </button>
                    <a href="#" className="text-pink-500 mt-6">
                      Show All
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex pt-6 justify-between flex-col lg:flex-row">
            <div className="w-full">
              <div className="border-2 dark:border-black rounded-md shadow-md p-4 dark:shadow-black">
                <h3 className="text-lg font-semibold mb-4 dark:text-white">User List</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border dark:border-slate-400 dark:bg-neutral-800 rounded-md">
                    <thead className="bg-gray-100 dark:bg-neutral-600">
                      <tr className="text-left">
                        <th className="px-6 py-3 text-sm font-semibold text-gray-600 dark:text-white">
                          User ID
                        </th>
                        <th className="px-6 py-3 text-sm font-semibold text-gray-600 dark:text-white">
                          Name
                        </th>
                        <th className="px-6 py-3 text-sm font-semibold text-gray-600 dark:text-white">
                          Total Books Issued
                        </th>
                        <th className="px-6 py-3 text-sm font-semibold text-gray-600 dark:text-white">
                          Branch
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-slate-400">
                      <tr className="text-left">
                        <td className="px-6 py-4 whitespace-nowrap dark:text-slate-100">
                          U-10201-30
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap dark:text-slate-100">
                          Alice Johnson
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap dark:text-slate-100">5</td>
                        <td className="px-6 py-4 whitespace-nowrap dark:text-slate-100">
                          Literature
                        </td>
                      </tr>
                      <tr className="text-left">
                        <td className="px-6 py-4 whitespace-nowrap dark:text-slate-100">
                          U-35201-31
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap dark:text-slate-100">
                          Bob Smith
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap dark:text-slate-100">3</td>
                        <td className="px-6 py-4 whitespace-nowrap dark:text-slate-100">History</td>
                      </tr>
                      <tr className="text-left">
                        <td className="px-6 py-4 whitespace-nowrap dark:text-slate-100">
                          U-24510-45
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap dark:text-slate-100">
                          Carol White
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap dark:text-slate-100">7</td>
                        <td className="px-6 py-4 whitespace-nowrap dark:text-slate-100">
                          Social Science
                        </td>
                      </tr>
                      <tr className="text-left">
                        <td className="px-6 py-4 whitespace-nowrap dark:text-slate-100">
                          U-95501-31
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap dark:text-slate-100">
                          David Brown
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap dark:text-slate-100">4</td>
                        <td className="px-6 py-4 whitespace-nowrap dark:text-slate-100">
                          Psychology
                        </td>
                      </tr>
                      <tr className="text-left">
                        <td className="px-6 py-4 whitespace-nowrap dark:text-slate-100">
                          U-773521-67
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap dark:text-slate-100">
                          Eva Green
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap dark:text-slate-100">6</td>
                        <td className="px-6 py-4 whitespace-nowrap dark:text-slate-100">
                          Philosophy
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="flex justify-between">
                  <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
                    Add New User
                  </button>
                  <a href="#" className="text-pink-500 mt-6">
                    Show All
                  </a>
                </div>
              </div>
            </div>
            <div className="ml-4 pt-6 flex-shrink-0 flex items-center">
              <PieChart
                series={[
                  {
                    data: [
                      { id: 0, value: 10, label: "Returned", },
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
