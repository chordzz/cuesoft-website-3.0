import React, { useEffect, useState } from "react";

import { WhyCuesoftVector } from "../components/custom-svgs/WhyCuesoftSvg";
import { RoleRegister } from "../components/custom-svgs/RoleRegister";
import { ConfusedBusinessman } from "../components/custom-svgs/ConfusedBusinessman";

import ChevronDownVector from "../assets/icons/chevron-down-no-bg.svg";
import FileUploadVector from "../assets/icons/file-upload.svg";

import { roles } from "../components/career-role/openRolesData";
import { CareerRole } from "../components/career-role/CareerRole";

import { NextSvg } from "../components/career-role/NextSvg";
import { ExtremeNextSvg } from "../components/career-role/ExtremeNextSvg";
import { ExtremePrevSvg } from "../components/career-role/ExtremePrevSvg";
import { PrevSvg } from "../components/career-role/PrevSvg";

import { useTranslation } from "react-i18next";
import logger from "../libs/logger";

export const CareersPage = () => {
  const [allRoles, setAllRoles] = useState(roles);
  const [renderedRoles, setRenderedRoles] = useState(allRoles);
  const [filter, setFilter] = useState("all");
  const [pages, setPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [noPerPage] = useState(2);
  const [toggleReadmore, setToggleReadmore] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [resume, setResume] = useState<File | null>(null);

  const [formStatus, setFormStatus] = useState("");
  const [formError, setFormError] = useState("");
  const [formLoading, setFormLoading] = useState(false);
  const myFormData = new FormData();

  const { t } = useTranslation();

  const handlePagination = (mode: string) => {
    if (mode === "prev") {
      setCurrentPage((prevState) =>
        prevState - 1 === 0 ? prevState : prevState - 1
      );
    }

    if (mode === "next") {
      setCurrentPage((prevState) =>
        prevState + 1 > pages ? prevState : prevState + 1
      );
    }

    if (mode === "extremeNext") {
      setCurrentPage(pages);
    }

    if (mode === "extremePrev") {
      setCurrentPage(1);
    }

    calculateRender();
  };

  const calculateRender = () => {
    let startPointer = noPerPage * currentPage - noPerPage;
    let endPointer = noPerPage * currentPage;

    let renderArr = allRoles.slice(startPointer, endPointer);
    setRenderedRoles(renderArr);
  };

  const handleClick = (item: string) => {
    switch (item) {
      case "all":
        setAllRoles(roles.filter((role) => role).map((role) => role));
        setFilter("all");
        setCurrentPage(1);
        break;
      case "sales":
        setAllRoles(
          roles.filter((role) => role.type === "sales").map((role) => role)
        );
        setFilter("sales");
        setCurrentPage(1);
        break;
      case "design":
        setAllRoles(
          roles.filter((role) => role.type === "design").map((role) => role)
        );
        setFilter("design");
        setCurrentPage(1);
        break;
      case "engineering":
        setAllRoles(
          roles
            .filter((role) => role.type === "engineering")
            .map((role) => role)
        );
        setFilter("engineering");
        setCurrentPage(1);
        break;
      case "others":
        setAllRoles(
          roles.filter((role) => role.type === "others").map((role) => role)
        );
        setFilter("others");
        setCurrentPage(1);
        break;

      default:
        break;
    }
  };

  const handleToggleReadMore = () => {
    setToggleReadmore(true);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const timerId = setTimeout(() => {
      if (formError !== "" || formStatus !== "") {
        setFormError("");
        setFormStatus("");
      }
    }, 5000);

    return () => {
      clearTimeout(timerId);
    };
  }, [formLoading, formError, formStatus]);

  useEffect(() => {
    setPages(Math.ceil(allRoles.length / noPerPage));
    calculateRender();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allRoles, pages]);

  useEffect(() => {
    calculateRender();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formLoading) return;

    if (!resume) {
      setFormStatus("Error");
      setFormError("Please pick a file to upload");
      return;
    } else {
      setFormStatus("");
      setFormError("");
      setFormLoading(true);

      const table_id = process.env.REACT_APP_AIRTABLE_TABLE_ID_CAREERS_INFO;
      const base_id = process.env.REACT_APP_AIRTABLE_BASE_ID;
      const api_key = process.env.REACT_APP_AIRTABLE_API_KEY;

      const myHeaders_ = {
        Authorization: `Bearer ${api_key}`,
        "Content-Type": "application/json"
      };

      const data = {
        fields: {
          Name: name,
          Email: email,
          Phone: phone,
          Resume: myFormData
        }
      };

      fetch(`https://api.airtable.com/v0/${base_id}/${table_id}`, {
        method: "POST",
        headers: myHeaders_,
        body: JSON.stringify(data)
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          logger.info(data);

          if (data.error) {
            setFormLoading(false);
            logger.error(data.error);
            setFormStatus("Error");
            setFormError(data.error.message);
          } else {
            setFormLoading(false);
            setFormError("");
            setFormStatus("Success");
            setName("");
            setEmail("");
            setPhone("");
            setResume(null);
          }
        })
        .catch((error) => {
          logger.error(error);
          setFormLoading(false);
          setFormError(error.message);
        });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileArr = e.target?.files;
    const fileListAsArr = Array.from(fileArr || []);
    setResume(fileListAsArr[0]);
    myFormData.append("Resume", fileListAsArr[0]);
  };

  return (
    <div data-testid="careerspage">
      <section className="lg:mb-20">
        <div className="my-container flex items-center w-[100%] h-[220px] bg-contain xl:bg-cover bg-center bg-no-repeat bg-careersPage-heroImg lg:h-[500px] py-14 xl:py-32">
          <div className="mx-auto lg:w-2/3 text-center">
            <h2 className="text-[20px] md:text-[27px] xl:text-[55px] text-white font-semibold ">
              <>{t("careerspage.hero-section.text-1")}</>{" "}
              <span className="text-brightRed">?</span>
            </h2>
            <h2 className="text-[20px] md:text-[27px] xl:text-[55px] text-white font-semibold ">
              <span className="text-brightRed">
                -<>{t("careerspage.hero-section.span-text")}</>
              </span>{" "}
              <>{t("careerspage.hero-section.text-2")}</>
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
              <>{t("careerspage.why-cuesoft.p1")}</>{" "}
              <div className={`${toggleReadmore ? "block" : "hidden"}`}>
                <br />
                <p>
                  <>{t("careerspage.why-cuesoft.p2")}</>
                </p>

                <br />
                <p>
                  <>{t("careerspage.why-cuesoft.p3")}</>
                </p>
              </div>
              <span
                className={`${
                  toggleReadmore
                    ? "hidden"
                    : "text-brightRed underline font-semibold"
                } cursor-pointer`}
                onClick={handleToggleReadMore}
              >
                ...<>{t("careerspage.read-more-span")}</>
              </span>
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="my-container">
          <h3 className="text-textNormal text-center dark:text-darkModeRed text-[14px] md:text-[24px] lg:text-[40px] font-bold mt-32 mb-24 ">
            <>{t("careerspage.open-roles-section.header.main")}</>{" "}
            <span className="text-brightRed underline">
              <>{t("careerspage.open-roles-section.header.span")}</>
              <img
                src={ChevronDownVector}
                alt="expand more"
                className="inline ml-2 md:ml-4 w-[10px] h-[10px]"
              />
            </span>
          </h3>

          <div className="mt-16">
            <div className="md:min-w-[50%] mx-auto text-center flex items-center justify-center">
              <span
                className={` py-1 px-1 border-b-2 md:py-4 md:px-8 ${
                  filter === "all"
                    ? "font-bold text-brightRed border-brightRed"
                    : ""
                } cursor-pointer`}
                onClick={() => handleClick("all")}
              >
                <>{t("careerspage.open-roles-section.sub-headers.all")}</>
              </span>
              <span
                className={` py-1 px-1 md:py-4 md:px-8 border-b-2 cursor-pointer ${
                  filter === "design"
                    ? "font-bold text-brightRed border-brightRed"
                    : ""
                }`}
                onClick={() => handleClick("design")}
              >
                <>{t("careerspage.open-roles-section.sub-headers.design")}</>
              </span>
              <span
                className={` py-1 px-1 md:py-4 md:px-8 border-b-2 cursor-pointer ${
                  filter === "sales"
                    ? "font-bold text-brightRed border-brightRed"
                    : ""
                }`}
                onClick={() => handleClick("sales")}
              >
                <>{t("careerspage.open-roles-section.sub-headers.sales")}</>
              </span>
              <span
                className={` py-1 px-1 md:py-4 md:px-8 border-b-2 cursor-pointer ${
                  filter === "engineering"
                    ? "font-bold text-brightRed border-brightRed"
                    : ""
                }`}
                onClick={() => handleClick("engineering")}
              >
                <>
                  {t("careerspage.open-roles-section.sub-headers.engineering")}
                </>
              </span>
              <span
                className={` py-1 px-1 md:py-4 md:px-8 border-b-2 cursor-pointer ${
                  filter === "others"
                    ? "font-bold text-brightRed border-brightRed"
                    : ""
                }`}
                onClick={() => handleClick("others")}
              >
                <>{t("careerspage.open-roles-section.sub-headers.others")}</>
              </span>
            </div>
          </div>

          <div className="">
            <div className="flex flex-col md:flex-wrap md:flex-row mt-12 gap-10 justify-end">
              {renderedRoles.length > 0 ? (
                renderedRoles.map((role, idx) => {
                  return <CareerRole key={`${idx}-${role.name}`} role={role} />;
                })
              ) : (
                <div className="mx-auto text-center text-textNormal text-3xl">
                  <>{t("careerspage.open-roles-section.empty")}</>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center justify-center mt-8 gap-4">
            <div onClick={() => handlePagination("extremePrev")}>
              <ExtremePrevSvg active={currentPage === 1 ? false : true} />
            </div>

            <div onClick={() => handlePagination("prev")}>
              <PrevSvg active={currentPage - 1 > 0 ? true : false} />
            </div>

            <div>
              <span className="underline text-brightRed font-bold">
                {pages > 0 ? currentPage : 0}
              </span>{" "}
              <>{t("careerspage.open-roles-section.of")}</> {pages}
            </div>

            <div onClick={() => handlePagination("next")}>
              <NextSvg active={currentPage + 1 <= pages ? true : false} />
            </div>

            <div onClick={() => handlePagination("extremeNext")}>
              <ExtremeNextSvg
                active={currentPage === pages || pages === 0 ? false : true}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="my-40">
        <div className="my-container">
          <div className="flex flex-col-reverse md:flex-row justify-between items-center">
            <div className="md:w-1/3">
              <span className="text-[16px] lg:text-[24px] text-textNormal font-semibold dark:text-white">
                <>{t("careerspage.contact-form.sub-header")}</>
              </span>
              <h3 className="text-[32px] lg:text-[48px] mb-16 text-brightRed font-bold">
                <>{t("careerspage.contact-form.header")}</>
              </h3>
              <form
                onSubmit={handleFormSubmit}
                className="flex flex-col gap-12"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="text-[16px] font-bold text-[#1A1C21] dark:text-white"
                  >
                    <>{t("careerspage.contact-form.form-labels.name")}</>
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="bg-[#FBFCFD] border border-[#132295]/[.1] w-full p-3 rounded-md dark:bg-[#161616]"
                    placeholder="Enter your name"
                    name="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="text-[16px] font-bold text-[#1A1C21] dark:text-white"
                  >
                    <>{t("careerspage.contact-form.form-labels.email")}</>
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="bg-[#FBFCFD] border border-[#132295]/[.1] w-full p-3 rounded-md dark:bg-[#161616]"
                    placeholder="Enter your email address"
                    name="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="tel-number"
                    className="text-[16px] font-bold text-[#1A1C21] dark:text-white"
                  >
                    <>
                      {t("careerspage.contact-form.form-labels.phone-number")}
                    </>
                  </label>
                  <input
                    type="tel"
                    id="tel-number"
                    className="bg-[#FBFCFD] border border-[#132295]/[.1] w-full p-3 rounded-md dark:bg-[#161616]"
                    placeholder="Enter your phone number"
                    name="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="resume"
                    className="text-[16px] font-bold text-[#1A1C21] dark:text-white cursor-pointer"
                  >
                    <>{t("careerspage.contact-form.form-labels.cv-upload")}</>
                    <span className="w-full px-6 py-24 bg-[#FBFCFD] h-24 flex flex-col gap-4 justify-center items-center dark:bg-[#161616] border border-[#132295]/[.1] rounded-md">
                      {resume ? (
                        <p className="text-textNormal font-medium text-center dark:text-white">
                          {resume.name}
                        </p>
                      ) : (
                        <>
                          <img
                            src={FileUploadVector}
                            alt="upload"
                            className="dark:fill-white"
                          />
                          <p className="text-textNormal font-medium text-center dark:text-white">
                            <>
                              {t(
                                "careerspage.contact-form.form-labels.cv-upload-span"
                              )}
                            </>
                          </p>
                        </>
                      )}
                    </span>
                    <input
                      className="hidden"
                      id="resume"
                      type="file"
                      accept="application/pdf"
                      onChange={handleFileChange}
                      name="resume"
                    />
                  </label>
                </div>

                {formStatus === "Error" && formError ? (
                  <div className="border border-red-500 rounded-sm p-2">
                    <span className="text-red-500 text-sm">{formError}</span>
                  </div>
                ) : formStatus === "Success" ? (
                  <div className="border border-green-500 rounded-sm p-2">
                    <span className="text-green-500 text-sm">
                      Upload Successful
                    </span>
                  </div>
                ) : null}

                <button
                  type="submit"
                  disabled={formLoading}
                  className="a-btn flex items-center justify-center"
                >
                  {formLoading ? (
                    <svg
                      className="w-5 h-5 mr-3 -ml-1 text-white animate-spin"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  ) : null}
                  <>{t("careerspage.contact-form.form-labels.btn-text")}</>
                </button>
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
