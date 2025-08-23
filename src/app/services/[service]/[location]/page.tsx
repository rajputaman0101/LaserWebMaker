// app/[service]/[location]/page.tsx

import { notFound } from "next/navigation";
import { services, ServiceData, LocationData } from "../../../data/services";
import Header from "@/components/Header";

interface PageProps {
  params: {
    service: string;
    location: string;
  };
}

// ✅ Dynamic Meta Data for Each Service + Location
export async function generateMetadata({ params }: PageProps) {
  const { service, location } = params;
  const serviceData: ServiceData | undefined =
    services[service as keyof typeof services];
  const locationData: LocationData | undefined = serviceData?.locations[location];

  if (!locationData) {
    return {
      title: "Our Services - Company Name",
      description:
        "Explore our professional services across multiple locations. Find tailored solutions for your needs.",
    };
  }

  return {
    title: locationData.title,
    description: locationData.description,
  };
}

// ✅ Generate All Static Paths
export async function generateStaticParams() {
  const paths: PageProps["params"][] = [];

  Object.keys(services).forEach((service) => {
    const serviceData = services[service as keyof typeof services];
    Object.keys(serviceData.locations).forEach((location) => {
      paths.push({ service, location });
    });
  });

  return paths;
}

// ✅ Actual Page Rendering
export default function ServiceLocationPage({ params }: PageProps) {
  const { service, location } = params;
  const serviceData: ServiceData | undefined =
    services[service as keyof typeof services];
  const locationData: LocationData | undefined = serviceData?.locations[location];

  if (!serviceData || !locationData) {
    notFound();
  }

  return (
    <>
    <Header/>
    <div className="p-8 max-w-4xl mx-auto">
      {/* Title & Description */}
      <h1 className="text-3xl font-bold text-gray-900">{locationData?.title}</h1>
      <p className="mt-4 text-gray-700">{locationData?.description}</p>

      {/* Why Choose Us Section */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900">
          Why Choose Us for {serviceData?.name} in{" "}
          {location.charAt(0).toUpperCase() + location.slice(1)}
        </h2>
        <p className="mt-3 text-gray-700">
          We provide expert {serviceData?.name.toLowerCase()} services tailored
          for businesses in {location}. Our team ensures SEO-friendly,
          scalable, and reliable solutions designed to grow your online
          presence and meet your unique business goals.
        </p>
      </section>

      {/* Extra CTA */}
      <section className="mt-10 bg-gray-100 p-6 rounded-xl shadow">
        <h3 className="text-xl font-semibold">
          Get {serviceData?.name} in {location} Today
        </h3>
        <p className="mt-2 text-gray-600">
          Contact our specialists to get started with premium{" "}
          {serviceData?.name.toLowerCase()} services in{" "}
          {location.charAt(0).toUpperCase() + location.slice(1)}.
        </p>
        <button className="mt-4 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Get a Free Quote
        </button>
      </section>
    </div>
    </>
  );
}
