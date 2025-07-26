'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';


const counterData = [
  {
    value: 11,
    suffix: "+ Years",
    label: 'Years Experience',
    bg: '#C6DEEA',
    image: '/images/icons/counter1img.png',
    imageW: 113,
    imageH: 120,
  },
  {
    value: 10000,
    label: 'Happy Customers',
    bg: '#C8CCCD',
    image: '/images/icons/happy-customers.png',
    imageW: 75,
    imageH: 100,
  },
  {
    value: 90,
    label: 'Expert Team',
    bg: '#D9F5EF',
    image: '/images/icons/expert-team.png',
    imageW: 90,
    imageH: 100,
  },
  {
    value: 900,
    label: 'Total Reviews',
    bg: '#ECEBE9',
    image: '/images/icons/total-reviews.png',
    imageW: 75,
    imageH: 100,
  },
];


export default function About_section() {
   const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const [hasViewed, setHasViewed] = useState(false);

  useEffect(() => {
    if (inView) setHasViewed(true);
  }, [inView]);

  return (
    <div className="py-10 px-[15px] md:px-15 bg-[#F6F8FB]">
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
           
    <div ref={ref} className="grid grid-cols-1 gap-[20px] h-fit">
      {counterData.map((item, index) => (
        <div key={index} className=" rounded-lg h-full"
        style={{ backgroundColor: item.bg }}>
          <div className="inner items-center flex pl-5 pr-2 pt-[10px] justify-between">
            <div className="counter">
              <h2 className="text-black text-[28px] font-bold leading-[36px]">
                {hasViewed ? <CountUp start={0} end={item.value} duration={2} /> : 0}
                  {item.suffix ? ` ${item.suffix}` : "+"}
              </h2>
              <p className="text-[#000000]/40 text-[14px] font-bold leading-[18px] md:leading[120%]">
                {item.label}
              </p>
            </div>
            <div>
              <Image
                src={item.image}
                alt={item.label}
                width={item.imageW}
                height={item.imageH}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
        </div>
      </div>
    </div>
  );
}
