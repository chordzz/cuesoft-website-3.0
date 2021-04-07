import React from "react";
import { Icon } from "semantic-ui-react";

function MobileAppSegment({ darkMode }) {
  return (
    <div
      className="mobile-app"
      // data-aos="fade-up"
      // data-aos-duration="1000"
      // data-aos-offset="200"
      // data-aos-delay="1000"
      // data-aos-easing="ease-in-out"
    >
      <h5
        style={{
          textAlign: "center",
          padding: "20px 0 10px 0",
          color: darkMode ? "#000000" : null,
          marginBottom: "0",
          marginTop: "0",
          // fontSize: "1.8rem",
        }}
      >
        Mobile App Development
      </h5>
      <p
        style={{
          textAlign: "center",
          color: darkMode ? "#000000" : null,
          // fontSize: "1.3rem",
        }}
        className="segment-p"
      >
        Two factors converge in the creation of extraordinary digital solutions:
        User experience and powerful backend technology. We arm you with both{" "}
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

export default MobileAppSegment;
