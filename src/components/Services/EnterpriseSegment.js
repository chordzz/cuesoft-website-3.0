import React from "react";
import { Icon } from "semantic-ui-react";

function EnterpriseSegment({ darkMode }) {
  return (
    <div className="enterprise">
      <h5
        style={{
          textAlign: "center",
          padding: "0",
          color: darkMode ? "#000000" : null,
          margin: "0",
        }}
      >
        Enterprise Software Development
      </h5>
      <p
        style={{
          textAlign: "center",
          color: darkMode ? "#000000" : null,
          marginBottom: "30px",
          marginTop: "10px",
        }}
        className="segment-p"
      >
        Delight your end users with handcrafted easy to use software{" "}
      </p>
      <Icon
        name="arrow circle right"
        style={{
          float: "right",
          fontSize: "25px",
          cursor: "pointer",
          color: darkMode ? "#F4B400" : "inherit",
        }}
      />
    </div>
  );
}

export default EnterpriseSegment;
