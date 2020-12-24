import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom'

const InnovationSegment = ({ data, darkMode }) => {
  return (
    <div style={{ color: "#000", padding: "60px 30px" }}>
      <span style={{ color: darkMode ? "#ffffff" : null }}>{data.body}</span>
      <br />
      <br />
      <Link
      to='#'
      style={{ color: darkMode ? "#F4B400" : "#db4437" }}>
        {data.info}
      </Link>
    </div>
  );
};  

InnovationSegment.propTypes = {
  innovationData: PropTypes.object.isRequired,
  darkMode: PropTypes.bool,
};

export default InnovationSegment;
