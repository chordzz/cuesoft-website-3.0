import React from "react";
import PropTypes from "prop-types";
import { Image } from "semantic-ui-react";

function Client({ client, darkMode }) {
  return (
    <div>
      <Image
        src={darkMode ? client.darkLogo : client.lightLogo}
        alt="logo"
        style={{ height: "60px", width: "60px", marginTop: "50px" }}
      />
      <p
        style={{ color: darkMode ? "#ffffff" : "#474646", paddingTop: "32px" }}
      >
        {client.body}
      </p>
    </div>
  );
}

Client.propTypes = {
  darkMode: PropTypes.bool,
  clientsData: PropTypes.object,
};

export default Client;
