import React from "react";
import PropTypes from "prop-types";
import { Image } from "semantic-ui-react";

function Client({ client, darkMode }) {
  return (
    <div style={{ textAlign: "center" }}>
      <Image
        src={darkMode ? client.img2 : client.img1}
        alt="logo"
        style={{ height: "50px", width: "50px", margin: "0 auto" }}
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
  clientsData: PropTypes.object.isRequired,
};

export default Client;
