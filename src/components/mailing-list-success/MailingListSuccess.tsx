import React from "react";
import CheckCircle from "../../assets/icons/check-circle.svg";
import CloseCircle from "../../assets/icons/close-circle.svg";

export const MailingListSuccess = () => {
  return (
    <div className="my-container">
      <div className="flex flex-row items-center justify-between shadow-lg px-4 py-7 md:py-6 md:px-9">
        <img
          src={CheckCircle}
          alt="cookie"
          className="w-[62px] h-[62px] mr-4"
        />

        <div className="text-textNormal">
          <span className="font-semibold text-[20px] lg:text-[24px] text-brightRed md:text-inherit">
            Mail Subscribed
          </span>
          <p className="text-[13px] lg:text-[17px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere
            diam blandit interdum turpis faucibus lorem mattis volutpat.
          </p>
        </div>

        <img
          src={CloseCircle}
          alt="close icon"
          className="hidden md:block w-[36px] h-[36px]"
        />
      </div>
      <div className="flex">
        <span className="h-[5px] w-4/5 bg-[#61C183]"></span>
        <span className="h-[5px] w-1/5 bg-[#333333]"></span>
      </div>
    </div>
  );
};
