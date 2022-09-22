import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { ThemeContext } from "../theme-context/theme-context";

import CuesoftLogo from "../../assets/logos/cuesoft-logo.svg";
import FacebookIcon from "../../assets/icons/facebook-icon.svg";
import TwitterIcon from "../../assets/icons/twitter-icon.svg";
import InstagramIcon from "../../assets/icons/instagram-icon.svg";

import CuesoftLogoDark from "../../assets/logos/cuesoft-logo-dark.svg";
import { TypeformButton } from "../typeform-button/TypeformButton";

export const Footer = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <footer
      data-testid="footer"
      className="pt-36 md:pt-14 text-center md:text-left"
    >
      <div className="my-container flex flex-col md:flex-row gap-5 md:gap-10 lg:gap-20">
        <div className="md:w-[30%] text-center md:text-left">
          <div className="hidden md:block">
            <img
              src={theme === "dark" ? CuesoftLogoDark : CuesoftLogo}
              alt="Cuesoft"
              className="w-[150px] h-[90px] md:h-[113px] md:w-[201px]"
            />
          </div>
          <h3 className="text-[24px] lg:text-4xl mb-4 lg:mb-8 font-bold">
            Let's get started
          </h3>
          <p className="text-[12px] lg:text-sm mb-8">
            Let us show you what responsive, reliable and accountable software
            support looks like in today’s world, as well as give you a glimpse
            of the future.
          </p>
          <TypeformButton />
        </div>
        <div className="md:hidden mx-auto">
          <img
            src={theme === "dark" ? CuesoftLogoDark : CuesoftLogo}
            alt="Cuesoft"
            className="w-[150px] h-[90px] md:h-[113px] md:w-[201px] "
          />
        </div>
        <div className="text-center md:text-left text-[13px] lg:text-lg md:pt-8 flex flex-col md:flex-row gap-8 md:gap-12 md:w-[40%]">
          <div>
            <ul className="flex flex-col gap-3 md:gap-6 ">
              <li className="text-brightRed font-bold dark:text-darkModeRed">
                Company
              </li>
              <Link to="/about">
                <li>About</li>
              </Link>
              <Link to="/careers">
                <li>Careers</li>
              </Link>
              <li>Contact</li>
              <Link to="/investors">
                <li>Investors</li>
              </Link>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col gap-3 md:gap-6 justify-end">
              <li className="text-brightRed font-bold dark:text-darkModeRed">
                Community
              </li>
              <a
                href="https://blog.cuesoft.io/"
                target={"_blank"}
                rel="noreferrer"
              >
                <li>Blog</li>
              </a>
              <a
                href="https://facebook.com/cuesoft"
                target={"_blank"}
                rel="noreferrer"
              >
                <li>
                  <img
                    src={FacebookIcon}
                    alt="facebook"
                    className="w-[24px] h-[24px] mx-auto md:mx-0"
                  />
                </li>
              </a>
              <a
                href="https://twitter.com/cuesoftinc/"
                target={"_blank"}
                rel="noreferrer"
              >
                <li>
                  <img
                    src={TwitterIcon}
                    alt="twitter"
                    className="w-[24px] h-[24px] mx-auto md:mx-0"
                  />
                </li>
              </a>
              <a
                href="https://instagram.com/cuesoftinc/"
                target={"_blank"}
                rel="noreferrer"
              >
                <li>
                  <img
                    src={InstagramIcon}
                    alt="instagram"
                    className="w-[24px] h-[24px] mx-auto md:mx-0"
                  />
                </li>
              </a>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col gap-3 md:gap-6 ">
              <li className="text-brightRed font-bold dark:text-darkModeRed">
                Resources
              </li>
              <a
                href="https://terms.cuesoft.io/"
                target={"_blank"}
                rel="noreferrer"
              >
                <li>Terms</li>
              </a>
              <a
                href="https://privacy.cuesoft.io/"
                target={"_blank"}
                rel="noreferrer"
              >
                <li>Privacy Policy</li>
              </a>
              <li>FAQ</li>
              <li>Partners</li>
            </ul>
          </div>
        </div>
        <div className="md:w-[30%] flex flex-col gap-4 md:gap-8 pt-8">
          <p className="font-bold text-[12px] lg:text-sm">
            8 The Green, Ste A, Dover, 19901, Delaware, United States
          </p>

          <p className="font-bold text-[12px] lg:text-sm">
            39 Alfred Rewane Road, Mulliner Towers, Ikoyi, 101233, Lagos,
            Nigeria
          </p>

          <span className="text-[12px] lg:text-sm">US Phone: +13025724020</span>
          <span className="text-[12px] lg:text-sm">
            Nigeria Phone: +234 902 650 9478
          </span>
          <span className="text-[12px] lg:text-sm">Mail: hello@cuesoft.io</span>
        </div>
      </div>
      <div className="my-container pt-6 pb-16 text-center">
        <span className="text-[12px] lg:text-lg">
          © Cuesoft 2022. All rights reserved.
          <br className="md:hidden" /> Cuesoft Inc. is a Delaware Company
          registered in the US with a Subsidiary in Nigeria.
        </span>
      </div>
    </footer>
  );
};
