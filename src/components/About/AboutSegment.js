import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AboutSegment = ({ data, darkMode }) => {
  return (
    <div
      style={{
        color: "#000",
        padding: "60px 30px",
        // fontSize: "1.6rem",
        // lineHeight: "1",
        // fontWeight: "300",
        paddingLeft: "0",
      }}
    >
      <span style={{ color: darkMode ? "#ffffff" : null }}>{data.body}</span>
      <br />
      <br />
      <Link
        to="#"
        style={{
          color: darkMode ? "#F4B400" : "#db4437",
          fontWeight: "600",
          // fontSize: "17px",
          // lineHeight: "29px",
        }}
        className="span-a"
      >
        {data.info}
      </Link>
    </div>
  );
};

AboutSegment.propTypes = {
  innovationData: PropTypes.object,
  darkMode: PropTypes.bool,
};

export default AboutSegment;
