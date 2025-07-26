import React from "react";
import Link from 'next/link';

const cards = [
  {
    icon: '/images/home_img/svg-logo/real-estate.svg',
    title: 'Real Estate and Property',
    image: '/images/home_img/real-estate-property-img.jpg',
    link: '/industries/real-estate',
  },
  {
    icon: '/images/home_img/svg-logo/travel.svg',
    title: 'Travel',
    image: '/images/home_img/travel-img.jpg',
    link: '/industries/travel',
  },
  {
    icon: '/images/home_img/svg-logo/healthcare.svg',
    title: 'Healthcare',
    image: '/images/home_img/healthcare-img.jpg',
    link: '/industries/healthcare',
  },
  {
    icon: '/images/home_img/svg-logo/education.svg',
    title: 'Education',
    image: '/images/home_img/education-img.jpg',
    link: '/industries/education',
  },
  {
    icon: '/images/home_img/svg-logo/transport.svg',
    title: 'Transport',
    image: '/images/home_img/transport-img.jpg',
    link: '/industries/transport',
  },
  {
    icon: '/images/home_img/svg-logo/ecommerce.svg',
    title: 'E-commerce, Retail and B2B',
    image: '/images/home_img/ecommerce-img.jpg',
    link: '/industries/ecommerce',
  },
  {
    icon: '/images/home_img/svg-logo/gaming.svg',
    title: 'Gaming and Leisure',
    image: '/images/home_img/gaming-img.jpg',
    link: '/industries/gaming',
  },
  {
    icon: '/images/home_img/svg-logo/food.svg',
    title: 'Food and Restaurant',
    image: '/images/home_img/food-restaurant-img.jpg',
    link: '/industries/food',
  },
];


export default function Serving_Industries() {
//   const cards = [
//     {
//       icon: "/images/home_img/svg-logo/real-estate.svg",
//       title: "Real Estate and Property",
//       // desc: 'Streamlining factory operations with automation.',
//       image: "/images/home_img/real-estate-property-img.jpg",
//     },
//     {
//       icon: "/images/home_img/svg-logo/travel.svg",
//       title: "Travel",
//       // desc: 'Enhancing patient care with smart solutions.',
//       image: "/images/home_img/travel-img.jpg",
//     },
//     {
//       icon: "/images/home_img/svg-logo/healthcare.svg",
//       title: "Healthcare",
//       // desc: 'Optimizing shopping experiences with analytics.',
//       image: "/images/home_img/healthcare-img.jpg",
//     },
//     {
//       icon: "/images/home_img/svg-logo/education.svg",
//       title: "Education",
//       // desc: 'Improving delivery systems through data.',
//       image: "/images/home_img/education-img.jpg",
//     },
//     {
//       icon: "/images/home_img/svg-logo/transport.svg",
//       title: "Transport",
//       // desc: 'Innovating learning with digital tools.',
//       image: "/images/home_img/transport-img.jpg",
//     },
//     {
//       icon: "/images/home_img/svg-logo/ecommerce.svg",
//       title: "E-commerce, Retail and B2B",
//       // desc: 'Securing transactions with modern tech.',
//       image: "/images/home_img/ecommerce-img.jpg",
//     },
//     {
//       icon: "/images/home_img/svg-logo/gaming.svg",
//       title: "Gaming and Leisure",
//       // desc: 'Securing transactions with modern tech.',
//       image: "/images/home_img/gaming-img.jpg",
//     },
//     {
//       icon: "/images/home_img/svg-logo/food.svg",
//       title: "Food and Restaurant",
//       // desc: 'Innovating learning with digital tools.',
//       image: "/images/home_img/food-restaurant-img.jpg",
//     },
//   ];

  return (
    <div className="container-width mx-auto py-10 px-[15px] md:px-15 bg-[#F6F8FB]">
      <div className="inner-section">
        <div className="heading flex flex-col md:flex-row justify-between items-center md:items-center gap-4">
          <h2 className="text-[32px] md:text-[48px] font-normal text-black leading-[120%]">
            Serving Industries
          </h2>
          <a
            href="/serving-industries"
            className="hidden md:inline-block px-[87px] py-3 text-white text-[16px] font-semibold rounded leading-[150%] bg-[#5E9ED5] border border-transparent hover:border-[#5E9ED5] hover:bg-transparent hover:text-[#5E9ED5] transition-all duration-300"
          >
            View All
          </a>
        </div>

        <div className="outer-div-card pt-10">
          <div className="card-section flex flex-wrap gap-5 justify-center">
             {cards.map((card, index) => (
        <Link
          key={index}
          href={card.link}
          className="relative w-full sm:w-[48%] lg:w-[23%] h-[380px] rounded-lg overflow-hidden group"
        >
          <div
            className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
            style={{ backgroundImage: `url('${card.image}')` }}
          >
            <div className="absolute bottom-[20px] text-center w-full text-white p-3">
              <div className="flex gap-[10px] justify-center items-center">
                <img src={card.icon} alt={card.title} className="w-10 h-10" />
                <h3 className="text-[16px] leading-[120%] font-normal">{card.title}</h3>
              </div>
            </div>
          </div>
        </Link>
      ))}
          </div>
        </div>
        <div className="btn flex justify-center items-center md:hidden pt-[40px]">
          <a
            href="/serving-industries"
            className="block md:hidden px-[87px] py-3 text-white text-[16px] font-semibold rounded leading-[150%] bg-[#5E9ED5] border border-transparent hover:border-[#5E9ED5] hover:bg-transparent hover:text-[#5E9ED5] transition-all duration-300"
          >
            View All
          </a>
        </div>
      </div>
    </div>
  );
}
