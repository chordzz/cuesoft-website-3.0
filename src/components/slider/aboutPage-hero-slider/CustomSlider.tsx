import React, { useEffect, useState } from "react";
import { DirectionArrowLeft } from "./DirectionArrowLeft";
import { DirectionArrowRight } from "./DirectionArrowRight";

import { TextContent } from "./TextContent";
import { Indicator } from "./Indicator";

export const CustomSlider = () => {
  const [activePage, setActivePage] = useState(0);

  const [activeRightBtn, setActiveRightBtn] = useState(true);
  const [activeLeftBtn, setActiveLeftBtn] = useState(false);

  const sliderContent = [
    {
      header: "Our Vision",
      body: "Our company's mission is to use software and cloud computing to make enterprise software affordable and accessible to all types of businesses.",
      bImage: "vision"
    },
    {
      header: "Our Mission",
      body: "Our mission is to help enterprises accelerate adoption of new technologies, untangle complex issues that always emerge during digital evolution, and orchestrate ongoing innovation.",
      bImage: "mission"
    }
  ];

  const handleRightClick = () => {
    if (
      sliderContent[activePage] &&
      sliderContent[activePage + 1] &&
      activePage + 1 < sliderContent.length
    ) {
      setActivePage((prev) => prev + 1);
    }
  };

  const handleLeftClick = () => {
    if (
      sliderContent[activePage] &&
      sliderContent[activePage - 1] &&
      activePage - 1 >= 0
    ) {
      setActivePage((prev) => prev - 1);
    }
  };

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activePage]);

  useEffect(() => {
    const interval = setTimeout(() => {
      if (activePage + 1 >= sliderContent.length) setActivePage(0);
      else setActivePage((prevCounter) => prevCounter + 1);
    }, 10000);

    return () => clearTimeout(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activePage]);

  return (
    <div className="relative w-[100%] h-[220px] md:h-[500px] py-14 md:py-32 ">
      <div
        className={`bg-cover bg-center bg-no-repeat bg-${
          sliderContent[activePage] ? sliderContent[activePage].bImage : ""
        } w-[100%] h-[100%] absolute top-0 z-10`}
      ></div>
      <div className="bg-[#000000] w-[100%] h-[100%] absolute top-0 opacity-75 z-10"></div>
      <div className="absolute z-20 h-[100%] top-0">
        <div className="relative flex justify-between w-[95%] h-[100%] mx-auto items-center">
          <DirectionArrowLeft
            active={activeLeftBtn}
            handleClick={handleLeftClick}
          />
          <div className="flex flex-col items-center h-[80%] md:h-[60%] w-[80%] justify-between">
            <div>
              <TextContent
                content={
                  sliderContent[activePage] ? sliderContent[activePage] : {}
                }
              />
            </div>
            <div className="flex">
              {sliderContent.map((content, idx) => (
                <Indicator active={activePage === idx ? true : false} />
              ))}
            </div>
          </div>
          <DirectionArrowRight
            active={activeRightBtn}
            handleClick={handleRightClick}
          />
        </div>
      </div>
    </div>
  );
};
