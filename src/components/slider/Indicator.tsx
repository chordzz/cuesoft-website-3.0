import React from "react";

import SliderIndicatorEllipseActive from "../../assets/icons/slider-indicator-ellipse-active.svg";
import SliderIndicatorEllipseInactive from "../../assets/icons/slider-indicator-ellipse-inactive.svg";

type myProps = {
  active: boolean;
};

export const Indicator = ({ active }: myProps) => {
  return (
    <div className="mx-2">
      <img
        src={`${
          active ? SliderIndicatorEllipseActive : SliderIndicatorEllipseInactive
        }`}
        alt="indicator"
        className="w-[9px] h-[9px] lg:w-[15px] lg:h-[15px]"
      />
    </div>
  );
};
