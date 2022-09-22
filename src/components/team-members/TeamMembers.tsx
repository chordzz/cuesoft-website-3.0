import React from "react";

type myProps = {
  person: {
    imageUrl: string;
    name: string;
    position: string;
  };
};

export const TeamMembers = ({ person }: myProps) => {
  return (
    <div className="mt-4 w-[50%] md:w-[20%] text-center flex flex-col justify-center items-center">
      <img
        src={person.imageUrl}
        alt="Profile"
        className="w-[96px] h-[96px] md:h-[60%] md:w-[100%]"
      />

      <div className="md:mt-12 text-center dark:text-white">
        <h6 className="text-[16px] md:text-[20px] font-bold md:mb-4">
          {person.name}
        </h6>
        <span className="text-[12px] md:text-[17px]">{person.position}</span>
      </div>
    </div>
  );
};
