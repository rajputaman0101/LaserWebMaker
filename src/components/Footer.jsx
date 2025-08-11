import React from "react";
import Image from "next/image";
import { Download } from "lucide-react";
const footerSections = Array(8).fill({
  heading: "Heading",
  links: Array(8).fill("Link name"),
});
export default function Footer() {
  return (
    <div className=" bg-[#000000] ">
      <div className="container-width mx-auto px-[15px] md:px-15 py-20 ">
        <div className="flex flex-col gap-10 ">
          <div className="footer-location relative md:h-[250px] h-full">
            <div className="absolute inset-0 flex items-center z-20 justify-center pointer-events-none  ">
              <Image
                src="/images/footer/map.png" // replace with your image path
                alt="Center Decoration"
                width={992}
                height={250}
                objectFit="contain"
                className="opacity-100"
              />
            </div>
            <div className="inner-location-section flex flex-wrap flex-col lg:flex-row md:gap-30 gap-[16px] bg_footer">
              {/* First Location */}
              <div className=" flex">
                <div className="border-l border-white/10 bg-[#5098D6]/50 rounded-[3px] h-auto mr-[30px]"></div>
                <div className="first-location inline-grid gap-[14px] h-[132px] w-[295px] md:w-[370px] xl:w-[295px]">
                  <div className="flex items-center gap-3">
                    <div>
                      <Image
                        src="/images/icons/twemoji_flag-india.svg"
                        alt="India"
                        width={50}
                        height={50}
                        priority
                      />
                    </div>
                    <h4 className="text-[20px] text-white/90 leading-[150%] font-medium">
                      India
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
                    <div className="gap-[6px] flex items-start ">
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

              {/* Repeat the same pattern for other locations */}
              <div className="flex">
                <div className="border-l border-white/10 bg-[#5098D6]/50 rounded-[3px]  h-auto mr-[30px]"></div>

                <div className="first-location inline-grid gap-[14px] h-[132px] w-[295px] md:w-[370px] xl:w-[295px]">
                  <div className="flex items-center gap-3">
                    <div>
                      <Image
                        src="/images/icons/twemoji_flag-malaysia.svg"
                        alt="India"
                        width={50}
                        height={50}
                        priority
                      />
                    </div>
                    <h4 className="text-[20px] text-white/90 leading-[150%] font-medium">
                      Malaysia
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
                    <div className="gap-[6px] flex items-start ">
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

              <div className="flex">
                <div className="border-l border-white/10 bg-[#5098D6]/50 rounded-[3px]  h-auto mr-[30px]"></div>
                <div className="first-location inline-grid gap-[14px] h-[132px] w-[295px] md:w-[370px] xl:w-[295px]">
                  <div className="flex items-center gap-3">
                    <div>
                      <Image
                        src="/images/icons/emojione-v1_flag-for-saudi-arabia.svg"
                        alt="India"
                        width={50}
                        height={50}
                        priority
                      />
                    </div>
                    <h4 className="text-[20px] text-white/90 leading-[150%] font-medium">
                      Saudi Arabia
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
                    <div className="gap-[6px] flex items-start ">
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
            </div>
          </div>

          <div className="flex flex-col gap-[80px]">
            <div className="footer-content flex flex-col md:flex-row gap-y-[30px] md:gap-x-[120px] items-start">
              <div>
                <p className="text-white/90 text-[12px] leading-[150%]">
                  Lаѕеr Web Mаkеr іѕ аn іnduѕtrу lеаdеr іn рrоfеѕѕіоnаl wеbѕіtе
                  dеѕіgn, ѕtrаtеgу, dеvеlорmеnt, аnd hosting. Wе’rе trulу a
                  оnе-ѕtор ѕhор оffеrіng a full rаngе оf ѕоlutіоnѕ for anyone
                  lооkіng tо ѕuссееd in thеіr оnlіnе еndеаvоrѕ. Laser Web Maker
                  рrіvаtеlу hеld соmраnу wіth a lоng hіѕtоrу of рrоfіtаbіlіtу
                  аnd ѕtаbіlіtу.
                </p>
                <p className="text-white/80 text-[15px] leading-[150%]">
                  Laser Web Maker has well qualified and experienced team to
                  build most creative & attractive websites.We have different
                  different plan that can fit in your budgets easily. We deals
                  in Website Designing, Website Development, E-Commerce Website,
                  Logo Designing, Template Designing, CMS Development, Catalog
                  Designing, etc. Building long-term relationships with our
                  clients is Laser Web Maker’s No.1 priority. 95% of our
                  customers return to us with new projects because they enjoy
                  the quality of the websites that we create .
                </p>
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

            {/* 
          
          this is the right way 

  <div className="linkes grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[80px]">
              <div className=" text-white gap-5 flex-col flex">
                <h5 className="text-[16px] text-white/90 leading-[150%]">Heading</h5>
                <ul className="gap-3 flex flex-col">
                  <li className="text-[12px] text-white/90 leading-[150%] font-light">Link name</li>
                  <li className="text-[12px] text-white/90 leading-[150%] font-light">Link name</li>
                  <li className="text-[12px] text-white/90 leading-[150%] font-light">Link name</li>
                  <li className="text-[12px] text-white/90 leading-[150%] font-light">Link name</li>
                  <li className="text-[12px] text-white/90 leading-[150%] font-light">Link name</li>
                    <li className="text-[12px] text-white/90 leading-[150%] font-light">Link name</li>
                  <li className="text-[12px] text-white/90 leading-[150%] font-light">Link name</li>
                  <li className="text-[12px] text-white/90 leading-[150%] font-light">Link name</li>
                
                </ul>
              </div>
                  <div className=" text-white gap-5 flex-col flex">
                <h5 className="text-[16px] text-white/90 leading-[150%]">Heading</h5>
                <ul className="gap-3 flex flex-col">
                  <li className="text-[12px] text-white/90 leading-[150%] font-light">Link name</li>
                  <li className="text-[12px] text-white/90 leading-[150%] font-light">Link name</li>
                  <li className="text-[12px] text-white/90 leading-[150%] font-light">Link name</li>
                  <li className="text-[12px] text-white/90 leading-[150%] font-light">Link name</li>
                  <li className="text-[12px] text-white/90 leading-[150%] font-light">Link name</li>
                    <li className="text-[12px] text-white/90 leading-[150%] font-light">Link name</li>
                  <li className="text-[12px] text-white/90 leading-[150%] font-light">Link name</li>
                  <li className="text-[12px] text-white/90 leading-[150%] font-light">Link name</li>
                
                </ul>
              </div>
                  <div className=" text-white gap-5 flex-col flex">
                <h5 className="text-[16px] text-white/90 leading-[150%]">Heading</h5>
                <ul className="gap-3 flex flex-col">
                  <li className="text-[12px] text-white/90 leading-[150%] font-light">Link name</li>
                  <li className="text-[12px] text-white/90 leading-[150%] font-light">Link name</li>
                  <li className="text-[12px] text-white/90 leading-[150%] font-light">Link name</li>
                  <li className="text-[12px] text-white/90 leading-[150%] font-light">Link name</li>
                  <li className="text-[12px] text-white/90 leading-[150%] font-light">Link name</li>
                    <li className="text-[12px] text-white/90 leading-[150%] font-light">Link name</li>
                  <li className="text-[12px] text-white/90 leading-[150%] font-light">Link name</li>
                  <li className="text-[12px] text-white/90 leading-[150%] font-light">Link name</li>
                
                </ul>
              </div>
                  <div className=" text-white gap-5 flex-col flex">
                <h5 className="text-[16px] text-white/90 leading-[150%]">Heading</h5>
                <ul className="gap-3 flex flex-col">
                  <li className="text-[12px] text-white/90 leading-[150%] font-light">Link name</li>
                  <li className="text-[12px] text-white/90 leading-[150%] font-light">Link name</li>
                  <li className="text-[12px] text-white/90 leading-[150%] font-light">Link name</li>
                  <li className="text-[12px] text-white/90 leading-[150%] font-light">Link name</li>
                  <li className="text-[12px] text-white/90 leading-[150%] font-light">Link name</li>
                    <li className="text-[12px] text-white/90 leading-[150%] font-light">Link name</li>
                  <li className="text-[12px] text-white/90 leading-[150%] font-light">Link name</li>
                  <li className="text-[12px] text-white/90 leading-[150%] font-light">Link name</li>
                
                </ul>
              </div>
              
            </div>
            <div className="linkes grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[80px]">
              <div className=" text-white gap-5 flex-col flex">
                <h5 className="text-[16px] text-white/90 leading-[150%]">Heading</h5>
                <ul className="gap-3 flex flex-col">
                  <li className="text-[12px] text-white/90 leading-[150%] font-light">Link name</li>
                  <li className="text-[12px] text-white/90 leading-[150%] font-light">Link name</li>
                  <li className="text-[12px] text-white/90 leading-[150%] font-light">Link name</li>
                  <li className="text-[12px] text-white/90 leading-[150%] font-light">Link name</li>
                  <li className="text-[12px] text-white/90 leading-[150%] font-light">Link name</li>
                    <li className="text-[12px] text-white/90 leading-[150%] font-light">Link name</li>
                  <li className="text-[12px] text-white/90 leading-[150%] font-light">Link name</li>
                  <li className="text-[12px] text-white/90 leading-[150%] font-light">Link name</li>
                
                </ul>
              </div>
                  <div className=" text-white gap-5 flex-col flex">
                <h5 className="text-[16px] text-white/90 leading-[150%]">Heading</h5>
                <ul className="gap-3 flex flex-col">
                  <li className="text-[12px] text-white/90 leading-[150%] font-light">Link name</li>
                  <li className="text-[12px] text-white/90 leading-[150%] font-light">Link name</li>
                  <li className="text-[12px] text-white/90 leading-[150%] font-light">Link name</li>
                  <li className="text-[12px] text-white/90 leading-[150%] font-light">Link name</li>
                  <li className="text-[12px] text-white/90 leading-[150%] font-light">Link name</li>
                    <li className="text-[12px] text-white/90 leading-[150%] font-light">Link name</li>
                  <li className="text-[12px] text-white/90 leading-[150%] font-light">Link name</li>
                  <li className="text-[12px] text-white/90 leading-[150%] font-light">Link name</li>
                
                </ul>
              </div>
                  <div className=" text-white gap-5 flex-col flex">
                <h5 className="text-[16px] text-white/90 leading-[150%]">Heading</h5>
                <ul className="gap-3 flex flex-col">
                  <li className="text-[12px] text-white/90 leading-[150%] font-light">Link name</li>
                  <li className="text-[12px] text-white/90 leading-[150%] font-light">Link name</li>
                  <li className="text-[12px] text-white/90 leading-[150%] font-light">Link name</li>
                  <li className="text-[12px] text-white/90 leading-[150%] font-light">Link name</li>
                  <li className="text-[12px] text-white/90 leading-[150%] font-light">Link name</li>
                    <li className="text-[12px] text-white/90 leading-[150%] font-light">Link name</li>
                  <li className="text-[12px] text-white/90 leading-[150%] font-light">Link name</li>
                  <li className="text-[12px] text-white/90 leading-[150%] font-light">Link name</li>
                
                </ul>
              </div>
                  <div className=" text-white gap-5 flex-col flex">
                <h5 className="text-[16px] text-white/90 leading-[150%]">Heading</h5>
                <ul className="gap-3 flex flex-col">
                  <li className="text-[12px] text-white/90 leading-[150%] font-light">Link name</li>
                  <li className="text-[12px] text-white/90 leading-[150%] font-light">Link name</li>
                  <li className="text-[12px] text-white/90 leading-[150%] font-light">Link name</li>
                  <li className="text-[12px] text-white/90 leading-[150%] font-light">Link name</li>
                  <li className="text-[12px] text-white/90 leading-[150%] font-light">Link name</li>
                  <li className="text-[12px] text-white/90 leading-[150%] font-light">Link name</li>
                  <li className="text-[12px] text-white/90 leading-[150%] font-light">Link name</li>
                  <li className="text-[12px] text-white/90 leading-[150%] font-light">Link name</li>
                
                </ul>
              </div>
              
            </div>
          
          
          
          */}
            <div className="linkes grid grid-cols-3 sm:grid-cols-2  lg:grid-cols-4 gap-[40px]  md:gap-[80px]">
              {footerSections.map((section, i) => (
                <div key={i} className="text-white gap-5 flex-col flex ">
                  <h5 className="text-[16px] text-white leading-[150%] ">
                    {section.heading}
                  </h5>
                  <ul className="gap-3 flex flex-col">
                    {section.links.map((link, j) => (
                      <li
                        key={j}
                        className="text-[13px] text-white/90 leading-[150%] font-light"
                      >
                        {link}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="flex py-[20px] border-t  border-t-[#FFFFFF]/50">
          <div className="flex flex-col md:flex-row justify-between w-full  gap-10">
  {/* Left Side */}
  <div className="w-full md:w-1/2 order-2 md:order-1 flex flex-col  gap-4  md:gap-[30px]">
    <h5 className="text-white text-[15px] font-semibold leading-[150%]">
      &copy; 2025 Laser Web Maker
    </h5>
    <div className="flex  gap-4  md:gap-[40px] items-start md:items-end ">
      <div className="flex flex-col md:gap-1 gap-4">
<div>        <p className="text-white">All Right Reserved</p></div>
       <div className="flex gap-[14px] md:gap-[80px]" >
         <p className="text-white">Terms of Use</p>
      <span className="flex md:gap-[40px] gap-[14px]">
        <p className="text-white">Privacy Policy</p>
      <p className="text-white">Return Policy</p>
      </span>
      
      </div>
      </div>
      
    </div>
  </div>

  {/* Right Side */}
  <div className="w-full md:w-1/2 order-1 md:order-2 flex flex-col items-start md:items-end gap-5 md:gap-[40px]">
    {/* Social Links */}
    <div className="order-2 md:order-1">
      <ul className="flex flex-wrap justify-end gap-6 md:gap-10">
        <li className="text-white text-[15px] font-semibold">Facebook</li>
        <li className="text-white text-[15px] font-semibold">Instagram</li>
        <li className="text-white text-[15px] font-semibold">Twitter</li>
        <li className="text-white text-[15px] font-semibold">Google +</li>
      </ul>
    </div>

    {/* Logo */}
    <div className="order-1 md:order-2  ">
      <Image
        src="/images/home_img/svg-logo/site-logo.svg"
        alt="Logo"
        width={247}
        height={43}
        priority
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
