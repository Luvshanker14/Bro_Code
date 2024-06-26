import React, { useState } from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { LineChart } from "@mui/x-charts/LineChart";
import SearchIcon from "@mui/icons-material/Search";
import Time from "./Home_components/Time";
import { PieChart } from "@mui/x-charts/PieChart";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex h-full w-full">
      <section className="flex bg-white text-gray-900 body-font h-full w-full pl-5">
        <div className="container px-5 py-6 mx-auto">
          <div className="flex flex-row justify-between items-center w-full mb-10">
            <div>
              <h1 className="sm:text-4xl text-4xl font-bold title-font mb-3 text-pink-600">
                Hello, karan_k
              </h1>
              <h2 className="xl:text-3xl sm:text-2xl text-2xl font-normal title-font text-black">
                <Time />
              </h2>
              <div className="flex flex-row absolute lg:top-6 lg:right-14 space-x-4 lg:space-x-2 mt-4 lg:mt-0">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Start Books"
                    className="search-bar border-2 border-gray-300 p-3 rounded-md w-80 sm:w-96 focus:outline-none focus:border-black"
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
              <div className="border-2 px-4 py-6 rounded-lg shadow-md">
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
                <h2 className="title-font font-semibold text-4xl text-gray-900">
                  2.7K
                </h2>
                <p className="leading-relaxed">Total Visitors</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 px-4 py-6 rounded-lg shadow-md">
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
                <h2 className="title-font font-semibold text-4xl text-gray-900">
                  1.3K
                </h2>
                <p className="leading-relaxed">Borrowed Books</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 px-4 py-6 rounded-lg shadow-md">
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
                <h2 className="title-font font-semibold text-4xl text-gray-900">
                  74
                </h2>
                <p className="leading-relaxed">Overdue Books</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 px-4 py-6 rounded-lg shadow-md">
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
                <h2 className="title-font font-semibold text-4xl text-gray-900">
                  46
                </h2>
                <p className="leading-relaxed">Reserved Books</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col pr-9 lg:flex-row w-full pt-6">
            <div className="flex flex-col items-center space-y-4">
              <h3 className="text-lg font-semibold text-center">
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
              <h3 className="text-lg font-semibold text-center">
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
                <div className="border-2 rounded-md shadow-md p-4">
                  <h3 className="text-lg font-semibold mb-4">Books List</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border rounded-md">
                      <thead className="bg-gray-100">
                        <tr className="text-left">
                          <th className="px-6 py-3 text-sm font-semibold text-gray-600">
                            Book ID
                          </th>
                          <th className="px-6 py-3 text-sm font-semibold text-gray-600">
                            Name
                          </th>
                          <th className="px-6 py-3 text-sm font-semibold text-gray-600">
                            Author
                          </th>
                          <th className="px-6 py-3 text-sm font-semibold text-gray-600">
                            Quantity
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr className="text-left">
                          <td className="px-6 py-4 whitespace-nowrap">
                            B-10201-30
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            Ancestor Trouble
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            Maud Newton
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">30</td>
                        </tr>
                        <tr className="text-left">
                          <td className="px-6 py-4 whitespace-nowrap">
                            B-35201-31
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            Life Is Everywhere
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            Lucy Ives
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">23</td>
                        </tr>
                        <tr className="text-left">
                          <td className="px-6 py-4 whitespace-nowrap">
                            C-24510-45
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            Life Of Pie
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">XXXXX</td>
                          <td className="px-6 py-4 whitespace-nowrap">15</td>
                        </tr>
                        <tr className="text-left">
                          <td className="px-6 py-4 whitespace-nowrap">
                            G-95501-31
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            Stroller
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            Amanda Parrish
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">90</td>
                        </tr>
                        <tr className="text-left">
                          <td className="px-6 py-4 whitespace-nowrap">
                            G-95501-31
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            Stroller
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            Amanda Parrish
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">90</td>
                        </tr>
                        <tr className="text-left">
                          <td className="px-6 py-4 whitespace-nowrap">
                            G-95501-31
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            Stroller
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            Amanda Parrish
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">90</td>
                        </tr>
                        <tr className="text-left">
                          <td className="px-6 py-4 whitespace-nowrap">
                            R-773521-67
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            The Secret Syllabus
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            Terence C. Burnham
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">06</td>
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
              <div className="border-2 rounded-md shadow-md p-4">
                <h3 className="text-lg font-semibold mb-4">User List</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border rounded-md">
                    <thead className="bg-gray-100">
                      <tr className="text-left">
                        <th className="px-6 py-3 text-sm font-semibold text-gray-600">
                          User ID
                        </th>
                        <th className="px-6 py-3 text-sm font-semibold text-gray-600">
                          Name
                        </th>
                        <th className="px-6 py-3 text-sm font-semibold text-gray-600">
                          Total Books Issued
                        </th>
                        <th className="px-6 py-3 text-sm font-semibold text-gray-600">
                          Branch
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr className="text-left">
                        <td className="px-6 py-4 whitespace-nowrap">
                          U-10201-30
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          Alice Johnson
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">5</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          Literature
                        </td>
                      </tr>
                      <tr className="text-left">
                        <td className="px-6 py-4 whitespace-nowrap">
                          U-35201-31
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          Bob Smith
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">3</td>
                        <td className="px-6 py-4 whitespace-nowrap">History</td>
                      </tr>
                      <tr className="text-left">
                        <td className="px-6 py-4 whitespace-nowrap">
                          U-24510-45
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          Carol White
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">7</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          Social Science
                        </td>
                      </tr>
                      <tr className="text-left">
                        <td className="px-6 py-4 whitespace-nowrap">
                          U-95501-31
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          David Brown
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">4</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          Psychology
                        </td>
                      </tr>
                      <tr className="text-left">
                        <td className="px-6 py-4 whitespace-nowrap">
                          U-773521-67
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          Eva Green
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">6</td>
                        <td className="px-6 py-4 whitespace-nowrap">
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
