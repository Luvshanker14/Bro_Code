import React from "react";
import Sumbitimg from "./Sumbitimg";

function Addbook() {
  return (
    <form>
      <div class="space-y-12 pt-7 bg-white dark:bg-neutral-900 px-6 rounded-md">
        <div class="border-b border-gray-900 dark:border-white pb-12">
          <h2 class="text-center font-bold text-2xl text-black dark:text-white">
            Add Book To Our Database
          </h2>
        </div>

        <div class="border-b border-gray-900 dark:border-white pb-12">
          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="sm:col-span-3">
              <label
                for="title"
                class="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
              >
                Title
              </label>
              <div class="mt-2">
                <input
                  type="text"
                  autocomplete="given-name"
                  class="block w-full dark:bg-neutral-700 rounded-md border-0 pl-2 py-1.5 text-gray-900 dark:text-slate-50 shadow-sm dark:shadow-black ring-1 ring-inset ring-gray-300 dark:ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div class="sm:col-span-3">
              <label
                for="author"
                class="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
              >
                Author
              </label>
              <div class="mt-2">
                <input
                  type="text"
                  autocomplete="family-name"
                  class="block w-full dark:bg-neutral-700 rounded-md border-0 pl-2 py-1.5 text-gray-900 dark:text-slate-50 shadow-sm dark:shadow-black ring-1 ring-inset ring-gray-300 dark:ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div class="col-span-full">
              <label
                for="about"
                class="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
              >
                Description
              </label>
              <div class="mt-2">
                <textarea
                  rows="3"
                  class="block w-full rounded-md dark:bg-neutral-700 border-0 pl-2 py-1.5 text-gray-900 dark:text-slate-50 shadow-sm dark:shadow-black ring-1 ring-inset ring-gray-300 dark:ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                ></textarea>
              </div>
              <p class="mt-3 text-sm leading-6 text-gray-600 dark:text-slate-300">
                Write a few sentences about book.
              </p>
            </div>

            <div class="sm:col-span-6 sm:col-start-1">
              <label
                for="department"
                class="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
              >
                Department
              </label>
              <div class="mt-2">
                <select class="block w-full dark:bg-neutral-700 rounded-md border-0 pl-2 py-2 text-gray-900 dark:text-slate-50 shadow-sm dark:shadow-black ring-1 ring-inset ring-gray-300 dark:ring-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
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
                  <option>Mathematics</option>
                  <option>Literature</option>
                  <option>Humanities</option>
                  <option>Literature</option>
                  <option>Economics</option>
                  <option>Arts</option>
                </select>
              </div>
            </div>

            <div class="sm:col-span-2">
              <label
                for="genre"
                class="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
              >
                Genre
              </label>
              <div class="mt-2">
                <input
                  type="text"
                  autocomplete="given-name"
                  class="block w-full dark:bg-neutral-700 rounded-md border-0 pl-2 py-1.5 text-gray-900 dark:text-slate-50 shadow-sm dark:shadow-black ring-1 ring-inset ring-gray-300 dark:ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div class="sm:col-span-2">
              <label
                for="count"
                class="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
              >
                Book Count
              </label>
              <div class="mt-2">
                <input
                  type="number"
                  class="block w-full dark:bg-neutral-700 rounded-md  border-0 pl-2 py-1.5 text-gray-900 dark:text-slate-50 shadow-sm dark:shadow-black ring-1 ring-inset ring-gray-300 dark:ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div class="sm:col-span-2 sm:col-start-1">
              <label
                for="vendor"
                class="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
              >
                Vendor
              </label>
              <div class="mt-2">
                <input
                  type="text"
                  class="block w-full dark:bg-neutral-700 rounded-md border-0 pl-2 py-1.5 text-gray-900 dark:text-slate-50 shadow-sm dark:shadow-black ring-1 ring-inset ring-gray-300 dark:ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div class="sm:col-span-2">
              <label
                for="vendor_id"
                class="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
              >
                Vendor_ID
              </label>
              <div class="mt-2">
                <input
                  type="number"
                  class="block w-full dark:bg-neutral-700 rounded-md border-0 pl-2 py-1.5 text-gray-900 dark:text-slate-50 shadow-sm dark:shadow-black ring-1 ring-inset ring-gray-300 dark:ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div class="sm:col-span-2 sm:col-start-1">
              <label
                for="publisher"
                class="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
              >
                Publisher
              </label>
              <div class="mt-2">
                <input
                  type="text"
                  class="block w-full dark:bg-neutral-700 rounded-md border-0 pl-2 py-1.5 text-gray-900 dark:text-slate-50 shadow-sm dark:shadow-black ring-1 ring-inset ring-gray-300 dark:ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div class="sm:col-span-2">
              <label
                for="publisher_id"
                class="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
              >
                Publisher_ID
              </label>
              <div class="mt-2">
                <input
                  type="number"
                  class="block w-full dark:bg-neutral-700 rounded-md border-0 pl-2 py-1.5 text-gray-900 dark:text-slate-50 shadow-sm dark:shadow-black ring-1 ring-inset ring-gray-300 dark:ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <div className=" pt-11 dark:text-white">
            <Sumbitimg />
          </div>
        </div>
        <div class="mt-6 flex items-center justify-end gap-x-6 pb-4">
        <button
          type="button"
          class="text-sm font-semibold leading-6 text-gray-900 dark:text-red-600"
        >
          Cancel
        </button>
        <button
          type="submit"
          class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
      </div>
    </form>
  );
}

export default Addbook;
