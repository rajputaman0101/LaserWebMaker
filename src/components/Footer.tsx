import React from "react";
import Image from "next/image";
import { Download } from "lucide-react";
const currentYear: number = new Date().getFullYear();
interface FooterSection {
  heading: string;
  links: string[];
}

const footerSections: FooterSection[] = Array.from({ length: 8 }, () => ({
  heading: "Heading",
  links: Array.from({ length: 8 }, () => "Link name"),
}));

export default function Footer() {
  return (
    <div className="bg-[#000000]">
      <div className="container-width mx-auto  md:px-[60px] py-20">
        <div className="flex flex-col gap-10">
          <div className="footer-location relative md:h-[250px] h-full">
            {/* Desktop Map Image (hidden on mobile) */}
            <div className="absolute inset-0 items-center justify-center pointer-events-none z-10 flex   md:flex">
              <Image
                src="/images/footer/map.png"
                alt="Map Desktop"
                width={992}
                height={250}
                priority
                className="object-contain w-[992px] h-[250px]"
              />
            </div>

            {/* Mobile Map Image (visible only on mobile) */}
            <div className="absolute inset-0 items-center justify-center pointer-events-none z-10 md:hidden">
              <Image
                src="/images/footer/footer-phone-map.png"
                alt="Map Mobile"
                width={400}
                height={250}
                priority
                className="object-contain"
              />
            </div>

            <div className="inner-location-section z-10 relative flex flex-wrap flex-col lg:flex-row md:gap-30 gap-[16px] ">
              {/* Location Blocks */}
              {[
                {
                  country: "India",
                  flag: "/images/icons/twemoji_flag-india.svg",
                },
                {
                  country: "Malaysia",
                  flag: "/images/icons/twemoji_flag-malaysia.svg",
                },
                {
                  country: "Saudi Arabia",
                  flag: "/images/icons/emojione-v1_flag-for-saudi-arabia.svg",
                },
              ].map((loc, idx) => (
                <div key={idx} className="flex">
                  <div className="border-l border-white/10 bg-[#5098D6]/50 rounded-[3px] h-auto mr-[30px] "></div>
                  <div className="first-location inline-grid gap-[14px] h-[132px] w-[295px] md:w-[370px] xl:w-[295px]">
                    <div className="flex items-center gap-3">
                      <div>
                        <Image
                          src={loc.flag}
                          alt={loc.country}
                          width={50}
                          height={50}
                        />
                      </div>
                      <h4 className="text-[20px] text-white/90 leading-[150%] font-medium">
                        {loc.country}
                      </h4>
                    </div>
                    <div className="contact-details inline-grid gap-3">
                      <div className="gap-[6px] flex items-start">
                        <Image
                          src="/images/home_img/svg-logo/phone.svg"
                          alt="phone"
                          width={20}
                          height={20}
                        />
                        <p className="text-[12px] leading-[150%] font-light text-white/90">
                          +91-1203202969
                        </p>
                        <p className="text-[12px] leading-[150%] font-light text-white/90">
                          ,
                        </p>
                        <p className="text-[12px] leading-[150%] font-light text-white/90">
                          7291934043
                        </p>
                      </div>
                      <div className="gap-[6px] flex items-start">
                        <Image
                          src="/images/home_img/svg-logo/location.svg"
                          alt="location"
                          width={20}
                          height={20}
                        />
                        <p className="text-[12px] leading-[150%] font-light text-white/90">
                          Office No 623, Noida One Building, Sector 62, Noida
                          UP-201309
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-[80px] px-[15px]">
            <div className="footer-content flex flex-col md:flex-row gap-y-[30px] md:gap-x-[120px] items-start">
              <div>
                <span className="text-white/90 text-[13px]">
                  Laser Web Maker has well qualified and experienced team to
                  build most creative &amp; attractive websites. We have
                  different plans that can fit in your budgets easily. We deal
                  in Website Designing, Website Development, E-Commerce Website,
                  Logo Designing, Template Designing, CMS Development, Catalog
                  Designing, etc. Building long-term relationships with our
                  clients is Laser Web Maker&apos;s No.1 priority.
                </span>
                <br />
                <span className="text-white/80 text-[13px]">
                  Laser Web Maker has well qualified and experienced team to
                  build most creative &amp; attractive websites. We have
                  different plans that can fit in your budgets easily. We deal
                  in Website Designing, Website Development, E-Commerce Website,
                  Logo Designing, Template Designing, CMS Development, Catalog
                  Designing, etc. Building long-term relationships with our
                  clients is Laser Web Maker&apos;s No.1 priority. 95% of our
                  customers return to us with new projects because they enjoy
                  the quality of the websites that we create.
                </span>
              </div>
              <a
                href="/serving-industries"
                className="group px-[16px] py-3 w-full text-white/90 text-[16px] md:text-[20px] border rounded leading-[26px] bg-[#5E9ED5] hover:bg-transparent hover:text-[#5E9ED5] hover:border-[#5E9ED5] transition-all duration-500 font-semibold text-center flex justify-center"
              >
                <span className="flex gap-[10px] items-center">
                  <span>Download Brochure</span>
                  <Download
                    className="text-white group-hover:text-[#5E9ED5] transition-all duration-500 transform group-hover:translate-y-1"
                    size={24}
                  />
                </span>
              </a>
            </div>

            <div className="linkes grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-[40px] md:gap-[80px]">
              {footerSections.map((section, i) => (
                <ul key={i} className="gap-3 flex flex-col">
                  {section.links.map((link, j) => (
                    <li
                      key={j}
                      className="text-[13px] text-white/90 leading-[150%] font-light"
                    >
                      {link}
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>

          <div className="flex py-[20px] border-t border-t-[#FFFFFF]/50 px-[15px]">
            <div className="flex flex-col md:flex-row justify-between w-full gap-10">
              <div className="w-full md:w-1/2 order-2 md:order-1 flex flex-col gap-4 md:gap-[30px]">
                <h5 className="text-white text-[15px] font-semibold leading-[150%]">
                  &copy; {currentYear} Laser Web Maker
                </h5>
                <div className="flex gap-4 md:gap-[40px] items-start md:items-end">
                  <div className="flex flex-col md:gap-1 gap-4">
                    <div>
                      <p className="text-white">All Rights Reserved</p>
                    </div>
                    <div className="flex gap-[14px] md:gap-[80px]">
                      <p className="text-white">Terms of Use</p>
                      <span className="flex md:gap-[40px] gap-[14px]">
                        <p className="text-white">Privacy Policy</p>
                        <p className="text-white">Return Policy</p>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/2 order-1 md:order-2 flex flex-col items-start md:items-end gap-5 md:gap-[40px]">
                <div className="order-2 md:order-1">
                  <ul className="flex flex-wrap justify-end gap-6 md:gap-10">
                    <li className="text-white text-[15px] font-semibold">
                      Facebook
                    </li>
                    <li className="text-white text-[15px] font-semibold">
                      Instagram
                    </li>
                    <li className="text-white text-[15px] font-semibold">
                      Twitter
                    </li>
                    <li className="text-white text-[15px] font-semibold">
                      Google +
                    </li>
                  </ul>
                </div>

                <div className="order-1 md:order-2">
                  <Image
                    src="/images/home_img/svg-logo/site-logo.svg"
                    alt="Logo"
                    width={247}
                    height={43}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
