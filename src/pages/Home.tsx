import HeroImg from "../assets/imgs/hero-img.png";
import Umobile from "../assets/logos/umobile.svg";
import Finchglow from "../assets/logos/finchglow.svg";
import Sycamore from "../assets/logos/sycamore.svg";

import UmobileDark from "../assets/logos/umobile-dark.svg";
import FinchglowDark from "../assets/logos/finchglow-dark.svg";
import SycamoreDark from "../assets/logos/sycamore-dark.svg";

import Build from "../assets/imgs/build-img.svg";
import Plan from "../assets/imgs/plan-img.svg";
import Iterate from "../assets/imgs/iterate-img.svg";
import Launch from "../assets/imgs/launch-img.svg";

import ConnectVector from "../assets/icons/vectors/connect-vector.svg";

import ConnectionScreen from "../assets/icons/vectors/connection-screen-vector.svg";
import HexagonMod from "../assets/icons/vectors/hexagon-mod-vector.svg";
import ChartVector from "../assets/icons/vectors/chart-vector.svg";
import TeamsVector from "../assets/icons/vectors/teams-vector.svg";

import BorderStyle from "../assets/imgs/border-style-img.svg";

import ReactIcon from "../assets/icons/react-icon.svg";
import NodeIcon from "../assets/icons/node-icon.svg";
import PhpIcon from "../assets/icons/php-icon.svg";
import FlutterIcon from "../assets/icons/flutter-icon.svg";
import AngularIcon from "../assets/icons/angular-icon.svg";
import AndroidIcon from "../assets/icons/android-icon.svg";
import JavaIcon from "../assets/icons/java-icon.svg";
import VueIcon from "../assets/icons/vue-icon.svg";
import AppleIcon from "../assets/icons/apple-icon.svg";

import WebDevImg from "../assets/imgs/web-dev-img.svg";
import MobileAppDevImg from "../assets/imgs/mobile-app-dev-img.svg";
import EnterpriseDevImg from "../assets/imgs/enterprise-dev-img.svg";

import ChevronRight from "../assets/icons/chevron-right-icon.svg";

import QuotesIcon from "../assets/icons/quotes-icon.svg";

import Avatar from "../assets/imgs/avatar.svg";

import CustomerReviewHolderImage from "../assets/imgs/customer-review-holder-img.svg";

import ClientAy from "../assets/imgs/client-ay.svg";
import ClientAguy from "../assets/imgs/client-aguy.svg";
import ClientGuy from "../assets/imgs/client-guy.svg";

import { useContext } from "react";
import { ThemeContext } from "../components/theme-context/theme-context";

export const Home = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div data-testid="homepage">
      <section
        id="hero"
        className="flex lg:items-center lg:min-h-full dark:text-white"
      >
        <div className="flex my-container flex-col items-center md:flex-row mb-12">
          <div className="md:w-3/4">
            <h1 className="text-textNormalSupLight dark:text-white text-[27px] lg:text-[55px] text-left font-bold">
              Re-Imagine
              <span className="text-brightRedLight"> Software.</span>
            </h1>
            <h1 className="xl:mt-4 text-textNormalSupLight dark:text-white text-[27px] lg:text-[55px] text-left font-bold">
              Modernizing{" "}
              <span className="text-brightRedLight">Businesses</span>
            </h1>

            <p className="text-textNormalSupLight dark:text-white text-left mt-6 lg:mt-9 text-[12px] lg:text-2xl lg:max-w-2xl">
              Through our competent process of creating intelligent,
              custom-built software, we help forward-thinking organizations
              transform, scale, and achieve a competitive edge
            </p>

            <div className="hidden md:flex items-center xl:w-1/2 mt-6 lg:mt-12 relative ">
              <div className="w-1/4 lg:w-1/3">
                <img
                  src={ClientGuy}
                  alt="Avatar"
                  className="absolute top-1 lg:top-0 w-[35px] h-[35px] lg:w-[50px] lg:h-[60px]"
                />
                <img
                  src={ClientAguy}
                  alt="Avatar"
                  className="absolute top-1 lg:top-0 left-6 lg:left-6 w-[35px] h-[35px] lg:w-[50px] lg:h-[60px]"
                />
                <img
                  src={ClientAy}
                  alt="Avatar"
                  className="absolute top-1 lg:top-0 left-12 lg:left-12 w-[35px] h-[35px] lg:w-[50px] lg:h-[60px]"
                />
              </div>
              <div className="lg:w-2/3">
                <h5 className="text-[12px] font-bold text-textNormal lg:text-[20px] dark:text-white">
                  Client's Review
                </h5>
                <p>
                  <span className="text-ratingStar text-[13px] lg:text-xl">
                    &#9733;
                  </span>
                  <span className="mx-1 text-[10px] lg:text-[15px] font-bold text-textNormal dark:text-white">
                    4.8
                  </span>
                  <span className="text-textReview text-[10px] dark:text-white">
                    (5k reviews)
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="right-item mt-4 md:mt-0">
            <img
              src={HeroImg}
              alt="Hero"
              className="w-[400px] h-[300px] lg:w-[700px] lg:h-[500px]"
            />
          </div>
        </div>
      </section>
      <section
        id="clients"
        className="flex items-center bg-bgLight dark:bg-darkModeBgLight h-20 lg:h-36"
      >
        {/* <div className="my-container bg-red-600 mt-8 min-h-full"> */}
        <div className="my-container flex justify-around items-center min-h-full">
          <div>
            <img
              src={theme === "dark" ? UmobileDark : Umobile}
              alt="Unilever"
              className="w-[60px] h-[30px] lg:w-[150px] lg:h-[90px]"
            />
          </div>

          <div>
            <img
              src={theme === "dark" ? FinchglowDark : Finchglow}
              alt="Ferrari"
              className="w-[60px] h-[30px] lg:w-[150px] lg:h-[90px]"
            />
          </div>

          <div>
            <img
              src={theme === "dark" ? SycamoreDark : Sycamore}
              alt="Clarks"
              className="w-[60px] h-[30px] lg:w-[150px] lg:h-[90px]"
            />
          </div>

          <div>
            <img
              src={theme === "dark" ? UmobileDark : Umobile}
              alt="Ferrari"
              className="w-[60px] h-[30px] lg:w-[150px] lg:h-[90px]"
            />
          </div>
        </div>
        {/* </div> */}
      </section>

      <section
        id="process"
        className="min-h-screen py-12 md:py-6 md:flex md:items-center"
      >
        <div className="my-container text-center">
          <h3 className="text-brightRed dark:text-darkModeRed text-[24px] lg:text-[40px] font-bold lg:mb-8 md:mt-8">
            How Cuesoft Does It
          </h3>
          <div className="flex text-center flex-col flex-wrap md:flex-row lg:flex-nowrap md:gap-x-16 justify-between">
            <div className="relative lg:w-1/4  text-center dark:bg-darkModeHowCard">
              <img
                src={Plan}
                alt="Plan"
                className="w-[300px] lg:h-[250px] mx-auto"
              />
              <h5 className="md:text-xl text-brightRed dark:text-darkModeRed  font-bold">
                Plan
              </h5>
              <p className="mx-auto max-w-xs text-[15px] text-textNormal dark:text-white">
                Once you contact us and we have your idea tabled. We would
                identify your problems alongside fitting solutions, afterwards
                creating a schedule while assigning duties to our team members.{" "}
              </p>
              <div className="hidden md:block absolute text-xs -right-14 top-56">
                <img
                  src={ConnectVector}
                  alt="Connecting Vector"
                  className="md:w-[45px] md:h-[45px] "
                />
              </div>
            </div>

            <div className=" relative lg:w-1/4 mt-8 md:mt-0  text-center dark:bg-darkModeHowCard">
              <img
                src={Build}
                alt="Build"
                className="w-[300px] lg:h-[250px] mx-auto"
              />
              <h5 className="md:text-xl text-brightRed font-bold">Build</h5>
              <p className="mx-auto max-w-xs text-[15px] text-textNormal dark:text-white">
                Consequently, our team of engineers begin writing code for the
                complete system utilizing the necessary technologies.
              </p>
              <div className="hidden md:block absolute text-xs -right-14 top-56">
                <img
                  src={ConnectVector}
                  alt="Connecting Vector"
                  className="hidden lg:block md:w-[45px] md:h-[45px] "
                />
              </div>
            </div>

            <div className="relative lg:w-1/4 mt-8 md:mt-0  text-center dark:bg-darkModeHowCard">
              <img
                src={Launch}
                alt="Launch"
                className="w-[300px] lg:h-[250px] mx-auto"
              />
              <h5 className="md:text-xl text-brightRed font-bold">Launch</h5>
              <p className="mx-auto max-w-xs text-[15px] text-textNormal dark:text-white">
                Soon the beta live project is launched, and eventually, the live
                project is launched.
              </p>
              <div className="hidden md:block absolute text-xs -right-14 top-56">
                <img
                  src={ConnectVector}
                  alt="Connecting Vector"
                  className="md:w-[45px] md:h-[45px] "
                />
              </div>
            </div>

            <div className=" relative lg:w-1/4 mt-8 md:mt-0  text-center dark:bg-darkModeHowCard">
              <img
                src={Iterate}
                alt="Iterate"
                className="w-[300px] lg:h-[250px] mx-auto"
              />
              <h5 className="md:text-xl text-brightRed font-bold">Iterate</h5>
              <p className="mx-auto max-w-xs text-[15px] text-textNormal dark:text-white">
                This is the testing phase. The product is now monitored for bugs
                and defaults and checked to see for necessary upgrades.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="why" className="flex items-center">
        <div className="my-container text-center py-20">
          <h3 className="text-brightRed text-[24px] lg:text-[40px] font-bold mb-20 dark:text-darkModeRed">
            Why Cuesoft
          </h3>
          <div className="flex flex-col md:flex-row items-center md:justify-around flex-wrap gap-y-24">
            <div className="relative w-[90%] md:w-[45%]">
              <div className="border-boxBlueBorder dark:border-darkBoxBlueBorder rounded-3xl border p-8 py-12 pr-20 text-left relative overflow-hidden">
                <h3 className="text-boxBlue text-[12px] lg:text-xl mb-4 font-bold dark:text-darkBoxBlue">
                  Go From An Idea To A Published Site
                </h3>

                <p className="text-[10px] lg:text-[15px] text-textNormal dark:text-white">
                  With your creatively thought out idea and you sending us a
                  message, you have our world-class team develop your idea after
                  a detailed study of your brand while targeting your business
                  objectives.
                </p>

                <div className="absolute -right-12 bottom-0 ">
                  <img
                    src={BorderStyle}
                    alt="Border Style"
                    className="w-[90px] lg:w-[110px] h-[542px]"
                  />
                </div>
              </div>
              <div className=" absolute -top-6 md:-top-8 left-0">
                <img
                  src={ConnectionScreen}
                  alt="Connection Screen"
                  className="h-[45px] w-[45px] md:h-[62px] md:w-[62px]"
                />
              </div>
            </div>

            <div className="relative w-[90%] md:w-[45%]">
              <div className="rounded-3xl border border-boxPurpleBorder dark:border-darkBoxPurpleBorder p-8 py-12 pr-20 text-left relative overflow-hidden">
                <h3 className="text-boxPurple text-[12px] lg:text-xl mb-4 font-bold dark:text-darkBoxPurple">
                  Increased business efficiency
                </h3>
                <p className="text-[10px] lg:text-[15px] text-textNormal dark:text-white">
                  With your creatively thought out idea and you sending us a
                  message, you have our world-class team develop your idea after
                  a detailed study of your brand while targeting your business
                  objectives.
                </p>

                <div className="absolute -right-12 bottom-0 ">
                  <img
                    src={BorderStyle}
                    alt="Border Style"
                    className="w-[90px] lg:w-[110px] h-[542px]"
                  />
                </div>
              </div>
              <div className=" absolute -top-6 md:-top-8 left-0">
                <img
                  src={HexagonMod}
                  alt="Hexagon Shape"
                  className="h-[45px] w-[45px] md:h-[62px] md:w-[62px]"
                />
              </div>
            </div>

            <div className="relative w-[90%] md:w-[45%]">
              <div className="rounded-3xl border border-boxPurpleLightBorder dark:border-darkBoxPurpleLightBorder p-8 py-12 pr-20 text-left relative overflow-hidden">
                <h3 className="text-boxPurpleLight text-[12px] lg:text-xl mb-4 font-bold dark:text-darkBoxPurpleLight">
                  We are an excellent team
                </h3>

                <p className="text-[10px] lg:text-[15px]">
                  With your creatively thought out idea and you sending us a
                  message, you have our world-class team develop your idea after
                  a detailed study of your brand while targeting your business
                  objectives.
                </p>
                <div className="absolute -right-12 bottom-0 ">
                  <img
                    src={BorderStyle}
                    alt="Border Style"
                    className="w-[90px] lg:w-[110px] h-[542px]"
                  />
                </div>
              </div>
              <div className=" absolute -top-6 md:-top-8 left-0">
                <img
                  src={TeamsVector}
                  alt="Teams Vector"
                  className="h-[45px] w-[45px] md:h-[62px] md:w-[62px]"
                />
              </div>
            </div>

            <div className="relative w-[90%] md:w-[45%]">
              <div className="rounded-3xl border border-boxBrownBorder dark:border-darkBoxBrownBorder p-8 py-12 pr-20 text-left relative overflow-hidden">
                <h3 className="text-boxBrown text-[12px] lg:text-xl mb-4 font-bold ">
                  Our Products speaks volume
                </h3>

                <p className="text-[10px] lg:text-[15px]">
                  With your creatively thought out idea and you sending us a
                  message, you have our world-class team develop your idea after
                  a detailed study of your brand while targeting your business
                  objectives.
                </p>
                <div className="absolute -right-12 bottom-0 ">
                  <img
                    src={BorderStyle}
                    alt="Border Style"
                    className="w-[90px] lg:w-[110px] h-[542px]"
                  />
                </div>
              </div>
              <div className=" absolute -top-6 md:-top-8 left-0">
                <img
                  src={ChartVector}
                  alt="Chart Vector"
                  className="h-[45px] w-[45px] md:h-[62px] md:w-[62px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="tools"
        className="flex items-center md:min-h-screen bg-bgLight2 dark:bg-darkModeBgLight"
      >
        <div className="my-container text-center py-14">
          <h3 className="text-brightRed dark:text-darkModeRed text-[24px] lg:text-[40px] font-bold mb-12">
            Our Tools
          </h3>

          <div className="">
            <p className="text-[15px] lg:text-xl text-textBold mb-16 dark:text-white">
              We make use of awesome technologies to build advanced enterprise
              systems,challenging and innovative products. We are proud of our
              technical skills
            </p>

            <div className="flex flex-col md:flex-row justify-around">
              <div>
                <h4 className="text-textNormal text-[15px] lg:text-xl mb-8 dark:text-white">
                  Frontend Development
                </h4>
                <div className="flex flex-row md:flex-col md:gap-8 justify-between text-[13px]">
                  <div className="flex items-center ">
                    <img
                      src={ReactIcon}
                      alt="React"
                      className="h-[30px] w-[35px]"
                    />
                    <span className="text-textBold  md:ml-4 dark:text-white">
                      React
                    </span>
                  </div>
                  <div className="flex items-center">
                    <img
                      src={VueIcon}
                      alt="Vue"
                      className="h-[30px] w-[35px]"
                    />
                    <span className="text-textBold  md:ml-4 dark:text-white">
                      Vue.js
                    </span>
                  </div>
                  <div className="flex items-center">
                    <img
                      src={AngularIcon}
                      alt="Angular"
                      className="h-[30px] w-[35px]"
                    />
                    <span className="text-textBold  md:ml-4 dark:text-white">
                      Angular
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-textNormal text-[15px] lg:text-xl mt-12 mb-8 md:mt-0 dark:text-white">
                  Backend Development
                </h4>

                <div className="flex flex-row md:flex-col md:gap-8 justify-between text-[13px]">
                  <div className="flex items-center">
                    <img
                      src={NodeIcon}
                      alt="Node"
                      className="h-[30px] w-[35px]"
                    />

                    <span className="text-textBold md:ml-4 dark:text-white">
                      Node
                    </span>
                  </div>
                  <div className="flex items-center">
                    <img
                      src={PhpIcon}
                      alt="Php"
                      className="h-[30px] w-[35px]"
                    />
                    <span className="text-textBold md:ml-4 dark:text-white">
                      Php
                    </span>
                  </div>
                  <div className="flex items-center">
                    <img
                      src={JavaIcon}
                      alt="Java"
                      className="h-[30px] w-[35px]"
                    />
                    <span className="text-textBold md:ml-4 dark:text-white">
                      Java
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-textNormal text-[15px] lg:text-xl mt-12 mb-8 md:mt-0 dark:text-white">
                  Mobile Development
                </h4>
                <div className="flex flex-row md:flex-col md:gap-8 justify-between text-[13px]">
                  <div className="flex items-center">
                    <img
                      src={AndroidIcon}
                      alt="Android"
                      className="h-[30px] w-[35px]"
                    />
                    <span className="text-textBold md:ml-4 dark:text-white">
                      Android
                    </span>
                  </div>
                  <div className="flex items-center">
                    <img
                      src={AppleIcon}
                      alt="Apple"
                      className="h-[30px] w-[35px]"
                    />
                    <span className="text-textBold md:ml-4 dark:text-white">
                      Apple
                    </span>
                  </div>
                  <div className="flex items-center">
                    <img
                      src={FlutterIcon}
                      alt="Flutter"
                      className="h-[30px] w-[35px]"
                    />
                    <span className="text-textBold md:ml-4 dark:text-white">
                      Flutter
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="" className="md:h-36"></section>

      <section
        id="services"
        className="flex items-center md:min-h-screen bg-bgLight2 dark:bg-darkModeBgLight"
      >
        <div className="my-container py-20">
          <h3 className="text-brightRed text-[24px] lg:text-[40px] font-bold mb-12 text-center md:text-left dark:text-darkModeRed">
            Our Services
          </h3>

          <div className="flex flex-col md:flex-row justify-around gap-6">
            <div className="bg-white shadow-sm card relative">
              <div className="flex pb-4 gap-2 lg:gap-0">
                <div className="w-1/3">
                  <img
                    src={MobileAppDevImg}
                    alt="Web Dev"
                    className="w-[150px] h-[100px]"
                  />
                </div>
                <div className="w-2/3">
                  <h4 className="text-[15px] lg:text-xl text-brightRedLight mb-2 md:mb-6 ">
                    Mobile App Development
                  </h4>

                  <p className="text-[12px] lg:text-[15px] lg:leading-6 text-textNormal dark:text-white">
                    Two factors converge in the creation of extraordinary
                    digital solutions: User experience and powerful backend
                    technology. We arm you with both
                  </p>
                </div>
              </div>
              <div className="absolute bottom-5 right-5">
                <img
                  src={ChevronRight}
                  alt="Chevron Right"
                  className="w-[30px] h-[30px]"
                />
              </div>
            </div>

            <div className="bg-white shadow-sm card">
              <div className="flex pb-4 gap-2 lg:gap-0">
                <div className="w-1/3">
                  <img
                    src={WebDevImg}
                    alt="Web Dev"
                    className="w-[150px] h-[100px]"
                  />
                </div>
                <div className="w-2/3">
                  <h4 className="text-[15px] lg:text-xl text-brightRedLight mb-2 md:mb-6 ">
                    Web Development
                  </h4>

                  <p className="text-[12px] lg:text-[15px] lg:leading-6 text-textNormal dark:text-white">
                    Arm yourself with a cutting edge website built to fit your
                    needs today and to grow along with your organization
                  </p>
                </div>
              </div>
              <div className="absolute bottom-5 right-5">
                <img
                  src={ChevronRight}
                  alt="Chevron Right"
                  className="w-[30px] h-[30px]"
                />
              </div>
            </div>

            <div className="bg-white shadow-sm card">
              <div className="flex pb-4 gap-2 lg:gap-0">
                <div className="w-1/3">
                  <img
                    src={EnterpriseDevImg}
                    alt="Web Dev"
                    className="w-[150px] h-[100px]"
                  />
                </div>
                <div className="w-2/3">
                  <h4 className="text-[15px] lg:text-xl text-brightRedLight mb-2 md:mb-6 ">
                    Enterprise Development
                  </h4>

                  <p className="text-[12px] lg:text-[15px] lg:leading-6 text-textNormal dark:text-white">
                    Delight your end users with handcrafted easy to use software
                  </p>
                </div>
              </div>
              <div className="absolute bottom-5 right-5">
                <img
                  src={ChevronRight}
                  alt="Chevron Right"
                  className="hover:fill-current hover:text-brightRed w-[30px] h-[30px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="flex items-center md:min-h-screen">
        <div className="my-container text-center">
          <div className="relative">
            <h3 className="text-brightRed dark:text-darkModeRed text-[24px] lg:text-[40px] font-bold mb-4 mt-16 md:mb-8">
              What our customers are saying about us
            </h3>
            <p className="text-[15px] lg:text-xl text-textDarkBlue dark:text-darkModeTextLight font-bold">
              Here are some of the words and comments from our clients
            </p>

            <div className="hidden xl:block md:absolute right-24 -top-20">
              <img src={CustomerReviewHolderImage} alt="Review" />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 mt-12 justify-around">
            <div className="bg-bgLightCard dark:bg-darkModeReviewCardBg shadow-sm justify-center relative p-8 rounded overflow-hidden md:w-1/2 text-textDarkBlue">
              <div className="flex gap-2 items-start">
                <img
                  src={QuotesIcon}
                  className="-mt-2 w-50 h-30"
                  alt="Quotes Icon"
                />

                <p className="text-[12px] lg:text-[17px] text-left dark:text-darkModeTextLight">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Tristique in pellentesque ultrices et massa neque, convallis
                  lorem. Erat proin in posuere dui accumsan lorem. Diam nunc
                  scelerisque mi vestibulum scelerisque mi ac nisi. Dictumst
                  nunc placerat ultricies pretium.
                </p>
              </div>

              <div className="flex gap-4 items-center mt-4">
                <img
                  src={Avatar}
                  className="w-[50px] h-[50px]"
                  alt="Quotes Icon"
                />
                <div className="text-left">
                  <h4 className="font-bold  text-[13px] lg:text-[21px] dark:text-darkModeTextLight">
                    Ayodele Joseph
                  </h4>
                  <p className="text-[12px] dark:text-darkModeTextLight">
                    Product Designer
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-bgLightCard dark:bg-darkModeReviewCardBg shadow-sm justify-center relative p-8 rounded overflow-hidden md:w-1/2 text-textDarkBlue">
              <div className="flex gap-2 items-start">
                <img
                  src={QuotesIcon}
                  className="-mt-2 w-50 h-30"
                  alt="Quotes Icon"
                />

                <p className=" text-[12px] lg:text-[17px] text-left dark:text-darkModeTextLight">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Tristique in pellentesque ultrices et massa neque, convallis
                  lorem. Erat proin in posuere dui accumsan lorem. Diam nunc
                  scelerisque mi vestibulum scelerisque mi ac nisi. Dictumst
                  nunc placerat ultricies pretium.
                </p>
              </div>

              <div className="flex gap-4 items-center mt-4">
                <img
                  src={Avatar}
                  className="w-[50px] h-[50px]"
                  alt="Quotes Icon"
                />
                <div className="text-left">
                  <h4 className="font-bold  text-[13px] lg:text-[21px] dark:text-darkModeTextLight">
                    Ayodele Joseph
                  </h4>
                  <p className="text-[12px] dark:text-darkModeTextLight">
                    Product Designer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <Footer /> */}
    </div>
  );
};
