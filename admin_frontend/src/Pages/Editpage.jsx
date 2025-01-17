import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function EditPage() {
  const navigate = useNavigate();
  const { bookId } = useParams();
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
    image: null, // Assuming image is initially null or empty string
  });

  useEffect(() => {
    if (bookId) {
      axios
        .get(`http://localhost:3000/books/${bookId}`)
        .then((response) => {
          const { data } = response;
          setFormData({
            id: data._id,
            title: data.title,
            description: data.description,
            author: data.author,
            genre: data.genre,
            department: data.department,
            count: data.count,
            vendor: data.vendor,
            vendor_id: data.vendor_id,
            publisher: data.publisher,
            publisher_id: data.publisher_id,
            image: data.image, // Assuming image is a URL or a file object
          });
        })
        .catch((error) => {
          console.error("Error fetching book for edit:", error);
        });
    }
  }, [bookId]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData({
        ...formData,
        [name]: files[0], // Update image file
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    try {
      const response = await axios.put(
        `http://localhost:3000/books/${bookId}`,
        JSON.stringify(Object.fromEntries(formDataToSend)), // Convert FormData to JSON string
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
      window.alert("Book Updated Successfully.");
    } catch (err) {
      console.error(err);
      window.alert("Failed to Update Book.");
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
      image: null,
    });
    window.alert("Form has been cancelled.");
  };

  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this book?"
    );
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:3000/books/${bookId}`);
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
          image: null,
        });
        window.alert("Book Deleted Successfully.");
        navigate("/Editbook"); // Redirect to the book list
      } catch (err) {
        console.error(err);
        window.alert("Failed to Delete Book.");
      }
    }
  };

  function handleBackButton() {
    navigate("/Editbook");
  }

  return (
    <div>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="min-h-screen space-y-12 pt-7 bg-white dark:bg-neutral-900 px-6 rounded-md">
          <div className="border-b border-gray-900 dark:border-white pb-12">
            <button
              onClick={handleBackButton}
              className="absolute text-gray-900 dark:text-white "
            >
              <ArrowBackIcon />
            </button>
            <h2 className="text-center font-bold text-2xl text-black dark:text-white">
              Edit Book
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
                    <option>Mathematics</option>
                    <option>BS-MS</option>
                  </select>
                </div>
              </div>

              <div className="sm:col-span-3">
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
                    autoComplete="family-name"
                    className="block w-full dark:bg-neutral-700 rounded-md border-0 pl-2 py-1.5 text-gray-900 dark:text-slate-50 shadow-sm dark:shadow-black ring-1 ring-inset ring-gray-300 dark:ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="publisher_id"
                  className="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
                >
                  Publisher ID
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="publisher_id"
                    value={formData.publisher_id}
                    onChange={handleChange}
                    placeholder="Publisher ID"
                    required
                    autoComplete="family-name"
                    className="block w-full dark:bg-neutral-700 rounded-md border-0 pl-2 py-1.5 text-gray-900 dark:text-slate-50 shadow-sm dark:shadow-black ring-1 ring-inset ring-gray-300 dark:ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
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
                    autoComplete="family-name"
                    className="block w-full dark:bg-neutral-700 rounded-md border-0 pl-2 py-1.5 text-gray-900 dark:text-slate-50 shadow-sm dark:shadow-black ring-1 ring-inset ring-gray-300 dark:ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="vendor_id"
                  className="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
                >
                  Vendor ID
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="vendor_id"
                    value={formData.vendor_id}
                    onChange={handleChange}
                    placeholder="Vendor ID"
                    required
                    autoComplete="family-name"
                    className="block w-full dark:bg-neutral-700 rounded-md border-0 pl-2 py-1.5 text-gray-900 dark:text-slate-50 shadow-sm dark:shadow-black ring-1 ring-inset ring-gray-300 dark:ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
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
                    autoComplete="family-name"
                    className="block w-full dark:bg-neutral-700 rounded-md border-0 pl-2 py-1.5 text-gray-900 dark:text-slate-50 shadow-sm dark:shadow-black ring-1 ring-inset ring-gray-300 dark:ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="count"
                  className="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
                >
                  Count
                </label>
                <div className="mt-2">
                  <input
                    type="number"
                    name="count"
                    value={formData.count}
                    onChange={handleChange}
                    placeholder="Count"
                    required
                    autoComplete="family-name"
                    className="block w-full dark:bg-neutral-700 rounded-md border-0 pl-2 py-1.5 text-gray-900 dark:text-slate-50 shadow-sm dark:shadow-black ring-1 ring-inset ring-gray-300 dark:ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="image"
                  className="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
                >
                  Upload Cover Photo
                </label>
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 dark:border-white/25 px-6 py-10">
                  <div className="text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-300"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 4.5a1.5 1.5 0 011.5 1.5v2.25h2.25a1.5 1.5 0 110 3H13.5v2.25a1.5 1.5 0 11-3 0V11.25H7.5a1.5 1.5 0 110-3H10.5V6A1.5 1.5 0 0112 4.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                      <label
                        htmlFor="image"
                        className="relative cursor-pointer rounded-md bg-neutral-200 dark:bg-neutral-700 font-semibold text-indigo-600 dark:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="image"
                          name="image"
                          type="file"
                          onChange={handleChange}
                          className="sr-only"
                          required
                        />
                      </label>
                      {formData.image && (
                        <p className="ml-2 text-black dark:text-white">
                          {" "}
                          {/* Display selected file name if available */}
                          {formData.image.name}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 pb-6 flex items-center justify-end gap-x-6">
            <button
              type="button"
              onClick={handleDelete}
              className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 left-24 absolute"
            >
              Delete
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="text-sm font-semibold leading-6 text-gray-900 dark:text-white"
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
    </div>
  );
}
export default EditPage;
