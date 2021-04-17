import React from "react";

function Footer5({ darkMode }) {
  return (
    <div style={{ paddingBottom: "30px" }}>
      <p
        style={{
          // color: darkMode ? "#ffffff" : "#000000",
          color: darkMode ? "#F4B400" : "#db4437",
          paddingBottom: "5px",
        }}
      >
        Address: <br />
        39 Alfred Rewane Road, 3rd & 7th Floors, Mulliner Towers, Lagos, Nigeria
      </p>
      <p
        style={{
          // color: darkMode ? "#ffffff" : "#000000",
          color: darkMode ? "#F4B400" : "#db4437",
          paddingBottom: "5px",
        }}
      >
        Phone: <br />
        +234 8109103898
      </p>
      <p
        style={{
          // color: darkMode ? "#ffffff" : "#000000",
          color: darkMode ? "#F4B400" : "#db4437",
          paddingBottom: "5px",
        }}
      >
        Tel: <br />
        +1 (408) 495-2909
      </p>
      <p
        style={{
          // color: darkMode ? "#ffffff" : "#000000",
          color: darkMode ? "#F4B400" : "#db4437",
          paddingBottom: "5px",
        }}
      >
        Mail: support@cuesoft.io
      </p>
    </div>
  );
}

export default Footer5;
