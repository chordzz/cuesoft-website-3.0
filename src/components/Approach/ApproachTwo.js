import React from "react";
import { Header } from "semantic-ui-react";
import PropTypes from "prop-types";

function ApproachTwo({ darkMode, single }) {
  return (
    <div style={{ paddingTop: "30px" }}>
      <Header as="h4" style={{ color: darkMode && "#ffffff" }}>
        {single.title}
      </Header>
      <p
        style={{
          color: darkMode ? "#ffffff" : "#000000",
          paddingBottom: "30px",
          paddingRight: "120px",
        }}
      >
        {single.body}
      </p>
    </div>
  );
}
ApproachTwo.propTypes = {
  darkMode: PropTypes.bool,
  approachTwo: PropTypes.object,
};

export default ApproachTwo;
