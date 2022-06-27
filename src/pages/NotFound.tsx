import { connect } from "react-redux";
import { Image, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Error404 from "../assets/icons/error.svg";
import { NotFoundProps } from "../types/pagesTypes";

function NotFound({ darkMode }: NotFoundProps) {
  return (
    <div
      className="err"
      style={{
        backgroundColor: darkMode ? "#210806" : (null as any),
        padding: "150px 0",
        textAlign: "center",
        minHeight: "calc(100vh - 85.38px)",
      }}
    >
      <Image src={Error404} alt="404 image" centered />
      <h2
        className="err-msg"
        style={{
          color: darkMode ? "#ffffff" : "#000000",
        }}
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

const mapStateToProps = (state: any) => {
  return {
    darkMode: state.mode.darkMode,
  };
};

export default connect(mapStateToProps)(NotFound);