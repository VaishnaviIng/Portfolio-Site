// ThemeToggleButton.js
import React from "react";

const ThemeToggleButton = ({ isDarkMode, toggleTheme }) => {
  return (
    <button onClick={toggleTheme}>
      {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </button>
  );
};

export default ThemeToggleButton;
