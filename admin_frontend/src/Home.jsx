import React from "react";
import Time from "./Home_components/Time";

function Home() {
  return (
      <section className=" flex bg-white text-gray-900 body-font h-full w-full pl-14 ">
        <div className="container px-5 py-8 mx-auto">
          <div className="flex flex-col text-left w-full mb-20">
            <h1 className="sm:text-4xl text-4xl font-bold title-font mb-3 text-pink-600">
              Hello, karan_k
            </h1>
            <h2 className="xl:text-3xl sm:text-2xl text-2xl font-normal title-font text-black">
              <Time />
            </h2>
          </div>
          <div className="flex flex-wrap -m-4 text-left">
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 bg-gray-100 border-gray-300 px-4 py-6 rounded-lg shadow-md">
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
              <div className="border-2 bg-gray-100 border-gray-300 px-4 py-6 rounded-lg shadow-md">
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
              <div className="border-2 bg-gray-100 border-gray-300 px-4 py-6 rounded-lg shadow-md">
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
              <div className="border-2 bg-gray-100 border-gray-300 px-4 py-6 rounded-lg shadow-md">
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
        </div>
      </section>
   
  );
}

export default Home;



