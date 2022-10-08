import React, { useEffect, useState } from "react";

import ChevronRightNoBg from "../../assets/icons/chevron-right-no-bg.svg";

import { questionsData } from "./FaqQuestions";

export const FaqMain = () => {
  type questionItemType = {
    id: number;
    question: string;
    answer: string;
    active: boolean;
  };

  const [activeQuestion, setActiveQuestion] = useState<questionItemType>(
    questionsData[0]
  );
  const [questions, setQuestions] = useState<questionItemType[]>(questionsData);

  const handleClick = (item: questionItemType) => {
    setQuestions(
      questionsData.map((questionItem) => {
        questionItem.question === item.question
          ? (questionItem.active = true)
          : (questionItem.active = false);
        return questionItem;
      })
    );
    setActiveQuestion(item);
  };

  useEffect(() => {
    // setActiveQuestion({
    //     id: questions[0].id,
    //     question: questions[0].question,
    //     answer: questions[0].answer,
    //     active: true
    // });
    handleClick(questions[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="my-container">
      <h3 className="text-brightRed text-center dark:text-darkModeRed text-[24px] lg:text-[40px] font-bold mb-32">
        Frequently Asked Questions
      </h3>

      <div className="hidden lg:flex relative items-center justify-end">
        <div className="hidden lg:block w-[50%] bg-white dark:bg-darkModeHowCard absolute left-0 z-30 shadow-md">
          <div className="flex flex-col text-[16px] text-textNormal dark:text-white">
            {questions.map((questionItem, idx) => {
              return (
                <span
                  key={questionItem.id}
                  className={`${
                    questionItem.active ? "faq-active" : "faq-inactive"
                  } cursor-pointer`}
                  onClick={() => handleClick(questionItem)}
                >
                  <span></span>
                  <p>{questionItem.question}</p>
                  <img src={ChevronRightNoBg} alt="Chevron right" />
                </span>
              );
            })}
          </div>
        </div>

        <div className="hidden min-h-[300px] lg:flex w-[60%]  text-textNormal dark:text-[#98A2B3] text-[16px] bg-[#FDE3E3] dark:bg-[#1C1C1C] rounded-lg shadow-lg py-12 pl-[15%] pr-12 items-center">
          <div className="">
            <p className="text-textBold dark:text-[#E0E1E7] font-bold text-[20px]">
              {activeQuestion.question}
            </p>
            <p className="mt-8 ">{activeQuestion.answer}</p>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="lg:hidden">
        {questions.map((questionItem) => {
          return (
            <div key={questionItem.id}>
              <span
                key={questionItem.id}
                className={`${
                  questionItem.active ? "faq-active" : "faq-inactive"
                } cursor-pointer`}
                onClick={() => handleClick(questionItem)}
              >
                <span></span>
                <p>{questionItem.question}</p>
                <img src={ChevronRightNoBg} alt="Chevron right" />
              </span>
              <div
                className={`${
                  questionItem.active ? "block" : "hidden"
                } min-h-[300px] text-textNormal dark:text-[#98A2B3] text-[16px] bg-[#FDE3E3] dark:bg-[#1C1C1C] rounded-lg shadow-sm py-8 px-6 my-6`}
              >
                <p className="text-textBold dark:text-[#E0E1E7] font-bold text-[20px]">
                  {activeQuestion.question}
                </p>
                <p className="mt-8 ">{activeQuestion.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
