import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

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
  InvestorsPage,
  NotFoundPage
} from "./pages/index";

function App() {
  const logger = useWinstonLogger();

  const { hash } = useLocation();

  React.useEffect(() => {
    // if not a hash link, scroll to top
    if (hash === "") {
      window.scrollTo(0, 0);
    }
    // else scroll to id
    else {
      setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
        }
      }, 0);
    }
  }, [hash]);

  React.useEffect(() => {
    logger.debug("App Page");
  });

  return (
    <div className="font-poppins dark:bg-darkModeBg dark:text-white">
      <NavigationBar />
      <Routes>
        <>
          <Route path="*" element={<NotFoundPage />} />
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
      <CookieAlert />
    </div>
  );
}

export default App;
