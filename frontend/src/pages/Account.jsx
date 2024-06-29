import React from 'react';
import { useState, useEffect } from 'react';
import Darkmode from './Darkmode';
import Cookies from 'js-cookie';


function Account() {
  // Placeholder data
  // const user=JSON.parse(localStorage.getItem('user'));
  // console.log(user);

  const userCookie = Cookies.get('userId');
if (userCookie) {
  const user=JSON.parse(userCookie);
  console.log('User ID from cookie:', user);
} else {
  console.log('User ID not found in cookie');
}
const user=JSON.parse(userCookie);

  const profile = {
    name: user.userName,
    email: user.userEmail,
    
  };

  function handleLogout()
  {
    window.location.href= 'http://localhost:5175';
    Cookies.remove('userId',{path:'/'});
   
  }

  const borrowedBooks = [
    { title: "Book 1", author: "Author 1", dueDate: "2022-01-01" },
    { title: "Book 2", author: "Author 2", dueDate: "2022-01-01" },
  ];

  const borrowingHistory = [
    { title: "Book 1", author: "Author 1", borrowedDate: "2021-01-01", returnedDate: "2021-01-10" },
    { title: "Book 2", author: "Author 2", borrowedDate: "2021-02-01", returnedDate: "2021-02-10" },
  ];

  const fines = [
    { title: "Book 1", amount: "$5.00", dueDate: "2022-01-01" },
    { title: "Book 2", amount: "$10.00", dueDate: "2022-01-01" },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 flex items-center justify-center p-6">
      <div className="w-full max-w-6xl rounded-lg shadow-lg p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="col-span-1 flex flex-col items-center">
            <div className="w-32 h-32 bg-gray-300 rounded-full mb-4 flex items-center justify-center">
              <span className="text-2xl text-gray-500">+</span>
            </div>
            <button className="text-blue-500 hover:underline">Click to upload a new profile picture</button>
          </div>
          <div className="col-span-2">
            <h2 className="text-3xl font-semibold mb-4 border-b pb-2">Personal Information</h2>
            <div className="space-y-2">
            <p className='dark:text-white'><strong className="text-gray-700 dark:text-slate-400">Name:</strong> {profile.name}</p>
            <p className='dark:text-white'><strong className="text-gray-700 dark:text-slate-400">Email:</strong> {profile.email }</p>
              {/* <p><strong className="text-gray-700">Phone Number:</strong> {profile.phone}</p>
              <p><strong className="text-gray-700">Address:</strong> {profile.address}</p>
              <p><strong className="text-gray-700">Date of Birth:</strong> {profile.dob}</p> */}
            </div>
          </div>
          <Darkmode />
        </div>

        <div className="mb-10">
          <h2 className="text-3xl font-semibold mb-4 border-b pb-2 dark:text-white">Borrowed Books</h2>
          <table className="w-full table-auto bg-white shadow-md rounded">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-4 text-left">Book Title</th>
                <th className="p-4 text-left">Author</th>
                <th className="p-4 text-left">Due Date</th>
                <th className="p-4 text-left">Renewal Option</th>
              </tr>
            </thead>
            <tbody>
              {borrowedBooks.map((book, index) => (
                <tr key={index} className="border-t hover:bg-gray-100">
                  <td className="p-4">{book.title}</td>
                  <td className="p-4">{book.author}</td>
                  <td className="p-4">{book.dueDate}</td>
                  <td className="p-4">
                    <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">Renew</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mb-10">
          <h2 className="text-3xl font-semibold mb-4 border-b pb-2 dark:text-white">Book History</h2>
          <table className="w-full table-auto bg-white shadow-md rounded">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-4 text-left">Book Title</th>
                <th className="p-4 text-left">Author</th>
                <th className="p-4 text-left">Borrowed Date</th>
                <th className="p-4 text-left">Returned Date</th>
              </tr>
            </thead>
            <tbody>
              {borrowingHistory.map((book, index) => (
                <tr key={index} className="border-t hover:bg-gray-100">
                  <td className="p-4">{book.title}</td>
                  <td className="p-4">{book.author}</td>
                  <td className="p-4">{book.borrowedDate}</td>
                  <td className="p-4">{book.returnedDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mb-10">
          <h2 className="text-3xl font-semibold mb-4 border-b pb-2 dark:text-white">Fine Details</h2>
          <table className="w-full table-auto bg-white shadow-md rounded">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-4 text-left">Book Title</th>
                <th className="p-4 text-left">Fine Amount</th>
                <th className="p-4 text-left">Due Date</th>
              </tr>
            </thead>
            <tbody>
              {fines.map((fine, index) => (
                <tr key={index} className="border-t hover:bg-gray-100">
                  <td className="p-4">{fine.title}</td>
                  <td className="p-4">{fine.amount}</td>
                  <td className="p-4">{fine.dueDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-between">
          <button className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">Edit Profile</button>
          <button onClick={()=>handleLogout()}className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">Logout</button>
        </div>
      </div>
    </div>
  );
}

export default Account;
