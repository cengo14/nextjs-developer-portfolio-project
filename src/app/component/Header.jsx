import React from "react";
import ToggleButton from "./ToggleButton";
import useTheme from "next-theme";

const Header = () => {
  const { theme, setTheme } = useTheme();
  return (
    <header className="flex justify-between items-center py-4 px-6 max-w-5xl mx-auto h-16 mt-6 md:mt-12">
      <span></span>
      <ToggleButton setTheme={setTheme} theme={theme} />
    </header>
  );
};

export default Header;
