import React, { useEffect, useState } from "react";

import Phone from "../assets/icons/phone-settings.svg";
import Email from "../assets/icons/email-alternate.svg";
import Home from "../assets/icons/home.svg";
import ContactImg from "../assets/imgs/contact-us-img.svg";

import { useTranslation } from "react-i18next";
import logger from "../libs/logger";

export const ContactPage = () => {
  const { t } = useTranslation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const table_id = process.env.REACT_APP_AIRTABLE_TABLE_ID_CONTACT_INFO;
    const base_id = process.env.REACT_APP_AIRTABLE_BASE_ID;
    const api_key = process.env.REACT_APP_AIRTABLE_API_KEY;

    const myHeaders_ = {
      Authorization: `Bearer ${api_key}`,
      "Content-Type": "application/json"
    };

    const data = {
      fields: {
        Name: name,
        Email: email,
        Message: message
      }
    };

    fetch(`https://api.airtable.com/v0/${base_id}/${table_id}`, {
      method: "POST",
      headers: myHeaders_,
      body: JSON.stringify(data)
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        logger.info(data);
      })
      .catch((error) => {
        logger.error(error);
      });
  };

  return (
    <div data-testid="contactpage">
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
                <>{t("contactpage.hero-section.address.header")}</>
              </h4>
              <p className="text-[12px] md:text-[14px] lg:text-[16px] text-[#F5F5FA] dark:text-white">
                <>{t("contactpage.hero-section.address.address-US")}</>
              </p>
              <p className="text-[12px] md:text-[14px] lg:text-[16px] text-[#F5F5FA] dark:text-white">
                <>{t("contactpage.hero-section.address.NG")}</>
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
                <>{t("contactpage.hero-section.email.header")}</>
              </h4>
              <p className="text-[12px] md:text-[14px] lg:text-[16px] text-[#F5F5FA] dark:text-white">
                <>{t("contactpage.hero-section.email.label")}</>
                <>{t("contactpage.hero-section.email.address")}</>
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
                <>{t("contactpage.hero-section.phone-no.header")}</>
              </h4>
              <p className="text-[12px] md:text-[14px] lg:text-[16px] text-[#F5F5FA] dark:text-white">
                <>{t("contactpage.hero-section.phone-no.phone-US")}</>
                +13025724020
              </p>
              <p className="text-[12px] md:text-[14px] lg:text-[16px] text-[#F5F5FA] dark:text-white">
                <>{t("contactpage.hero-section.phone-no.phone-NG")}</>+234 902
                650 9478
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact-form" className="my-40">
        <div className="my-container">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="w-[100%] lg:w-1/3">
              <span className="text-[16px] lg:text-[24px] text-textNormal font-semibold dark:text-white">
                <>{t("contactpage.contact-us-form.sub-header")}</>
              </span>
              <h3 className="text-[32px] lg:text-[48px] mb-16 text-brightRed font-bold">
                <>{t("contactpage.contact-us-form.header")}</>
              </h3>
              <form
                id="contact-form"
                className="flex flex-col gap-12"
                onSubmit={handleFormSubmit}
              >
                <div>
                  <label
                    htmlFor="name"
                    className="text-[16px] font-bold text-[#1A1C21] dark:text-white"
                  >
                    <>{t("contactpage.contact-us-form.form-labels.name")}</>
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="bg-[#FBFCFD] border border-[#132295]/[.1] w-full p-3 rounded-md dark:bg-[#161616]"
                    placeholder="Enter your name"
                    name="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="text-[16px] font-bold text-[#1A1C21] dark:text-white"
                  >
                    <>{t("contactpage.contact-us-form.form-labels.email")}</>
                  </label>
                  <input
                    type="email"
                    id="name"
                    className="bg-[#FBFCFD] border border-[#132295]/[.1] w-full p-3 rounded-md dark:bg-[#161616]"
                    placeholder="Enter your email address"
                    name="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label
                    htmlFor="message"
                    className="text-[16px] font-bold text-[#1A1C21] dark:text-white"
                  >
                    <>{t("contactpage.contact-us-form.form-labels.message")}</>
                  </label>
                  <textarea
                    className="text-textNormal p-4 font-medium dark:text-white bg-[#FBFCFD] dark:bg-[#161616] resize-none border border-[#132295]/[.1] rounded-md"
                    id="message"
                    rows={5}
                    name="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
                <button type="submit" className="a-btn">
                  <>{t("contactpage.contact-us-form.btn-text")}</>
                </button>
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
