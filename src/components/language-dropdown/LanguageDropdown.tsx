import React, { useEffect, useState } from "react";

import "flag-icons";
import i18n from "../../i18n";

export const LanguageDropdown = () => {
  const [toggleDropdown, setToggleDropdown] = useState<boolean>(false);
  const [currLanguage, setCurrLanguage] = useState<any>({});

  useEffect(() => {
    const savedLang = localStorage.getItem("i18nextLng");

    languages.forEach((item) => {
      if (item.language.toLowerCase() === savedLang) setCurrLanguage(item);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const languages = [
    {
      language: "EN",
      country_code: "gb"
    },

    {
      language: "FR",
      country_code: "fr"
    }
  ];

  const changeLanguage = (ln: string) => {
    i18n.changeLanguage(ln);
  };

  const handleDropdownClick = () => {
    setToggleDropdown(!toggleDropdown);
  };

  const handleLanguageSelectClick = (item: {
    country_code: string;
    language: string;
  }) => {
    setToggleDropdown(!toggleDropdown);
    setCurrLanguage(item);
    changeLanguage(item.language.toLowerCase());
  };

  return (
    <div className="relative">
      <button
        className="flex items-center justify-between p-2 bg-toggleBg dark:bg-toggleBgDark rounded-md w-24 text-textNormal dark:text-white font-semibold"
        onClick={handleDropdownClick}
      >
        <div className="flex">
          <span className={`fi fi-${currLanguage.country_code} mr-2`}></span>
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
            onClick={() => handleLanguageSelectClick(item)}
          >
            <span className={`fi fi-${item.country_code} mr-2`}></span>
            <span className="">{item.language}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
