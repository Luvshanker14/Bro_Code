import React, { useState } from 'react';
import { FaHeart,FaRegHeart } from 'react-icons/fa';
import image from './assets/react.svg';


function App() {
  const [selected, setSelected] = useState('Dashboard');

  return (
    <div style={{ backgroundColor: 'white', display: 'flex' }}>
      <Navbar selected={selected} setSelected={setSelected} />
      <MainContent selected={selected} />
    </div>
  );

}
function Navbar({ selected, setSelected }) {
  const menuItems = [
    { name: 'Dashboard', icon: DashboardIcon },
    { name: 'Books', icon: BooksIcon },
    { name: 'Status', icon: StatusIcon },
    { name: 'Account', icon: AccountIcon },
  ];

  return (
    <div className="flex h-screen w-16 flex-col justify-between border-e bg-white">
      <div>
        <div className="inline-flex size-16 items-center justify-center py-4">
          <span className="grid size-10 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600">
            Logo
          </span>
        </div>
        <div className="border-t border-gray-100">
          <div className="px-2">
            <div className="py-4">
              {menuItems.map((item) => (
                <MenuItem
                  key={item.name}
                  name={item.name}
                  icon={item.icon}
                  selected={selected}
                  setSelected={setSelected}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-100 bg-white p-2 logout-button">
        <form action="#">
          <button
            type="submit"
            className="group relative flex w-full justify-center rounded-lg px-2 py-1.5 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5 opacity-75"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
              Logout
            </span>
          </button>
        </form>
      </div>
    </div>
  );
}

function MenuItem({ name, icon: Icon, selected, setSelected }) {
  const isSelected = selected === name;

  return (
    <div className="py-4">
      <a
        href="#"
        onClick={() => setSelected(name)}
        className={`group relative flex justify-center rounded px-2 py-1.5 ${isSelected ? 'bg-blue-50 text-blue-700' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-700'
          }`}
      >
        <Icon className={`size-5 opacity-75 ${isSelected ? 'fill-black' : ''}`} />
        <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
          {name}
        </span>
      </a>
    </div>
  );
}

function MainContent({ selected }) {
  return (
    <div className="flex-1 p-4">
      {/* Render different components based on the selected menu */}
      {selected === 'Books' && <Books />}
      {selected === 'Dashboard' && <Dashboard />}
      {selected === 'Account' && <Account />}
      {selected === 'Status' && <Status />}
    </div>
  );
}

function Books() {
  const books = [
    { title: 'Amadeus: A Play', image: image},
    { title: 'Annotated Alice: ...', image: image},
    { title: 'Applied Numeric.', image: image },
    { title: 'Artaud Anthology', image: image },
    { title: 'Asterios Polyp', image: image },
    { title: 'Batman: Year One', image: image },
    { title: 'The Great Gatsby', image: image },
    { title: 'To Kill a Mockingbird', image: image },
    { title: '1984', image: image },
    { title: 'Moby-Dick', image: image },
    // Add more book data here
  ];

  return (
    <div>
      <div className="flex items-center justify-between p-4">
        <input
          type="text"
          placeholder="Start Searching..."
          className="w-1/2 p-2 border rounded bg-white"
        />
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-white text-black rounded-box w-52">
            <li>
              <a className="justify-between">
                Account
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>
      <div className="flex flex-wrap ml-4 mb-6">
        <span className="inline-block px-3 py-1.5 mb-2 mr-2 bg-gray-200 rounded-lg cursor-pointer text-black text-xs">All</span>
        <span className="inline-block px-3 py-1.5 mb-2 mr-2 bg-gray-200 rounded-lg cursor-pointer text-black text-xs">CSE</span>
        <span className="inline-block px-3 py-1.5 mb-2 mr-2 bg-gray-200 rounded-lg cursor-pointer text-black text-xs">Electrical</span>
        <span className="inline-block px-3 py-1.5 mb-2 mr-2 bg-gray-200 rounded-lg cursor-pointer text-black text-xs">Mechanical</span>
        <span className="inline-block px-3 py-1.5 mb-2 mr-2 bg-gray-200 rounded-lg cursor-pointer text-black text-xs">Chemical</span>
        <span className="inline-block px-3 py-1.5 mb-2 mr-2 bg-gray-200 rounded-lg cursor-pointer text-black text-xs">Civil</span>
        <span className="inline-block px-3 py-1.5 mb-2 mr-2 bg-gray-200 rounded-lg cursor-pointer text-black text-xs">Physics</span>
        <span className="inline-block px-3 py-1.5 mb-2 mr-2 bg-gray-200 rounded-lg cursor-pointer text-black text-xs">Mathematics</span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {books.map((book) => (
          <div key={book.title} className="p-4">
            <img src={book.image} alt={book.title} className="w-full h-40 object-cover" />
            <div className="text-center mt-2 text-sm">{book.title}</div>
            <div className="flex w-full">
            <button
              type="button"
              className="mt-2 w-4/5 mr-2 inline-block rounded border-2 border-neutral-800 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-800 transition duration-150 ease-in-out hover:border-neutral-800 hover:bg-neutral-100 hover:text-white focus:border-neutral-800 focus:bg-neutral-100 focus:text-white focus:ring-0 active:border-neutral-900 active:text-neutral-900 motion-reduce:transition-none dark:text-neutral-600 dark:hover:bg-neutral-900 dark:focus:bg-neutral-900"
              data-twe-ripple-init
            >
              Borrow
            </button>
            {/* <svg xmlns="http://www.w3.org/2000/svg" className="mt-3.5" fill="red" style={{cursor:"pointer"}} width="24" height="24" viewBox="0 0 24 24"><path d="M12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412l7.332 7.332c.17.299.498.492.875.492a.99.99 0 0 0 .792-.409l7.415-7.415c2.354-2.354 2.354-6.049-.002-8.416a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595zm6.791 1.61c1.563 1.571 1.564 4.025.002 5.588L12 18.586l-6.793-6.793c-1.562-1.563-1.561-4.017-.002-5.584.76-.756 1.754-1.172 2.799-1.172s2.035.416 2.789 1.17l.5.5a.999.999 0 0 0 1.414 0l.5-.5c1.512-1.509 4.074-1.505 5.584-.002z"/></svg> */}
            {/* <svg xmlns="http://www.w3.org/2000/svg" className="mt-3.5" fill="red" style={{cursor:"pointer"}} width="24" height="24" viewBox="0 0 24 24"><path d="M20.205 4.791a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412L12 21.414l8.207-8.207c2.354-2.353 2.355-6.049-.002-8.416z"/></svg> */}
            </div>
            
          </div>
        ))}
      </div>

      {/* Pagination Component */}
      <div className="flex justify-center">
        <div className="inline-flex gap-1">
          <a
            href="#"
            className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
          >
            <span className="sr-only">Prev Page</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </a>

          <div>
            <label htmlFor="PaginationPage" className="sr-only">Page</label>

            <input
              type="number"
              className="h-8 w-12 rounded border border-gray-100 bg-white p-0 text-center text-xs font-medium text-gray-900 [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
              min="1"
              value="1"
              id="PaginationPage"
            />
          </div>

          <a
            href="#"
            className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
          >
            <span className="sr-only">Next Page</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
}

function Account() {
  return (
    <div>
      <h1>Account</h1>

    </div>
  );
}

function Status() {
  return (
    <div>
      <h1>Status</h1>
    </div>
  );
}

function DashboardIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="none" viewBox="0 0 19 19" {...props}>
      <path fill="currentColor" d="M10.216.018v6h8v-6m-8 18h8v-10h-8m-10 10h8v-6h-8v10Z" />
    </svg>
  );
}

function BooksIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="37" fill="none" viewBox="0 0 36 37" stroke="currentColor" strokeWidth="2" {...props}>
      <path strokeLinecap="round" fill="currentColor" strokeLinejoin="round" stroke="white" d="M17.1 6.878c-1.37-.909-3.422-1.462-5.85-1.462-4.433 0-7.65 1.823-7.65 4.336v20.864a.9.9 0 1 0 1.8 0c0-1.277 2.403-2.7 5.85-2.7 1.9 0 3.483.432 4.521 1.034.591.343 1.329-.104 1.329-.788V6.878Zm7.65-1.462c-2.428 0-4.48.553-5.85 1.462v21.284c0 .684.738 1.13 1.329.788 1.038-.602 2.622-1.034 4.521-1.034 3.447 0 5.85 1.423 5.85 2.7a.9.9 0 1 0 1.8 0V9.752c0-2.513-3.217-4.336-7.65-4.336Z" />
    </svg>
  );
}

function StatusIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="37" fill="none" viewBox="0 0 36 37" stroke="currentColor" strokeWidth="2" {...props}>
      <path strokeLinecap="round" fill="currentColor" strokeLinejoin="round" stroke="currentColor" d="M9.9 3.616H4.5a.9.9 0 0 0-.9.9v5.4a.9.9 0 0 0 .9.9h5.4a.9.9 0 0 0 .9-.9v-5.4a.9.9 0 0 0-.9-.9Zm21.6 21.6h-5.4a.9.9 0 0 0-.9.9v5.4a.9.9 0 0 0 .9.9h5.4a.9.9 0 0 0 .9-.9v-5.4a.9.9 0 0 0-.9-.9Zm-23.4-1.8v-10.8H6.3v10.8a6.307 6.307 0 0 0 6.3 6.3h10.8v-1.8H12.6a4.506 4.506 0 0 1-4.5-4.5Zm19.8-10.8v10.8h1.8v-10.8a6.307 6.307 0 0 0-6.3-6.3H12.6v1.8h10.8a4.505 4.505 0 0 1 4.5 4.5Z" />
    </svg>
  );
}

function AccountIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="size-5 opacity-75"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="currentColor"
        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
      />
    </svg>
  );
}

export default App;
