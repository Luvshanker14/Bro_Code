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

  const handleApprove = async (id) => {
    try {
      await axios.put(`http://localhost:3000/bookRequests/approve/${id}`);
      setBookRequests(prevRequests => prevRequests.filter(request => request._id !== id));
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
    <div className="p-4">
      <h1 className="text-2xl mb-4">Book Requests</h1>
      {bookRequests.map(request => (
        <div key={request._id} className="flex p-4 border-b dark:border-gray-600 text-sm">
          <div className="flex-1">
            <div className="flex items-center mb-1">
              <span className="font-bold mr-1 text-xs truncate">
                {users[request.userId] ? `@${users[request.userId].username}` : 'anonymous user'}
              </span>
              <span className="text-gray-500 text-xs">
                {timeAgo(request.requestDate)}
              </span>
            </div>
            <p className="text-gray-500 pb-2">Book: {books[request.bookId] ? books[request.bookId].title : 'Unknown'}</p>
            <p className="text-gray-500 pb-2">Status: {request.status}</p>
            <div className="flex items-center pt-2 text-xs border-t dark:border-gray-700 max-w-fit gap-2">
              {request.status === 'pending' && (
                <button
                  type="button"
                  onClick={() => handleApprove(request._id)}
                  className="px-3 py-1 bg-purple-600 text-white rounded hover:bg-purple-700"
                >
                  Approve
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Status;