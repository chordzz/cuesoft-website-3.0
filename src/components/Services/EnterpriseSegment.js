import React from "react";
import { Icon } from "semantic-ui-react";

function EnterpriseSegment({ darkMode }) {
  return (
    <div
      className="enterprise"
      style={{
        backgroundColor: darkMode ? "#F4B400" : null,
        padding: "30px 30px",
      }}
      // data-aos="fade-up"
      // data-aos-duration="1000"
      // data-aos-offset="200"
      // data-aos-easing="ease-in-out"
      // data-aos-delay="2000"
    >
      <h3
        style={{
          textAlign: "center",
          // padding: "30px 20px 10px 20px",
          padding: "0",
          color: darkMode ? "#000000" : null,
          margin: "0 0 20px",
        }}
      >
        Enterprise Software Development
      </h3>
      <p
        style={{
          textAlign: "center",
          color: darkMode ? "#000000" : null,
          marginBottom: "30px",
        }}
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
          position: "relative",
          bottom: "-2rem",
        }}
        className="enterprise-icon"
      />
    </div>
  );
}

export default EnterpriseSegment;
