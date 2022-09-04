import React from "react";

import ChevronRightNoBg from "../assets/icons/chevron-right-no-bg.svg";

export const ServicesPage = () => {
  return (
    <div>
      <section
        id="faq"
        className="bg-bgLight2 dark:bg-darkModeBgLight min-h-screen py-20"
      >
        <div className="my-container">
          <h3 className="text-brightRed text-center dark:text-darkModeRed text-[24px] lg:text-[40px] font-bold mb-16">
            Frequently Asked Questions
          </h3>

          <div className="flex relative items-center justify-end">
            <div className="w-[50%] bg-white dark:bg-darkModeHowCard absolute left-0 z-30 shadow-md">
              <ul className=" text-[16px] text-textNormal dark:text-white">
                <li className="flex justify-between p-6 items-center bg-[#FAFBFF] dark:bg-[#0F0F0F] shadow-sm">
                  <span className="w-[30px] h-[30px] bg-[#FF5151] dark:bg-[#FF6B6B] rounded-[100%]"></span>
                  <p className="w-[80%] font-semibold">
                    {" "}
                    What is Cuesoft Enterprise ?{" "}
                  </p>
                  <img src={ChevronRightNoBg} alt="Chevron right" />
                </li>
                <li className="flex p-4 items-start ">
                  <span className="w-[20px] h-[20px] bg-[#FFF1F1] dark:bg-[#221210] rounded-[100%]"></span>
                  <p className="ml-6 w-[90%]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Odio.
                  </p>
                </li>
                <li className="flex p-4 items-start ">
                  <span className="w-[20px] h-[20px] bg-[#FFF1F1] dark:bg-[#221210] rounded-[100%]"></span>
                  <p className="ml-6 w-[90%]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Odio.
                  </p>
                </li>
                <li className="flex p-4 items-start ">
                  <span className="w-[20px] h-[20px] bg-[#FFF1F1] dark:bg-[#221210] rounded-[100%]"></span>
                  <p className="ml-6 w-[90%]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    nam nibh.
                  </p>
                </li>
                <li className="flex p-4 items-start ">
                  <span className="w-[20px] h-[20px] bg-[#FFF1F1] dark:bg-[#221210] rounded-[100%]"></span>
                  <p className="ml-6 w-[90%]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Porta hendrerit sagittis est pulvinar integer congue.
                    Viverra sagittis nisi.
                  </p>
                </li>
              </ul>
            </div>

            <div className="w-[60%] text-textNormal dark:text-[#98A2B3] text-[16px] bg-[#FDE3E3] dark:bg-[#1C1C1C] rounded-lg relative shadow-lg py-12 pl-[15%] pr-12">
              <div className="">
                <p className="text-textBold dark:text-[#E0E1E7] font-bold text-[20px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Porttitor quam hendrerit non.
                </p>
                <p className="mt-8 ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Facilisis tristique tellus mi risus id velit et consequat nam.
                  Purus euismod potenti turpis magna leo, tortor sed tempus leo.
                  Sollicitudin egestas etiam pellentesque egestas vulputate
                  augue suspendisse.
                  <br />
                  <br />
                  Laoreet aliquam tortor, vestibulum, at mi. Ut augue fermentum,
                  sit iaculis ut at sed in. Tincidunt tellus sit vulputate morbi
                  consequat at morbi sit quis. Velit ut nec in urna mattis
                  egestas dapibus leo neque. Vitae, aliquam tortor sed faucibus.
                  Porttitor sed orci eget felis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
