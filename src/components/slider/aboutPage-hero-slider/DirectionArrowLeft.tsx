import React from "react";
import { ChevronLeftSvg } from "./ChevronLeftSvg";

type myProps = {
  active: boolean;
  handleClick: React.MouseEventHandler<HTMLDivElement>;
};

export const DirectionArrowLeft = ({ active, handleClick }: myProps) => {
  return (
    <div className="flex justify-center" onClick={handleClick}>
      <ChevronLeftSvg active={active} />
    </div>
  );
};
