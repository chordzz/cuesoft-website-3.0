import React from "react";
import PropTypes from "prop-types";

const InnovationSegment = ({ data, darkMode }) => {
  return (
    <div style={{ color: "#000", padding: "60px 30px" }}>
      <span style={{ color: darkMode ? "#ffffff" : null }}>{data.body}</span>
      <br />
      <br />
      <span style={{ color: darkMode ? "#F4B400" : "#db4437" }}>
        {data.info}
      </span>
    </div>
  );
};

InnovationSegment.propTypes = {
  innovationData: PropTypes.object.isRequired,
};

export default InnovationSegment;
