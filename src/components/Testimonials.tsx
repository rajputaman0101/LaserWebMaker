"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ArrowLeft, ArrowRight, Star, StarHalf } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Peter S.",
    role: "College Student",
    text: "As someone who tried many ADHD tools, I’ve seen what works and what doesn’t. This planner? It’s the real deal. Grounded in science.",
    rating: 4.5,
    platform: "Google",
    iconColor: "text-[#EA4335]",
    posted_on: "Google",
    posted_icon: "/images/home_img/svg-logo/google-icon.svg",
    user_icon: "/images/home_img/testimonials_icon.jpg",
    review_url: "https://www.google.com/maps/place/YourBusinessName/reviews",
  },
  {
    name: "Mark C",
    role: "Content Creator",
    text: "As someone who tried many ADHD tools, I’ve seen what works and what doesn’t. This planner? It’s the real deal. Grounded in science.",
    rating: 4.8,
    platform: "Google",
    iconColor: "text-[#4285F4]",
    posted_on: "Google",
    posted_icon: "/images/home_img/svg-logo/google-icon.svg",
    user_icon: "/images/home_img/testimonials_icon.jpg",
    review_url: "https://www.google.com/maps/place/YourBusinessName/reviews",
  },
  {
    name: "Jessica S",
    role: "Entrepreneur",
    text: "I’ve always struggled to build habits—especially exercising. But something about ADHD Bright changed that. Tiny rewards kept me going!",
    rating: 5,
    platform: "Google",
    iconColor: "text-[#34A853]",
    posted_on: "Google",
    posted_icon: "/images/home_img/svg-logo/google-icon.svg",
    user_icon: "/images/home_img/testimonials_icon.jpg",
    review_url: "https://www.google.com/maps/place/YourBusinessName/reviews",
  },
  {
    name: "Jessica S",
    role: "Entrepreneur",
    text: "I’ve always struggled to build habits—especially exercising. But something about ADHD Bright changed that. Tiny rewards kept me going!",
    rating: 5,
    platform: "Google",
    iconColor: "text-[#34A853]",
    posted_on: "Google",
    posted_icon: "/images/home_img/svg-logo/google-icon.svg",
    user_icon: "/images/home_img/testimonials_icon.jpg",
    review_url: "https://www.google.com/maps/place/YourBusinessName/reviews",
  },
  {
    name: "Jessica S",
    role: "Entrepreneur",
    text: "I’ve always struggled to build habits—especially exercising. But something about ADHD Bright changed that. Tiny rewards kept me going! ",
    rating: 5,
    platform: "Google",
    iconColor: "text-[#34A853]",
    posted_on: "Google",
    posted_icon: "/images/home_img/svg-logo/google-icon.svg",
    user_icon: "/images/home_img/testimonials_icon.jpg",
    review_url: "https://www.google.com/maps/place/YourBusinessName/reviews",
  },
];

function renderStars(rating: number) {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalf = rating - fullStars >= 0.5;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<Star key={i} size={16} color="#F58E24" fill="#F58E24" />);
  }
  if (hasHalf) {
    stars.push(
      <StarHalf key="half" size={16} color="#F58E24" fill="#F58E24" />
    );
  }
  return stars;
}
export default function Testimonials() {
  return (
    <div className="container-width mx-auto bg-white px-[15px] md:px-15 py-20 ">
      <h2 className="text-center text-[32px] md:text-[40px] leading-[120%] font-normal text-black pb-10">
        What Our Clients Say
      </h2>
      <div className="bg-[#5A9DD5] py-9 px-9 rounded-lg">
        <div className=" justify-between items-center gap-[30px] grid grid-cols-1 md:flex ">
          <div className="outer-container  gap-6 grid grid-cols-1 md:flex items-center">
            {/* <div className="logo-box py-4 px-6 gap-8 flex items-center justify-between bg-white rounded flex-wrap">
              <div className="logo">
                <img
                  src="/images/home_img/svg-logo/google.svg"
                  alt="Client Logo 1"
                />
              </div>
              <div className="logo">
                <img
                  src="/images/home_img/svg-logo/clutch.svg"
                  alt="Client Logo 2"
                />
              </div>
              <div className="logo">
                <img
                  src="/images/home_img/svg-logo/goodfirms.svg"
                  alt="Client Logo 3"
                />
              </div>
              <div className="logo">
                <img
                  src="/images/home_img/svg-logo/trustpilot.svg"
                  alt="Client Logo 3"
                />
              </div>
            </div> */}

            {/* Grid Logo Box */}
            <div className="logo-box grid grid-cols-2 md:flex bg-white rounded px-6 py-4 gap-8 items-center justify-center">
              <div className="logo flex justify-center">
                <img src="/images/home_img/svg-logo/google.svg" alt="Google" />
              </div>
              <div className="logo flex justify-center">
                <img src="/images/home_img/svg-logo/clutch.svg" alt="Clutch" />
              </div>
              <div className="logo flex justify-center">
                <img
                  src="/images/home_img/svg-logo/goodfirms.svg"
                  alt="Goodfirms"
                />
              </div>
              <div className="logo flex justify-center">
                <img
                  src="/images/home_img/svg-logo/trustpilot.svg"
                  alt="Trustpilot"
                />
              </div>
            </div>
            <div className="items-center flex rounded-lg overflow-hidden justify-center">
              <div className=" bottom-4 left-6 flex items-end gap-3">
                <h2 className="text-white text-[32px] font-bold font-[Noto_Sans_HK] leading-[38px]">
                  4.9
                </h2>
               <div className="flex items-start md:items-end gap-1 text-[7.48px] pb-0 md:pb-1 z-10 font-normal md:text-sm">
                                {/* 4 full yellow stars */}
                                {[...Array(4)].map((_, index) => (
                                  <div
                                    key={index}
                                    className="relative w-[9.24px] h-[8.73px]"
                                  >
                                    <Image
                                      src="/images/icons/star.svg"
                                      alt="Full Star"
                                      fill
                                      className="object-contain"
                                    />
                                  </div>
                                ))}
              
                                {/* Half star */}
                                {/* Half star as static image using Next.js Image */}
                                <div className="relative w-[9.24px] h-[8.73px]">
                                  <Image
                                    src="/images/icons/half_star.svg"
                                    alt="Half Star"
                                    fill
                                    className="object-contain"
                                  />
                                </div>
                              </div>
              </div>
            </div>
          </div>

          <a
            href="/serving-industries"
            className=" px-[16px] py-3 text-[#057BC1] text-[20px] font-red-hat rounded leading-[150%] bg-[#fff] hover:bg-[#057BC1] hover:text-[#fff] transition-all duration-500 font-semibold text-center"
          >
            View All
          </a>
        </div>
      </div>
      {/* Client  Testimonials */}

      <div className="container-width bg-white py-[30px]">
        <div className="relative">
          {/* Desktop Arrows */}
          {/* Arrows - Only visible on desktop */}
          <div className="flex justify-between absolute top-1/2 -translate-y-1/2 z-10 w-full px-2">
            <div className="swiper-button-prev-custom cursor-pointer bg-[#B6AAFF] hover:bg-[#CCE7C3] transition-all duration-500 text-white p-2 rounded-full  ">
              <ArrowLeft size={12} />
            </div>
            <div className="swiper-button-next-custom cursor-pointer bg-[#B6AAFF] hover:bg-[#CCE7C3] transition-all duration-500 text-white p-2 rounded-full ">
              <ArrowRight size={12} />
            </div>
          </div>

          {/* Swiper Carousel */}
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            // pagination={{
            //   clickable: true,
            //   el: ".swiper-pagination-custom",
            // }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 30 },
              768: { slidesPerView: 3, spaceBetween: 30 },
            }}
            className="pb-12"
          >
            {testimonials.map((t, idx) => (
              <SwiperSlide key={idx}>
                <div className="bg-[#FAFAFA] p-9 rounded-xl text-black flex flex-col justify-between h-full">
                  <div className="flex flex-col gap-5">
                    <div className="outer-profile flex flex-col gap-y-4">
                      <div className="profile flex gap-2">
                        <div className="bg-[#A9ACE7] h-[46px] w-[46px]">
                          <img src={t.user_icon} alt="img" />
                        </div>
                        <div className="profile-name">
                          <h4 className="text-[16px] leading-[21px] font-medium text-[#0C0B0B]">
                            {t.name}{" "}
                          </h4>
                          <p className="text-[12px] leading-[16px] text-[#747474] font-normal">
                            {t.role}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-end gap-1 font-semibold">
                        {renderStars(t.rating)}
                      </div>
                    </div>
                    <p className="text-[#0C0B0B] leading-[140%] text-[16px] font-normal">
                      {t.text}
                      {t.review_url && (
                        <>
                          {" "}
                          <a
                            href={t.review_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#2B61F3] underline hover:text-blue-800"
                          >
                            Read more
                          </a>
                        </>
                      )}
                    </p>
                    <div className="flex items-center gap-2">
                      <div>
                        <img src={t.posted_icon} alt="img" />
                      </div>
                      <div className="">
                        <p className="text-[14px] text-[#0C0B0B] font-normal leading-[18px] ">
                          Posted On
                        </p>
                        <p className="text-[14px] text-[#2B61F3] font-normal leading-[18px]">
                          {t.posted_on}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Pagination - Visible on all devices */}
        </div>
        {/* <div className="relative">
          <div className="swiper-pagination-custom flex justify-center mt-[20px]" />
        </div> */}
      </div>

      {/* Client  Testimonials End */}
    </div>
  );
}
