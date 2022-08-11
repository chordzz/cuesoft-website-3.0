import React from "react";

import "./App.css";
import { Footer } from "./components/footer/Footer";
import NavigationBar from "./components/navigation-bar/NavigationBar";
import { Newsletter } from "./components/newsletter-subscribe/Newsletter";

import {
  Home
  // AboutPage,
  // ContactPage,
  // NotFoundPage,
  // ServicesPage
} from "./pages/index";

function App() {
  return (
    <div className="font-poppins dark:bg-darkModeBg dark:text-white">
      <NavigationBar />
      <Home />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
