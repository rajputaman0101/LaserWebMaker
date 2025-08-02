import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";

export default function Home() {
  return (
    <>
      <div className=" container-width mx-auto grid grid-cols-1 md:grid-cols-2 gap-0">
        {/* First Image with Text */}
        <div className="relative w-full h-[400px] md:h-[820px] ">
          <Image
            src="/images/home_img/banner_1img.jpg"
            alt="Banner Image 1"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
          {/* Text Overlay */}
          <div className=" absolute bottom-3 left-0 right-0  px-[15px] md:px-[32px]  pb-4 ">
            <div
              className="p-5 relative bg-white/10 backdrop-blur-[5px] rounded-lg overflow-hidden
             before:absolute before:inset-0 before:rounded-lg before:border before:border-[#C7C7C7]/20 
             before:pointer-events-none"
            >
              <div className="  flex items-end gap-2 ">
                <p className="text-black  z-10 md:text-sm text-[7.48px] font-semibold">
                  Trusted by 5,000+ Clients Worldwide ( 4.9 rating
                </p>

            <div className="flex items-end gap-1 pb-[2px] z-10 font-semibold text-[#FFC107]">
  {/* 4 full yellow stars */}
  {[...Array(4)].map((_, index) => (
    <Star key={index} size={9.24} className=" fill-[#FFC107]" />
  ))}

  {/* Half star: left yellow, right white */}
  <div className="relative w-[14px] h-[14px] md:w-[9.24px] md:h-[8.73px]">
    {/* Left half - yellow */}
    <Star
      size={9.24}
      className="absolute top-0 left-0 fill-[#FFC107] text-[#FFC107]"
      style={{ clipPath: "inset(0 50% 0 0)" }}
    />
    {/* Right half - white */}
    <Star
      size={9.24}
      className="absolute top-0 left-0 fill-white text-white"
      style={{ clipPath: "inset(0 0 0 50%)" }}
    />
  </div>
</div>

                <p className="text-black text-sm z-10 font-semibold">)</p>
              </div>
              <div className=" flex items-end gap-2 py-5">
                <hr className="w-full border-t border-[#111111] opacity-10" />
              </div>
              <div className="clients-icons gap-5 flex">
                <span>
                  <svg
                    className="w-[74px] h-[19px] md:w-[112px] md:h-[37px]"
                    viewBox="0 0 113 39"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_179_33841)">
                      <path
                        d="M109.335 23.6155L112.466 25.7026C111.45 27.1991 109.019 29.7669 104.818 29.7669C99.6001 29.7669 95.7145 25.7301 95.7145 20.5948C95.7145 15.1302 99.6413 11.4229 104.378 11.4229C109.143 11.4229 111.477 15.2124 112.232 17.2582L112.644 18.3019L100.369 23.3821C101.303 25.2221 102.758 26.1557 104.818 26.1557C106.877 26.1557 108.305 25.1396 109.335 23.6155ZM99.7101 20.3067L107.907 16.9014C107.454 15.7618 106.109 14.9518 104.502 14.9518C102.456 14.9518 99.614 16.7643 99.7101 20.3067Z"
                        fill="#FF302F"
                      />
                      <path
                        d="M89.7968 2.07239H93.751V28.9294H89.7968V2.07239Z"
                        fill="#20B15A"
                      />
                      <path
                        d="M83.5632 12.1368H87.3803V28.4486C87.3803 35.2177 83.3847 38.005 78.6613 38.005C74.2127 38.005 71.5354 35.0118 70.533 32.5816L74.0342 31.126C74.6657 32.6226 76.1898 34.394 78.6613 34.394C81.6957 34.394 83.5632 32.5128 83.5632 28.9979V27.6799H83.4259C82.5196 28.7782 80.7896 29.7667 78.5927 29.7667C74.0067 29.7667 69.805 25.7711 69.805 20.6223C69.805 15.4458 74.0067 11.4092 78.5927 11.4092C80.7759 11.4092 82.5196 12.3841 83.4259 13.455H83.5632V12.1368ZM83.8376 20.6223C83.8376 17.3819 81.682 15.0202 78.9359 15.0202C76.1623 15.0202 73.8281 17.3819 73.8281 20.6223C73.8281 23.8214 76.1623 26.1418 78.9359 26.1418C81.6822 26.1557 83.8378 23.8214 83.8378 20.6223"
                        fill="#3686F7"
                      />
                      <path
                        d="M48.097 20.5535C48.097 25.8398 43.9779 29.7254 38.925 29.7254C33.8724 29.7254 29.7531 25.8262 29.7531 20.5535C29.7531 15.2399 33.8724 11.3679 38.925 11.3679C43.9779 11.3679 48.097 15.2399 48.097 20.5535ZM44.0877 20.5535C44.0877 17.2584 41.6985 14.9926 38.925 14.9926C36.1516 14.9926 33.7624 17.2584 33.7624 20.5535C33.7624 23.8213 36.1516 26.1145 38.925 26.1145C41.6987 26.1145 44.0877 23.8213 44.0877 20.5535Z"
                        fill="#FF302F"
                      />
                      <path
                        d="M68.1299 20.5948C68.1299 25.8811 64.0107 29.7667 58.958 29.7667C53.9051 29.7667 49.786 25.8809 49.786 20.5948C49.786 15.2811 53.9051 11.4229 58.958 11.4229C64.0107 11.4229 68.1299 15.2675 68.1299 20.5948ZM64.1068 20.5948C64.1068 17.2996 61.7177 15.0338 58.9441 15.0338C56.1704 15.0338 53.7814 17.2996 53.7814 20.5948C53.7814 23.8626 56.1707 26.1557 58.9441 26.1557C61.7314 26.1557 64.1068 23.8489 64.1068 20.5948Z"
                        fill="#FFBA40"
                      />
                      <path
                        d="M14.6771 25.7437C8.92394 25.7437 4.42052 21.1028 4.42052 15.3496C4.42052 9.59669 8.92394 4.95574 14.6771 4.95574C17.7802 4.95574 20.0456 6.17769 21.7207 7.74305L24.4807 4.98329C22.1466 2.74525 19.0297 1.04236 14.6771 1.04236C6.79588 1.04258 0.163956 7.46864 0.163956 15.3496C0.163956 23.2306 6.79588 29.6569 14.6771 29.6569C18.9336 29.6569 22.1466 28.2564 24.6592 25.6476C27.2405 23.0662 28.0368 19.4413 28.0368 16.503C28.0368 15.583 27.927 14.6357 27.8034 13.9355H14.6771V17.7525H24.0275C23.7529 20.1418 22.9978 21.7757 21.8856 22.8876C20.54 24.2471 18.4119 25.7437 14.6771 25.7437Z"
                        fill="#3686F7"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_179_33841">
                        <rect
                          width="112.85"
                          height="37.0289"
                          fill="white"
                          transform="translate(0 0.985535)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </span>

                <span>
                  <Image
                    src="/images/icons/trustpilpt.png"
                    alt="Arrow Icon"
                    width={138}
                    height={37}
                    priority
                  />
                </span>
                <span>
                  <Image
                    src="/images/icons/clutch.png"
                    alt="Arrow Icon"
                    width={112}
                    height={37}
                    priority
                  />
                </span>
                <span>
                  <Image
                    src="/images/icons/goodfirms.png"
                    alt="Arrow Icon"
                    width={162}
                    height={36}
                    priority
                  />
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Second Image with Text */}
        <div className="relative w-full h-[274px] md:h-[820px] ">
          {/* Mobile Image */}

          <Image
            src="/images/home_img/mobile_mode_banner21.png"
            alt="Mobile Banner"
            fill
            className="object-cover block md:hidden "
            //  sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />

          {/* Desktop / Tablet Image */}
          <Image
            src="/images/home_img/banner_2img.jpg"
            alt="Desktop Banner"
            fill
            className="object-cover hidden md:block"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
          {/* Text Overlay */}
          <div className="absolute top-2 md:top-auto md:bottom-0 left-0 md:left-[12] right-0 px-[15px] md:px-12 p-10">
            <p className="text-sm text-white/75 font-thin mb-2 leading-[18px] md:text-xl md:leading-[26px]">
              Recognized as the Most Trusted
            </p>

            <div className="inline-flex items-center mb-2">
              <h2 className="text-white text-[28px] sm:text-4xl md:text-5xl pt-2 leading-[135%] md:leading-[120%] font-normal">
                Web
              </h2>
              <span className="ml-2 rounded-full bg-white/10">
                <h2 className="text-white md:text-5xl px-4 pt-2 pb-1 italic text-[28px] leading-[100%] md:leading-[100%]  font-medium">
                  Development
                </h2>
              </span>
            </div>
            <h2 className="text-white text-5xl font-normal leading-[135%] md:leading[120%] ">
              Company
            </h2>
            {/* hover:scale-105 transition */}
            <div className="w-148px h-44px md:w-[168px] md:h-[50px] p-2 btn-contact group text-2xl inline-flex items-center justify-center gap-[10px] mt-3 md:mt-9 rounded-sm bg-gradient-to-t from-white via-white to-white text-[#057BC1]  w-max font-red-hat">
              <span className="md:text-xl text-[16px] font-semibold leading-[26px]">
                Contact Us
              </span>
              <Image
                src="/images/icons/arrow-up-right.png"
                alt="Arrow Icon"
                width={24}
                height={24}
                priority
                className="transform transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2"
              />
            </div>
          </div>
        </div>
      </div>

      {/* section second */}

      <div className=" location-section bg-black px-15 py-10">
        {/* <div className="inner-location-section md:flex gap-[30px]">
          <div className="lines items-start  border-l border-white/10 bg-[#5098D6]/50 rounded-[3px]">
            
          </div>
          <div className="lines items-start  ">
                
          
          <div  className="first-location inline-grid gap-[14px] h-[110px] w-[295px] md:w-[370px] xl:w-[295px]"

>

          
          <div className=" ">
            <Image
              src="/images/icons/twemoji_flag-india.svg"
              alt="Arrow Icon"
              width={50}
              height={50}
              priority
            />
          </div>
          <div className="contact-details inline-grid gap-1">
            <h4 className="text-white leading-[150%] font-medium">India</h4>
            <div className="gap-[6px] flex">
              <p className="text-[12px] leading-[150%] font-light text-white">
                +91-1203202969
              </p>
              <p className="text-[12px] leading-[150%] font-light text-white">
                ,
              </p>
              <p className="text-[12px] leading-[150%] font-light text-white">
                7291934043
              </p>
            </div>
          </div>
          </div>
          </div>
            <div className="lines items-start  border-l border-white/10 bg-[#5098D6]/50 rounded-[3px]">
            
          </div>
          <div className="lines items-start  ">
                
          
          <div className="first-location inline-grid gap-[14px] h-[110px] w-[295px] md:w-[370px] xl:w-[295px]"
>

          
          <div className=" ">
            <Image
              src="/images/icons/twemoji_flag-malaysia.svg"
              alt="Arrow Icon"
              width={50}
              height={50}
              priority
            />
          </div>
          <div className="contact-details inline-grid gap-1">
            <h4 className="text-white leading-[150%] font-medium">India</h4>
            <div className="gap-[6px] flex">
              <p className="text-[12px] leading-[150%] font-light text-white">
                +91-1203202969
              </p>
              <p className="text-[12px] leading-[150%] font-light text-white">
                ,
              </p>
              <p className="text-[12px] leading-[150%] font-light text-white">
                7291934043
              </p>
            </div>
          </div>
          </div>
          </div>
            <div className="lines items-start  border-l border-white/10 bg-[#5098D6]/50 rounded-[3px]">
            
          </div>
          <div className="lines items-start  ">
                
          
          <div className="first-location inline-grid gap-[14px] h-[110px] w-[295px] md:w-[370px] xl:w-[295px]"
>

          
          <div className=" ">
            <Image
              src="/images/icons/emojione-v1_flag-for-saudi-arabia.svg"
              alt="Arrow Icon"
              width={50}
              height={50}
              priority
            />
          </div>
          <div className="contact-details inline-grid gap-1">
            <h4 className="text-white leading-[150%] font-medium">India</h4>
            <div className="gap-[6px] flex">
              <p className="text-[12px] leading-[150%] font-light text-white">
                +91-1203202969
              </p>
              <p className="text-[12px] leading-[150%] font-light text-white">
                ,
              </p>
              <p className="text-[12px] leading-[150%] font-light text-white">
                7291934043
              </p>
            </div>
          </div>
          </div>
          </div>
        </div> */}

        <div className=" container-width mx-auto inner-location-section flex flex-col lg:flex-row md:gap-30 gap-[16px]">
          {/* First Location */}
          <div className=" flex">
            <div className="border-l border-white/10 bg-[#5098D6]/50 rounded-[3px] h-auto mr-[30px]"></div>
            <div className="first-location inline-grid gap-[14px] h-[110px] w-[295px] md:w-[370px] xl:w-[295px]">
              <div>
                <Image
                  src="/images/icons/twemoji_flag-india.svg"
                  alt="India"
                  width={50}
                  height={50}
                  priority
                />
              </div>
              <div className="contact-details inline-grid gap-1">
                <h4 className="text-white leading-[150%] font-medium">India</h4>
                <div className="gap-[6px] flex">
                  <p className="text-[12px] leading-[150%] font-light text-white">
                    +91-1203202969
                  </p>
                  <p className="text-[12px] leading-[150%] font-light text-white">
                    ,
                  </p>
                  <p className="text-[12px] leading-[150%] font-light text-white">
                    7291934043
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Repeat the same pattern for other locations */}
          <div className="flex">
            <div className="border-l border-white/10 bg-[#5098D6]/50 rounded-[3px]  h-auto mr-[30px]"></div>
            <div className="first-location inline-grid gap-[14px] h-[110px] w-[295px] md:w-[370px] xl:w-[295px] ">
              <div>
                <Image
                  src="/images/icons/twemoji_flag-malaysia.svg"
                  alt="Malaysia"
                  width={50}
                  height={50}
                  priority
                />
              </div>
              <div className="contact-details inline-grid gap-1">
                <h4 className="text-white leading-[150%] font-medium">
                  Malaysia
                </h4>
                  <div className="gap-[6px] flex">
                  <p className="text-[12px] leading-[150%] font-light text-white">
                    +91-1203202969
                  </p>
                  <p className="text-[12px] leading-[150%] font-light text-white">
                    ,
                  </p>
                  <p className="text-[12px] leading-[150%] font-light text-white">
                    7291934043
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex">
            <div className="border-l border-white/10 bg-[#5098D6]/50 rounded-[3px]  h-auto mr-[30px]"></div>
            <div className="first-location inline-grid gap-[14px] h-[110px] w-[295px] md:w-[370px] xl:w-[295px]">
              <div>
                <Image
                  src="/images/icons/emojione-v1_flag-for-saudi-arabia.svg"
                  alt="Saudi Arabia"
                  width={50}
                  height={50}
                  priority
                />
              </div>
              <div className="contact-details inline-grid gap-1">
                <h4 className="text-white leading-[150%] font-medium">
                  Saudi Arabia
                </h4>
                  <div className="gap-[6px] flex">
                  <p className="text-[12px] leading-[150%] font-light text-white">
                    +91-1203202969
                  </p>
                  <p className="text-[12px] leading-[150%] font-light text-white">
                    ,
                  </p>
                  <p className="text-[12px] leading-[150%] font-light text-white">
                    7291934043
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* new section end  */}
      {/* about us section start */}
      
    </>
  );
}
