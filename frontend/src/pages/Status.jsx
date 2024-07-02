import React,{ useState, useEffect } from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { PieChart } from "@mui/x-charts/PieChart";
import axios from 'axios';
import Cookies from 'js-cookie';

function Status() {
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const userCookie = Cookies.get('userId');
  const user = JSON.parse(userCookie);

  useEffect(() => {
    const fetchBorrowedBooks = async () => {
      try {
        const bookRequestsRes = await axios.get(`http://localhost:3000/bookRequests`);
        const bookRequests = bookRequestsRes.data.filter(request => request.userId === user.userId);

        const bookIds = bookRequests.map(request => request.bookId);
        const booksRes = await axios.get('http://localhost:3000/books');
        const books = booksRes.data;

        const borrowedBooksData = bookRequests.map(request => {
          const book = books.find(book => book._id === request.bookId);
          return {
            title: book.title,
            author: book.author,
            status: request.status,
            actions: 'Cancel Request'
          };
        });

        setBorrowedBooks(borrowedBooksData);
      } catch (error) {
        console.log('Error fetching borrowed books', error);
      }
    };
    fetchBorrowedBooks();
  }, [user.userId]);

  const borrowingHistory = [
    { title: "Book 1", author: "Author 1", dueDate: "2022-01-01" },
    { title: "Book 2", author: "Author 2", dueDate: "2022-01-01" },
  ];
  // const borrowedBooks = [
  //   { title: "Book 1", author: "Author 1", Status: "Pending", Actions: "Cancel Request" },
  //   { title: "Book 2", author: "Author 2", Status: "Pending", Actions: "Cancel Request" },
  // ];
  const favoriteBooks = [
    { title: "Book 3", author: "Author 3" },
    { title: "Book 4", author: "Author 4" },
  ];

  return (
    <div className="pl-4 bg-white dark:bg-neutral-900 rounded-md">
      <div className="mb-10">
        <h2 className="text-3xl font-semibold mb-4 border-b pb-2 text-slate-800 dark:text-slate-100">Book Request</h2>
        <table className="w-full table-auto bg-white dark:bg-neutral-800 shadow-md dark:shadow-black rounded-md">
          <thead>
            <tr className="bg-gray-200 dark:bg-neutral-600 rounded-md">
              <th className="p-4 text-center text-slate-600 dark:text-white">Book Title</th>
              <th className="p-4 text-center text-slate-600 dark:text-white">Author</th>
              <th className="p-4 text-center text-slate-600 dark:text-white">Status</th>
              <th className="p-4 text-center text-slate-600 dark:text-white">Actions</th>
            </tr>
          </thead>
          <tbody>
            {borrowedBooks.slice().reverse().map((book, index) => (
              <tr key={index} className="border-t hover:bg-gray-100 dark:hover:bg-gray-800">
                <td className="p-4 text-center text-gray-600 dark:text-slate-100">{book.title}</td>
                <td className="p-4 text-center text-gray-600 dark:text-slate-100">{book.author}</td>
                <td className="p-4 text-center text-yellow-500">{book.status}</td>
                <td className="p-4 text-center text-red-600 cursor-pointer">{book.actions}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex mb-10">
        <div className="w-3/5 pr-4">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2 text-slate-800 dark:text-slate-100">Borrowed Books</h2>
          <table className="w-full table-auto bg-white dark:bg-neutral-800 shadow-md dark:shadow-black rounded-md">
            <thead>
              <tr className="bg-gray-200 dark:bg-neutral-600">
                <th className="p-4 text-center text-slate-600 dark:text-white">Book Title</th>
                <th className="p-4 text-center text-slate-600 dark:text-white">Author</th>
                <th className="p-4 text-center text-slate-600 dark:text-white">Due Date</th>
              </tr>
            </thead>
            <tbody>
              {borrowingHistory.map((book, index) => (
                <tr key={index} className="border-t hover:bg-gray-100 dark:hover:bg-gray-800">
                  <td className="p-4 text-center text-gray-600 dark:text-slate-100">{book.title}</td>
                  <td className="p-4 text-center text-gray-600 dark:text-slate-100">{book.author}</td>
                  <td className="p-4 text-center text-red-600">{book.dueDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div> 
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

      <div className="flex mb-10">

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

        <div className="w-3/4 pr-4">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2 text-slate-800 dark:text-slate-100">My Favorite Books</h2>
          <table className="w-full table-auto bg-white dark:bg-neutral-800 shadow-md dark:shadow-black rounded">
            <thead>
              <tr className="bg-gray-200 dark:bg-neutral-600">
                <th className="p-4 text-center text-slate-600 dark:text-white">Book Title</th>
                <th className="p-4 text-center text-slate-600 dark:text-white">Author</th>
              </tr>
            </thead>
            <tbody>
              {favoriteBooks.map((book, index) => (
                <tr key={index} className="border-t hover:bg-gray-100 dark:hover:bg-gray-800">
                  <td className="p-4 text-center text-gray-600 dark:text-slate-100">{book.title}</td>
                  <td className="p-4 text-center text-gray-600 dark:text-slate-100">{book.author}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}

export default Status;