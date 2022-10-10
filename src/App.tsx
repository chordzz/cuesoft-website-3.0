import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

import { useWinstonLogger } from "winston-react";

import { Footer } from "./components/footer/Footer";
import NavigationBar from "./components/navigation-bar/NavigationBar";
import { Newsletter } from "./components/newsletter-subscribe/Newsletter";
import { CookieAlert } from "./components/cookie-alert/CookieAlert";

import {
  Home,
  AboutPage,
  ContactPage,
  CareersPage,
  // NotFoundPage,
  ServicesPage,
  PartnersPage,
  InvestorsPage
} from "./pages/index";

function App() {
  const logger = useWinstonLogger();

  React.useEffect(() => {
    logger.debug("App Page");
  });

  return (
    <div className="font-poppins dark:bg-darkModeBg dark:text-white">
      <NavigationBar />
      <CookieAlert />
      <Routes>
        <>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/investors" element={<InvestorsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/partners" element={<PartnersPage />} />
        </>
      </Routes>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
