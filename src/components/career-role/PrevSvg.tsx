import React from "react";

type myProps = {
  active: boolean;
};

export const PrevSvg = ({ active }: myProps) => {
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
        d="M24.5171 28.2426C24.8901 27.8865 24.9039 27.2955 24.5478 26.9225L18.8321 20.9346C18.7173 20.8143 18.7173 20.6251 18.8321 20.5048L24.5478 14.517C24.9039 14.1439 24.8901 13.5529 24.5171 13.1968C24.1441 12.8407 23.553 12.8545 23.1969 13.2275L17.4813 19.2153C16.6776 20.0573 16.6776 21.3822 17.4813 22.2241L23.1969 28.2119C23.553 28.5849 24.1441 28.5987 24.5171 28.2426Z"
        fill-opacity={active ? "1" : "0.3"}
      />
    </svg>
  );
};
