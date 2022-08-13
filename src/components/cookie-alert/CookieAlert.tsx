import React from "react";
import Cookie from "../../assets/imgs/cookie.svg";

export const CookieAlert = () => {
  return (
    <div className="my-container flex flex-col md:flex-row items-center justify-between">
      <img src={Cookie} alt="cookie" />

      <p className="text-textNormal w-[50%]">
        We use third-party <span className="underline">cookies</span> to provide
        you the best user experience and for performance analytics.
      </p>

      <div className="w-[40%] flex flex-col md:flex-row justify-between">
        <button className="a-btn-inv w-[40%]">Deny</button>

        <button className="a-btn w-[40%]">Accept</button>
      </div>
    </div>
  );
};
