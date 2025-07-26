// import Image from "next/image";
// import About from "./About";
import Header from "@/components/Header";
import HomeComponent from "@/components/Home";

import About_section from "@/components/About_section";
import Services_faqs from "@/components/Services_faqs";
import Serving_Industries from "@/components/Serving_Industries";
import Testimonials from "@/components/Testimonials";


export default function Home() {
  return (
    <>
    <Header/>
    <HomeComponent/>
 
    <About_section />
    <Services_faqs />
    <Serving_Industries/>
    <Testimonials/>

   {/* <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1> */}
    {/* <About/> */}
    
    </>
  );
}
