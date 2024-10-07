import { createContext, useState } from "react";
import { themes } from "../utils/constants";
import { ToastContainer } from "react-toastify";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const currentTheme = localStorage.getItem("theme") || themes.DARK;
    return currentTheme;
  });

  const setThemeDark = () => {
    setTheme(themes.DARK);
    localStorage.setItem("theme", themes.DARK);
  };

  const setThemeLight = () => {
    setTheme(themes.LIGHT);
    localStorage.setItem("theme", themes.LIGHT);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setThemeDark,
        setThemeLight,
      }}
    >
      <div id="App" data-theme={theme}>
        {children}
        <ToastContainer theme={theme === themes.DARK ? "dark" : "light"} />
      </div>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
