import React from "react";
import { connect } from "react-redux";
import { Image, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Error404 from "../assets/icons/error.svg";

function NotFound({ darkMode }) {
  return (
    <div
      className="err"
      style={{
        backgroundColor: darkMode ? "#210806" : null,
      }}
    >
      <Image src={Error404} alt="404 image" centered className="err-img" />
      <h1
        style={{
          fontSize: "15em",
          fontWeight: "600",
          color: darkMode ? "#ffffff" : "#000000",
        }}
      >
        404
      </h1>
      <h2
        className="err-msg"
        style={{ color: darkMode ? "#ffffff" : "#000000" }}
      >
        Ooops! looks like <br /> you got lost
      </h2>
      <Button
        size="medium"
        color={darkMode ? "yellow" : "red"}
        style={{ borderRadius: "30px" }}
      >
        <Link to="/" style={{ color: darkMode ? "#000000" : "#ffffff" }}>
          Back to Home Page
        </Link>
      </Button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    darkMode: state.mode.darkMode,
  };
};

export default connect(mapStateToProps)(NotFound);
