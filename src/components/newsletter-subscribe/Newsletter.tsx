import React from "react";

import MessageSent from "../../assets/imgs/message-sent.svg";

export const Newsletter = () => {
  return (
    <section>
      <div className="my-container text-center mt-12 md:mt-0 md:min-h-screen flex flex-col lg:flex-row items-center justify-center">
        <div className="hidden lg:block lg:w-1/3">
          <img src={MessageSent} alt="Message Sent" />
        </div>
        <div className="lg:w-2/3 lg:text-left lg:pl-20">
          <h3 className="text-brightRed dark:text-darkModeRed text-[24px] lg:text-[40px] font-bold">
            Subscribe to our Newsletter
          </h3>
          <p className="mb-4 text-textNormal text-[12px] lg:text-2xl dark:text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div>
            <form className="flex flex-col gap-8 lg:flex-row">
              {/* <input type="hidden" name="u" value={process.env.REACT_APP_MAILCHIMP_U}/> */}
              {/* <input type="hidden" name="id" value={process.env.REACT_APP_MAILCHIMP_ID}/> */}
              <input
                type="email"
                placeholder="Your e-mail address"
                className="lg:w-[321px] bg-[#FBFCFD] border border-[#132295]/[.1] py-3 px-8 rounded-[4px] dark:text-white dark:bg-[#161616]"
              />

              {/* <input type="hidden" name="ht" value="d28c3f4aff69a15419f00dea8fa1a2478a220866:MTY1NzAzNTU0NC43MzMx"/>
              <input type="hidden" name="mc_signupsource" value="hosted"/> */}
              <button className="a-btn mx-auto w-full lg:ml-8 text-[13px] lg:w-[246px] lg:text-[17px]">
                Subscribe to Mail
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
