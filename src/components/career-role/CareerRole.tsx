import React from "react";
import LocationVector from "../../assets/icons/location-vector.svg";

type myProps = {
  role: {
    mode: string;
    name: string;
    location: string;
    image: string;
    barColor: string;
  };
};

export const CareerRole = ({
  role: { name, mode, location, image, barColor }
}: myProps) => {
  return (
    <div className="w-[100%] md:w-[70%] lg:w-[47%] mx-auto">
      <div className="flex  items-center w-full">
        <div className="w-[10px] bg-[#00BFB3] lg:mr-4"> </div>

        <div className="w-[100%] xl:w-[90%] bg-[#FAFAFA] dark:bg-[#161616] flex items-center px-4 py-2">
          <div className="w-[80%] flex lg:ml-2 items-center">
            <img
              src={image}
              alt="role type"
              className="w-[24px] h-[24px] md:w-[50px] md:h-[50px]"
            />

            <div className="flex flex-col gap-2 md:gap-4 ml-4">
              <span className="text-[14px] md:text-[24px] text-[#343741] dark:text-white font-semibold">
                {name}
              </span>

              <p className="text-[14px] md:text-[24px] italic text-textNormalSupLight ">
                {mode}
              </p>

              <div className="flex items-center gap-2">
                <img
                  src={LocationVector}
                  alt="location vector"
                  className="w-[15px] h-[15px]"
                />
                <span className="text-[12px] md:text-[20px]">{location}</span>
              </div>
            </div>
          </div>
          <div className="xl:w-[20%]">
            <button className="a-btn text-[10px] md:text-[16px]">Apply</button>
          </div>
        </div>
      </div>
    </div>
  );
};
