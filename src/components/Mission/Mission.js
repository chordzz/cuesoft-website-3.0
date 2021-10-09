import React from "react";
function Mission({ darkMode }) {
  return (
    <div className="mission">
      <h1
        style={{ fontWeight: "700", color: darkMode ? "#ffffff" : "inherit" }}
      >
        Our mission
      </h1>
      <p style={{ color: darkMode ? "#ffffff" : "#474646" }}>
        We help enterprises accelerate adoption of new technologies, untangle
        complex issues that always emerge during digital evolution, and
        orchestrate ongoing innovation.
      </p>
    </div>
  );
}
export default Mission;
