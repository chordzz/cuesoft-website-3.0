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
      const timerId = setTimeout(() => setRenderCookieConsent(true), 1000);

      return () => clearTimeout(timerId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        <div className="fixed left-16 z-[1000]">
          <div className="fixed my-container bg-gray-100 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left px-6 py-8">
            <img src={Cookie} alt="cookie" />

            <p className="text-textNormal md:w-[50%]">
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
