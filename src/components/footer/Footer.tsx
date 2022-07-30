/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import CuesoftLogo from "../../assets/logos/cuesoft-logo.svg";
import FacebookIcon from "../../assets/icons/facebook-icon.svg";
import TwitterIcon from "../../assets/icons/twitter-icon.svg";
import InstagramIcon from "../../assets/icons/instagram-icon.svg";

export const Footer = () => {
  return (
    <footer className="pt-36 md:pt-0 md:py-14">
      <div className="my-container flex flex-col md:flex-row gap-8 md:gap-20">
        <div className="md:w-[30%] text-center md:text-left">
          <div className="hidden md:block">
            <img
              src={CuesoftLogo}
              alt="Cuesoft"
              className="w-[150px] h-[90px] md:h-[113px] md:w-[201px]"
            />
          </div>
          <h3 className="text-[24px] md:text-4xl mb-4 md:mb-8 font-bold">
            Let's get started
          </h3>
          <p className="text-[12px] md:text-sm mb-8">
            Let us show you what responsive, reliable and accountable software
            support looks like in today’s world, as well as give you a glimpse
            of the future.
          </p>
          <a href="#" className="a-btn mb-20">
            Start a Project
          </a>
        </div>
        <div className="md:hidden">
          <img
            src={CuesoftLogo}
            alt="Cuesoft"
            className="w-[150px] h-[90px] md:h-[113px] md:w-[201px]"
          />
        </div>
        <div className="text-left text-[13px] md:text-lg md:pt-8 flex md:flex-row gap-20 md:gap-12 md:w-[40%]">
          <div>
            <ul className="flex flex-col gap-6 ">
              <li className="text-brightRed font-bold">Company</li>
              <li>About</li>
              <li>Careers</li>
              <li>Contact</li>
              <li>Investors</li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col gap-6 ">
              <li className="text-brightRed font-bold">Community</li>
              <li>Blog</li>
              <li>
                <img src={FacebookIcon} alt="facebook" />
              </li>
              <li>
                <img src={TwitterIcon} alt="twitter" />
              </li>
              <li>
                <img src={InstagramIcon} alt="instagram" />
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col gap-6 ">
              <li className="text-brightRed font-bold">Resources</li>
              <li>Terms</li>
              <li>Privacy Policy</li>
              <li>FAQ</li>
              <li>Partners</li>
            </ul>
          </div>
        </div>
        <div className="md:w-[30%] flex flex-col gap-4 md:gap-8 pt-8">
          <p className="font-bold text-[12px] md:text-sm">
            8 The Green, Ste A, Dover, 19901, Delaware, United States
          </p>

          <p className="font-bold text-[12px] md:text-sm">
            39 Alfred Rewane Road, Mulliner Towers, Ikoyi, 101233, Lagos,
            Nigeria
          </p>

          <span className="text-[12px] md:text-sm">US Phone: +13025724020</span>
          <span className="text-[12px] md:text-sm">
            Nigeria Phone: +234 902 650 9478
          </span>
          <span className="text-[12px] md:text-sm">Mail: hello@cuesoft.io</span>
        </div>
      </div>
      <div className="my-container mt-6 mb-16">
        <span className="text-[12px] md:text-lg">
          © Cuesoft 2020. All rights reserved.
          <br />
          Cuesoft is a company registered in Nigeria.
        </span>
      </div>
    </footer>
  );
};
