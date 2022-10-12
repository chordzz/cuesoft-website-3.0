import React, { useEffect } from "react";

import ProPerson from "../assets/imgs/pro-person.svg";
import WorldWeb from "../assets/imgs/world-web.svg";
import Checklist from "../assets/imgs/checklist.svg";

import { Data } from "../components/team-members/membersData";
import { TeamMembers } from "../components/team-members/TeamMembers";
import { CustomSlider } from "../components/slider/aboutPage-hero-slider/CustomSlider";
import { CustomInvestorsSlider } from "../components/slider/aboutPage-investors-slider/CustomInvestorsSlider";

export const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="bg-aboutPage-peopleGroupImg bg-cover ">
        <section className="md:mb-20">
          <div className="my-container">
            <CustomSlider />
          </div>
        </section>

        <section>
          <div className="my-container flex justify-between md:px-16">
            <div className="md:w-[50%]  text-left py-16">
              <h3 className="text-[24px] lg:text-[40px] text-brightRed font-semibold mb-8 text-center md:text-left">
                We are the Kubernetes for technical teams.{" "}
              </h3>
              <div className="text-[12px] lg:text-2xl text-textNormal dark:text-white flex flex-col items-center gap-6 md:gap-2">
                <p>
                  Being creative in problem solving is the foundation of
                  developing unrivaled and cutting-edge software.
                </p>
                <br className="hidden lg:block" />
                <div>
                  <img
                    src={WorldWeb}
                    alt="World Web"
                    className="md:hidden w-[200px] h-[200px]"
                  />
                </div>
                <p>
                  And with a strong belief that creativity is seeing the unseen
                  in the seen, we founded Cuesoft to assist professionals,
                  startups, and businesses without access to world-class
                  technological products. By developing affordable software
                  solutions that would put them on a global scale and beat their
                  competitors.
                </p>
                <br className="hidden lg:block" />
                <p>
                  So, after two years of pursuing this vision, we launched our
                  first flagship product, Cueprise with the goal of simplifying
                  and optimizing business operations.
                </p>
                <br className="hidden lg:block" />
                <div>
                  <img
                    src={Checklist}
                    alt="Checklist"
                    className="md:hidden w-[200px] h-[200px]"
                  />
                </div>
                <p>
                  And this we did while serving businesses all over the world
                  with resource planning, payroll management, tracking supply
                  chains and inventories, while making it easy for their
                  customers to place orders.
                </p>
                <div>
                  <img
                    src={ProPerson}
                    alt="Professional Person"
                    className="md:hidden w-[200px] h-[200px]"
                  />
                </div>
              </div>
            </div>
            <div className="justify-between items-center hidden md:flex flex-col">
              <div>
                <img
                  src={WorldWeb}
                  alt="World Web"
                  className="w-[200px] h-[200px] lg:w-[305px] lg:h-[305px]"
                />
              </div>
              <div>
                <img
                  src={Checklist}
                  alt="Checklist"
                  className="w-[200px] h-[200px] lg:w-[305px] lg:h-[305px]"
                />
              </div>
              <div>
                <img
                  src={ProPerson}
                  alt="Professional Person"
                  className="w-[200px] h-[200px] lg:w-[305px] lg:h-[305px]"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="md:my-24">
        <div className="my-container">
          <div className="md:w-[80%] mx-auto text-center">
            <h4 className="text-[27px] lg:text-[55px] text-brightRed font-semibold mb-6">
              Our Incredible Team
            </h4>
            <p className="text-[12px] lg:text-2xl text-textNormal dark:text-white">
              We are a team of Leading Consultants, Brilliant Solution
              Engineers, UX Experts, Software Developers, and Whizkids who share
              the values of providing custom software development services to
              every enterprise while growing their careers.
            </p>
          </div>

          <div className="flex justify-center md:gap-12 flex-wrap text-textNormal lg:mt-28">
            {Data.map((person) => (
              <TeamMembers person={person} />
            ))}
          </div>
        </div>
      </section>

      <section className="my-24">
        <div className="">
          <h3 className="text-brightRed dark:text-darkModeRed text-[24px] lg:text-[40px] font-bold mb-8 md:mt-8 text-center">
            Our Investors
          </h3>
          <div className="bg-[#F9F9F9] dark:bg-[#151111]">
            <CustomInvestorsSlider />
          </div>
        </div>
      </section>
    </div>
  );
};
