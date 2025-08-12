// imports
import servicesData from '@/lib/servicesData';
import Header from '@/components/Header';
import Testimonials from '@/components/Testimonials';
import ServicesFaqs from '@/components/Services_faqs';
import Footer from '@/components/Footer';

// metadata function
export async function generateMetadata({ params }) {
  // await params itself, it's required by Next.js
  const awaitedParams = await params;

  const service = servicesData[awaitedParams.slug];

  if (!service) {
    return {
      title: 'Service Not Found | Your Company',
      description: 'This service page does not exist.',
    };
  }

  return {
    title: `${service.title} | Your Company`,
    description: service.description,
  };
}




// 🟢 👇👇👇 Only ONE default export
export default async function ServicePage({ params }) {
  // await params before usage
  const awaitedParams = await params;
  const service = servicesData[awaitedParams.slug];

  if (!service) {
    return <h1>404 - Service Not Found</h1>;
  }

  return (
    <>
      <Header />
      <main>
        <section className="py-10">
          <div className="container">
            <h1 className="text-4xl font-bold mb-4">{service.title}</h1>
            <p className="text-lg">{service.content}</p>
          </div>
        </section>

        <ServicesFaqs />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}

