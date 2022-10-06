import React from "react";

import NectarInfotelLogo from "../assets/logos/nectar-infotel-logo.svg";
import PartnersPageGroup from "../assets/imgs/partners-page-group.jpg";

export const PartnersPage = () => {
  return (
    <div>
      <section>
        <div className="my-container flex items-center bg-contain lg:bg-cover bg-center bg-no-repeat bg-partnersPage-heroImg lg:h-[250px] rounded">
          <div className="mx-auto text-center py-6">
            <h2 className="text-[13px] md:text-[27px] lg:text-[55px] text-white font-bold ">
              Our Partners
            </h2>
          </div>
        </div>
      </section>
      <section>
        <div className="my-container">
          <img
            src={NectarInfotelLogo}
            alt="Nectar infotel logo"
            className="my-8 md:my-16 w-[164px] md:w-[248px]"
          />

          <div className="flex flex-wrap items-center">
            <div className="md:w-1/2">
              <h3 className="text-brightRed text-[24px] font-semibold mb-6">
                About Nectar Infotel
              </h3>
              <p className="text-[16px] leading-8 dark:text-[#A6A6B0]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui
                dignissim bibendum faucibus tristique arcu tortor felis.
                Vulputate id aliquam, sagittis integer rhoncus nisi, viverra
                tempor. Auctor pulvinar volutpat, iaculis tortor in. Sed non
                consectetur amet sollicitudin. Purus dignissim cursus urna non
                massa, eget. Ut id elementum non massa habitant adipiscing
                aliquet morbi pretium. Egestas enim sed ipsum accumsan, in felis
                urna amet euismod. Aliquam in in nulla est arcu, tristique.
                Dignissim quisque semper feugiat turpis. Tincidunt nullam
                blandit quam aliquet proin malesuada lorem sit. In amet,
                venenatis viverra amet netus faucibus. Non sem mauris, euismod
                sollicitudin tellus lobortis. Sed cursus eget tortor purus amet
                vitae arcu. Ut diam penatibus hendrerit commodo id vestibulum
                condimentum. Iaculis lectus venenatis fames sed tincidunt quis
                in. Arcu lacinia sed vitae sapien volutpat nunc facilisis amet,
                ipsum. Aliquet facilisi scelerisque egestas integer. Ac
                imperdiet urna adipiscing ac dignissim pharetra. Nisl, sit eu
                lorem egestas integer mattis magna ipsum. Eget lacinia felis ut
                donec nibh lobortis.
              </p>
            </div>
            <div className="md:w-1/2 flex md:justify-end">
              <img
                src={PartnersPageGroup}
                alt="a group of people in a meeting, team members"
                className="md:w-[80%] md:h-[80%] mt-6 md:mt-0"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <div className="my-container">
          <h3 className="text-brightRed text-[24px] font-semibold mb-6">
            Partnership with Cuesoft Enterprise
          </h3>
          <p className="dark:text-[#A6A6B0]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui
            dignissim bibendum faucibus tristique arcu tortor felis. Vulputate
            id aliquam, sagittis integer rhoncus nisi, viverra tempor. Auctor
            pulvinar volutpat, iaculis tortor in. Sed non consectetur amet
            sollicitudin. Purus dignissim cursus urna non massa, eget. Ut id
            elementum non massa habitant adipiscing aliquet morbi pretium.
            Egestas enim sed ipsum accumsan, in felis urna amet euismod. Aliquam
            in in nulla est arcu, tristique. Dignissim quisque semper feugiat
            turpis. Tincidunt nullam blandit quam aliquet proin malesuada lorem
            sit. In amet, venenatis viverra amet netus faucibus. Non sem mauris,
            euismod sollicitudin tellus lobortis. Sed cursus eget tortor purus
            amet vitae arcu. Ut diam penatibus hendrerit commodo id vestibulum
            condimentum. Iaculis lectus venenatis fames sed tincidunt quis in.
            Arcu lacinia sed vitae sapien volutpat nunc facilisis amet, ipsum.
            Aliquet facilisi scelerisque egestas integer. Ac imperdiet urna
            adipiscing ac dignissim pharetra. Nisl, sit eu lorem egestas integer
            mattis magna ipsum. Eget lacinia felis ut donec nibh lobortis.
          </p>
        </div>
      </section>
    </div>
  );
};
