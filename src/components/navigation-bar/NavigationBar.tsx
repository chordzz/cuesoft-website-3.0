import { useContext, useState } from "react";

import CuesoftLogo from "../../assets/logos/cuesoft-logo.svg";
import CuesoftLogoDark from "../../assets/logos/cuesoft-logo-dark.svg";
import { ThemeContext } from "../theme-context/theme-context";
import Toggle from "../toggle/toggle";
import { LanguageDropdown } from "../language-dropdown/LanguageDropdown";

const NavigationBar = () => {
  const { theme } = useContext(ThemeContext);

  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(true);
  const [flex, setFlex] = useState(false);

  const handleClick = () => {
    setOpen(!open);
    setHidden(!hidden);
    setFlex(!flex);
  };

  return (
    <div data-testid="navigation-bar">
      <nav className="my-container relative text-[13px] lg:text-[17px]">
        <div className="flex items-center justify-between gap-4">
          <div className="grow lg:grow-0 ">
            <img
              src={theme === "dark" ? CuesoftLogoDark : CuesoftLogo}
              alt="Logo"
              className="w-[150px] h-[90px] lg:h-[113px] lg:w-[201px]"
            />
          </div>

          <div className=" xl:w-[30%] hidden text-textNormal dark:text-white md:flex md:justify-between space-x-6 ">
            <div className="text-brightRed hover:text-brightRedLight font-semibold cursor-pointer dark:text-white dark:hover:text-gray-300">
              About
            </div>
            <div className="text-brightRed hover:text-brightRedLight font-semibold cursor-pointer dark:text-white dark:hover:text-gray-300">
              Services
            </div>
            <div className="text-brightRed hover:text-brightRedLight font-semibold cursor-pointer dark:text-white dark:hover:text-gray-300">
              Product
            </div>
            <div className="text-brightRed hover:text-brightRedLight font-semibold cursor-pointer dark:text-white dark:hover:text-gray-300">
              Contact
            </div>
          </div>

          <div className="flex gap-4 items-center ">
            <div className="hidden md:block">
              <LanguageDropdown />
            </div>
            <div className="hidden md:block">
              <Toggle />
            </div>
            <button className="a-btn hidden md:block">Start a Project</button>
          </div>

          {/* Mobile View */}
          <button
            id="menu-btn"
            className={`block hamburger md:hidden focus:outline-none ${
              open ? "open" : ""
            } `}
            onClick={handleClick}
          >
            <span className="hamburger-top dark:bg-white"></span>
            <span className="hamburger-middle dark:bg-white"></span>
            <span className="hamburger-bottom dark:bg-white"></span>
          </button>

          <div className="md:hidden">
            <div
              id="menu"
              className={`text-textNormal dark:text-white lg:flex absolute gap-8 flex-col ${
                hidden ? "hidden" : ""
              } ${
                flex ? "flex" : ""
              } items-center justify-center text-[15px] py-8 mt-10 space-y-6 font-bold bg-white dark:bg-darkModeBg w-full left-0 drop-shadow-md text-center`}
            >
              <button className="hover:text-blue-500">About</button>
              <button className="hover:text-blue-500">Services</button>
              <button className="hover:text-blue-500">Product</button>
              <button className="hover:text-blue-500">Contact</button>
              <button className="a-btn">Start a Project</button>
              <LanguageDropdown />
              <Toggle />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavigationBar;
