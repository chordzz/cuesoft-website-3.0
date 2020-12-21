import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { BrowserRouter as Router } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import routes from "./routes";
import { CustomHeader, CustomFooter } from "./components/Basics";

function App({ darkMode }) {
  useEffect(() => {
    document.body.style.backgroundColor = darkMode && "#1b1c1d";
  }, [darkMode]);

  return (
    <div class="app">
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

export default connect(mapStateToProps)(App);
