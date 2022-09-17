import React from "react";
import { FaqMain } from "../components/faq/FaqMain";

export const ServicesPage = () => {
  return (
    <div>
      <section
        id="faq"
        className="bg-bgLight2 dark:bg-darkModeBgLight min-h-screen py-20"
      >
        <FaqMain />
      </section>
    </div>
  );
};
