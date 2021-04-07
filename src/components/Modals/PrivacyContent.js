import React from "react";
import PropTypes from "prop-types";

function PrivacyContent({ privacy }) {
  return (
    <div
      style={{
        paddingTop: "5px",
      }}
    >
      <p>{privacy.para}</p>
    </div>
  );
}

PrivacyContent.propTypes = {
  privacyData: PropTypes.object,
};
export default PrivacyContent;
