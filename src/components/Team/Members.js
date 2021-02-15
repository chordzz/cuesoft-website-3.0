import React from "react";
import { Image } from "semantic-ui-react";
import PropTypes from "prop-types";

function Members({ member, darkMode }) {
  return (
    <div>
      <Image src={member.photo} centered style={{ marginTop: "70px" }} />
      <h4
        style={{
          color: darkMode ? "#ffffff" : "#474646",
          textAlign: "center",
        }}
      >
        {member.name}
      </h4>
      <p
        style={{
          color: darkMode ? "#ffffff" : "#474646",
          textAlign: "center",
          marginBottom: "0px",
        }}
      >
        {member.title}
      </p>
    </div>
  );
}

Members.propTypes = {
  teamMembers: PropTypes.object,
  darkMode: PropTypes.bool,
};

export default Members;
