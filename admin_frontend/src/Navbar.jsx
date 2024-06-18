import React from "react";
import HomeIcon from "@mui/icons-material/Dashboard";
import AccountIcon from "@mui/icons-material/Person";
import BooksIcon from "@mui/icons-material/AutoStories";

function Navbar({ selected, setSelected }) {
  const menuItems = [
    { name: "Home", icon: HomeIcon },
    { name: "Books", icon: BooksIcon },
    { name: "Account", icon: AccountIcon },
  ];

  return (
      <div className="navbar-container">
        <div>
          <div className="navbar-logo">
            <span>
              <img src="iitdh_logo.png" />
            </span>
          </div>
          <div className="navbar-divider">
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
        <div className="logout-button">
          <form action="#">
            <button type="submit" className="logout-button">
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
              <span>Logout</span>
            </button>
          </form>
        </div>
      </div>
  );
}

function MenuItem({ name, icon: Icon, selected, setSelected }) {
  const isSelected = selected === name;

  return (
    <div className="menu-item">
      <a
        href="#"
        onClick={() => setSelected(name)}
        className={`menu-link ${isSelected ? "selected" : ""}`}
      >
        <Icon className={`menu-link-icon ${isSelected ? "selected" : ""}`} />
        <span>{name}</span>
      </a>
    </div>
  );
}

export default Navbar;
