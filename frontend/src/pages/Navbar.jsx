import React from "react";
import HomeIcon from "@mui/icons-material/Dashboard";
import AccountIcon from "@mui/icons-material/Person";
import BooksIcon from "@mui/icons-material/AutoStories";
import Cookies from 'js-cookie';

function Navbar({ selected, setSelected }) {

  //const userCookie = Cookies.get('userId');
  //const user=JSON.parse(userCookie);

  const menuItems = [
    { name: "Home", icon: HomeIcon },
    { name: "Books", icon: BooksIcon },
    { name: "Status", icon: StatusIcon },
    { name: "Account", icon: AccountIcon },
  ];

  function handleLogout(event)
  {
    event.preventDefault();
    window.location.href= 'http://localhost:5175';
    Cookies.remove('userId',{path:'/'});

  }

  return (
    <div className="flex flex-col justify-between w-16 h-screen border-t-8 border-b-8 border-l-4 rounded-lg dark:border-black border-slate-200 bg-white dark:bg-neutral-900 sticky top-0 left-0 bg-[rgba(173,216,230,0.6)] border-2 border-r-[rgba(30,28,28,0.18)]">
      <div>
        <div className="inline-flex justify-center items-center w-16 h-16 pt-4 pb-4">
        <button onClick={() => setSelected("Home")}>
          <span className="grid items-center pr-1 w-11 h-10 text-xs  bg-transparent text-gray-600 rounded-md">
            <img src="iitdh_logo.png" />
          </span>
          </button>
        </div>
        <div className=" border-t border-white">
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
      <div className="py-2 px-2">
        <form action="#">
          <button
            type="submit"
            className="group relative flex w-full justify-center rounded-md px-2 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:hover:bg-neutral-700 dark:hover:text-slate-100"
            onClick={
              handleLogout
            }
          >
            <LogoutIcon />
            <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 dark:bg-slate-300 px-3 py-1.5 text-sm font-semibold  text-white  dark:text-black group-hover:visible group-hover:shadow-slate-400">
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
        className={`group relative flex justify-center rounded px-2 py-1.5 ${
          isSelected
            ? "bg-blue-100 dark:bg-neutral-900 text-blue-700 transition ease-in-out delay-30 -translate-y-0.5  scale-10 duration-150 shadow-md shadow-slate-400 dark:shadow-slate-200"
            : "text-gray-500 hover:bg-gray-300 dark:hover:bg-neutral-700 hover:text-slate-700 dark:hover:text-slate-50"
        }`}
      >
        <Icon
          className={`size-5 opacity-100 ${isSelected ? "fill-black" : ""}`}
        />
        <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 dark:bg-slate-300 px-2 py-1.5 text-sm font-semibold text-white dark:text-black group-hover:visible">
          {name}
        </span>
      </a>
    </div>
  );
}

function StatusIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="37"
      fill="none"
      viewBox="0 0 36 37"
      stroke="currentColor"
      strokeWidth="2"
      {...props}
    >
      <path
        strokeLinecap="round"
        fill="currentColor"
        strokeLinejoin="round"
        stroke="currentColor"
        d="M9.9 3.616H4.5a.9.9 0 0 0-.9.9v5.4a.9.9 0 0 0 .9.9h5.4a.9.9 0 0 0 .9-.9v-5.4a.9.9 0 0 0-.9-.9Zm21.6 21.6h-5.4a.9.9 0 0 0-.9.9v5.4a.9.9 0 0 0 .9.9h5.4a.9.9 0 0 0 .9-.9v-5.4a.9.9 0 0 0-.9-.9Zm-23.4-1.8v-10.8H6.3v10.8a6.307 6.307 0 0 0 6.3 6.3h10.8v-1.8H12.6a4.506 4.506 0 0 1-4.5-4.5Zm19.8-10.8v10.8h1.8v-10.8a6.307 6.307 0 0 0-6.3-6.3H12.6v1.8h10.8a4.505 4.505 0 0 1 4.5 4.5Z"
      />
    </svg>
  );
}

function LogoutIcon() {
  return(<svg
    xmlns="http://www.w3.org/2000/svg"
    className="size-7 opacity-100"
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
  );
}

export default Navbar;
