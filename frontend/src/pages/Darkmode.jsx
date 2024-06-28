import React, { useState, useEffect } from "react";

function Darkmode() {
  // Initialize the theme state based on localStorage or system preference
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme;
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    } else {
      return "light";
    }
  });

  useEffect(() => {
    // Apply the theme class to the document element
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    // Save the theme to localStorage
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <div className="text-center">
      <button
        onClick={handleThemeSwitch}
        className="mt-4 px-4 py-2 rounded bg-blue-500 text-white dark:bg-yellow-500 dark:text-gray-900"
      >
        Toggle Dark Mode
      </button>
    </div>
  );
}

export default Darkmode;