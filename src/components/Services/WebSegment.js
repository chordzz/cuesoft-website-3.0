import React from "react";
import { Icon } from "semantic-ui-react";

function WebSegment({ darkMode }) {
  return (
    <div
      className="web"
      // data-aos="fade-up"
      // data-aos-duration="1000"
      // data-aos-offset="200"
      // data-aos-easing="ease-in-out"
      // style = {{padding:'10px 20px'}}
    >
      <h5
        style={{
          textAlign: "center",
          padding: "15px 30px 10px 0",
          color: darkMode ? "#000000" : null,
          marginBottom: "0",
          marginTop: "0",
        }}
      >
        Web Development
      </h5>
      <p
        style={{
          textAlign: "center",
          color: darkMode ? "#000000" : null,
          // fontSize: "1.3rem",
        }}
        className="segment-p"
      >
        Arm yourself with a cutting edge website built to fit your needs today
        and to grow along with your organization{" "}
      </p>
      <Icon
        name="arrow circle right"
        style={{
          float: "right",
          fontSize: "25px",
          cursor: "pointer",
          color: darkMode ? "#F4B400" : "inherit",
          position: "relative",
          bottom: "0rem",
        }}
      />
    </div>
  );
}

export default WebSegment;
