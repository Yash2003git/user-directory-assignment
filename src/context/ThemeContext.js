import React, { createContext, useState, useEffect } from "react";

// 1️⃣ Create the context
export const ThemeContext = createContext();

// 2️⃣ Create the provider
export const ThemeProvider = ({ children }) => {
  // Read the previous theme from localStorage (so it remembers on refresh)
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  // Whenever theme changes, update body and save it to localStorage
  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const toggleTheme = () => setDarkMode((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
