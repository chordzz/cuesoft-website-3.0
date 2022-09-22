import React from "react";
import { ChevronRightSvg } from "./ChevronRightSvg";

type myProps = {
  active: boolean;
  handleClick: React.MouseEventHandler<HTMLDivElement>;
};

export const DirectionArrowRight = ({ active, handleClick }: myProps) => {
  return (
    <div className=" flex justify-center" onClick={handleClick}>
      <ChevronRightSvg active={active} />
    </div>
  );
};
