import React from "react";

type myProps = {
  active: boolean;
};

export const ExtremeNextSvg = ({ active }: myProps) => {
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
        d="M25.1594 14.1835C25.1594 13.6678 24.7413 13.2497 24.2257 13.2497C23.71 13.2497 23.2919 13.6678 23.2919 14.1835V27.2559C23.2919 27.7716 23.71 28.1897 24.2257 28.1897C24.7413 28.1897 25.1594 27.7716 25.1594 27.2559V14.1835Z"
        fill-opacity={active ? "1" : "0.5"}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13.7858 28.2426C13.4128 27.8865 13.3991 27.2955 13.7551 26.9225L19.4708 20.9346C19.5856 20.8143 19.5856 20.6251 19.4708 20.5048L13.7551 14.517C13.3991 14.1439 13.4128 13.5529 13.7858 13.1968C14.1589 12.8407 14.7499 12.8545 15.106 13.2275L20.8217 19.2153C21.6253 20.0573 21.6253 21.3822 20.8217 22.2241L15.106 28.2119C14.7499 28.5849 14.1589 28.5987 13.7858 28.2426Z"
        fill-opacity={active ? "1" : "0.3"}
      />
    </svg>
  );
};
