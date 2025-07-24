import React from "react";
import Image from "next/image";

export default function About_section() {
  return (
    <div className="py-10 px-15 bg-[#F6F8FB]">
      <div className="container-width mx-auto inner-row-section flex gap-[30%]">
        <div className="grid grid-cols-1 md:[grid-template-columns:1fr_2fr_1fr] gap-[30px] w-full ">
          {/* Left Column with Actual Image Size */}
          <div className="flex items-center justify-center h-full relative min-h-[400px]">
            <Image
              src="/images/home_img/about-img1.png"
              alt="Banner Image 1"
              fill
              className="object-cover  rounded-xl"
              priority
            />
          </div>

          {/* Middle Column */}
          <div className=" h-full">
            <div className="inline-grid gap-[20px] h-full">
              <div>
                <h2 className="text-black md:text-5xl text-[32px] font-normal leading-[120%] ">
                  About Us
                </h2>
              </div>
              <div className="inline-grid gap-[20px]">
                <div className="inline-grid gap-[8px]">
                  <h3 className="text-black md:text-[30px] text-[20px] font-medium leading-[150%]" >Your Website</h3>
                  <p className="text-[#AEAEAE] text-[16px] font-medium leading-[150%]">
                    Crafting impactful websites that bring your global vision to
                    life.
                  </p>
                </div>
                <div className="inline-grid gap-[8px]">
                  <h3 className="text-black md:text-[30px] text-[20px] font-medium leading-[150%]">Revolutionizing Web Design</h3>
                  <p className="text-[#AEAEAE] text-[16px] font-medium leading-[150%]">
                    Redefining digital experiences with innovation, and
                    performance.
                  </p>
                </div>
                <div className="inline-grid gap-[8px]">
                  <h3 className="text-black md:text-[30px] text-[20px] font-medium leading-[150%]">Empowering Startups & Enterprises</h3>
                  <p className="text-[#AEAEAE] text-[16px] font-medium leading-[150%]" >
                    Helping businesses worldwide - from India to across the
                    globe - thrive online with scalable, future-ready web
                    solutions.
                  </p>
                </div>
                <div className="inline-grid gap-[8px] bg-white rounded-lg px-5 py-5">
                  <div className="inner inline-grid gap-[10px]">
                    <p className="text-[#000000]/40 text-[14px] font-medium leading-[18px]">Featured in </p>
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 w-full place-items-center">
                      <Image
                        src="/images/icons/Company_logo.svg"
                        alt="India"
                        width={96}
                        height={30}
                        priority
                      />
                      <Image
                        src="/images/icons/Company_logo2.svg"
                        alt="India"
                        width={96}
                        height={30}
                        priority
                      />
                      <Image
                        src="/images/icons/Company_logo3.svg"
                        alt="India"
                        width={96}
                        height={30}
                        priority
                      />
                      <Image
                        src="/images/icons/Company_logo4.svg"
                        alt="India"
                        width={96}
                        height={30}
                        priority
                      />
                      <Image
                        src="/images/icons/Company_logo2.svg"
                        alt="India"
                        width={96}
                        height={30}
                        priority
                      />
                    </div>
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 w-full place-items-center">
                      <Image
                        src="/images/icons/Company_logo2.svg"
                        alt="India"
                        width={96}
                        height={30}
                        priority
                      />
                      <Image
                        src="/images/icons/Company_logo4.svg"
                        alt="India"
                        width={96}
                        height={30}
                        priority
                      />
                      <Image
                        src="/images/icons/Company_logo.svg"
                        alt="India"
                        width={96}
                        height={30}
                        priority
                      />
                      <Image
                        src="/images/icons/Company_logo2.svg"
                        alt="India"
                        width={96}
                        height={30}
                        priority
                      />
                      <Image
                        src="/images/icons/Company_logo3.svg"
                        alt="India"
                        width={96}
                        height={30}
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="">
            <div className="counter-box grid grid-cols-1 gap-[20px]">
              <div className="bg-[#C6DEEA] rounded-lg h-full">
                <div className="inner items-center flex pl-5 pr-2 pt-[10px] justify-between">
                  <div className="counter ">
                    <h2 className="text-black text-[28px] font-bold leading-[36px]">
                      {" "}
                      11 + Years
                    </h2>
                    <p className="text-[#000000]/40 text-[14px] font-bold leading-[18px] md:leading[120%]">
                      Track Records
                    </p>
                  </div>
                  <div className="image">
                    <Image
                      src="/images/home_img/counter1img.png"
                      alt="img"
                      width={113}
                      height={120}
                      priority
                    />
                  </div>
                </div>
              </div>
              <div className="bg-[#C6DEEA] rounded-lg h-full">
                <div className="inner items-center flex pl-5 pr-2 pt-[10px] justify-between">
                  <div className="counter ">
                    <h2 className="text-black text-[28px] font-bold leading-[36px]">
                      {" "}
                      10000+
                    </h2>
                    <p className="text-[#000000]/40 text-[14px] font-bold leading-[18px] md:leading[120%]">
                      Happy Customers
                    </p>
                  </div>
                  <div className="image">
                    <Image
                      src="/images/home_img/counter1img.png"
                      alt="img"
                      width={113}
                      height={120}
                      priority
                    />
                  </div>
                </div>
              </div>
              <div className="bg-[#C6DEEA] rounded-lg h-full">
                <div className="inner items-center flex pl-5 pr-2 pt-[10px] justify-between">
                  <div className="counter ">
                    <h2 className="text-black text-[28px] font-bold leading-[36px]">
                      {" "}
                      90+
                    </h2>
                    <p className="text-[#000000]/40 text-[14px] font-bold leading-[18px] md:leading[120%]">
                     Expert Team  
                    </p>
                  </div>
                  <div className="image">
                    <Image
                      src="/images/home_img/counter1img.png"
                      alt="img"
                      width={113}
                      height={120}
                      priority
                    />
                  </div>
                </div>
              </div>
              <div className="bg-[#C6DEEA] rounded-lg h-full">
                <div className="inner items-center flex pl-5 pr-2 pt-[10px] justify-between">
                  <div className="counter ">
                    <h2 className="text-black text-[28px] font-bold leading-[36px]">
                      {" "}
                      900+
                    </h2>
                    <p className="text-[#000000]/40 text-[14px] font-bold leading-[18px] md:leading[120%]">
                      Total Reviews
                    </p>
                  </div>
                  <div className="image">
                    <Image
                      src="/images/home_img/counter1img.png"
                      alt="img"
                      width={113}
                      height={120}
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
