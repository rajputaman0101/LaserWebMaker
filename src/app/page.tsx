// import Image from "next/image";
// import About from "./About";
import About_section from "@/components/About_section";
import Header from "@/components/Header";
import HomeComponent from "@/components/Home";
import Services_faqs from "@/components/Services_faqs";

export default function Home() {
  return (
    <>
    <Header/>
    <HomeComponent/>
    <About_section />
    <Services_faqs />
   {/* <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1> */}
    {/* <About/> */}
    
    </>
  );
}
