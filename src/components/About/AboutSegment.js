import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AboutSegment = ({ data, darkMode }) => {
  return (
    <div
      style={{
        color: "#000",
        paddingLeft: "0",
      }}
      className="about-segment"
    >
      <span style={{ color: darkMode ? "#ffffff" : null }}>{data.body}</span>
      <br />
      <br />
      <Link
        to={data.info === "More about us" ? "about" : "services"}
        style={{
          color: darkMode ? "#F4B400" : "#db4437",
          fontWeight: "600",
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
