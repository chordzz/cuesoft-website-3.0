import React, { useEffect } from "react";
<<<<<<< Updated upstream
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { BrowserRouter as Router } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import routes from "./routes";
import { CustomHeader, CustomFooter } from "./components/Basics";
=======
import { CustomHeader, CustomFooter } from "./components/Basics";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import routes from "./routes";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import AOS from "aos";
import "aos/dist/aos.css";
>>>>>>> Stashed changes

function App({ darkMode }) {
  useEffect(() => {
    document.body.style.backgroundColor = darkMode && "#1b1c1d";
  }, [darkMode]);

  return (
    <div>
      <Router>
        <CustomHeader darkMode={darkMode} />
        {renderRoutes(routes)}
        <CustomFooter darkMode={darkMode} />
      </Router>
    </div>
  );
}

App.propTypes = {
  darkMode: PropTypes.bool,
};

const mapStateToProps = (state) => {
  return {
    darkMode: state.darkMode,
  };
};

AOS.init();
export default connect(mapStateToProps)(App);
