import React, { useState } from 'react';

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
      <div className="border-t border-gray-100 bg-white p-2">
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
      {selected === 'Books' && <Books />}
      {/* Other components can be added here based on the selected menu */}
    </div>
  );
}

function Books() {
  const books = [
    { title: 'Amadeus: A Play', image: 'link-to-image-1' },
    { title: 'Annotated Alice: ...', image: 'link-to-image-2' },
    { title: 'Applied Numeric.', image: 'link-to-image-3' },
    { title: 'Artaud Anthology', image: 'link-to-image-4' },
    { title: 'Asterios Polyp', image: 'link-to-image-5' },
    { title: 'Batman: Year One', image: 'link-to-image-6' },
    { title: 'The Great Gatsby', image: 'link-to-image-7' },
    { title: 'To Kill a Mockingbird', image: 'link-to-image-8' },
    { title: '1984', image: 'link-to-image-9' },
    { title: 'Moby-Dick', image: 'link-to-image-10' },
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
        <div>
          <img
            src="link-to-profile-image"
            alt="Profile"
            className="rounded-full w-10 h-10"
          />
        </div>
      </div>
      <div className="flex flex-wrap mb-6">
        <span className="inline-block px-3 py-1.5 ml-4 mr-2 bg-gray-200 rounded-lg cursor-pointer text-black text-xs">All</span>
        <span className="inline-block px-3 py-1.5 mr-2 bg-gray-200 rounded-lg cursor-pointer text-black text-xs">CSE</span>
        <span className="inline-block px-3 py-1.5 mr-2 bg-gray-200 rounded-lg cursor-pointer text-black text-xs">Electrical</span>
        <span className="inline-block px-3 py-1.5 mr-2 bg-gray-200 rounded-lg cursor-pointer text-black text-xs">Mechanical</span>
        <span className="inline-block px-3 py-1.5 mr-2 bg-gray-200 rounded-lg cursor-pointer text-black text-xs">Chemical</span>
        <span className="inline-block px-3 py-1.5 mr-2 bg-gray-200 rounded-lg cursor-pointer text-black text-xs">Civil</span>
        <span className="inline-block px-3 py-1.5 mr-2 bg-gray-200 rounded-lg cursor-pointer text-black text-xs">Physics</span>
        <span className="inline-block px-3 py-1.5 mr-2 bg-gray-200 rounded-lg cursor-pointer text-black text-xs">Mathematics</span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {books.map((book) => (
          <div key={book.title} className="p-4">
            <img src={book.image} alt={book.title} className="w-full h-40 object-cover" />
            <div className="text-center mt-2 text-sm">{book.title}</div>
            <button
              type="button"
              className="mt-2 w-full inline-block rounded border-2 border-neutral-800 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-800 transition duration-150 ease-in-out hover:border-neutral-800 hover:bg-neutral-100 hover:text-neutral-800 hover:text-white focus:border-neutral-800 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none focus:ring-0 active:border-neutral-900 active:text-neutral-900 motion-reduce:transition-none dark:text-neutral-600 dark:hover:bg-neutral-900 dark:focus:bg-neutral-900"
              data-twe-ripple-init
            >
              Borrow
            </button>
          </div>
        ))}
      </div>
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
