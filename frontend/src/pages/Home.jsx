import React from "react";
import image from "../assets/react.svg";


function Home() {
    const books = [{ title: "Book Title 1", imageUrl: image },
    { title: "Book Title 2", imageUrl: image },
    { title: "Book Title 3", imageUrl: image },
    ];
  
    const articles = [
      { title: "Article Title 1", author: "Author 1", imageUrl: image },
      { title: "Article Title 2", author: "Author 2", imageUrl: image },
    ];
    const Article = ({ title, author, imageUrl }) => (
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
        <div className="shrink-0">
          <img className="h-12 w-12" src={imageUrl} alt={title} />
        </div>
        <div>
          <div className="text-xl font-medium text-black">{title}</div>
          <p className="text-slate-500">Author: {author}</p>
        </div>
      </div>
    );
  
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
              <Article title={article.title} author={article.author} imageUrl={article.imageUrl} />
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
  

export default Home;