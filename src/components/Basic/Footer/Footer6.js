import React from "react";

function Footer6({ darkMode }) {
  const year = new Date().getFullYear();
  return (
    <div className="footer-copyright">
      <p
        style={{ color: darkMode ? "#ffffff" : "#000000", fontSize: "1.2rem" }}
      >
        &copy; Cuesoft {year}. All rights reserved.
      </p>
      <p
        style={{ color: darkMode ? "#ffffff" : "#000000", fontSize: "1.2rem" }}
      >
        {" "}
        Cuesoft is a company registered in Nigeria
      </p>
    </div>
  );
}

export default Footer6;
