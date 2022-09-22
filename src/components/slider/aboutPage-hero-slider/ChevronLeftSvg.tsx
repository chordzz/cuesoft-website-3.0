import React from "react";

type myProps = {
  active: boolean;
};

export const ChevronLeftSvg = ({ active }: myProps) => {
  return (
    <svg
      width="33"
      height="33"
      viewBox="0 0 33 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[20px] h-[20px] md:w-[33px] md:h-[33px] cursor-pointer"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16.5 0.458008C25.3594 0.458008 32.5417 7.6403 32.5417 16.4997C32.5417 25.359 25.3594 32.5413 16.5 32.5413C7.64065 32.5413 0.458355 25.359 0.458355 16.4997C0.458355 7.6403 7.64065 0.458008 16.5 0.458008ZM19.7186 11.6974C19.9842 11.4223 20.1312 11.054 20.1279 10.6716C20.1246 10.2892 19.9712 9.92345 19.7008 9.65306C19.4304 9.38268 19.0646 9.22931 18.6823 9.22598C18.2999 9.22266 17.9315 9.36965 17.6565 9.6353L11.8231 15.4686C11.5498 15.7421 11.3962 16.113 11.3962 16.4997C11.3962 16.8864 11.5498 17.2572 11.8231 17.5307L17.6565 23.364C17.9315 23.6297 18.2999 23.7767 18.6823 23.7734C19.0646 23.77 19.4304 23.6167 19.7008 23.3463C19.9712 23.0759 20.1246 22.7101 20.1279 22.3278C20.1312 21.9454 19.9842 21.577 19.7186 21.302L14.9163 16.4997L19.7186 11.6974Z"
        fill="#EE8888"
        fill-opacity={active ? "1" : "0.5"}
      />
    </svg>
  );
};