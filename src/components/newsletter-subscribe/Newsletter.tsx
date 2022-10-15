import MessageSent from "../../assets/imgs/message-sent.svg";

export const Newsletter = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();

    const url = process.env.REACT_APP_MAILCHIMP_URL;
    const data = { EMAIL: e.target.elements.EMAIL.value };

    const options = {
      method: "POST",
      body: JSON.stringify(data)
    };

    fetch(url!, options)
      .then((response) => {
        return response.json();
      })
      .then((data) => {});
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
            Join our mailing list to receive weekly emails on our offers,
            company news and other helpful content.
          </p>
          <div>
            <form
              className="flex flex-col gap-8 lg:flex-row validate"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
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
