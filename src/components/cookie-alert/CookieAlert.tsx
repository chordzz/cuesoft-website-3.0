import React, { useState, useEffect } from "react";
import Cookie from "../../assets/imgs/cookie.svg";

export const CookieAlert = () => {
  const [renderCookieConsent, setRenderCookieConsent] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookie-consent");
    if (cookieConsent === "deny") {
      deleteAllCookies();
    }

    if (!cookieConsent) {
      const timerId = setTimeout(() => setRenderCookieConsent(true), 2000);
      return () => clearTimeout(timerId);
    }
  }, []);

  const handleClick = (choice: string) => {
    if (choice === "deny") {
      setRenderCookieConsent(false);
      localStorage.setItem("cookie-consent", "deny");
      deleteAllCookies();
    }

    if (choice === "accept") {
      setRenderCookieConsent(false);
      localStorage.setItem("cookie-consent", "accept");
    }
  };

  function deleteAllCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      var eqPos = cookie.indexOf("=");
      var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
  }

  return (
    <>
      {renderCookieConsent && (
        <div className="sticky bottom-10">
          <div className="my-container bg-gray-100 dark:bg-[#0D0D0D] flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left px-6 py-8">
            <img src={Cookie} alt="cookie" />

            <p className="text-textNormal dark:text-white md:w-[50%]">
              We use third-party <span className="underline">cookies</span> to
              provide you the best user experience and for performance
              analytics.
            </p>

            <div className="md:w-[40%] flex  md:flex-row justify-between gap-6">
              <button
                className="a-btn-inv md:w-[40%]"
                onClick={() => handleClick("deny")}
              >
                Deny
              </button>

              <button
                className="a-btn md:w-[40%]"
                onClick={() => handleClick("accept")}
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
