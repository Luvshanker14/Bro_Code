import React, { useState } from "react";
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

  const [profile, setProfile] = useState({
    name: admin.adminName,
    email: admin.adminEmail,
    password: "",
  });

  const [isUpdateSuccess, setIsUpdateSuccess] = useState(false);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    console.log("Updating profile...", profile);
    setIsUpdateSuccess(true);
    setTimeout(() => {
      setIsUpdateSuccess(false);
    }, 3000);
  };

  const handleLogout = () => {
    Cookies.remove("adminId", { path: "/" });
    window.location.href = "http://localhost:5175";
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-neutral-900 flex items-center justify-center p-6">
      <div className="w-full max-w-6xl bg-white dark:bg-neutral-800 rounded-lg shadow-lg p-8">
        <h2 className="text-3xl text-center font-semibold mb-4 border-b border-gray-500 pb-2 dark:text-white">
          Profile
        </h2>
        <div className="flex justify-center mb-4">
          <img
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            alt="Profile Picture"
            className="w-32 h-32 rounded-full"
          />
        </div>
        <div className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-bold mb-2 dark:text-gray-400"
            >
              Username
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              value={profile.name}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2 dark:text-gray-400"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={profile.email}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2 dark:text-gray-400"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={profile.password}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
            />
          </div>
          <div className="flex flex-col">
            <button
              onClick={handleUpdate}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Update
            </button>
            {isUpdateSuccess && (
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-4 px-4 py-3 bg-green-100 border border-green-400 text-green-700 rounded-lg shadow-lg">
                <strong className="font-bold">Success!</strong>
                <span className="block sm:inline"> Profile updated successfully!</span>
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col mt-4">
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handleLogout}
          >
            Sign out
          </button>
        </div>
      </div>
    </div>
  );
}

export default Account;
