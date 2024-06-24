import React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { PieChart } from "@mui/x-charts/PieChart";

function Status() {
  const borrowedBooks = [
    { title: "Book 1", author: "Author 1", dueDate: "2022-01-01" },
    { title: "Book 2", author: "Author 2", dueDate: "2022-01-01" },
  ];
  const borrowingHistory = [
    { title: "Book 1", author: "Author 1", Status: "Pending", Actions: "Cancel Request" },
    { title: "Book 2", author: "Author 2", Status: "Pending", Actions: "Cancel Request" },
  ];
  const favoriteBooks = [
    { title: "Book 3", author: "Author 3" },
    { title: "Book 4", author: "Author 4" },
  ];

  return (
    <div className="w-full">
      <div className="mb-10">
        <h2 className="text-3xl font-semibold mb-4 border-b pb-2 text-slate-800">Book Request</h2>
        <table className="w-full table-auto bg-white shadow-md rounded">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-4 text-center text-slate-600">Book Title</th>
              <th className="p-4 text-center text-slate-600">Author</th>
              <th className="p-4 text-center text-slate-600">Status</th>
              <th className="p-4 text-center text-slate-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {borrowingHistory.map((book, index) => (
              <tr key={index} className="border-t hover:bg-gray-100">
                <td className="p-4 text-center text-gray-600">{book.title}</td>
                <td className="p-4 text-center text-gray-600">{book.author}</td>
                <td className="p-4 text-center text-gray-600">{book.Status}</td>
                <td className="p-4 text-center text-red-600 cursor-pointer">{book.Actions}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex mb-10">
        <div className="w-3/5 pr-4">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2 text-slate-800">Borrowed Books</h2>
          <table className="w-full table-auto bg-white shadow-md rounded">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-4 text-center text-slate-600">Book Title</th>
                <th className="p-4 text-center text-slate-600">Author</th>
                <th className="p-4 text-center text-slate-600">Due Date</th>
              </tr>
            </thead>
            <tbody>
              {borrowedBooks.map((book, index) => (
                <tr key={index} className="border-t hover:bg-gray-100">
                  <td className="p-4 text-center text-gray-600">{book.title}</td>
                  <td className="p-4 text-center text-gray-600">{book.author}</td>
                  <td className="p-4 text-center text-gray-600">{book.dueDate}</td>
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
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2 text-slate-800">My Favorite Books</h2>
          <table className="w-full table-auto bg-white shadow-md rounded">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-4 text-center text-slate-600">Book Title</th>
                <th className="p-4 text-center text-slate-600">Author</th>
              </tr>
            </thead>
            <tbody>
              {favoriteBooks.map((book, index) => (
                <tr key={index} className="border-t hover:bg-gray-100">
                  <td className="p-4 text-center text-gray-600">{book.title}</td>
                  <td className="p-4 text-center text-gray-600">{book.author}</td>
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