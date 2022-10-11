import React from "react";
import axios from "axios";

import MessageSent from "../../assets/imgs/message-sent.svg";

export const Newsletter = () => {
  // Test Function to post from outside the form, Replace URL as needed
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(e.target.elements.EMAIL.value);

    const url = "enter url";
    const data = { EMAIL: e.target.elements.EMAIL.value };

    const options = {
      method: "POST",
      // mode: 'no-cors',
      headers: {
        "Content-Type": "text/plain;charset=UTF-8",
        accept: "*/*",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE, PUT",
        "Access-Control-Allow-Headers":
          "append,delete,entries,foreach,get,has,keys,set,values,Authorization"
      },
      data: JSON.stringify(data),
      url
    };

    axios(options);

    // fetch('enter url', {
    //   method: 'POST', // or 'PUT'
    //   // mode: 'no-cors',
    //   body: JSON.stringify(data),
    //   headers: {
    //     'Content-Type': 'text/plain;charset=UTF-8',
    //     'accept': '*/*',
    //     "Access-Control-Allow-Origin": "http://localhost:3001/",
    //     // 'EMAIL': e.target.elements.EMAIL.value,
    //   },
    // })
    // .then(resp => console.log(resp))
  };

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
            <form
              className="flex flex-col gap-8 lg:flex-row validate"
              // Replacing this with the URL I sent to you will make the form work
              // action="enter url"
              // method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              target="_blank"
              // Contains test function to try posting from outside the form
              onSubmit={handleSubmit}
            >
              <input
                type="email"
                placeholder="Your e-mail address"
                className="lg:w-[321px] bg-[#FBFCFD] border border-[#132295]/[.1] py-3 px-8 rounded-[4px] dark:text-white dark:bg-[#161616] required email"
                name="EMAIL"
                id="mce-EMAIL"
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
                className="a-btn mx-auto w-full lg:ml-8 text-[13px] lg:w-[246px] lg:text-[17px]"
              >
                Subscribe to Mail
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
