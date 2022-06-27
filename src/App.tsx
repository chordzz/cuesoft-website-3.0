import React, { useEffect } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import routes from "./routes";
import { CustomHeader, CustomFooter } from "./components/Basic";
import { AppProps } from "./types/componentTypes";

function App({ darkMode }: AppProps) {
  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? "#100403" : "#ffffff";
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

const mapStateToProps = (state: any) => {
  return {
    darkMode: state.mode.darkMode,
  };
};

export default connect(mapStateToProps)(App);
