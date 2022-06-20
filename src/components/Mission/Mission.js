import React from "react";
function Mission({ darkMode }) {
  return (
    <div className="mission">
      <h1
        style={{ fontWeight: "700", color: darkMode ? "#ffffff" : "inherit" }}
      >
        Our mission
      </h1>
      <p
        style={{
          color: darkMode ? "#ffffff" : "#474646",
          paddingLeft: "2rem",
          paddingRight: "2rem",
        }}
      >
        Our company's mission is to{" "}
        <strong>
          use software and cloud computing to make enterprise software
          affordable and accessible to all types of businesses.
        </strong>
      </p>
    </div>
  );
}
export default Mission;
