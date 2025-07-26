import React from "react";

export default function Testimonials() {
  return (
    <div className="container-width bg-white px-[15px] md:px-15 py-10 ">
      <h2 className="text-center text-[48px] leading-[120%] font-normal text-black pb-10">
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
          <img src="/images/home_img/svg-logo/goodfirms.svg" alt="Goodfirms" />
        </div>
        <div className="logo flex justify-center">
          <img src="/images/home_img/svg-logo/trustpilot.svg" alt="Trustpilot" />
        </div>
      </div>
            <div className="items-center flex rounded-lg overflow-hidden justify-center">
              <div className=" bottom-4 left-6 flex items-end gap-3">
                <h2 className="text-white text-[32px] font-bold font-[Noto_Sans_HK] leading-[38px]">
                  4.9
                </h2>
                <h5 className="text-white text-[12px] font-normal leading-[16px]">
                  393 Review
                </h5>
              </div>
            </div>
          </div>
          
            <a
              href="/serving-industries"
              className=" px-[16px] py-3 text-[#057BC1] text-[20px] font-[Red_Hat_Display]  rounded leading-[150%] bg-[#fff] hover:bg-[#057BC1] hover:text-[#fff] transition-all duration-300 font-semibold text-center"
            >
              View All
            </a>
        
        </div>
      </div>
    </div>
  );
}
