import React from "react";

import "./App.css";
import { Footer } from "./components/footer/Footer";
import NavigationBar from "./components/navigation-bar/NavigationBar";

import {
  Home
  // AboutPage,
  // ContactPage,
  // NotFoundPage,
  // ServicesPage
} from "./pages/index";
// import NavigationBar from "./components/navigation-bar/NavigationBar";

function App() {
  return (
    <div className="font-poppins dark:bg-darkModeBg dark:text-white">
      <NavigationBar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
