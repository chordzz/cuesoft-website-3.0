import React from "react";

function Footer5({ footer, darkMode }) {
  return (
    <div style={{ paddingBottom: "30px" }}>
      <div
        style={{
          paddingBottom: "10px",
        }}
      >
        <h4
          style={{ color: darkMode ? "#F4B400" : "#db4437" }}
          className="footer-contact-header"
        >
          Address:
        </h4>
        <p className="footer-text">{footer.Address}</p>
      </div>
      <div
        style={{
          paddingBottom: "10px",
        }}
      >
        <h4
          style={{ color: darkMode ? "#F4B400" : "#db4437" }}
          className="footer-contact-header"
        >
          Phone:{" "}
        </h4>
        <p className="footer-text">{footer.Phone}</p>
      </div>
      <div
        style={{
          paddingBottom: "10px",
        }}
      >
        <h4
          style={{ color: darkMode ? "#F4B400" : "#db4437" }}
          className="footer-contact-header"
        >
          Tel:{" "}
        </h4>
        <p className="footer-text">{footer.Tel}</p>
      </div>
      <div
        style={{
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
        <p className="footer-text">{footer.Email}</p>
      </div>
    </div>
  );
}

export default Footer5;
