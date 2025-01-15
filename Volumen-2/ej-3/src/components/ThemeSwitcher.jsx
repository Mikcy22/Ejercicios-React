import React, { useState } from "react";
import "./ThemeSwitcher.css";

const ThemeSwitcher = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className={`theme-container ${theme}-theme`}>
      <button onClick={toggleTheme} className="theme-button">
        {theme === "light" ? "Switch to Dark" : "Switch to Light"}
      </button>
      <div className="theme-content">
        {children}
      </div>
    </div>
  );
};

export default ThemeSwitcher;
