import React from "react";
import { Image } from "semantic-ui-react";
import PropTypes from "prop-types";

function LocationSegment({ data, darkMode }) {
  return (
    <main>
      <Image src={darkMode ? data.img2 : data.img1} />
      <h4 style={{ color: darkMode ? "#F4B400" : "#db4437" }}>{data.title}</h4>
      <p
        style={{
          color: darkMode ? "#ffffff" : "#474646",
          paddingRight: "20px",
        }}
      >
        {data.body}
      </p>
      <p style={{ color: darkMode ? "#ffffff" : "#474646" }}>{data.body2}</p>
      <p style={{ color: darkMode ? "#ffffff" : "#474646" }}>{data.body3}</p>
    </main>
  );
}

LocationSegment.propTypes = {
  locationData: PropTypes.object,
  darkMode: PropTypes.bool,
};

export default LocationSegment;
