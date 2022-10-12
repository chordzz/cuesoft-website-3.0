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
              Leading brands trust us to level-up their businesses and beat
              their competition through our real world process of creating
              intelligent and custom-built software.
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
                Having prided ourselves in transforming the most audacious
                concepts into flawless web apps over the years. And with
                multiple projects tied to our belt, we go beyond just creating
                web pages. We create business solutions.
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
                Being a software development company with well-tested techniques
                for solving custom software problems in various sectors for
                several years, you can trust us to do it again with your
                business.
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
                With numerous years of experience with custom mobile development
                across different industries, we have prided ourselves in
                understanding your customers’ needs and pain points while
                designing a product that perfectly fits your business goals.
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
