import React from "react";
import Darkmode from "../Darkmode";
import Cookies from "js-cookie";

function Account() {
  // Placeholder data

  const adminCookie = Cookies.get("adminId");
  if (adminCookie) {
    const admin = JSON.parse(adminCookie);
    console.log("Admin ID from cookie:", admin);
  } else {
    console.log("Admin ID not found in cookie");
  }
  const admin = JSON.parse(adminCookie);

  const profile = {
    name: admin.adminName,
    email: admin.adminEmail,
  };

  function handleLogout() {
    Cookies.remove("adminId", { path: "/" });

    window.location.href = "http://localhost:5175";
  }

  const borrowedBooks = [
    { title: "Book 1", author: "Author 1", dueDate: "2022-01-01" },
    { title: "Book 2", author: "Author 2", dueDate: "2022-01-01" },
  ];

  const borrowingHistory = [
    {
      title: "Book 1",
      author: "Author 1",
      borrowedDate: "2021-01-01",
      returnedDate: "2021-01-10",
    },
    {
      title: "Book 2",
      author: "Author 2",
      borrowedDate: "2021-02-01",
      returnedDate: "2021-02-10",
    },
  ];

  const fines = [
    { title: "Book 1", amount: "$5.00", dueDate: "2022-01-01" },
    { title: "Book 2", amount: "$10.00", dueDate: "2022-01-01" },
  ];

  return (
    <div className="min-h-screen rounded-md bg-white dark:bg-neutral-900 flex items-center justify-center p-6">
      <div className="w-full max-w-6xl rounded-lg shadow-[0_0_30px_theme('colors.black')] dark:shadow-[0_0_30px_theme('colors.blue.500')] p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="col-span-1 flex flex-col items-center">
            <div className="w-32 h-32 bg-gray-300 rounded-full mb-4 flex items-center justify-center">
              <span className="text-2xl text-gray-500">+</span>
            </div>
            <button className="text-blue-500 hover:underline">
              Click to upload a new profile picture
            </button>
          </div>
          <div className="col-span-2">
            <h2 className="text-3xl font-semibold mb-4 border-b border-gray-500 pb-2 dark:text-white">
              Personal Information
            </h2>
            <div className="space-y-2">
              <p className="dark:text-white">
                <strong className="text-gray-700 dark:text-slate-400">
                  Name:
                </strong>{" "}
                {profile.name}
              </p>
              <p className="dark:text-white">
                <strong className="text-gray-700 dark:text-slate-400">
                  Email:
                </strong>{" "}
                {profile.email}
              </p>
              {/* <p><strong className="text-gray-700">Phone Number:</strong> {profile.phone}</p>
              <p><strong className="text-gray-700">Address:</strong> {profile.address}</p>
              <p><strong className="text-gray-700">Date of Birth:</strong> {profile.dob}</p> */}
            </div>
          </div>
          <Darkmode />
        </div>
      </div>
    </div>
  );
}
export default Account;
