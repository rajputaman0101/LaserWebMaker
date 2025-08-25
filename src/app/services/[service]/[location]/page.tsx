export default function ServiceLocationPage({
  params,
}: {
  params: { service: string; location: string };
}) {
  const { service, location } = params;

  return (
    <div>
      <h1>
        {service} Services in {location}
      </h1>
      <p>
        Welcome to our {service} services page for {location}. We provide top-notch services tailored to your needs.
      </p>
    </div>
  );
}