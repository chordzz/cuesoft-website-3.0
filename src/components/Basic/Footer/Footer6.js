import React from "react";

function Footer6({ darkMode }) {
  const year = new Date().getFullYear();
  return (
    <div style={{ marginBottom: "30px" }}>
      <p style={{ color: darkMode ? "#ffffff" : "#000000" }}>
        &copy; Cuesoft {year}. All rights reserved.
      </p>
      <p style={{ color: darkMode ? "#ffffff" : "#000000" }}>
        Cuesoft is a company registered in Nigeria
      </p>
    </div>
  );
}

export default Footer6;
