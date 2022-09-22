import React, { useEffect, useState } from "react";

import AmazonInvestor from "../../../assets/imgs/amazon-investor.jpg";
import Star from "../../../assets/icons/star.svg";

export const CustomInvestorsSlider = () => {
  const [activePage, setActivePage] = useState(0);

  const [activeRightBtn, setActiveRightBtn] = useState(true);
  const [activeLeftBtn, setActiveLeftBtn] = useState(false);

  let horizontalSection = document.querySelector(".horizontal-section");

  const sliderContent = [
    {
      header: "Amazon Incorporated",
      subHeader: "No 019, lorem Ipsum Street, Lorem Ipsium, Lorem Ipsium",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ligula iaculis morbi nulla at. Nunc eget lectus egestas vivamus duis nisi, et interdum mi. Et massa consectetur diam tempus, imperdiet tortor. Malesuada purus sit consequat commodo sagittis. Sed sapien eu enim fermentum turpis gravida id cras id. Blandit varius auctor morbi nibh mi sollicitudin massa faucibus. Arcu risus turpis a sagittis semper diam arcu duis pharetra. Nibh fusce eget tincidunt ipsum vitae tempus ullamcorper tellus. Odio habitant integer neque quis urna. A nam viverra a.",
      img: AmazonInvestor,
      rating: [Star, Star, Star, Star, Star]
    },
    {
      header: "Test Incorporated",
      subHeader: "No 019, lorem Ipsum Street, Lorem Ipsium, Lorem Ipsium",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ligula iaculis morbi nulla at. Nunc eget lectus egestas vivamus duis nisi, et interdum mi. Et massa consectetur diam tempus, imperdiet tortor. Malesuada purus sit consequat commodo sagittis. Sed sapien eu enim fermentum turpis gravida id cras id. Blandit varius auctor morbi nibh mi sollicitudin massa faucibus. Arcu risus turpis a sagittis semper diam arcu duis pharetra. Nibh fusce eget tincidunt ipsum vitae tempus ullamcorper tellus. Odio habitant integer neque quis urna. A nam viverra a.",
      img: AmazonInvestor,
      rating: [Star, Star, Star]
    }
  ];

  useEffect(() => {
    if (!(sliderContent[activePage] && sliderContent[activePage + 1])) {
      setActiveRightBtn(false);
    }
    if (!(sliderContent[activePage] && sliderContent[activePage - 1])) {
      setActiveLeftBtn(false);
    }
    if (sliderContent[activePage] && sliderContent[activePage + 1]) {
      setActiveRightBtn(true);
    }
    if (sliderContent[activePage] && sliderContent[activePage - 1]) {
      setActiveLeftBtn(true);
    }
    // console.log(activePage)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activePage]);

  const handleRightClick = () => {
    horizontalSection && !(activePage + 1 < sliderContent.length - 1)
      ? (horizontalSection.scrollLeft = horizontalSection.scrollWidth)
      : (horizontalSection = null);

    if (
      sliderContent[activePage] &&
      sliderContent[activePage + 1] &&
      activePage + 1 < sliderContent.length
    ) {
      setActivePage((prev) => prev + 1);
    }
  };

  const handleLeftClick = () => {
    horizontalSection
      ? (horizontalSection.scrollLeft = 0)
      : (horizontalSection = null);

    if (
      sliderContent[activePage] &&
      sliderContent[activePage - 1] &&
      activePage - 1 >= 0
    ) {
      setActivePage((prev) => prev - 1);
    }
  };

  return (
    <div>
      <div className="hidden lg:block my-container py-12">
        <div className="">
          <div className="flex gap-12 overflow-hidden horizontal-section">
            <div
              className={`${
                activePage + 1 >= sliderContent.length
                  ? "flex min-w-[90%] items-center"
                  : "hidden"
              }`}
            >
              <div className="w-1/2 bg-transparent hidden md:block">
                <img
                  src={
                    sliderContent[activePage - 1]
                      ? sliderContent[activePage - 1].img
                      : undefined
                  }
                  alt="Amazon company, an investor in cuesoft cloud"
                  className="xl:w-[475px] xl:h-[372px] w-[400px] bg-transparent"
                />
              </div>
              <div className="w-1/2 ">
                <div className="flex flex-col xl:flex-row xl:items-center gap-4 ">
                  <h6 className="text-[15px] md:text-2xl font-bold text-[#343741] dark:text-[#D3DAE6]">
                    {sliderContent[activePage - 1]
                      ? sliderContent[activePage - 1].header
                      : undefined}
                  </h6>
                  <div className="flex flex-1 items-center md:justify-end">
                    <span className="text-[12px] md:text-sm mr-8 text-[#69707D] dark:text[#98A2B3]">
                      Rating
                    </span>
                    <span className="flex">
                      {sliderContent[activePage - 1]
                        ? sliderContent[activePage - 1].rating.map((rating) => (
                            <img src={rating} alt="A rating star" />
                          ))
                        : undefined}
                    </span>
                  </div>
                </div>

                <p className="text-[12px] md:text-[20px] mt-4 dark:font-semibold text-[#69707D] dark:text-[#98A2B3]">
                  {sliderContent[activePage - 1]
                    ? sliderContent[activePage - 1].subHeader
                    : undefined}
                </p>

                <p className="text-[12px] md:text-[16px] text-[#69707D] dark:text-[#D3DAE6] mt-6">
                  {sliderContent[activePage - 1]
                    ? sliderContent[activePage - 1].body
                    : undefined}
                </p>
              </div>
            </div>

            <div className={`min-w-[90%] flex items-center`}>
              <div className="w-1/2 bg-transparent hidden md:block">
                <img
                  src={
                    sliderContent[activePage]
                      ? sliderContent[activePage].img
                      : undefined
                  }
                  alt="Amazon company, an investor in cuesoft cloud"
                  className="xl:w-[475px] xl:h-[372px] w-[400px] bg-transparent"
                />
              </div>
              <div className="w-1/2">
                <div className="flex flex-col xl:flex-row xl:justify-between xl:items-center gap-4">
                  <h6 className="text-[15px] md:text-2xl font-bold text-[#343741] dark:text-[#D3DAE6]">
                    {sliderContent[activePage]
                      ? sliderContent[activePage].header
                      : undefined}
                  </h6>
                  <div className="flex  items-center xl:justify-end">
                    <span className="text-[12px] md:text-sm mr-8 text-[#69707D] dark:text[#98A2B3]">
                      Rating
                    </span>
                    <span className="flex">
                      {sliderContent[activePage]
                        ? sliderContent[activePage].rating.map((rating) => (
                            <img src={rating} alt="A rating star" />
                          ))
                        : undefined}
                    </span>
                  </div>
                </div>

                <p className="text-[12px] md:text-[20px] mt-4 dark:font-semibold text-[#69707D] dark:text-[#98A2B3]">
                  {sliderContent[activePage]
                    ? sliderContent[activePage].subHeader
                    : undefined}
                </p>

                <p className="text-[12px] md:text-[16px] text-[#69707D] dark:text-[#D3DAE6] mt-6">
                  {sliderContent[activePage]
                    ? sliderContent[activePage].body
                    : undefined}
                </p>
              </div>
            </div>

            <div
              className={`${
                activePage + 1 >= sliderContent.length
                  ? "hidden"
                  : "flex min-w-[90%] items-center"
              }`}
            >
              <div className="w-1/2 bg-transparent hidden md:block">
                <img
                  src={
                    sliderContent[activePage + 1]
                      ? sliderContent[activePage + 1].img
                      : undefined
                  }
                  alt="Amazon company, an investor in cuesoft cloud"
                  className="xl:w-[475px] xl:h-[372px] w-[400px] bg-transparent"
                />
              </div>
              <div className="w-1/2 dark:text-[#D3DAE6]">
                <div className="flex flex-col xl:flex-row xl:items-center gap-4">
                  <h6 className="text-[15px] md:text-2xl font-bold text-[#343741] dark:text-[#D3DAE6]">
                    {sliderContent[activePage + 1]
                      ? sliderContent[activePage + 1].header
                      : undefined}
                  </h6>
                  <div className="flex xl:flex-1 items-center xl:justify-end">
                    <span className="text-[12px] md:text-sm mr-8 text-[#69707D] dark:text[#98A2B3]">
                      Rating
                    </span>
                    <span className="flex">
                      {sliderContent[activePage + 1]
                        ? sliderContent[activePage + 1].rating.map((rating) => (
                            <img src={rating} alt="A rating star" />
                          ))
                        : undefined}
                    </span>
                  </div>
                </div>

                <p className="text-[12px] md:text-[20px] mt-4 dark:font-semibold text-[#69707D] dark:text-[#98A2B3]">
                  {sliderContent[activePage + 1]
                    ? sliderContent[activePage + 1].subHeader
                    : undefined}
                </p>

                <p className="text-[12px] md:text-[16px] text-[#69707D] dark:text-[#D3DAE6] mt-6">
                  {sliderContent[activePage + 1]
                    ? sliderContent[activePage + 1].body
                    : undefined}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-20">
          <div
            className={`${
              activeLeftBtn
                ? "bg-[#FFF0EE] cursor-pointer dark:bg-[#342924]"
                : "bg-[#FFF0EE]/50 dark:bg-[#342924]/50"
            } w-[100px] h-[100px] rounded-full flex items-center justify-center`}
            onClick={handleLeftClick}
          >
            <span
              className={`${
                activeLeftBtn ? "text-brightRed" : "text-brightRed/50"
              } text-4xl font-semibold`}
            >
              {"<<"}
            </span>
          </div>
          <div
            className={`${
              activeRightBtn
                ? "bg-[#FFF0EE] cursor-pointer dark:bg-[#342924]"
                : "bg-[#FFF0EE]/50 dark:bg-[#342924]/50"
            } w-[100px] h-[100px] rounded-full flex items-center justify-center`}
            onClick={handleRightClick}
          >
            <span
              className={`${
                activeRightBtn ? "text-brightRed" : "text-brightRed/50"
              } text-4xl font-semibold`}
            >
              {">>"}
            </span>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="lg:hidden my-container w-[1200px] flex overflow-x-scroll gap-12 py-12 items-">
        {sliderContent.map((item) => (
          <div className="min-w-[80%] inline-block md:w-1/2">
            <div className="flex flex-col">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <h6 className="text-[15px] md:text-2xl font-bold">
                  {item.header}
                </h6>
                <div className="flex flex-1 items-center md:justify-end">
                  <span className="text-[12px] md:text-sm mr-6">Rating</span>
                  <span className="flex">
                    {item.rating.map((rating) => (
                      <img
                        src={rating}
                        alt="A rating star"
                        className="w-[15px]"
                      />
                    ))}
                  </span>
                </div>
              </div>

              <p className="text-[12px] md:text-[20px] text-[#69707D] mt-4">
                {item.subHeader}
              </p>

              <div className=" bg-transparent mt-8">
                <img
                  src={item.img}
                  alt="Amazon company, an investor in cuesoft cloud"
                  className=""
                />
              </div>

              <p className="text-[12px] md:text-[16px] text-[#69707D] mt-6">
                {item.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
