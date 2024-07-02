import React, { useState } from "react";
import Sumbitimg from "./Sumbitimg";
import axios from "axios";

const Books = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    author: "",
    genre: "",
    department: "",
    count: "",
    vendor: "",
    vendor_id: "",
    publisher: "",
    publisher_id: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/books/addBook",
        formData
      );
      console.log(response.data);
      // Clear the form after successful submission
      setFormData({
        title: "",
        description: "",
        author: "",
        genre: "",
        department: "",
        count: "",
        vendor: "",
        vendor_id: "",
        publisher: "",
        publisher_id: "",
        image: "",
      });
      console.log("Book added successfully", response.data);
      window.alert("Book Added Successfully.");
    } catch (err) {
      console.error(err);
      window.alert("Failed TO Add");
    }
  };

  const handleCancel = () => {
    setFormData({
      title: "",
      description: "",
      author: "",
      genre: "",
      department: "",
      count: "",
      vendor: "",
      vendor_id: "",
      publisher: "",
      publisher_id: "",
      image: "",
    });
    window.alert("Form has been cancelled.");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="min-h-screen space-y-12 pt-7 bg-white dark:bg-neutral-900 px-6 rounded-md">
        <div className="border-b border-gray-900 dark:border-white pb-12">
          <h2 className="text-center font-bold text-2xl text-black dark:text-white">
            Add Book To Our Database
          </h2>
        </div>

        <div className="border-b border-gray-900 dark:border-white pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="title"
                className="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
              >
                Title
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Title"
                  required
                  autoComplete="given-name"
                  className="block w-full dark:bg-neutral-700 rounded-md border-0 pl-2 py-1.5 text-gray-900 dark:text-slate-50 shadow-sm dark:shadow-black ring-1 ring-inset ring-gray-300 dark:ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="author"
                className="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
              >
                Author
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="author"
                  value={formData.author}
                  onChange={handleChange}
                  placeholder="Author"
                  required
                  autoComplete="family-name"
                  className="block w-full dark:bg-neutral-700 rounded-md border-0 pl-2 py-1.5 text-gray-900 dark:text-slate-50 shadow-sm dark:shadow-black ring-1 ring-inset ring-gray-300 dark:ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="description"
                className="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
              >
                Description
              </label>
              <div className="mt-2">
                <textarea
                  rows="3"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Description"
                  required
                  className="block w-full rounded-md dark:bg-neutral-700 border-0 pl-2 py-1.5 text-gray-900 dark:text-slate-50 shadow-sm dark:shadow-black ring-1 ring-inset ring-gray-300 dark:ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                ></textarea>
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-slate-300">
                Write a few sentences about the book.
              </p>
            </div>

            <div className="sm:col-span-6 sm:col-start-1">
              <label
                htmlFor="department"
                className="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
              >
                Department
              </label>
              <div className="mt-2">
                <select
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  placeholder="Department"
                  required
                  className="block w-full dark:bg-neutral-700 rounded-md border-0 pl-2 py-2 text-gray-900 dark:text-slate-50 shadow-sm dark:shadow-black ring-1 ring-inset ring-gray-300 dark:ring-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>Computer Science</option>
                  <option>Mechanical Engineering</option>
                  <option>Electrical Engineering</option>
                  <option>Civil Engineering</option>
                  <option>Chemical Engineering</option>
                  <option>Engineering Physics</option>
                  <option>BS-MS</option>
                  <option>Mathematics And Computing</option>
                  <option>Physics</option>
                  <option>Chemistry</option>
                  <option>Mathematics</option>
                  <option>Biology</option>
                  <option>Literature</option>
                  <option>Humanities</option>
                  <option>Economics</option>
                  <option>Arts</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="genre"
                className="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
              >
                Genre
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="genre"
                  value={formData.genre}
                  onChange={handleChange}
                  placeholder="Genre"
                  required
                  autoComplete="given-name"
                  className="block w-full dark:bg-neutral-700 rounded-md border-0 pl-2 py-1.5 text-gray-900 dark:text-slate-50 shadow-sm dark:shadow-black ring-1 ring-inset ring-gray-300 dark:ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="count"
                className="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
              >
                Book Count
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="count"
                  value={formData.count}
                  onChange={handleChange}
                  placeholder="Count"
                  required
                  className="block w-full dark:bg-neutral-700 rounded-md border-0 pl-2 py-1.5 text-gray-900 dark:text-slate-50 shadow-sm dark:shadow-black ring-1 ring-inset ring-gray-300 dark:ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label
                htmlFor="vendor"
                className="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
              >
                Vendor
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="vendor"
                  value={formData.vendor}
                  onChange={handleChange}
                  placeholder="Vendor"
                  required
                  className="block w-full dark:bg-neutral-700 rounded-md border-0 pl-2 py-1.5 text-gray-900 dark:text-slate-50 shadow-sm dark:shadow-black ring-1 ring-inset ring-gray-300 dark:ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="vendor_id"
                className="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
              >
                Vendor_ID
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="vendor_id"
                  value={formData.vendor_id}
                  onChange={handleChange}
                  placeholder="Vendor ID"
                  required
                  className="block w-full dark:bg-neutral-700 rounded-md border-0 pl-2 py-1.5 text-gray-900 dark:text-slate-50 shadow-sm dark:shadow-black ring-1 ring-inset ring-gray-300 dark:ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label
                htmlFor="publisher"
                className="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
              >
                Publisher
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="publisher"
                  value={formData.publisher}
                  onChange={handleChange}
                  placeholder="Publisher"
                  required
                  className="block w-full dark:bg-neutral-700 rounded-md border-0 pl-2 py-1.5 text-gray-900 dark:text-slate-50 shadow-sm dark:shadow-black ring-1 ring-inset ring-gray-300 dark:ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="publisher_id"
                className="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
              >
                Publisher_ID
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="publisher_id"
                  value={formData.publisher_id}
                  onChange={handleChange}
                  placeholder="Publisher ID"
                  required
                  className="block w-full dark:bg-neutral-700 rounded-md border-0 pl-2 py-1.5 text-gray-900 dark:text-slate-50 shadow-sm dark:shadow-black ring-1 ring-inset ring-gray-300 dark:ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <div className="pt-11 dark:text-white">
            <Sumbitimg
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="Image URL"
              required
            />
          </div>
        </div>
        <div className="mt-6 flex items-center justify-end gap-x-6 pb-4">
          <button
            type="button"
            onClick={handleCancel}
            className="text-sm font-semibold leading-6 text-gray-900 dark:text-red-600"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default Books;
