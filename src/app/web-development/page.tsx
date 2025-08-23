// app/website-development/page.jsx

'use client';

import React from "react";
import Header from "@/components/Header";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";


const cards = [
  {
    icon: "/images/home_img/svg-logo/real-estate.svg",
    title: "Real Estate and Property",
    image: "/images/home_img/real-estate-property-img.jpg",
    link: "/industries/real-estate",
  },
  {
    icon: "/images/home_img/svg-logo/travel.svg",
    title: "Travel",
    image: "/images/home_img/travel-img.jpg",
    link: "/industries/travel",
  },
  {
    icon: "/images/home_img/svg-logo/healthcare.svg",
    title: "Healthcare",
    image: "/images/home_img/healthcare-img.jpg",
    link: "/industries/healthcare",
  },
  {
    icon: "/images/home_img/svg-logo/education.svg",
    title: "Education",
    image: "/images/home_img/education-img.jpg",
    link: "/industries/education",
  },
  {
    icon: "/images/home_img/svg-logo/transport.svg",
    title: "Transport",
    image: "/images/home_img/transport-img.jpg",
    link: "/industries/transport",
  },
  {
    icon: "/images/home_img/svg-logo/ecommerce.svg",
    title: "E-commerce, Retail and B2B",
    image: "/images/home_img/ecommerce-img.jpg",
    link: "/industries/ecommerce",
  },
  {
    icon: "/images/home_img/svg-logo/gaming.svg",
    title: "Gaming and Leisure",
    image: "/images/home_img/gaming-img.jpg",
    link: "/industries/gaming",
  },
  {
    icon: "/images/home_img/svg-logo/food.svg",
    title: "Food and Restaurant",
    image: "/images/home_img/food-restaurant-img.jpg",
    link: "/industries/food",
  },
];



export default function WebsiteDevelopment() {
  return (
    <>
      <Header />

      <div className="container-width pt-[60px] md:pt-[120px] pb-[60px]">
        <div className="px-[15px] w-full md:max-w-[80%] outer-box flex flex-col justify-center gap-[42px] items-center mx-auto">
          <div className="flex flex-col gap-4 justify-center items-center">
            <div className="border border-[#D0D0D1] px-4 py-2 rounded-[99px] text-center">
              <p>Top Website Development Company in Noida</p>
            </div>

            <div className="flex flex-col justify-center items-center">
              <h1 className="text-[30px] leading-[100%] md:text-[88px] text-center text-[#212121] font-bold font-[--font-noto-sans-hk]">
                Website Development Company
              </h1>
            </div>

            <div>
              <p className="leading-[140%] text-center">
                #Most Trusted Web Development Company INDIA
              </p>
            </div>
          </div>

          <div>
            <Link
              href="/contact-us"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-[#589CD5] text-[16px] leading-[150%] rounded-[99px] border border-[#589CD5] hover:bg-[#589CD5] hover:text-white transition-all inline-block"
            >
              Get a Quote
            </Link>
          </div>
        </div>

        {/* Client Industry Slider */}
        <div className="client-portfolio pt-10">
          <Swiper
            spaceBetween={15}
            slidesPerView={1.2}
            breakpoints={{
              640: { slidesPerView: 2.2 },
              768: { slidesPerView: 3.2 },
              1024: { slidesPerView: 4.2 },
            }}
            modules={[Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
          >
            {cards.map((card, index) => (
              <SwiperSlide key={index}>
                <Link href={card.link}>
                  <div className="relative h-[437px] rounded-lg overflow-hidden">
                    <div
                      className="w-full h-full bg-cover bg-center"
                      style={{ backgroundImage: `url('${card.image}')` }}
                    >
                      {/* <div className="absolute bottom-[10px] text-center w-full text-white p-3 bg-black/50 rounded-b-lg">
                        <div className="flex gap-[10px] justify-center items-center">
                          <Image
                            src={card.icon}
                            alt={card.title}
                            width={40}
                            height={40}
                          />
                          <h3 className="text-[15px] leading-[120%] font-normal">
                            {card.title}
                          </h3>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}
