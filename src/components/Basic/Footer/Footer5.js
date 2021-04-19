import React from "react";

function Footer5({ darkMode }) {
  return (
    <div style={{ paddingBottom: "30px" }}>
      <p
        style={{
          // color: darkMode ? "#ffffff" : "#000000",
          paddingBottom: "5px",
        }}
      >
        <h4 style={{ color: darkMode ? "#F4B400" : "#db4437" }}>Address:</h4>
        39 Alfred Rewane Road, 3rd & 7th Floors, Mulliner Towers, Lagos, Nigeria
      </p>
      <p
        style={{
          // color: darkMode ? "#ffffff" : "#000000",
          paddingBottom: "5px",
        }}
      >
        <h4 style={{ color: darkMode ? "#F4B400" : "#db4437" }}>Phone: </h4>
        +234 8109103898
      </p>
      <p
        style={{
          // color: darkMode ? "#ffffff" : "#000000",
          paddingBottom: "5px",
        }}
      >
        <h4 style={{ color: darkMode ? "#F4B400" : "#db4437" }}>Tel: </h4>
        +1 (408) 495-2909
      </p>
      <p
        style={{
          // color: darkMode ? "#ffffff" : "#000000",
          paddingBottom: "5px",
        }}
      >
        <h4 style={{ color: darkMode ? "#F4B400" : "#db4437" }}>Mail:</h4>{" "}
        support@cuesoft.io
      </p>
    </div>
  );
}

export default Footer5;
