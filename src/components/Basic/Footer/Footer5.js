import React from "react";

function Footer5({ footer, darkMode }) {
  return (
    <div style={{ paddingBottom: "30px" }}>
      <div
        style={{
          // color: darkMode ? "#ffffff" : "#000000",
          paddingBottom: "10px",
        }}
      >
        <h4
          style={{ color: darkMode ? "#F4B400" : "#db4437" }}
          className="footer-contact-header"
        >
          Address:
        </h4>
        <p className="footer-text">
          {/* 39 Alfred Rewane Road, 3rd & 7th Floors, Mulliner Towers, Lagos,
          Nigeria */}
          {footer.Address}
        </p>
      </div>
      <div
        style={{
          // color: darkMode ? "#ffffff" : "#000000",
          paddingBottom: "10px",
        }}
      >
        <h4
          style={{ color: darkMode ? "#F4B400" : "#db4437" }}
          className="footer-contact-header"
        >
          Phone:{" "}
        </h4>
        <p className="footer-text">
          {/* +234 8109103898 */}
          {footer.Phone}
        </p>
      </div>
      <div
        style={{
          // color: darkMode ? "#ffffff" : "#000000",
          paddingBottom: "10px",
        }}
      >
        <h4
          style={{ color: darkMode ? "#F4B400" : "#db4437" }}
          className="footer-contact-header"
        >
          Tel:{" "}
        </h4>
        <p className="footer-text">
          {/* +1 (408) 495-2909 */}
          {footer.Tel}
        </p>
      </div>
      <div
        style={{
          // color: darkMode ? "#ffffff" : "#000000",
          paddingTop: "10px",
        }}
      >
        <h4
          style={{
            color: darkMode ? "#F4B400" : "#db4437",
          }}
          className="footer-contact-header"
        >
          Mail:
        </h4>{" "}
        <p className="footer-text">
          {/* support@cuesoft.io */}
          {footer.Email}
        </p>
      </div>
    </div>
  );
}

export default Footer5;
