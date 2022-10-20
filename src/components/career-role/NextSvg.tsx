import React from "react";

type myProps = {
  active: boolean;
};

export const NextSvg = ({ active }: myProps) => {
  return (
    <svg
      width="41"
      height="41"
      viewBox="0 0 41 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        active
          ? "cursor-pointer dark:fill-white fill-[#343741]"
          : "dark:fill-white fill-[#343741]"
      }`}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16.5824 28.2426C16.2093 27.8865 16.1956 27.2955 16.5517 26.9225L22.2673 20.9346C22.3821 20.8143 22.3821 20.6251 22.2673 20.5048L16.5517 14.517C16.1956 14.1439 16.2093 13.5529 16.5824 13.1968C16.9554 12.8407 17.5464 12.8545 17.9025 13.2275L23.6182 19.2153C24.4218 20.0573 24.4218 21.3822 23.6182 22.2241L17.9025 28.2119C17.5464 28.5849 16.9554 28.5987 16.5824 28.2426Z"
        fill-opacity={active ? "1" : "0.3"}
      />
    </svg>
  );
};
