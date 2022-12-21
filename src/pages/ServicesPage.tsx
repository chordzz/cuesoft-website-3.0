import React from "react";
import { FaqMain } from "../components/faq/FaqMain";

import ProductDesignVector from "../assets/icons/vectors/product-design-servicesPage.svg";
import CodeVector from "../assets/icons/vectors/code-vector-servicesPage.svg";
import HexagonChartVector from "../assets/icons/vectors/hexagon-chart-servicesPage.svg";

import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const ServicesPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <section id="services-hero" className="lg:mb-20">
        <div className="my-container flex items-center w-[100%] h-[220px] bg-[#383737] dark:bg-[#171111] lg:h-[320px]">
          <div className="text-center">
            <h2 className="text-[14px] md:text-[27px] xl:text-[48px] mb-4 text-brightRed font-semibold ">
              <>{t("servicespage.heroSectionHeader")}</>
            </h2>
            <p className="text-[#98A2B3] text-[12px] md:text-[16px] lg:text-[20px] xl:text-[24px] w-[85%] mx-auto">
              <>{t("servicespage.heroSectionText")}</>
            </p>
          </div>
        </div>
      </section>
      <section className="my-14 py-14 min-h-screen flex items-center">
        <div className="my-container flex gap-12 flex-wrap justify-around">
          <div className="mt-28 w-[450px] h-[400px] bg-[#F5F5FA] dark:bg-[#171111] relative flex flex-col gap-6 items-center py-16">
            <div className="absolute -top-12">
              <div className="bg-[#C2E1FF] dark:bg-[#002B56] w-[100px] h-[100px] rounded-full flex items-center justify-center">
                <img src={ProductDesignVector} alt="" />
              </div>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-[#515158] dark:text-[#EBEBF0] text-[16px] md:text-[24px] my-2 font-semibold">
                <>{t("servicespage.servicesSection.web-dev.header")}</>
              </span>
              <span className="bg-brightRed h-[2px] w-[80%]"></span>
            </div>
            <div className="text-center w-[80%]">
              <span className="text-[#808089] text-[12px] md:text-[16px]">
                <>{t("servicespage.servicesSection.web-dev.paragraph")}</>
              </span>
            </div>
            <div className="absolute -bottom-6">
              <button className="a-btn">
                <>{t("servicespage.servicesSection.btn-text")}</>
              </button>
            </div>
          </div>

          <div className="mt-28 w-[450px] h-[400px] bg-[#F5F5FA] dark:bg-[#171111] relative flex flex-col gap-6 items-center py-16">
            <div className="absolute -top-12">
              <div className="bg-[#E7D4FF] dark:bg-[#1F0045] w-[100px] h-[100px] rounded-full flex items-center justify-center">
                <img src={HexagonChartVector} alt="" />
              </div>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-[#515158] dark:text-[#EBEBF0] text-[16px] md:text-[24px] my-2 font-semibold">
                <>{t("servicespage.servicesSection.enterprise-dev.header")}</>
              </span>
              <span className="bg-brightRed h-[2px] w-[80%]"></span>
            </div>
            <div className="text-center w-[80%]">
              <span className="text-[#808089] text-[12px] md:text-[16px]">
                <>
                  {t("servicespage.servicesSection.enterprise-dev.paragraph")}
                </>
              </span>
            </div>
            <div className="absolute -bottom-6">
              <button className="a-btn">
                <>{t("servicespage.servicesSection.btn-text")}</>
              </button>
            </div>
          </div>

          <div className="mt-28 w-[450px] h-[400px] bg-[#F5F5FA] dark:bg-[#171111] relative flex flex-col gap-6 items-center py-16">
            <div className="absolute -top-12">
              <div className="bg-[#D4FFEA] dark:bg-[#004522] w-[100px] h-[100px] rounded-full flex items-center justify-center">
                <img src={CodeVector} alt="" />
              </div>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-[#515158] text-center dark:text-[#EBEBF0] text-[16px] md:text-[24px] my-2 font-semibold">
                <>{t("servicespage.servicesSection.mobile-dev.header")}</>
              </span>
              <span className="bg-brightRed h-[2px] w-[80%]"></span>
            </div>
            <div className="text-center w-[80%]">
              <span className="text-[#808089] text-[12px] md:text-[16px]">
                <>{t("servicespage.servicesSection.mobile-dev.paragraph")}</>
              </span>
            </div>
            <div className="absolute -bottom-6">
              <button className="a-btn">
                <>{t("servicespage.servicesSection.btn-text")}</>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 flex items-center min-h-screen">
        <div className="my-container text-center">
          <div className="w-[90%] mx-auto">
            <h3 className="text-[16px] md:text-[48px] text-[#64646D] dark:text-[#EBEBF0] mb-12 font-bold">
              <>{t("servicespage.services-contact.header")}</>
            </h3>
            <p className="text-[14px] md:text-[24px] text-[#808089] mb-12">
              <>{t("servicespage.services-contact.sub-text")}</>
            </p>
            <Link to={"/contact/#contact-form"}>
              <button className="a-btn md:w-[50%] text-[16px] md:text-[24px]">
                <>{t("servicespage.services-contact.btn-text")}</>
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section
        id="faq"
        className="bg-bgLight2 dark:bg-darkModeBgLight min-h-screen py-20"
      >
        <FaqMain />
      </section>
    </div>
  );
};
