import React from "react";
function Vision({ darkMode }) {
  return (
    <div className="vision">
      <h1
        style={{ fontWeight: "700", color: darkMode ? "#ffffff" : "inherit" }}
      >
        Our vision
      </h1>
      <p style={{ color: darkMode ? "#ffffff" : "#474646" }}>
        Our company's vision is to{" "}
        <strong>
          demystify and reimagine how people build and interact with software.
        </strong>
      </p>
    </div>
  );
}
export default Vision;
