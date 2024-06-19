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
    <div className="fixed h-full bg-slate-100 border-r border-grey-500 flex flex-col justify-between">
      <div>
        <div className="flex justify-center items-center w-full h-16 pt-4 pb-4">
          <span className="grid justify-center items-center w-10 h-10 text-xs pr-0 leading-4 text-black ">
            <img src="iitdh_logo.png" alt="Logo" />
          </span>
        </div>
        <div className="border-t-2 border-gray-200">
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
      <div className="px-2 pb-4 bottom-0">
        <div className="relative flex justify-center rounded-lg px-2 py-1.5 text-sm text-gray-500 hover:bg-gray-200 hover:text-gray-700">
          <form action="#">
            <button
              type="submit"
              className="group relative flex justify-center w-full"
            >
              <LogoutRoundedIcon className="opacity-100 " />
              <span className="invisible absolute start-full top-1/2 ms-6 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
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
        className={`group relative flex justify-center w-full rounded px-2 py-1.5 ${
          isSelected
            ? "bg-blue-50 text-blue-700"
            : "text-gray-500 hover:bg-gray-200 hover:text-gray-700"
        }`}
      >
        <Icon
          className={`size-5 opacity-100 ${isSelected ? "fill-black" : ""}`}
        />
        <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
          {name}
        </span>
      </a>
    </div>
  );
}
export default Navbar;
