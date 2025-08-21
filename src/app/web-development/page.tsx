// app/website-development/page.jsx

import React from "react";
import Header from "@/components/Header";
import Link from "next/link";

export const metadata = {
  title: "Website Development | YourCompany",
  description: "Professional Website Development services for your business.",
};

export default function WebsiteDevelopment() {
  return (
    <>
      <Header />

      <div className="container-width pt-[60px] md:pt-[120px] pb-[60px]">
        <div className="px-[15px] w-full md:max-w-[80%] outer-box flex flex-col justify-center gap[42px] items-center mx-auto">
          <div className="flex flex-col gap-4 justify-center items-center">
            <div className="border border-[#D0D0D1] px-4 py-2 rounded-[99px] text-center">
              <p>Top Website Development Company in Noida</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-[30px] leading-[100%] md:leading-[100%] md:text-[88px] text-center text-[#212121] font-bold font-[--font-noto-sans-hk]">
                Website Development Company
              </h1>
            </div>
            <div>
              <p className="leading-[140%]">
                #Most Trusted Web Development Company INDIA
              </p>
            </div>
          </div>
          <div> <Link
        // key={i}
        href="/contact-us"
        
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 text-[#589CD5] text-[16px] leading-[150%] rounded-[99px] border border-[#589CD5] hover:bg-[#589CD5] hover:text-white transition-all inline-block"
      >
       Get a Quoto
      </Link></div>
        </div>
      </div>

      {/* <main className="px-6 py-12 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-blue-700 mb-6">
        Website Development
      </h1>

      <p className="text-gray-700 text-lg mb-4">
        We offer professional website development services tailored to your business needs.
      </p>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Our Services Include:</h2>
        <ul className="list-disc list-inside text-gray-800">
          <li>Custom Website Development</li>
          <li>Responsive Design</li>
          <li>E-commerce Solutions</li>
          <li>Content Management Systems</li>
          <li>Website Maintenance</li>
        </ul>
      </section>

      <div className="mt-8">
     <Link
  href="/contact"
  className="inline-block bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
>
  Contact Us
</Link>

      </div>
    </main> */}
    </>
  );
}
