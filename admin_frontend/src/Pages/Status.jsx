import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Status() {
  const [bookRequests, setBookRequests] = useState([]);
  const [books, setBooks] = useState({});
  const [users, setUsers] = useState({});

  useEffect(() => {
    const fetchBookRequests = async () => {
      try {
        const res = await axios.get('http://localhost:3000/bookRequests');
        if (res.status === 200) {
          setBookRequests(res.data);
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    const fetchBooks = async () => {
      try {
        const res = await axios.get('http://localhost:3000/books');
        if (res.status === 200) {
          const booksData = {};
          res.data.forEach(book => {
            booksData[book._id] = book;
          });
          setBooks(booksData);
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    const fetchUsers = async () => {
      try {
        const res = await axios.get('http://localhost:3000/user');
        if (res.status === 200) {
          const usersData = {};
          res.data.forEach(user => {
            usersData[user._id] = user;
          });
          setUsers(usersData);
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchBookRequests();
    fetchBooks();
    fetchUsers();
  }, []);

  const handleApprove = async (id, email, title, requestDate, name) => {
    try {
      await axios.put(`http://localhost:3000/bookRequests/approve/${id}`);
      setBookRequests(prevRequests => prevRequests.filter(request => request._id !== id));
      await axios.post('http://localhost:3000/mail/send', { email, title, requestDate, name});
    } catch (error) {
      console.log('Error approving request', error);
    }
  };

  const timeAgo = (date) => {
    const seconds = Math.floor((new Date() - new Date(date)) / 1000);
    let interval = Math.floor(seconds / 31536000);

    if (interval > 1) {
      return `${interval} years ago`;
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
      return `${interval} months ago`;
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
      return `${interval} days ago`;
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
      return `${interval} hours ago`;
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
      return `${interval} minutes ago`;
    }
    return `${Math.floor(seconds)} seconds ago`;
  };

  return (
    <div className="min-h-screen rounded-md bg-white dark:bg-neutral-900 items-center justify-center p-3 ">
      <h2 className="text-3xl font-semibold mb-4 border-b pb-2 dark:text-white">
        Book Request
      </h2>
      <table className="w-full table-auto bg-white dark:bg-neutral-800 shadow-md dark:shadow-black rounded-md">
        <thead>
          <tr className="bg-gray-300 dark:bg-neutral-600 rounded-md">
            <th className="p-4 text-center text-black dark:text-white">UserId</th>
            <th className="p-4 text-center text-black dark:text-white">Name</th>
            <th className="p-4 text-center text-black dark:text-white">Book Title</th>
            <th className="p-4 text-center text-black dark:text-white">Request Date</th>
            <th className="p-4 text-center text-black dark:text-white">Status</th>
            <th className="p-4 text-center text-black dark:text-white">Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookRequests.slice().reverse().map((request, index) => (
            <tr key={index} className="border-t hover:bg-gray-100 dark:hover:bg-gray-800">
              <td className="p-4 text-center text-black dark:text-slate-100">
                {users[request.userId] ? `${users[request.userId]._id}` : 'anonymous user'}
              </td>
              <td className="p-4 text-center text-black dark:text-slate-100">
                {users[request.userId] ? `${users[request.userId].name}` : 'anonymous user'}
              </td>
              <td className="p-4 text-center text-black dark:text-slate-100">
                {books[request.bookId] ? books[request.bookId].title : 'Unknown'}
              </td>
              <td className="p-4 text-center text-black dark:text-slate-100">
                {timeAgo(request.requestDate)}
              </td>
              <td className={`p-4 text-center ${request.status === 'approved' ? 'text-green-500' : 'text-yellow-500'}`}>
                {request.status}
              </td>
              <td className="p-4 text-center cursor-pointer">
                {request.status === 'pending' && (
                  <button
                    type="button"
                    onClick={() => handleApprove(request._id, users[request.userId]?.email, books[request.bookId]?.title, request.requestDate, users[request.userId]?.name)}
                    className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                  >
                    Approve
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Status;
