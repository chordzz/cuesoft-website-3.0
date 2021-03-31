import React from "react";
import PropTypes from "prop-types";
import { Header } from "semantic-ui-react";

const ApproachSegment = ({ darkMode, single }) => {
  return (
    <div>
      <Header
        as="h4"
        style={{
          color: darkMode && "#ffffff",
          margin: "32px 0",
          fontSize: "1.6rem",
        }}
      >
        {single.title}
      </Header>
      <p
        style={{
          color: darkMode ? "#ffffff" : "#000000",
          marginBottom: "32px",
          fontSize: "1.6rem",
        }}
      >
        {single.body}
      </p>
    </div>
  );
};
ApproachSegment.propTypes = {
  darkMode: PropTypes.bool,
  approachData: PropTypes.object,
};

export default ApproachSegment;
