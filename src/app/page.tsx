// app/page.js (or app/home/page.js depending on your routing structure)

export const metadata = {
  title: 'Laser Web Maker',
  description: 'Welcome to Your Company. We offer top-notch services across industries with expert teams and cutting-edge technology.',
  keywords: ['your company', 'nextjs', 'services', 'industries', 'technology'],
  openGraph: {
    title: 'Home | Your Company Name',
    description: 'We provide top-tier solutions and services tailored to industry needs.',
    url: 'https://yourdomain.com', // replace with your actual domain
    siteName: 'Your Company Name',
    images: [
      {
        url: 'https://yourdomain.com/og-image.jpg', // optional Open Graph image
        width: 1200,
        height: 630,
        alt: 'Your Company Overview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Home | Your Company Name',
    description: 'Explore premium services and expertise.',
    images: ['https://yourdomain.com/twitter-image.jpg'], // optional
  },
};

import Header from "@/components/Header";
import HomeComponent from "@/components/Home";
import About_section from "@/components/About_section";
import Services_faqs from "@/components/Services_faqs";
import Serving_Industries from "@/components/Serving_Industries";
import Testimonials from "@/components/Testimonials";
import Our_Process from "@/components/Our_Process";
import ClientFeedback from "@/components/ClientFeedback";
import OurPatners from "@/components/OurPatners";
import TechnologyTabs from "@/components/TechnologyTabs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <HomeComponent />
      <About_section />
      <Services_faqs />
      <Serving_Industries />
      <Testimonials />
      <Our_Process />
      <ClientFeedback />
      <OurPatners />
      <TechnologyTabs />
      <Footer />
    </>
  );
}
