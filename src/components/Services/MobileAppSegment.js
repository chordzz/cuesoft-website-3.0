import React from "react";
import { Icon } from "semantic-ui-react";

function MobileAppSegment({ darkMode }) {
  return (
    <div className="mobile-app">
      <h3
        style={{
          textAlign: "center",
          padding: "30px 30px 10px 30px",
          color: darkMode ? "#000000" : null,
        }}
      >
        Mobile App Development
      </h3>
      <p style={{ textAlign: "center", color: darkMode ? "#000000" : null }}>
        Two factors converge in the creation of extraordinary digital solutions:
        User experience and powerful backend technology. We arm you with both{" "}
      </p>
      <Icon
        name="arrow circle right"
        style={{
          float: "right",
          fontSize: "25px",
          cursor: "pointer",
          color: darkMode ? "#F4B400" : "#db4437",
        }}
      />
    </div>
  );
}

export default MobileAppSegment;
