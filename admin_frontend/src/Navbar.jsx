import React from "react";
import HomeIcon from "@mui/icons-material/Dashboard";
import AccountIcon from "@mui/icons-material/Person";
import BooksIcon from "@mui/icons-material/AutoStories";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";

function Navbar({ selected, setSelected }) {
  const menuItems = [
    { name: "Home", icon: HomeIcon },
    { name: "Books", icon: BooksIcon },
    { name: "Account", icon: AccountIcon },
  ];

  return (
    <div className=" px-1 py-2 fixed  "> 
    <div className="flex flex-col justify-between w-16 h-screen bg-blue  top-0 left-0 bg-[rgba(173,216,230,0.6)] border-r-[1px] border-r-[rgba(30,28,28,0.18)] rounded-md ">
      <div>
        <div className="inline-flex justify-center items-center w-16 h-16 pt-4 pb-4">
          <span className="grid place-content-center w-10 h-10 text-xs leading-4 bg-transparent text-gray-600 rounded-md">
            <img src="iitdh_logo.png" />
          </span>
        </div>
        <div className=" border-t-2 border-t-gray-200/100">
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
      <div  className="group relative flex  justify-center rounded-lg px-2 py-1.5 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
          >
        <form action="#">
          <button
            type="submit"
          >
            <LogoutRoundedIcon  className="size-5 opacity-75"/>
            <span className="invisible absolute start-full top-1/2 ms-2 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
              Logout
            </span>
          </button>
        </form>
      </div>
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
            ? "bg-blue-50 text-blue-700"
            : "text-gray-500 hover:bg-gray-50 hover:text-gray-700"
        }`}
      >
        <Icon
          className={`size-5 opacity-75 ${isSelected ? "fill-black" : ""}`}
        />
        <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
          {name}
        </span>
      </a>
    </div>
  );
}

export default Navbar;
