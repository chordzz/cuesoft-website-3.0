import React, { useState } from "react";
import USA from "../../assets/flags/usa.svg";

export const LanguageDropdown = () => {
  const [toggleDropdown, setToggleDropdown] = useState<boolean>(false);
  const [currLanguage] = useState<any>({
    language: "EN",
    flag: USA
  });

  const languages = [
    {
      language: "EN",
      flag: USA
    },

    {
      language: "FR",
      flag: USA
    },

    {
      language: "ESP",
      flag: USA
    }
  ];

  const handleDropdownClick = () => {
    setToggleDropdown(!toggleDropdown);
  };

  return (
    <div className="relative">
      <button
        className="flex items-center justify-between p-2 bg-toggleBg dark:bg-toggleBgDark rounded-md w-24 text-textNormal dark:text-white font-semibold"
        onClick={handleDropdownClick}
      >
        <div className="flex">
          <img src={currLanguage.flag} alt="U.S flag" className="mr-2" />
          <span>{currLanguage.language}</span>
        </div>
        <svg
          className="w-5 h-5 text-gray-800 dark:text-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      <div
        className={`absolute ${
          toggleDropdown ? "block" : "hidden"
        } right-0 py-2 mt-2 bg-toggleBg dark:bg-toggleBgDark rounded-md shadow-xl w-24 z-10 cursor-pointer`}
      >
        {/* <ul> */}
        {languages.map((item) => (
          <div
            key={item.language}
            className="px-4 py-2 text-sm text-textNormal  flex hover:bg-gray-200 dark:hover:bg-toggleBtnDark dark:text-white hover:font-semibold"
          >
            <img src={item.flag} alt="U.S flag" className="mr-2" />
            <span className="">{item.language}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
