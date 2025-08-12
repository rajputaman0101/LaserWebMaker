import React from "react";
import Image from "next/image";
export default function OurPatners() {
  return (
    <div className="container-width mx-auto bg-[#F6F8FB] px-[15px] md:px-15 py-20 ">
      <div className="outer-box flex flex-col md:flex-row ">
        <div className="content-box bg-[#5E9ED5] px-[30px] py-[30px] md:py-[20px] w-full md:max-w-[521px]">
          <div className="flex flex-col gap-[20px] ">
            <div className="">
              <h3 className="text-[#F2E488] font-semibold text-[20px] md:text-[30px]  leading-[120%] ">
                
                Reach Your Business Goals
              </h3>
              <h3 className="text-[#fff] font-medium text-[20px] md:text-[25px]  leading-[120%] ">
                in 2025 with Laserwebmaker
              </h3>
            </div>
            <div className="content">
              <p className="text-[15px] text-white/80 font-normal leading-[120%]">
                Laserwebmaker has always worked hard to make sure that we’re
                getting what we need out of the partnership, not just what may
                seem like the best result.
              </p>
            </div>

            <a
              href="/serving-industries"  
              className=" px-[16px] py-3 w-full md:w-[433px] text-[#057BC1] text-[16px] bg-[#fff] md:text-[20px]  rounded leading-[26px]  font-red-hat hover:bg-[#057BC1] hover:text-[#fff]  transition-all duration-500 font-semibold text-center"
            >
              View All
            </a>
          </div>
        </div>
        <div className="logos flex-1 w-full  flex flex-col justify-center">
         <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 w-full place-items-center border border-[#C5C5C5] border-b-0 last:border-r-0">
  {[
    "/images/icons/Company_logo.svg",
    "/images/icons/Company_logo2.svg",
    "/images/icons/Company_logo3.svg",
    "/images/icons/Company_logo4.svg",
    "/images/icons/Company_logo2.svg",
     "/images/icons/Company_logo.svg",
    "/images/icons/Company_logo2.svg",
    "/images/icons/Company_logo3.svg",
    "/images/icons/Company_logo4.svg",
    "/images/icons/Company_logo2.svg"
  ].map((logo, index) => (
    <div
      key={index}
      className="aspect-[5/4] w-full h-[128px] flex justify-center items-center border-r border-b border-[#C5C5C5]"
    >
      <Image className="md:max-w-[160px]" src={logo}  alt={`Company logo ${index}`} width={160}  height={128} priority />
    </div>
  ))}
</div>

        {/* <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 w-full place-items-center border border-t-0 ">
  {[
    "/images/icons/Company_logo.svg",
    "/images/icons/Company_logo2.svg",
    "/images/icons/Company_logo3.svg",
    "/images/icons/Company_logo4.svg",
    "/images/icons/Company_logo2.svg"
  ].map((logo, index) => (
    <div
      key={index}
      className="h-[128px] md:max-w-[160px] flex justify-center items-center border-r last:border-r-0"
    >
      <Image src={logo} alt="India" width={160} height={128} priority />
    </div>
  ))}
</div> */}

        </div>
      </div>
    </div>
  );
}
