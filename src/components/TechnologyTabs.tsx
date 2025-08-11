"use client";

import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";

const tabs = [
  {
    label: "Frontend",
    key: "frontend",
    logos: [
      "/images/home_img/technologytabs/html.svg",
      "/images/home_img/technologytabs/css.svg",
      "/images/home_img/technologytabs/phpmysql.svg",
      "/images/home_img/technologytabs/wordpress.svg",
      "/images/home_img/technologytabs/magento.svg",
      "/images/home_img/technologytabs/laravel.svg",
      "/images/home_img/technologytabs/joomla.svg",
      "/images/home_img/technologytabs/prestashop.svg",
      "/images/home_img/technologytabs/drupal.svg",
      "/images/home_img/technologytabs/bootstrap.svg",
    ],
  },
  {
    label: "Backend",
    key: "backend",
    logos: [
      "/images/home_img/technologytabs/nodejs.svg",
      "/images/home_img/technologytabs/laravel.svg",
      "/images/home_img/technologytabs/joomla.svg",
      "/images/home_img/technologytabs/prestashop.svg",
      
      
      ],
  },
  { label: "Database", key: "database", logos: ["/images/home_img/technologytabs/phpmysql.svg",] },
  { label: "Frameworks", key: "frameworks", logos: ["/images/home_img/technologytabs/bootstrap.svg",] },
  {
    label: "CMS",
    key: "cms",
    logos: [

      "/images/home_img/technologytabs/react.svg",
      "/images/home_img/technologytabs/wordpress.svg",
      "/images/home_img/technologytabs/magento.svg",
      "/images/home_img/technologytabs/laravel.svg",
      "/images/home_img/technologytabs/joomla.svg",
      "/images/home_img/technologytabs/prestashop.svg",
      "/images/home_img/technologytabs/drupal.svg",
    ],
  },
  {
    label: "E-commerce",
    key: "ecommerce",
    logos: [ "/images/home_img/technologytabs/wordpress.svg",
      "/images/home_img/technologytabs/magento.svg",
      "/images/home_img/technologytabs/joomla.svg",
      "/images/home_img/technologytabs/prestashop.svg",
      "/images/home_img/technologytabs/drupal.svg",
    ],
  },
];

export default function TechnologyTabs() {
  const [activeTab, setActiveTab] = useState("frontend");
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

  const currentLogos = tabs.find((tab) => tab.key === activeTab)?.logos || [];

  return (
    <div className="container-width relative mx-auto text-center px-[15px] md:px-15 py-20">
      <h2 className="text-[32px] md:text-5xl font-normal leading-[120%] mb-10">
        Technology We Use
      </h2>

      <div className="flex flex-col gap-15">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center md:gap-5 gap-3 ">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 text-[16px] font-normal leading-[150%] py-2 border rounded-full transition-all duration-500 ease-in-out ${
                activeTab === tab.key
                  ? "bg-[#589CD5] text-white"
                  : "border-[#589CD5] text-[#589CD5] hover:bg-blue-100"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div>
          {/* Content with Animation and Swiper */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="relative"
            >
              {/* Arrows */}
              <div className="px-[40px] relative">
                <div
                  ref={prevRef}
                  className="absolute z-10 left-1 md:left-0  top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full cursor-pointer hover:bg-blue-100 transition"
                >
                  <ArrowLeft size={20} />
                </div>
                <div
                  ref={nextRef}
                  className="absolute z-10 right-1 md:right-0  top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full cursor-pointer hover:bg-blue-100 transition"
                >
                  <ArrowRight size={20} />
                </div>

                <Swiper
                  modules={[Navigation]}
                  loop={true}
                  navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                  }}
                  onBeforeInit={(swiper) => {
                    // Set custom navigation buttons
                    if (
                      typeof swiper.params.navigation !== "boolean" &&
                      swiper.params.navigation
                    ) {
                      swiper.params.navigation.prevEl = prevRef.current;
                      swiper.params.navigation.nextEl = nextRef.current;
                    }
                  }}
                  spaceBetween={30}
                  speed={500}
                  breakpoints={{
                    320: { slidesPerView: 3 },
                    640: { slidesPerView: 3 },
                    1024: { slidesPerView: 9 },
                  }}
                >
                  {currentLogos.map((src, i) => (
                    <SwiperSlide
                      key={i}
                      className=" flex justify-center items-center"
                    >
                      <div className="relative w-full h-[74px] rounded-xl hover:scale-105 transition-transform duration-300 flex items-center justify-center">
                        <Image
                          src={src}
                          alt={`Logo ${i}`}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
