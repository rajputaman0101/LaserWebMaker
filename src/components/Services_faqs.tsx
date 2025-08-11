"use client";
import { useState } from "react";
import Image from "next/image";

const faqs = [
  {
    question: "Designing Service",
    answer:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. ",
    image: "/images/services-img/designing-service.png",
    buttons: [
      { text: "Website Design", link: "/services/designing" },
      { text: "Logo", link: "/logo", },
      { text: "Catalog", link: "/Catalog", },
      { text: "E-mail", link: "/e-mail", },
      { text: "PSD to HTML", link: "/psd-to-html", },
    ],
  },
  {
    question: "Website Development",
    answer:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. ",
      
     image: "/images/services-img/website-development.png",
  },
  {
    question: "E-commerce Website Development",
    answer:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. ",
     image: "/images/services-img/ecommerce-website.png",
  },
  {
    question: "Hire Designer and Developer",
    answer:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. ",
     image: "/images/services-img/hire-developer.png",
  },
];

export default function Services_faqs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="bg-white container-width mx-auto ">
      <div className=" md:px-[60px] py-20 px-[15px]">
        <div className="outer-div  grid grid-flow-row gap-[40px]">
          <div className="heading">
            <h2 className="heading-second text-[48px] font-normal leading-[120%] text-black">
              Services
            </h2>
          </div>
          
          <div className="gap-[16px] grid grid-flow-row ">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;

              return (
                <div
                  key={idx}
                  className={`md:flex block gap-10 pt-[16px] transition-all duration-500 overflow-hidden ${
                    idx !== 0 ? "border-t-2 border-[#000000]/10" : ""
                  }`}
                >
                  {/* Left Image Container */}
                  <div
                    className={`w-full md:w-[188px] flex-shrink-0 overflow-hidden transition-all duration-500 flex items-center ease-in-out  ${
                      isOpen ? "h-[250px]" : "h-auto"
                    }`}
                  >
                    <Image
                      src={faq.image}
                      alt="FAQ Icon"
                      width={188}
                      height={isOpen ? 250 : 38}
                      className={`object-cover object-top duration-500 transition-all ease-in-out w-full ${
                        isOpen ? "h-[250px]" : "h-[38px]"
                      }`}
                    />
                  </div>

                  {/* Right Content */}
                  <div className="flex-1 my-auto  ">
                    <button
                      aria-expanded={isOpen}
                      onClick={() => toggle(idx)}
                      className="w-full text-left focus:outline-none justify-between items-center flex cursor-pointer"
                    >
                      <span className="text-[20px] md:text-[32px] font-normal text-black leading-[120%]  ">
                        {faq.question}
                      </span>
                      <span className="text-xl flex items-center">
                        {isOpen ? (
                          <Image
                            src="/images/icons/chevron-up.svg"
                            alt="Collapse"
                            width={40}
                            height={40}
                          />
                        ) : (
                          <Image
                            src="/images/icons/chevron-down.svg"
                            alt="Expand"
                            width={40}
                            height={40}
                          />
                        )}
                      </span>
                    </button>

                    <div
                      style={{
                        maxHeight: isOpen ? 500 : 0,
                        padding: isOpen ? "0px 0" : "0",
                        opacity: isOpen ? 1 : 0,
                        overflow: "hidden",
                        transition:
                          "max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s, padding 0.3s",
                        willChange: "max-height, opacity, padding",
                      }}
                      className=" "
                    >
                      <div className="gap-5 inline-grid pt-5 pr-5">
                        <div className="flex gap-[12px] flex-wrap">
                          {faq.buttons?.map((btn, i) => (
                            <a
                              key={i}
                              href={btn.link}
                              className="px-4 py-2 text-[#589CD5] text-[16px] leading-[150%] rounded-[99px] border border-[#589CD5] hover:bg-[#589CD5] hover:text-white  transition-all inline-block "
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {btn.text}
                            </a>
                          ))}
                        </div>
                        <p className="text-[16px] font-normal text-black leading-[150%]">{faq.answer}</p>
                        {/* <p className="text-[13px] text-gray-500">
                          Want to know more about this service? Explore the
                          details below.
                        </p> */}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
