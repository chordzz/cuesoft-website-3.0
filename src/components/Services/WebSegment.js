import React from "react";
import { Icon } from "semantic-ui-react";

function WebSegment({ darkMode }) {
  return (
    <div
      className="web"
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-duration="1000"
    >
      <h3
        style={{
          textAlign: "center",
          padding: "30px 30px 10px 30px",
          color: darkMode ? "#000000" : null,
        }}
      >
        Web Development
      </h3>
      <p style={{ textAlign: "center", color: darkMode ? "#000000" : null }}>
        Arm yourself with a cutting edge website built to fit your needs today
        and to grow along with your organization{" "}
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

export default WebSegment;
