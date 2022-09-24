import React from "react";
import { useWinstonLogger } from "winston-react";
import "./App.css";
import { Footer } from "./components/footer/Footer";
import NavigationBar from "./components/navigation-bar/NavigationBar";
import { Newsletter } from "./components/newsletter-subscribe/Newsletter";
import { Routes, Route } from "react-router-dom";

import {
  Home,
  AboutPage,
  ContactPage,
  CareersPage,
  // NotFoundPage,
  ServicesPage
} from "./pages/index";
import { InvestorsPage } from "./pages/InvestorsPage";

function App() {
  const logger = useWinstonLogger();

  React.useEffect(() => {
    logger.debug("App Page");
  });

  return (
    <div className="font-poppins dark:bg-darkModeBg dark:text-white">
      <NavigationBar />
      <Routes>
        <>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/investors" element={<InvestorsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </>
      </Routes>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
