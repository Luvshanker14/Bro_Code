import React, { useState, useEffect } from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { PieChart } from "@mui/x-charts/PieChart";
import axios from 'axios';
import Cookies from 'js-cookie';

function Status() {
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [bookRequestIdToDelete, setBookRequestIdToDelete] = useState('');
  const [actionType, setActionType] = useState('');
  const userCookie = Cookies.get('userId');
  const user = JSON.parse(userCookie);
  const [favoriteBooks, setFavoriteBooks] = useState([]);
  const [borrowingHistory, setBorrowingHistory] = useState([]);
  const [departmentCounts, setDepartmentCounts] = useState({});

  useEffect(() => {
    const fetchBorrowedBooks = async () => {
      try {
        const bookRequestsRes = await axios.get(`http://localhost:3000/bookRequests`);
        const bookRequests = bookRequestsRes.data.filter(request => request.userId === user.userId && request.status !== 'approved');

        const bookIds = bookRequests.map(request => request.bookId);
        const booksRes = await axios.get('http://localhost:3000/books');
        const books = booksRes.data;

        const borrowedBooksData = bookRequests.map(request => {
          const book = books.find(book => book._id === request.bookId);
          return {
            _id: request._id,
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

  useEffect(() => {
    const fetchApprovedRequests = async () => {
      try {
        // Fetch all book requests
        const bookRequestsRes = await axios.get(`http://localhost:3000/bookRequests`);

        // Filter to get only approved requests for the current user
        const approvedRequests = bookRequestsRes.data.filter(request => request.userId === user.userId && request.status === "approved");

        // Fetch all books
        const booksRes = await axios.get('http://localhost:3000/books');
        const books = booksRes.data;

        // Map approved requests to borrowing history data
        const borrowingHistoryData = approvedRequests.map(request => {
          const book = books.find(book => book._id === request.bookId);

          // Calculate due date by adding 30 days to the request date
          const requestDate = new Date(request.requestDate);
          const dueDate = new Date(requestDate);
          dueDate.setDate(dueDate.getDate() + 30);
          console.log(requestDate);

          return {
            _id: request._id,
            title: book.title,
            author: book.author,
            dueDate: dueDate.toLocaleDateString() // Format due date as a readable string
          };
        });

        setBorrowingHistory(borrowingHistoryData);
      } catch (error) {
        console.error('Error fetching approved requests:', error);
      }
    };

    fetchApprovedRequests();
  }, [user.userId]);
  const departmentShortForms = {
    "Computer Science": "CS",
    "Mechanical Engineering": "ME",
    "Electrical Engineering": "EE",
    "Civil Engineering": "CE",
    "Chemical Engineering": "CBE",
    "Engineering Physics": "EP"
  };
  
  useEffect(() => {
    const countBooksByDepartment = () => {
      const favoriteCounts = {};

      favoriteBooks.forEach(book => {
        if (book.department) {
          const shortForm = departmentShortForms[book.department] || book.department;
          if (!favoriteCounts[shortForm]) {
            favoriteCounts[shortForm] = 0;
          }
          favoriteCounts[shortForm]++;
        }
      });

      setDepartmentCounts(favoriteCounts);
    };

    countBooksByDepartment();
  }, [favoriteBooks]);

  const handleCancelRequest = (id) => {
    setBookRequestIdToDelete(id);
    setActionType('cancel');
    setShowModal(true);
  };

  const handleReturnBook = (id) => {
    setBookRequestIdToDelete(id);
    setActionType('return');
    setShowModal(true);
  };

  const handleConfirmDelete = async () => {
    try {
      if (actionType === 'cancel') {
        await axios.delete(`http://localhost:3000/bookRequests/delete/${bookRequestIdToDelete}`);
        setBorrowedBooks(prevBooks => prevBooks.filter(book => book._id !== bookRequestIdToDelete));
      } else if (actionType === 'return') {
        const response = await axios.delete(`http://localhost:3000/bookRequests/return/${bookRequestIdToDelete}`);
        if (response.status === 200) {
          setBorrowingHistory(prevHistory => prevHistory.filter(book => book._id !== bookRequestIdToDelete));
          console.log('Book returned successfully');
        } else {
          console.error('Failed to return book:', response.data.message);
        }
      }
      setShowModal(false);
    } catch (error) {
      console.log('Error handling request', error);
    }
  };

  const handleCancelModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    const fetchFavoriteBooks = async () => {
      try {
        const favoriteBooksRes = await axios.post(`http://localhost:3000/books/getFavouriteBook`, {
          userId: user.userId
        });
        setFavoriteBooks(favoriteBooksRes.data);
      } catch (error) {
        console.log('Error fetching favorite books', error);
      }
    };
    fetchFavoriteBooks();
  }, [user.userId]);


  const removeFavoriteBook = async (bookId) => {
    try {
      await axios.post("http://localhost:3000/books/removeFavouriteBook", {
        bookId,
        userId: user.userId,
      });
      setFavoriteBooks(favoriteBooks.filter(book => book._id !== bookId));
      setAlertMessage("Book removed from liked books.");
      setAlertType("error");
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
    } catch (error) {
      console.error("Error removing book from favorites:", error);
    }
  };

  return (
    <div className="pl-4 min-h-screen bg-white dark:bg-neutral-900 rounded-md">
      <div className="mb-10">
        <h2 className="text-3xl font-semibold mb-4 pt-4 border-b border-gray-500 pb-2 text-black dark:text-slate-100">Book Request</h2>
        <div className="max-h-96 overflow-y-auto shadow-md dark:shadow-black">
          <table loading='lazy' className="w-full table-auto bg-white dark:bg-neutral-800 rounded-md">
            <thead>
              <tr className="bg-gray-200 dark:bg-neutral-600 rounded-md">
                <th className="p-4 text-center text-black dark:text-white">Book Title</th>
                <th className="p-4 text-center text-black dark:text-white">Author</th>
                <th className="p-4 text-center text-black dark:text-white">Status</th>
                <th className="p-4 text-center text-black dark:text-white">Actions</th>
              </tr>
            </thead>
            <tbody>
  {borrowedBooks.length === 0 ? (
    <tr>
      <td colSpan="4" className="p-4 text-center text-black dark:text-slate-100">
        No book requested
      </td>
    </tr>
  ) : (
    borrowedBooks.slice().reverse().map((book, index) => (
      <tr key={index} className="border-t hover:bg-gray-100 dark:hover:bg-gray-800">
        <td className="p-4 text-center text-black dark:text-slate-100">{book.title}</td>
        <td className="p-4 text-center text-black dark:text-slate-100">{book.author}</td>
        <td className="p-4 text-center text-yellow-500">{book.status}</td>
        <td className="p-4 text-center text-red-600 cursor-pointer" onClick={() => handleCancelRequest(book._id)}>{book.actions}</td>
      </tr>
    ))
  )}
</tbody>
          </table>
        </div>

      </div>

      {/* Custom Modal for Confirmation */}
      {showModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div className="inline-block align-bottom bg-white dark:bg-neutral-900 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white dark:bg-neutral-900 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-slate-100">
                      {actionType === 'cancel' ? 'Cancel Book Request' : 'Return Book'}
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500 dark:text-slate-100">
                        {actionType === 'cancel' ? 'Are you sure you want to cancel this book request? This action cannot be undone.' : 'Are you sure you want to return this book? This action cannot be undone.'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-neutral-800 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={handleConfirmDelete}
                >
                  Confirm
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:mt-0 sm:w-auto sm:text-sm"
                  onClick={handleCancelModal}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="mb-10 flex flex-row items-center">
        <div className="w-full">
          <h2 className="text-3xl font-semibold mb-4 pt-4 border-b pb-2 border-gray-500 text-black dark:text-slate-100">Borrowing History</h2>
          <div className="max-h-96 overflow-y-auto shadow-md">
            <table loading='lazy' className="w-full table-auto bg-white dark:bg-neutral-800 shadow-md dark:shadow-black">
              <thead>
                <tr className="bg-gray-200 dark:bg-neutral-600 rounded-md">
                  <th className="p-4 text-center text-black dark:text-white">Book Title</th>
                  <th className="p-4 text-center text-black dark:text-white">Author</th>
                  <th className="p-4 text-center text-black dark:text-white">Due Date</th>
                  <th className="p-4 text-center text-black dark:text-white">Actions</th>
                </tr>
              </thead>
              <tbody>
                {borrowingHistory.length === 0 ? (
                  <tr>
                    <td colSpan="4" className="p-4 text-center text-black dark:text-slate-100">
                      No borrowing history
                    </td>
                  </tr>
                ) : (
                  borrowingHistory.slice().reverse().map((book, index) => (
                    <tr key={index} className="border-t hover:bg-gray-100 dark:hover:bg-gray-800">
                      <td className="p-4 text-center text-black dark:text-slate-100">{book.title}</td>
                      <td className="p-4 text-center text-black dark:text-slate-100">{book.author}</td>
                      <td className="p-4 text-center text-yellow-500">{book.dueDate}</td>
                      <td className="p-4 text-center text-blue-600 cursor-pointer" onClick={() => handleReturnBook(book._id)}>Return</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
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

      <div className="flex flex-row items-center mb-10">
        <BarChart
          xAxis={[
            {
              scaleType: "band",
              // data: ["CS", "ME", "EE", "CE"],
              data: Object.keys(departmentCounts),
            },
          ]}
          series={[
            { data: Object.values(departmentCounts)}
            // { data: [4, 3, 5, 3] },
            // { data: [1, 6, 3, 2] },
            // { data: [2, 5, 6, 1] },
            // { data: [1, 3, 5, 3] },
          ]}
          // xAxis={[]}
          // series={[{ data: Object.values(departmentCounts), label: 'Favorite Books' }]}
          width={600}
          height={350}
        />
        <div className="w-3/4 pr-4 mb-10">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2 border-gray-500 text-black dark:text-slate-100">My Favorite Books</h2>
          <table className="w-full table-auto bg-white dark:bg-neutral-800 shadow-md dark:shadow-black rounded">
            <thead>
              <tr className="bg-gray-200 dark:bg-neutral-600">
                <th className="p-4 text-center text-black dark:text-white">Book Title</th>
                <th className="p-4 text-center text-black dark:text-white">Author</th>
                <th className="p-4 text-center text-black dark:text-white">Actions</th>
              </tr>
            </thead>
            <tbody>
              {favoriteBooks.length === 0 ? (
                <tr>
                  <td colSpan="3" className="p-4 text-center text-black dark:text-slate-100">
                    No favorite books
                  </td>
                </tr>
              ) : (
                favoriteBooks.map((book, index) => (
                  <tr key={index} className="border-t hover:bg-gray-100 dark:hover:bg-gray-800">
                    <td className="p-4 text-center text-black dark:text-slate-100">{book.title}</td>
                    <td className="p-4 text-center text-black dark:text-slate-100">{book.author}</td>
                    <td className="p-4 text-center text-red-600 cursor-pointer" onClick={() => removeFavoriteBook(book._id)}>
                      Remove
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Status;
