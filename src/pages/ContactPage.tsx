import React, { useEffect } from "react";

import Phone from "../assets/icons/phone-settings.svg";
import Email from "../assets/icons/email-alternate.svg";
import Home from "../assets/icons/home.svg";
import ContactImg from "../assets/imgs/contact-us-img.svg";

export const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <section className="my-20">
        <div className="bg-[#440904] dark:bg-[#121010]">
          <div className="my-container py-12 px-8 flex flex-col md:flex-row md:justify-around gap-8 text-center">
            <div className="flex flex-col items-center gap-4 md:w-1/3">
              <div className="w-[35px] h-[35px] md:w-[82px] md:h-[82px] rounded-full bg-[#6E3C39] dark:bg-[#312222] flex items-center justify-center">
                <img
                  src={Home}
                  alt="An icon of a house"
                  className="w-[13px] h-[13px] md:w-[32px] md:h-[36px]"
                />
              </div>
              <h4 className="font-bold text-white text-[16px] md:text-[24px] dark:text-[#A6A6B0]">
                ADDRESS
              </h4>
              <p className="text-[12px] md:text-[14px] lg:text-[16px] text-[#F5F5FA] dark:text-white">
                8 The Green, Ste A, Dover, 19901, Delaware, United States
              </p>
              <p className="text-[12px] md:text-[14px] lg:text-[16px] text-[#F5F5FA] dark:text-white">
                39 Alfred Rewane Road, Mulliner Towers, Ikoyi, 101233, Lagos,
                Nigeria
              </p>
            </div>

            <div className="flex flex-col items-center gap-4 md:w-1/3">
              <div className="w-[35px] h-[35px] md:w-[82px] md:h-[82px] rounded-full bg-[#6E3C39] dark:bg-[#312222] flex items-center justify-center">
                <img
                  src={Email}
                  alt="An icon of a house"
                  className="w-[13px] h-[13px] md:w-[32px] md:h-[36px]"
                />
              </div>
              <h4 className="font-bold text-white text-[16px] md:text-[24px] dark:text-[#A6A6B0]">
                EMAIL
              </h4>
              <p className="text-[12px] md:text-[14px] lg:text-[16px] text-[#F5F5FA] dark:text-white">
                Mail: hello@cuesoft.io
              </p>
            </div>

            <div className="flex flex-col items-center gap-4 md:w-1/3">
              <div className="w-[35px] h-[35px] md:w-[82px] md:h-[82px] rounded-full bg-[#6E3C39] dark:bg-[#312222] flex items-center justify-center">
                <img
                  src={Phone}
                  alt="An icon of a house"
                  className="w-[13px] h-[13px] md:w-[32px] md:h-[36px]"
                />
              </div>
              <h4 className="font-bold text-white text-[16px] md:text-[24px] dark:text-[#A6A6B0]">
                PHONE NUMBER
              </h4>
              <p className="text-[12px] md:text-[14px] lg:text-[16px] text-[#F5F5FA] dark:text-white">
                US Phone: +13025724020
              </p>
              <p className="text-[12px] md:text-[14px] lg:text-[16px] text-[#F5F5FA] dark:text-white">
                Nigeria Phone: +234 902 650 9478
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="my-40">
        <div className="my-container">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="w-[100%] lg:w-1/3">
              <span className="text-[16px] lg:text-[24px] text-textNormal font-semibold dark:text-white">
                Let us work together
              </span>
              <h3 className="text-[32px] lg:text-[48px] mb-16 text-brightRed font-bold">
                Reach out to us
              </h3>
              <form className="flex flex-col gap-12">
                <div>
                  <label
                    htmlFor="name"
                    className="text-[16px] font-bold text-[#1A1C21] dark:text-white"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="bg-[#FBFCFD] border border-[#132295]/[.1] w-full p-3 rounded-md dark:bg-[#161616]"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="text-[16px] font-bold text-[#1A1C21] dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="bg-[#FBFCFD] border border-[#132295]/[.1] w-full p-3 rounded-md dark:bg-[#161616]"
                    placeholder="Enter your email address"
                  />
                </div>

                <div className="flex flex-col">
                  <label
                    htmlFor="message"
                    className="text-[16px] font-bold text-[#1A1C21] dark:text-white"
                  >
                    Message
                  </label>
                  <textarea
                    className="text-textNormal p-4 font-medium dark:text-white bg-[#FBFCFD] dark:bg-[#161616] resize-none border border-[#132295]/[.1] rounded-md"
                    id="message"
                    rows={5}
                  ></textarea>
                </div>
                <button className="a-btn">Contact Us</button>
              </form>
            </div>
            <div className="text-center mx-auto mt-16 lg:mt-0">
              <img
                src={ContactImg}
                alt="A customer care representative animation"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
