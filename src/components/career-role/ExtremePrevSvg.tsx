import React from "react";

type myProps = {
  active: boolean;
};

export const ExtremePrevSvg = ({ active }: myProps) => {
  return (
    <svg
      width="40"
      height="41"
      viewBox="0 0 40 41"
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
        d="M26.3228 28.2426C26.6958 27.8865 26.7095 27.2955 26.3535 26.9225L20.6378 20.9346C20.523 20.8143 20.523 20.6251 20.6378 20.5048L26.3535 14.517C26.7095 14.1439 26.6958 13.5529 26.3228 13.1968C25.9497 12.8407 25.3587 12.8545 25.0026 13.2275L19.2869 19.2153C18.4833 20.0573 18.4833 21.3822 19.2869 22.2241L25.0026 28.2119C25.3587 28.5849 25.9497 28.5987 26.3228 28.2426Z"
        fill-opacity={active ? "1" : "0.5"}
      />
      <path
        d="M16.8074 14.1835C16.8074 13.6678 16.3894 13.2497 15.8737 13.2497C15.358 13.2497 14.9399 13.6678 14.9399 14.1835V27.2559C14.9399 27.7716 15.358 28.1897 15.8737 28.1897C16.3894 28.1897 16.8074 27.7716 16.8074 27.2559V14.1835Z"
        fill-opacity={active ? "1" : "0.3"}
      />
    </svg>
  );
};
