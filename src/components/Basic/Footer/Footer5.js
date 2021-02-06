import React from "react";

function Footer5({ darkMode }) {
  return (
    <div style={{ paddingBottom: "30px" }}>
      <p
        style={{
          color: darkMode ? "#ffffff" : "#000000",
          paddingBottom: "10px",
        }}
      >
        Address: 26A Lewis Street, Asiwaju House, 1st Floor, Lagos Island, Lagos
        NG.
      </p>
      <p
        style={{
          color: darkMode ? "#ffffff" : "#000000",
          paddingBottom: "10px",
        }}
      >
        Phone: +234 8109103898
      </p>
      <p
        style={{
          color: darkMode ? "#ffffff" : "#000000",
          paddingBottom: "10px",
        }}
      >
        Mail: support@cuesoft.io
      </p>
    </div>
  );
}

export default Footer5;
