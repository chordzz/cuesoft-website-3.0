/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";

import CuesoftLogo from "../../assets/logos/cuesoft-logo.svg";

const NavigationBar = () => {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(true);
  const [flex, setFlex] = useState(false);

  const handleClick = () => {
    setOpen(!open);
    setHidden(!hidden);
    setFlex(!flex);
  };

  return (
    <div>
      <nav className="my-container relative">
        <div className="flex items-center justify-between">
          <div className="grow md:grow-0 ">
            <img
              src={CuesoftLogo}
              alt="Logo"
              className="w-[150px] h-[90px] md:h-[113px] md:w-[201px]"
            />
          </div>

          <div className="hidden text-textNormal md:flex space-x-6 ">
            <a href="#" className="hover:text-blue-500">
              About
            </a>
            <a href="#" className="hover:text-blue-500">
              Services
            </a>
            <a href="#" className="hover:text-blue-500">
              Product
            </a>
            <a href="#" className="hover:text-blue-500">
              Contact
            </a>
          </div>

          <a href="#" className="a-btn hidden">
            Start a Project
          </a>

          {/* Mobile View */}
          <button
            id="menu-btn"
            className={`block hamburger md:hidden focus:outline-none ${
              open ? "open" : ""
            }`}
            onClick={handleClick}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>

          <div className="md:hidden">
            <div
              id="menu"
              className={`text-textNormal md:flex space-x-6 absolute gap-8 flex-col ${
                hidden ? "hidden" : ""
              } ${
                flex ? "flex" : ""
              } items-center  self-end py-8 mt-10 space-y-6 font-bold bg-white w-full sm:self-center left-0 drop-shadow-md`}
            >
              <a href="#" className="hover:text-blue-500">
                About
              </a>
              <a href="#" className="hover:text-blue-500">
                Services
              </a>
              <a href="#" className="hover:text-blue-500">
                Product
              </a>
              <a href="#" className="hover:text-blue-500">
                Contact
              </a>
              <a href="#" className="a-btn">
                Start a Project
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavigationBar;
