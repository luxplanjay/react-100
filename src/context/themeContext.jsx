import { createContext, useContext, useState } from "react";

const themeContext = createContext();

export const useTheme = () => {
  const value = useContext(themeContext);
  return value;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  return (
    <themeContext.Provider value={{ theme }}>{children}</themeContext.Provider>
  );
};
