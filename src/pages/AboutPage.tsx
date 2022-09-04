import React from "react";

import ProPerson from "../assets/imgs/pro-person.svg";
import WorldWeb from "../assets/imgs/world-web.svg";
import Checklist from "../assets/imgs/checklist.svg";

import { Data } from "../components/team-members/membersData";
import { TeamMembers } from "../components/team-members/TeamMembers";

export const AboutPage = () => {
  return (
    <div>
      <div className="bg-aboutPage-peopleGroupImg bg-cover ">
        <section className="md:mb-20">
          <div className="my-container w-[100%] h-[220px] bg-cover bg-center bg-no-repeat bg-aboutPage-heroImg md:h-[500px] py-14 md:py-32">
            <div className="mx-auto lg:w-2/3 text-center">
              <h1 className="text-[27px] md:text-[55px] text-brightRed font-semibold ">
                Our Vision
              </h1>
              <p className="text-[12px] md:text-2xl text-white">
                Our company's mission is to use software and cloud computing to
                make enterprise software affordable and accessible to all types
                of businesses.
              </p>
            </div>
          </div>
        </section>

        <section className="">
          <div className="my-container flex justify-between md:px-16">
            <div className="md:w-[50%]  text-left py-16">
              <h3 className="text-[24px] lg:text-[40px] text-brightRed font-semibold mb-8 text-center md:text-left">
                We are the Kubernetes for technical teams.{" "}
              </h3>
              <div className="text-[12px] lg:text-2xl text-textNormal dark:text-white flex flex-col items-center gap-6 md:gap-2">
                <p>
                  We are a custom and proprietary software development company
                  that builds innovative and secure digital solutions for
                  companies, enterprises and startups.
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
                  Our team of consultants, UX experts and software developers
                  converts an idea into reality.Being a leading software
                  development company.
                </p>
                <br className="hidden lg:block" />
                <p>
                  We understand that every enterprise has a different software
                  requirement and therefore, we provide custom software
                  development services to meet their expectations.
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
                  Our values are the guiding principles upon which Cuesoft was
                  founded and how we strive to conduct our business on a daily
                  basis. Values establish our view of the world as we shape the
                  future. They determine how we treat each other.
                </p>
                <br className="hidden lg:block" />
                <p>
                  Our drive for exceptional service delivery is built on the
                  belief that we are nothing if you are not satisfied with us.
                  Our passion for helping you achieve your goals, no matter
                  what, is what truly differentiates us from our competitors.
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
              We build effective, scalable development teams fitting your
              project’s needs. Our experienced developers are ready to join your
              project. We support their growth and keep them motivated so they
              can take up the most challenging jobs.
            </p>
          </div>

          <div className="flex justify-center md:gap-12 flex-wrap text-textNormal lg:mt-28">
            {Data.map((person) => (
              <TeamMembers person={person} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
