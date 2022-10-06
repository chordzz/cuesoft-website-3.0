import React, { useEffect } from "react";
import { FaqMain } from "../components/faq/FaqMain";

import ProductDesignVector from "../assets/icons/vectors/product-design-servicesPage.svg";
import CodeVector from "../assets/icons/vectors/code-vector-servicesPage.svg";
import HexagonChartVector from "../assets/icons/vectors/hexagon-chart-servicesPage.svg";

export const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <section className="lg:mb-20">
        <div className="my-container flex items-center w-[100%] h-[220px] bg-[#383737] dark:bg-[#171111] lg:h-[320px]">
          <div className="text-center">
            <h2 className="text-[14px] md:text-[27px] xl:text-[48px] mb-4 text-brightRed font-semibold ">
              OUR SERVICES
            </h2>
            <p className="text-[#98A2B3] text-[12px] md:text-[16px] lg:text-[20px] xl:text-[24px] w-[85%] mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue sit
              sed faucibus et sed enim accumsan, ultrices. Porta tincidunt
              malesuada ullamcorper tellus sed viverra. Porttitor nam nunc
              elementum massa. Sagittis quis pulvinar etiam amet quam libero
              velit.
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
                {" "}
                Web Development{" "}
              </span>
              <span className="bg-brightRed h-[2px] w-[80%]"></span>
            </div>
            <div className="text-center w-[80%]">
              <span className="text-[#808089] text-[12px] md:text-[16px]">
                Cuesoft does not just help you curate your website to
                perfection, we stay on top of the latest standards to ensure
                that your website remains current and relevant as well as
                provide you with updates and maintenance as new devices and
                browsers change how sites are accessed and displayed.
              </span>
            </div>
            <div className="absolute -bottom-6">
              <button className="a-btn">Read More</button>
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
                {" "}
                Enterprise Development{" "}
              </span>
              <span className="bg-brightRed h-[2px] w-[80%]"></span>
            </div>
            <div className="text-center w-[80%]">
              <span className="text-[#808089] text-[12px] md:text-[16px]">
                Enterprises are always looking for the ways to bring automation
                in the work process and services to improve productivity and
                performance at a time, and with the aid of properly tailored
                software, that can be achieved to great effect..
              </span>
            </div>
            <div className="absolute -bottom-6">
              <button className="a-btn">Read More</button>
            </div>
          </div>

          <div className="mt-28 w-[450px] h-[400px] bg-[#F5F5FA] dark:bg-[#171111] relative flex flex-col gap-6 items-center py-16">
            <div className="absolute -top-12">
              <div className="bg-[#D4FFEA] dark:bg-[#004522] w-[100px] h-[100px] rounded-full flex items-center justify-center">
                <img src={CodeVector} alt="" />
              </div>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-[#515158] dark:text-[#EBEBF0] text-[16px] md:text-[24px] my-2 font-semibold">
                {" "}
                Mobile App Development{" "}
              </span>
              <span className="bg-brightRed h-[2px] w-[80%]"></span>
            </div>
            <div className="text-center w-[80%]">
              <span className="text-[#808089] text-[12px] md:text-[16px]">
                With the exploding popularity of smartphones and tablets, mobile
                application development is becoming an increasingly popular
                medium of software creation. This prolific and growing industry
                is attracting businesses from every corner of the marketplace
                looking for returns, and we at Cuesoft are willing, able and
                ready to bring your perfect mobile app to life.
              </span>
            </div>
            <div className="absolute -bottom-6">
              <button className="a-btn">Read More</button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 flex items-center min-h-screen">
        <div className="my-container text-center">
          <div className="w-[90%] mx-auto">
            <h3 className="text-[16px] md:text-[48px] text-[#64646D] dark:text-[#EBEBF0] mb-12 font-bold">
              Need any of these Services?
            </h3>
            <p className="text-[14px] md:text-[24px] text-[#808089] mb-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
              rhoncus pulvinar arcu, a nascetur ullamcorper aliquam. Montes,
              lacus at nulla habitasse mattis. Semper aliquam sed aliquam.
            </p>
            <button className="a-btn md:w-[50%] text-[16px] md:text-[24px]">
              Contact Us Today
            </button>
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
