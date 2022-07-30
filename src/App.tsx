import React from "react";

import "./App.css";

import { Home, AboutPage, ContactPage, NotFoundPage, ServicesPage } from './pages/index'
// import NavigationBar from "./components/navigation-bar/NavigationBar";

function App() {
  return (
    <div className="font-poppins">
      <Home />
    </div>
  );
}

export default App;
