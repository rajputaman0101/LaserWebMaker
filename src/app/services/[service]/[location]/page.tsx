import { notFound } from "next/navigation";
import { services, ServiceData, LocationData } from "../../../data/services";

// --- SEO Metadata Generate ---
export async function generateMetadata({
  params,
}: {
  params: { service: string; location: string };
}) {
  const { service, location } = params;
  const serviceData: ServiceData | undefined = services[service];
  const locationData: LocationData | undefined = serviceData?.locations[location];

  if (!locationData) {
    return {
      title: "Our Services",
      description: "Explore our professional services across multiple locations.",
      keywords: ["services", "business solutions", "web services"],
    };
  }

  return {
    title: locationData.metaTitle,
    description: locationData.metaDescription,
    keywords: locationData.keywords,
  };
}

// --- Static Params for All Service + Locations ---
export async function generateStaticParams(): Promise<
  { service: string; location: string }[]
> {
  const paths: { service: string; location: string }[] = [];

  Object.keys(services).forEach((service) => {
    const serviceData = services[service];
    Object.keys(serviceData.locations).forEach((location) => {
      paths.push({ service, location });
    });
  });

  return paths;
}

// --- Page Props Type ---
interface ServiceLocationPageProps {
  params: {
    service: string;
    location: string;
  };
}

// --- Page Component ---
export default function ServiceLocationPage({ params }: ServiceLocationPageProps) {
  const { service, location } = params;
  const serviceData: ServiceData | undefined = services[service];
  const locationData: LocationData | undefined = serviceData?.locations[location];

  if (!serviceData || !locationData) {
    notFound();
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">{locationData?.title}</h1>
      <p className="mt-4">{locationData?.description}</p>

      <section className="mt-6">
        <h2 className="text-2xl font-semibold">
          Why Choose Us for {serviceData?.name} in{" "}
          {location.charAt(0).toUpperCase() + location.slice(1)}
        </h2>
        <p>
          We provide expert {serviceData?.name.toLowerCase()} services tailored
          for businesses in {location}. Our solutions are SEO-friendly,
          scalable, and designed to grow your online presence.
        </p>
      </section>
    </div>
  );
}
