"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";

const faqs = [
  {
    question: "Inception",
    answer:
      "Bу dоіng a lіttlе bіt оf rеѕеаrсh, you can еnѕurе уоur dеѕіgn projects flоw smoothly...",
    image: "/images/services-img/designing-service.png",
    icon: "inception",
  },
  {
    question: "Contract",
    answer:
      "Bу dоіng a lіttlе bіt оf rеѕеаrсh, you can еnѕurе уоur dеѕіgn projects flоw smoothly...",
    image: "/images/services-img/website-development.png",
    icon: "contract",
  },
  {
    question: "Build",
    answer:
      "Bу dоіng a lіttlе bіt оf rеѕеаrсh, you can еnѕurе уоur dеѕіgn projects flоw smoothly...",
    image: "/images/services-img/ecommerce-website.png",
    icon: "build",
  },
  {
    question: "UAT + Launch",
    answer:
      "Bу dоіng a lіttlе bіt оf rеѕеаrсh, you can еnѕurе уоur dеѕіgn projects flоw smoothly...",
    image: "/images/services-img/hire-developer.png",
    icon: "launch",
  },
];

export default function Our_Process() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [heights, setHeights] = useState<string[]>(
    Array(faqs.length).fill("0px")
  );

  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const newHeights = [...heights];

    if (openIndex !== null && contentRefs.current[openIndex]) {
      newHeights[openIndex] = `${contentRefs.current[openIndex]?.scrollHeight}px`;
    }

    faqs.forEach((_, idx) => {
      if (idx !== openIndex) {
        newHeights[idx] = "0px";
      }
    });

    setHeights(newHeights);
  }, [openIndex]);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="bg-[#F6F8FB]">
      <div className="container-width mx-auto px-[15px] md:px-15 py-20">
        <div className="process-heading flex flex-col gap-10">
          <div className="flex flex-col md:flex-row justify-between gap-9 md:gap-12 items-start">
            <div className="w-full md:w-1/2">
              <h2 className="text-black text-[32px] md:text-[48px] leading-[120%] font-normal">
                Website Development Process
              </h2>
            </div>
            <div className="w-full md:w-[36%]">
              <p className="text-black text-[16px] leading-[150%] font-normal">
                We have highly professional team, which works systematically.
                Our expert team follows the steps to ensure deliver an error
                free website.
              </p>
            </div>
          </div>

          <div className="outer-process-step bg-white p-5 w-full">
            <div className="flex flex-col w-full gap-[30px]">
              {faqs.map((faq, idx) => {
                const isOpen = openIndex === idx;
                const isLast = idx === faqs.length - 1;

                return (
                  <div
                    key={idx}
                    className="md:flex w-full items-start gap-3 relative"
                  >
                    {/* Timeline */}
                    <div className="hidden md:flex flex-col items-center pt-1 relative min-w-[10px]">
                      <div
                        className={`w-[32px] h-[32px] rounded-full flex items-center justify-center text-sm font-bold z-10 ${
                          isOpen
                            ? "bg-[#589CD5] text-white"
                            : "bg-gray-300 text-black"
                        }`}
                      >
                        {idx + 1}
                      </div>
                      {!isLast && (
                        <div
                          className={`w-[2px] transition-all duration-500 ease-in-out ${
                            openIndex !== null && idx === openIndex
                              ? "bg-[#589CD5] h-[100px]"
                              : openIndex !== null && idx < openIndex
                              ? "bg-[#589CD5] h-[50px]"
                              : "bg-gray-300 h-[30px]"
                          }`}
                        />
                      )}
                    </div>

                    {/* FAQ Content */}
                    <div className="flex-1 transition-all duration-500 bg-[#F6F8FB] rounded-xl p-5">
                      <button
                        aria-expanded={isOpen}
                        onClick={() => toggle(idx)}
                        className="w-full text-left flex justify-between items-center"
                      >
                        <span className="text-[18px] md:text-[24px] font-normal text-black leading-[120%]">
                          {faq.question}
                        </span>
                        <span className="text-xl flex items-center cursor-pointer">
                          <Image
                            src={`/images/icons/${faq.icon || "chevron-down"}.svg`}
                            alt="Toggle"
                            width={32}
                            height={32}
                            className={`transition-all duration-300 ${
                              isOpen
                                ? "filter-blue"
                                : "opacity-10 brightness-0"
                            }`}
                          />
                        </span>
                      </button>

                      {/* Answer */}
                      <div
                        ref={(el) => {
    contentRefs.current[idx] = el;
  }}
  style={{
    height: heights[idx],
    overflow: "hidden",
    transition: "height 0.4s ease",
  }}
                        
                      >
                        <div className="pt-4">
                          <p className="text-[16px] font-normal text-black leading-[150%]">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex justify-center">
            <a
              href="/serving-industries"
              className="px-[16px] py-3 w-full md:w-[346px] text-white text-[16px] md:text-[20px] border rounded leading-[26px] bg-[#5E9ED5] hover:bg-transparent hover:text-[#5E9ED5] hover:border-[#5E9ED5] transition-all duration-500 font-semibold text-center"
            >
              Get Service
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
