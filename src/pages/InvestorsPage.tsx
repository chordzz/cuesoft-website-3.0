import React, { useEffect } from "react";

import Avatar from "../assets/imgs/avatar.svg";

import QuotesIconLeft from "../assets/icons/quotes-icon.svg";
import QuotesIconRight from "../assets/icons/quotes-icon-right.svg";

export const InvestorsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <section>
        <div className="my-container flex items-center bg-contain lg:bg-cover bg-center bg-no-repeat bg-investorsPage-heroImg lg:h-[250px] rounded">
          <div className="mx-auto text-center py-6">
            <h2 className="text-[13px] md:text-[27px] lg:text-[55px] text-white font-bold ">
              Why you should
            </h2>
            <h2 className="text-[13px] md:text-[27px] lg:text-[55px] text-[#00BFB3] font-bold ">
              Invest with us
            </h2>
          </div>
        </div>
      </section>

      <section>
        <div className="my-container lg:mt-20">
          <h3 className="text-center text-brightRed text-[16px] md:text-[24px] lg:text-[40px] mx-auto font-bold my-8 lg:my-0">
            ABOUT US
          </h3>
          <p className="text-[14px] md:text-[24px] lg:mt-10 text-[#69707D] dark:text-[#69707D]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non aliquam
            elementum suspendisse ornare elit aliquam nulla elit. Non amet vitae
            nunc, adipiscing quisque etiam. Amet risus quam et natoque consequat
            semper aliquet. Ligula scelerisque mus amet massa morbi sed egestas
            pellentesque. Etiam semper pellentesque accumsan massa viverra enim
            iaculis. Quis lacus, nascetur semper arcu fermentum nisi, molestie
            turpis. At est vitae sit leo venenatis elementum, enim pulvinar.
            Pellentesque placerat mauris pharetra, vulputate. Lectus lectus mi
            cras amet. Egestas nisi elit arcu a......{" "}
            <span className="text-brightRed underline font-semibold">
              Read More..
            </span>
          </p>
        </div>
      </section>

      <section>
        <div className="my-container lg:mt-20">
          <h3 className="text-center text-brightRed md:text-[24px] lg:text-[40px] text-[16px] mx-auto font-bold my-14 lg:my-0">
            OUR VALUES
          </h3>
          <div className="flex flex-col lg:flex-row justify-between lg:mt-20 gap-8 lg:gap-0">
            <div className="flex lg:w-[47%]">
              <span className="bg-brightRed min-w-[8px] lg:min-w-[14px] mr-2 lg:mr-4"></span>
              <div>
                <h6 className="text-[16px] md:text-[20px] lg:text-[24px] text-[#343741] font-semibold dark:text-[#F5F7FA]">
                  Lorem ipsum, dolor sit amet
                </h6>
                <p className="text-[12px] md:text-[20px] lg:text-[24px] text-[#69707D] dark:text-[#98A2B3]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Viverra accumsan dolor blandit pharetra fusce odio sit
                  dignissim. Malesuada enim ut fermentum ut elit. Consectetur
                  adipiscing dui ultricies tincidunt.
                </p>
              </div>
            </div>
            <div className="flex lg:w-[47%]">
              <span className="bg-brightRed min-w-[8px] lg:min-w-[14px] mr-2 lg:mr-4"></span>
              <div>
                <h6 className="text-[16px] md:text-[20px] lg:text-[24px] text-[#343741] font-semibold dark:text-[#F5F7FA]">
                  Lorem ipsum, dolor sit amet
                </h6>
                <p className="text-[12px] md:text-[20px] lg:text-[24px] text-[#69707D] dark:text-[#98A2B3]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Viverra accumsan dolor blandit pharetra fusce odio sit
                  dignissim. Malesuada enim ut fermentum ut elit. Consectetur
                  adipiscing dui ultricies tincidunt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen">
        <div className="my-container mt-20">
          <h3 className="text-center text-brightRed text-[16px] md:text-[24px] lg:text-[40px] mx-auto font-bold">
            OUR INVESTORS
          </h3>
          <div className="mt-8 lg:mt-20">
            <div>
              <div className="flex items-start">
                <img
                  src={Avatar}
                  alt="avatar"
                  className="mr-4 w-[40px] h-[40px] md:w-[60px] md:h-[60px] lg:w-[96px] lg:h-[96px]"
                />
                <div className="flex flex-col">
                  <span className="text-[14px] md:text-[20px] lg:text-[32px] font-semibold dark:text-[#C7D4F6]">
                    Ayodele Joseph
                  </span>
                  <span className="text-[12px] md:text-[16px] lg:text-[24px] dark:text-[#C7D4F6]">
                    CEO Amazon and Co
                  </span>
                  <span className="text-ratingStar text-[13px] md:text-[20px] lg:text-[24px]">
                    &#9733;&#9733;&#9733;&#9733;&#9733;
                  </span>
                </div>
              </div>
              <div className="relative flex items-start gap-6 mt-8 mb-20">
                <img
                  src={QuotesIconLeft}
                  alt="quotes"
                  className="relative -top-6 w-[12px] h-[12px]"
                />
                <p className="text-[12px] md:text-[20px] lg:text-[24px] dark:text-[#98A2B3]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  sit aliquet adipiscing tortor faucibus neque, convallis massa
                  viverra. Purus nunc sapien, a non mi, in. Arcu pulvinar vitae
                  aliquam ut consequat. Convallis non sagittis ornare metus,
                  aliquam. Nullam enim, sagittis a duis cursus. Integer id neque
                  egestas at risus venenatis, natoque duis. Vitae, penatibus
                  dolor sagittis, sapien leo sed in felis. Est ultricies turpis
                  pellentesque habitasse lectus amet, mauris eget ac. Ut tempus,
                  aliquet habitasse suspendisse dolor non mauris ultrices. Non,
                  ultricies non laoreet non elementum tortor elit. In nibh orci.
                </p>
                <img
                  src={QuotesIconRight}
                  alt="quotes"
                  className="self-end w-[12px] h-[12px]"
                />
              </div>
            </div>

            <div>
              <div className="flex items-start">
                <img
                  src={Avatar}
                  alt="avatar"
                  className="mr-4 w-[40px] h-[40px] md:w-[60px] md:h-[60px] lg:w-[96px] lg:h-[96px]"
                />
                <div className="flex flex-col">
                  <span className="text-[14px] md:text-[20px] lg:text-[32px] font-semibold dark:text-[#C7D4F6]">
                    Ayodele Joseph
                  </span>
                  <span className="text-[12px] md:text-[16px] lg:text-[24px] dark:text-[#C7D4F6]">
                    CEO Amazon and Co
                  </span>
                  <span className="text-ratingStar text-[13px] md:text-[20px] lg:text-[24px]">
                    &#9733;&#9733;&#9733;&#9733;&#9733;
                  </span>
                </div>
              </div>
              <div className="relative flex items-start gap-6 mt-8 mb-20">
                <img
                  src={QuotesIconLeft}
                  alt="quotes"
                  className="relative -top-6 w-[12px] h-[12px]"
                />
                <p className="text-[12px] md:text-[20px] lg:text-[24px] dark:text-[#98A2B3]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  sit aliquet adipiscing tortor faucibus neque, convallis massa
                  viverra. Purus nunc sapien, a non mi, in. Arcu pulvinar vitae
                  aliquam ut consequat. Convallis non sagittis ornare metus,
                  aliquam. Nullam enim, sagittis a duis cursus. Integer id neque
                  egestas at risus venenatis, natoque duis. Vitae, penatibus
                  dolor sagittis, sapien leo sed in felis. Est ultricies turpis
                  pellentesque habitasse lectus amet, mauris eget ac. Ut tempus,
                  aliquet habitasse suspendisse dolor non mauris ultrices. Non,
                  ultricies non laoreet non elementum tortor elit. In nibh orci.
                </p>
                <img
                  src={QuotesIconRight}
                  alt="quotes"
                  className="self-end w-[12px] h-[12px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
