import React, { useState, useEffect } from "react";
import Cookie from "../../assets/imgs/cookie.svg";

export const CookieAlert = () => {
  const [renderCookieConsent, setRenderCookieConsent] = useState(false);

  useEffect(() => {
    const timerId = setTimeout(
      () => setRenderCookieConsent(!renderCookieConsent),
      1000
    );

    return () => clearTimeout(timerId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {renderCookieConsent && (
        <div className="fixed left-12 z-10">
          <div className="fixed my-container bg-gray-100 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left px-6 py-8">
            <img src={Cookie} alt="cookie" />

            <p className="text-textNormal md:w-[50%]">
              We use third-party <span className="underline">cookies</span> to
              provide you the best user experience and for performance
              analytics.
            </p>

            <div className="md:w-[40%] flex  md:flex-row justify-between gap-6">
              <button className="a-btn-inv md:w-[40%]">Deny</button>

              <button className="a-btn md:w-[40%]">Accept</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
