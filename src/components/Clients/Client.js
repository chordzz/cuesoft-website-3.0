import React from "react";
import PropTypes from "prop-types";
import { Image } from "semantic-ui-react";

function Client({ client, darkMode }) {
  return (
    <div>
      <Image
        src={darkMode ? client.img2 : client.img1}
        alt="logo"
        style={{ height: "50px", width: "50px" }}
      />
      <p
        style={{ color: darkMode ? "#ffffff" : "#474646", paddingTop: "32px" }}
      >
        {client.info}
      </p>
    </div>
  );
}

Client.propTypes = {
  darkMode: PropTypes.bool,
};

export default Client;
