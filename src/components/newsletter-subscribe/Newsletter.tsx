import { t } from "i18next";
import React, { useEffect, useState } from "react";
import MessageSent from "../../assets/imgs/message-sent.svg";
import { MailingListSuccess } from "../mailing-list-success/MailingListSuccess";

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [renderSuccess, setRenderSuccess] = useState(false);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setRenderSuccess(false);
    }, 4000);

    return () => clearTimeout(timerId);
  }, [renderSuccess]);

  const handleClose = () => {
    setRenderSuccess(false);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const url = process.env.REACT_APP_MAILCHIMP_URL;

    let formData = new FormData();

    formData.append("EMAIL", e.target.elements.EMAIL.value);

    const options: RequestInit = {
      method: "POST",
      body: formData
    };

    fetch(url!, options).then((response) => {
      if (response.status === 200) {
        setRenderSuccess(true);
      }
    });
  };

  return (
    <section>
      <div className="my-container text-center mt-12 md:mt-0 md:min-h-screen flex flex-col lg:flex-row items-center justify-center">
        <div className="hidden lg:block lg:w-1/3">
          <img src={MessageSent} alt="Message Sent" />
        </div>
        <div className="lg:w-2/3 lg:text-left lg:pl-20">
          <h3 className="text-brightRed dark:text-darkModeRed text-[24px] lg:text-[40px] font-bold ">
            <>{t("newsletter.title")}</>
          </h3>
          <p className="mb-4 text-textNormal text-[12px] lg:text-2xl dark:text-white">
            <>{t("newsletter.subtitle")}</>
          </p>
          <div id="mc_embed_signup">
            <form
              className="flex flex-col gap-8 lg:flex-row validate justify-between items-center"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              onSubmit={handleSubmit}
              noValidate
            >
              <input
                type="email"
                placeholder={t("newsletter.emailPlaceholder")}
                className="lg:w-[60%] bg-[#FBFCFD] border border-[#132295]/[.1] py-3 px-8 rounded-[4px] dark:text-white dark:bg-[#161616] required email mc-field-group"
                name="EMAIL"
                id="mce-EMAIL"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <div id="mce-responses" className="clear foot">
                <div
                  className="response"
                  id="mce-error-response"
                  style={{ display: "none" }}
                ></div>
                <div
                  className="response"
                  id="mce-success-response"
                  style={{ display: "none" }}
                ></div>
              </div>

              <button
                type="submit"
                id="mc-embedded-subscribe"
                className="a-btn mx-auto w-full lg:ml-8 text-[13px] lg:w-[40%] lg:text-[17px] "
              >
                <>{t("newsletter.btnText")}</>
              </button>
            </form>
          </div>

          {renderSuccess && (
            <div className="mt-8">
              <MailingListSuccess handleClose={handleClose} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
