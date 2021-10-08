import React from "react";
import PropTypes from "prop-types";
import { Image } from "semantic-ui-react";
import Analyse from "../../assets/illustrations/Analyse.svg";
import Build from "../../assets/illustrations/Build.svg";
import Evolve from "../../assets/illustrations/Evolve.svg";
import Design from "../../assets/illustrations/Design.svg";

const ApproachSegment = ({ darkMode, single }) => {
  let SRC;
  switch (single.title) {
    case "01. Analyse":
      SRC = Analyse;
      break;
    case "02. Design":
      SRC = Design;
      break;
    case "03. Build":
      SRC = Build;
      break;
    default:
      SRC = Evolve;
  }
  return (
    <div className="approachIllustration">
      <Image src={SRC} alt="Analyse Illustration" />

      <h5
        style={{
          color: darkMode && "#ffffff",
          margin: "32px 0",
        }}
      >
        {single.title}
      </h5>
      <p
        style={{
          color: darkMode ? "#ffffff" : "#000000",
          marginBottom: "32px",
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
