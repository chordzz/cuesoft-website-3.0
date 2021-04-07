import React from "react";
import PropTypes from "prop-types";

function TermsContent({ term }) {
  return (
    <div>
      <p>{term.para}</p>
    </div>
  );
}

TermsContent.propTypes = {
  termsData: PropTypes.object,
};
export default TermsContent;
