import React from "react";
import { Icon } from "semantic-ui-react";

function EnterpriseSegment({ darkMode }) {
  return (
    <div
      className="enterprise"
      style={{ backgroundColor: darkMode ? "#F4B400" : null }}
    >
      <h3
        style={{
          textAlign: "center",
          padding: "30px 30px 10px 30px",
          color: darkMode ? "#000000" : "#ffffff",
        }}
      >
        Enterprise Software Development
      </h3>
      <p
        style={{ textAlign: "center", color: darkMode ? "#000000" : "#ffffff" }}
      >
        Delight your end users with handcrafted easy to use software{" "}
      </p>
      <Icon
        name="arrow circle right"
        style={{
          float: "right",
          fontSize: "25px",
          cursor: "pointer",
          color: "white",
        }}
      />
    </div>
  );
}

export default EnterpriseSegment;
