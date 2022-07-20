import React from "react";
import "./App.css";

import { Home, AboutPage, ContactPage, NotFoundPage, ServicesPage } from './pages/index'

function App() {
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
      <Home />
      <AboutPage />
      <ContactPage />
      <NotFoundPage />
      <ServicesPage />
      <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
        <p className="text-3xl text-gray-700 font-bold mb-5">
          Welcome!
        </p>
        <p className="text-gray-500 text-lg">
          React and Tailwind CSS in action
        </p>
      </div>
    </h1>);
}

export default App;
