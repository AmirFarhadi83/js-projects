"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { lightTheme, darkTheme } from "@/styles/theme";
import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles";

// Define an interface for the context
interface ThemeContextProps {
  themeMode: "light" | "dark";
  toggleTheme: () => void;
}

// Create the ThemeContext with a default value
const ThemeContext = createContext<ThemeContextProps>({
  themeMode: "light",
  toggleTheme: () => {},
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState(lightTheme); // default theme is light
  const themeMode: "light" | "dark" = theme.palette.mode; // explicitly type themeMode

  const toggleTheme = () => {
    const newTheme = themeMode === "light" ? darkTheme : lightTheme;
    setTheme(newTheme);
    document.cookie = `theme=${newTheme.palette.mode}; path=/`;
  };

  useEffect(() => {
    const currentTheme = document.cookie
      .split("; ")
      .find((row) => row.startsWith("theme="));
    if (currentTheme) {
      const themeMode = currentTheme.split("=")[1];
      setTheme(themeMode === "dark" ? darkTheme : lightTheme);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ themeMode, toggleTheme }}>
      <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>
    </ThemeContext.Provider>
  );
};

// Custom hook to access the theme context
export const useThemeContext = () => useContext(ThemeContext);
