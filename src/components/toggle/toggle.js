import React from "react";
import { ThemeContext } from "../theme-context/theme-context";

const Toggle = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  const handleCheck = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div>
      <label
        htmlFor="theme-toggle"
        className="flex items-center cursor-pointer relative "
        onChange={handleCheck}
      >
        <input type="checkbox" id="theme-toggle" className="sr-only" />
        <div className="toggle-bg bg-toggleBg h-8 w-16 rounded-full dark:bg-toggleBgDark dark:border-toggleBgDark"></div>
      </label>
    </div>
  );
};

export default Toggle;
