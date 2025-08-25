// app/website-development/page.jsx

"use client";

import React from "react";
import { useState } from "react";
import Header from "@/components/Header";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const cards = [
  {
    icon: "/images/home_img/svg-logo/real-estate.svg",
    title: "Real Estate and Property",
    image: "/images/web-dev/web-dev-slider-1.jpg",
    link: "/industries/real-estate",
  },
  {
    icon: "/images/home_img/svg-logo/travel.svg",
    title: "Travel",
    image: "/images/web-dev/web-dev-slider-2.jpg",
    link: "/industries/travel",
  },
  {
    icon: "/images/home_img/svg-logo/healthcare.svg",
    title: "Healthcare",
    image: "/images/web-dev/web-dev-slider-1.jpg",
    link: "/industries/healthcare",
  },
  {
    icon: "/images/home_img/svg-logo/healthcare.svg",
    title: "Healthcare",
    image: "/images/web-dev/web-dev-slider-2.jpg",
    link: "/industries/healthcare",
  },
  {
    icon: "/images/home_img/svg-logo/healthcare.svg",
    title: "Healthcare",
    image: "/images/web-dev/web-dev-slider-1.jpg",
    link: "/industries/healthcare",
  },
];
interface Feature {
  icon: string;
  title: string;
  description: string;
}
const features: Feature[] = [
  {
    icon: "/images/web-dev/responsive-design.svg",
    title: "Responsive Design",
    description:
      "We build websites that adapt seamlessly to all devices—desktop, tablet, and mobile—ensuring a smooth user experience everywhere.",
  },
  {
    icon: "/images/web-dev/responsive-design.svg",
    title: "High Performance",
    description:
      "Our team focuses on speed and performance optimization so your website loads quickly and keeps visitors engaged.",
  },
  {
    icon: "/images/web-dev/responsive-design.svg",
    title: "User-Friendly Navigation",
    description:
      "We create clear, intuitive navigation structures that make it easy for users to find what they need without frustration.",
  },
  {
    icon: "/images/web-dev/responsive-design.svg",
    title: "SEO-Optimized",
    description:
      "Every website we develop is designed with SEO best practices, helping your business rank higher on search engines and reach the right audience.",
  },
  {
    icon: "/images/web-dev/responsive-design.svg",
    title: "Secure & Reliable",
    description:
      "Security is our priority. We use advanced protocols like HTTPS and strong coding practices to keep your website safe from threats.",
  },

  {
    icon: "/images/web-dev/responsive-design.svg",
    title: "Scalable Solutions",
    description:
      "Our web solutions are designed to grow with your business, allowing easy upgrades, new features, and integrations in the future.",
  },

  {
    icon: "/images/web-dev/responsive-design.svg",
    title: "Modern & Interactive",
    description:
      "From animations to dynamic features, we ensure your website feels modern and engaging with the latest web technologies.",
  },

  {
    icon: "/images/web-dev/responsive-design.svg",
    title: "Customizable & Easy to Manage",
    description:
      "We provide flexible and CMS-based solutions, making it simple for you to update and manage your content anytime.",
  },
];

const faqs = [
  {
    question: "What types of websites do you develop?",
    answer:
      "At Laser Web Maker, we develop all kinds of websites—corporate sites, e-commerce platforms, portfolio sites, landing pages, and custom web applications—tailored to your business needs. ",
    // image: "/images/services-img/designing-service.png",
  },
  {
    question: "Will my website be mobile-friendly?",
    answer:
      "Yes, every website we create is fully responsive, ensuring it looks and works perfectly on mobiles, tablets, and desktops. ",

    image: "/images/services-img/website-development.png",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "The timeline depends on the complexity of the project. A basic website may take 1–2 weeks, while larger or custom websites can take 4–6 weeks or more.",
    image: "/images/services-img/ecommerce-website.png",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Absolutely! We can revamp your existing website with a modern design, improved functionality, and better performance.",
    image: "/images/services-img/hire-developer.png",
  },
  {
    question: "What about website security?",
    answer:
      "We implement industry-standard security practices, SSL certificates, and protective measures to keep your website safe from cyber threats.",
    image: "/images/services-img/hire-developer.png",
  },
  {
    question: "Do you offer post-launch support and maintenance?",
    answer:
      "Yes, we provide ongoing support and maintenance packages to ensure your website stays updated, secure, and running smoothly.",
    image: "/images/services-img/hire-developer.png",
  },
];

export default function WebsiteDevelopment() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };
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
              className="px-4 py-2 text-[#fff] bg-[#589CD5] text-[16px] leading-[150%] border border-[#589CD5] hover:bg-transparent hover:text-[#589cd5] transition-all inline-block"
            >
              Get a Quote
            </Link>
          </div>
        </div>

        {/* start Slider */}
        <div className="client-portfolio pt-10">
          <Swiper
            spaceBetween={15}
            slidesPerView={1.1}
            breakpoints={{
              640: { slidesPerView: 2.2 },
              768: { slidesPerView: 3.2 },
              1024: { slidesPerView: 3.2 },
            }}
            modules={[Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
          >
            {cards.map((card, index) => (
              <SwiperSlide key={index}>
                <Link href={card.link}>
                  <div className="relative h-[437px]  overflow-hidden">
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

      {/* end the slider  */}

      {/* start about page content */}
      <div className="container-width about-page grid grid-cols-1 md:grid-cols-2 mx-auto px-[15px] md:px-[135px] py-[80px] md:py-[120px] md:gap-[80px] gap-[40px]">
        <div className="img">
          <Image
            src={"/images/web-dev/about-web-dev.jpg"}
            alt="About Web Development"
            width={460}
            height={560}
            className="w-full h-full mx-auto"
          />
        </div>
        <div className="content-about flex  items-center">
          <div>
            <h2 className="mb-[16px] text-[32px] md:text-[40px]">About Us</h2>
            <p className="mb-[16px]">
  Knowing what type of website you need and what the goal of your
  site is will help you determine which web design company will best
  suit your needs. There are many types of websites: e-commerce
  sites, portfolio sites, and informational sites, to name a few.
  Although many web designers and website development companies have
  a wide range of abilities, some designers specialize in specific
  types of sites. Be clear when describing your requirements to your
  potential web design company. You want to be sure they have
  experience in designing the type of site you&apos;re looking for.
</p>

<p>
  At some point, your website will need to be updated. Phone numbers
  change, you may want to update your content, or you&apos;ll need
  to add or remove products and services. Will you be handling the
  updates yourself? Would you rather your designer update your site?
  Letting your designer know your choices upfront will help in
  determining whether you&apos;ll need an easy-to-use content
  management system or a more sophisticated system meant for website
  design pros.
</p>

            <Link
              href="/contact-us"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 mt-[32px] text-[#fff] bg-[#589CD5] text-[16px] leading-[150%] border border-[#589CD5] hover:bg-transparent hover:text-[#589cd5] transition-all inline-block"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
      {/* end about page content */}

      {/* start feature sections */}
      <div className="feature-section container-width mx-auto px-[15px] md:px-[60px] py-20 bg-[#F6F8FB]">
        <h2 className="heading text-center text-[32px] md:text-[40px] mb-[16px]">
          Features of Our Web Development Services
        </h2>

        <div className="boxes-section grid grid-cols-1 md:grid-cols-4 gap-[20px]">
          {features.map((feature, index) => (
            <div
              key={index}
              className="box border border-[#D0D0D1] p-6 flex flex-col gap-3 justify-start items-start transition-all duration-300 hover:bg-[#F8F8F8] hover:shadow-md cursor-pointer"
            >
              <Image
                src={feature.icon}
                alt={feature.title}
                className="text-black"
                width={50}
                height={50}
              />
              <h5 className="text-[15px] font-semibold">{feature.title}</h5>
              <p className="text-[15px] leading-[140%]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* end feature sections */}

      {/* faqs start*/}
      <div className="bg-white container-width mx-auto ">
        <div className=" mx-auto md:px-[60px] py-20 px-[15px]">
          <div className="outer-div  grid grid-flow-row gap-[40px]">
            <div className="heading">
              <h2 className="heading-second text-[40px] font-normal text-center leading-[120%] text-black">
                Frequently Asked Questions (FAQs)
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
                    {/* <div
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
                          </div> */}

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
        </div>
      </div>
      {/* faqs end*/}

      {/* testimonials start */}
      <Testimonials />
      {/* testimonials end */}

      {/* footer start*/}
      <Footer />
      {/* footer end */}
    </>
  );
}
