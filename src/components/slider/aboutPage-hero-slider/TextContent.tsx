import React from "react";

type myProps = {
  content: {
    header?: string;
    body?: string;
  };
};
export const TextContent = ({ content }: myProps) => {
  return (
    <div className="mx-auto text-center">
      <div className="">
        <h1 className="text-[27px] md:text-[55px] text-brightRed font-semibold lg:mb-4">
          {content.header}
        </h1>
        <p className="text-[12px] md:text-2xl text-white">{content.body}</p>
      </div>
    </div>
  );
};
