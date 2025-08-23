// /data/services.ts

export interface LocationData {
  title: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
}

export interface ServiceData {
  name: string;
  locations: {
    [key: string]: LocationData;
  };
}

export const services: Record<string, ServiceData> = {
  "web-development": {
    name: "Web Development",
    locations: {
      delhi: {
        title: "Web Development in Delhi",
        description:
          "We provide cutting-edge web development services in Delhi to help businesses establish a strong online presence.",
        metaTitle: "Web Development Company in Delhi | Professional Website Solutions",
        metaDescription:
          "Looking for the best web development company in Delhi? We create responsive, secure, and scalable websites for startups and enterprises.",
        keywords: ["web development Delhi", "website design Delhi", "Delhi web solutions"],
      },
      mumbai: {
        title: "Web Development in Mumbai",
        description:
          "Our Mumbai team delivers responsive and scalable web development solutions tailored for your business.",
        metaTitle: "Web Development Company in Mumbai | Custom Web Solutions",
        metaDescription:
          "Top web development company in Mumbai offering custom website design and development for businesses of all sizes.",
        keywords: ["web development Mumbai", "website design Mumbai", "Mumbai web services"],
      },
      noida: {
        title: "Web Development in Noida",
        description:
          "Our Noida team delivers responsive and scalable web development solutions tailored for your business.",
        metaTitle: "Web Development Services in Noida | Business Website Experts",
        metaDescription:
          "Get professional web development services in Noida. We design secure, scalable, and user-friendly websites.",
        keywords: ["web development Noida", "website design Noida", "Noida web services"],
      },
    },
  },

  "digital-marketing": {
    name: "Digital Marketing",
    locations: {
      bangalore: {
        title: "Digital Marketing in Bangalore",
        description:
          "Boost your brand with our data-driven digital marketing services in Bangalore.",
        metaTitle: "Digital Marketing Agency in Bangalore | SEO & Social Media Experts",
        metaDescription:
          "Best digital marketing company in Bangalore offering SEO, SEM, and social media services to grow your business online.",
        keywords: ["digital marketing Bangalore", "SEO services Bangalore", "Bangalore marketing agency"],
      },
      hyderabad: {
        title: "Digital Marketing in Hyderabad",
        description:
          "We offer SEO, SEM, and social media marketing strategies to businesses in Hyderabad.",
        metaTitle: "Digital Marketing Services in Hyderabad | Online Branding Experts",
        metaDescription:
          "Leading digital marketing agency in Hyderabad providing SEO, SEM, and online branding solutions for businesses.",
        keywords: ["digital marketing Hyderabad", "SEO Hyderabad", "Hyderabad marketing services"],
      },
    },
  },

  "app-development": {
    name: "App Development",
    locations: {
      pune: {
        title: "App Development in Pune",
        description:
          "We specialize in creating high-performance mobile apps for businesses in Pune.",
        metaTitle: "Mobile App Development Company in Pune | iOS & Android Experts",
        metaDescription:
          "Top app development company in Pune delivering high-performance Android and iOS mobile applications.",
        keywords: ["app development Pune", "mobile apps Pune", "Pune app company"],
      },
      chennai: {
        title: "App Development in Chennai",
        description:
          "Our Chennai team delivers innovative app development solutions for Android and iOS.",
        metaTitle: "App Development Services in Chennai | Custom Mobile Apps",
        metaDescription:
          "Professional mobile app development in Chennai. We build scalable and secure apps for startups and enterprises.",
        keywords: ["app development Chennai", "mobile apps Chennai", "Chennai app development"],
      },
    },
  },
};
