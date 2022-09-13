import React from "react";

import { WhyCuesoftVector } from "../components/custom-svgs/WhyCuesoftSvg";
import { RoleRegister } from "../components/custom-svgs/RoleRegister";
import { ConfusedBusinessman } from "../components/custom-svgs/ConfusedBusinessman";

import ChevronDownVector from "../assets/icons/chevron-down-no-bg.svg";
import FileUploadVector from "../assets/icons/file-upload.svg";

import NextArrow from "../assets/nav-btn-icons/next.svg";
import NextNextArrow from "../assets/nav-btn-icons/next-next.svg";
import PrevArrow from "../assets/nav-btn-icons/prev.svg";
import PrevPrevArrow from "../assets/nav-btn-icons/prev-prev.svg";

import { roles } from "../components/career-role/openRolesData";
import { CareerRole } from "../components/career-role/CareerRole";

export const CareersPage = () => {
  return (
    <div>
      <section className="lg:mb-20">
        <div className="my-container flex items-center w-[100%] h-[220px] bg-contain xl:bg-cover bg-center bg-no-repeat bg-careersPage-heroImg lg:h-[500px] py-14 xl:py-32">
          <div className="mx-auto lg:w-2/3 text-center">
            <h2 className="text-[20px] md:text-[27px] xl:text-[55px] text-white font-semibold ">
              Do you have what it takes{" "}
              <span className="text-brightRed">?</span>
            </h2>
            <h2 className="text-[20px] md:text-[27px] xl:text-[55px] text-white font-semibold ">
              <span className="text-brightRed">-Come</span> work with us
            </h2>
          </div>
        </div>
      </section>
      <section>
        <div className="my-container">
          <div className="flex justify-between lg:justify-center lg:gap-32 mt-6 md:mt-0 items-center">
            <WhyCuesoftVector />

            <ConfusedBusinessman />
          </div>
          <div>
            <p className="text-[14px] md:text-[24px] mt-10 text-textNormal dark:text-[#69707D]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
              aliquam elementum suspendisse ornare elit aliquam nulla elit. Non
              amet vitae nunc, adipiscing quisque etiam. Amet risus quam et
              natoque consequat semper aliquet. Ligula scelerisque mus amet
              massa morbi sed egestas pellentesque. Etiam semper pellentesque
              accumsan massa viverra enim iaculis. Quis lacus, nascetur semper
              arcu fermentum nisi, molestie turpis. At est vitae sit leo
              venenatis elementum, enim pulvinar. Pellentesque placerat mauris
              pharetra, vulputate. Lectus lectus mi cras amet. Egestas nisi elit
              arcu a......{" "}
              <span className="text-brightRed underline font-semibold">
                Read More..
              </span>
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="my-container">
          <h3 className="text-textNormal text-center dark:text-darkModeRed text-[14px] md:text-[24px] lg:text-[40px] font-bold mt-32 mb-24 ">
            Here are the open positions in{" "}
            <span className="text-brightRed underline">
              Lagos, Nigeria
              <img
                src={ChevronDownVector}
                alt="expand more"
                className="inline ml-2 md:ml-4 w-[10px] h-[10px]"
              />
            </span>
          </h3>

          <div className="mt-16">
            <div className="md:w-[50%] mx-auto text-center flex items-center justify-center">
              <span className="text-brightRed  font-bold py-2 px-2 md:py-4 md:px-8 border-b-2 border-brightRed cursor-pointer">
                All
              </span>
              <span className="text-textNormal py-2 px-2 md:py-4 md:px-8 border-b-2 cursor-pointer">
                ICT
              </span>
              <span className="text-textNormal py-2 px-2 md:py-4 md:px-8 border-b-2 cursor-pointer">
                Sales
              </span>
              <span className="text-textNormal py-2 px-2 md:py-4 md:px-8 border-b-2 cursor-pointer">
                Engineering
              </span>
              <span className="text-textNormal py-2 px-2 md:py-4 md:px-8 border-b-2 cursor-pointer">
                Others
              </span>
            </div>
          </div>

          <div className="">
            <div className="flex flex-col md:flex-wrap md:flex-row mt-12 gap-10 justify-end">
              {roles.map((role, idx) => (
                <CareerRole key={`${idx}-${role.name}`} role={role} />
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center mt-8 gap-4">
            <img src={PrevArrow} alt="next" />
            <img src={PrevPrevArrow} alt="next" />
            <div>
              <span className="underline text-brightRed font-bold">1</span> of 4
            </div>
            <img src={NextArrow} alt="next" />
            <img src={NextNextArrow} alt="next" />
          </div>
        </div>
      </section>

      <section className="my-40">
        <div className="my-container">
          <div className="flex flex-col-reverse md:flex-row justify-between items-center">
            <div className="md:w-1/3">
              <span className="text-[16px] lg:text-[24px] text-textNormal font-semibold dark:text-white">
                Let us work together
              </span>
              <h3 className="text-[32px] lg:text-[48px] mb-16 text-brightRed font-bold">
                Send us your CV
              </h3>
              <form className="flex flex-col gap-12">
                <div>
                  <label
                    htmlFor="name"
                    className="text-[16px] font-bold text-[#1A1C21] dark:text-white"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="bg-[#FBFCFD] border border-[#132295]/[.1] w-full p-3 rounded-md dark:bg-[#161616]"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="text-[16px] font-bold text-[#1A1C21] dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="bg-[#FBFCFD] border border-[#132295]/[.1] w-full p-3 rounded-md dark:bg-[#161616]"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label
                    htmlFor="tel-number"
                    className="text-[16px] font-bold text-[#1A1C21] dark:text-white"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="tel-number"
                    className="bg-[#FBFCFD] border border-[#132295]/[.1] w-full p-3 rounded-md dark:bg-[#161616]"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label
                    htmlFor="file-input"
                    className="text-[16px] font-bold text-[#1A1C21] dark:text-white"
                  >
                    Resume/Cv Upload
                    <span className="w-full py-24 bg-[#FBFCFD] h-24 flex flex-col gap-4 justify-center items-center dark:bg-[#161616]">
                      <img
                        src={FileUploadVector}
                        alt="upload"
                        className="dark:fill-white"
                      />
                      <p className="text-textNormal font-medium text-center dark:text-white">
                        Select or drag and drop multiple files
                      </p>
                    </span>
                  </label>
                  <input
                    className="hidden"
                    id="file-input"
                    type="file"
                    accept="application/pdf"
                    multiple
                  />
                </div>
                <button className="a-btn">Submit</button>
              </form>
            </div>
            <div className="text-center mx-auto">
              <RoleRegister />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
