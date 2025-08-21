"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import MobileDropdown from "./MobileDropdown";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktopSubOpen, setIsDesktopSubOpen] = useState(false); // For desktop dropdown
  const [isMobileSubOpen, setIsMobileSubOpen] = useState(false); // For mobile accordion

  const subMenuRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Close submenu on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        subMenuRef.current &&
        !subMenuRef.current.contains(event.target as Node)
      ) {
        setIsDesktopSubOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Scroll hide/show logic
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setShowHeader(false); // Scrolling down
      } else {
        setShowHeader(true); // Scrolling up
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const [servicesButtonOffset, setServicesButtonOffset] = useState(0);

  useEffect(() => {
    if (isClient && subMenuRef.current) {
      const rect = subMenuRef.current.getBoundingClientRect();
      setServicesButtonOffset(rect.left);
    }
  }, [isClient]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  return (
    <header
      className={`bg-black sticky top-0 z-50 transition-transform duration-500 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container-width mx-auto px-[15px] md:px-[60px] py-[20px] flex flex-nowrap justify-between items-center">
        {/* Left Side: Logo + Nav */}
        <div className="flex items-center space-x-10">
          {/* Logo */}
          <div className="flex items-center space-x-8">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={60}
              height={43}
              priority
            />
          </div>

          {/* Desktop Nav */}
          <nav className=" hidden lg:flex gap-[30px] items-center">
            <Link
              href="/"
              className="block text-white hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block text-white text-opacity-80 hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              Company Overview
            </Link>

            <div className="relative" ref={subMenuRef}>
              <button
                className="flex items-center text-white hover:text-blue-500 transition-colors duration-200"
                onMouseEnter={() => isClient && setIsDesktopSubOpen(true)}
                onClick={() =>
                  isClient && setIsDesktopSubOpen(!isDesktopSubOpen)
                }
              >
                Services
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                    isDesktopSubOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isClient && (
                <div
                  className={`
    absolute top-full pt-[29px]
    transition-all duration-300 ease-in-out z-50
    ${isDesktopSubOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-1"}
  `}
                  style={{
                    left: "0px",
                    transform: `translateX(calc(-${servicesButtonOffset}px))`,
                    width: "100vw",
                    // fixed site width
                    maxWidth: "100vw", // responsive
                    minWidth: "100vw",
                    overflowX: "hidden",
                  }}
                  onMouseLeave={() => setIsDesktopSubOpen(false)}
                >
                  <div className="bg-[#fff]  shadow-lg px-[15px] md:px-15 py-6 grid grid-cols-4 gap-8 container-width ">
                    {/* Column 1 */}
                    <div>
                      <h5 className=" font-semibold text-gray-900 mb-4">
                        Designing Services
                      </h5>
                      <ul className="space-y-3">
                        {/* Item 1 */}
                        <li className="flex items-center gap-2 text-[13px]">
                          <Link
                            href="/nextjs"
                            className="flex items-center gap-2 text-[13px]"
                          >
                            <Image
                              src="/images/icons/nextjs-icon.svg"
                              width={35}
                              height={35}
                              alt="Next.js"
                              className="border border-black rounded-xl p-1"
                            />
                            Website Designing
                            <span className="text-blue-500 text-xs">New</span>
                          </Link>
                        </li>

                        {/* Item 2 */}
                        <li className="flex items-center gap-2 text-[13px]">
                          <Link
                            href="/nextjs"
                            className="flex items-center gap-2 text-[13px]"
                          >
                            <Image
                              src="/images/icons/nextjs-icon.svg"
                              width={35}
                              height={35}
                              alt="Next.js"
                              className="border border-black rounded-xl p-1"
                            />
                            Catalog Designing
                          </Link>
                        </li>

                        {/* Item 3 */}
                        <li className="flex items-center gap-2 text-[13px]">
                          <Link
                            href="/nextjs"
                            className="flex items-center gap-2 text-[13px]"
                          >
                            <Image
                              src="/images/icons/nextjs-icon.svg"
                              width={35}
                              height={35}
                              alt="Next.js"
                              className="border border-black rounded-xl p-1"
                            />
                            Emailer Designing
                          </Link>
                        </li>

                        {/* Item 4 */}
                        <li className="flex items-center gap-2 text-[13px]">
                          <Link
                            href="/nextjs"
                            className="flex items-center gap-2 text-[13px]"
                          >
                            <Image
                              src="/images/icons/nextjs-icon.svg"
                              width={35}
                              height={35}
                              alt="Next.js"
                              className="border border-black rounded-xl p-1"
                            />
                            PSD To HTML Designing
                          </Link>
                        </li>

                        {/* Item 5 */}
                        <li className="flex items-center gap-2 text-[13px]">
                          <Link
                            href="/nextjs"
                            className="flex items-center gap-2 text-[13px]"
                          >
                            <Image
                              src="/images/icons/nextjs-icon.svg"
                              width={35}
                              height={35}
                              alt="Next.js"
                              className="border border-black rounded-xl p-1"
                            />
                            Logo Designing
                          </Link>
                        </li>
                      </ul>

                      <a
                        href="/contact-us"
                        className="text-center mt-4 inline-block text-[#5E9ED5] text-[13px] font-normal  leading-[150%]   hover:underline border-transparent  hover:text-[#5E9ED5] transition-all duration-500"
                      >
                        View All
                      </a>
                    </div>

                    {/* Column 2 */}
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-4">
                        Manage Databases
                      </h5>
                      <ul className="space-y-3">
                        {/* Item 1 */}
                        <li className="flex items-center gap-2 text-[13px]">
                          <Link
                            href="/nextjs"
                            className="flex items-center gap-2 text-[13px]"
                          >
                            <Image
                              src="/images/icons/nextjs-icon.svg"
                              width={35}
                              height={35}
                              alt="Next.js"
                              className="border border-black rounded-xl p-1"
                            />
                            Website Designing
                            <span className="text-blue-500 text-xs">New</span>
                          </Link>
                        </li>

                        {/* Item 2 */}
                        <li className="flex items-center gap-2 text-[13px]">
                          <Link
                            href="/nextjs"
                            className="flex items-center gap-2 text-[13px]"
                          >
                            <Image
                              src="/images/icons/nextjs-icon.svg"
                              width={35}
                              height={35}
                              alt="Next.js"
                              className="border border-black rounded-xl p-1"
                            />
                            Catalog Designing
                          </Link>
                        </li>

                        {/* Item 3 */}
                        <li className="flex items-center gap-2 text-[13px]">
                          <Link
                            href="/nextjs"
                            className="flex items-center gap-2 text-[13px]"
                          >
                            <Image
                              src="/images/icons/nextjs-icon.svg"
                              width={35}
                              height={35}
                              alt="Next.js"
                              className="border border-black rounded-xl p-1"
                            />
                            Emailer Designing
                          </Link>
                        </li>

                        {/* Item 4 */}
                        <li className="flex items-center gap-2 text-[13px]">
                          <Link
                            href="/nextjs"
                            className="flex items-center gap-2 text-[13px]"
                          >
                            <Image
                              src="/images/icons/nextjs-icon.svg"
                              width={35}
                              height={35}
                              alt="Next.js"
                              className="border border-black rounded-xl p-1"
                            />
                            PSD To HTML Designing
                          </Link>
                        </li>

                        {/* Item 5 */}
                        <li className="flex items-center gap-2 text-[13px]">
                          <Link
                            href="/nextjs"
                            className="flex items-center gap-2 text-[13px]"
                          >
                            <Image
                              src="/images/icons/nextjs-icon.svg"
                              width={35}
                              height={35}
                              alt="Next.js"
                              className="border border-black rounded-xl p-1"
                            />
                            Logo Designing
                          </Link>
                        </li>
                      </ul>
                      <a
                        href="/contact-us"
                        className="text-center mt-4 inline-block text-[#5E9ED5] text-[13px] font-normal  leading-[150%]   hover:underline border-transparent  hover:text-[#5E9ED5] transition-all duration-500"
                      >
                        View All
                      </a>
                    </div>

                    {/* Column 3 */}
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-4">
                        Networking
                      </h5>
                      <ul className="space-y-3">
                        {/* Item 1 */}
                        <li className="flex items-center gap-2 text-[13px]">
                          <Link
                            href="/nextjs"
                            className="flex items-center gap-2 text-[13px]"
                          >
                            <Image
                              src="/images/icons/nextjs-icon.svg"
                              width={35}
                              height={35}
                              alt="Next.js"
                              className="border border-black rounded-xl p-1"
                            />
                            Website Designing
                            <span className="text-blue-500 text-xs">New</span>
                          </Link>
                        </li>

                        {/* Item 2 */}
                        <li className="flex items-center gap-2 text-[13px]">
                          <Link
                            href="/nextjs"
                            className="flex items-center gap-2 text-[13px]"
                          >
                            <Image
                              src="/images/icons/nextjs-icon.svg"
                              width={35}
                              height={35}
                              alt="Next.js"
                              className="border border-black rounded-xl p-1"
                            />
                            Catalog Designing
                          </Link>
                        </li>

                        {/* Item 3 */}
                        <li className="flex items-center gap-2 text-[13px]">
                          <Link
                            href="/nextjs"
                            className="flex items-center gap-2 text-[13px]"
                          >
                            <Image
                              src="/images/icons/nextjs-icon.svg"
                              width={35}
                              height={35}
                              alt="Next.js"
                              className="border border-black rounded-xl p-1"
                            />
                            Emailer Designing
                          </Link>
                        </li>
                        {/* Item 4 */}
                        <li className="flex items-center gap-2 text-[13px]">
                          <Link
                            href="/nextjs"
                            className="flex items-center gap-2 text-[13px]"
                          >
                            <Image
                              src="/images/icons/nextjs-icon.svg"
                              width={35}
                              height={35}
                              alt="Next.js"
                              className="border border-black rounded-xl p-1"
                            />
                            Emailer Designing
                          </Link>
                        </li>
                        {/* Item 5 */}
                        <li className="flex items-center gap-2 text-[13px]">
                          <Link
                            href="/nextjs"
                            className="flex items-center gap-2 text-[13px]"
                          >
                            <Image
                              src="/images/icons/nextjs-icon.svg"
                              width={35}
                              height={35}
                              alt="Next.js"
                              className="border border-black rounded-xl p-1"
                            />
                            Emailer Designing
                          </Link>
                        </li>
                      </ul>
                      <a
                        href="/contact-us"
                        className="text-center mt-4 inline-block text-[#5E9ED5] text-[13px] font-normal  leading-[150%]   hover:underline border-transparent  hover:text-[#5E9ED5] transition-all duration-500"
                      >
                        View All
                      </a>
                    </div>
                    {/* Column 4 */}
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-4">
                        Networking
                      </h5>
                      <ul className="space-y-3">
                        {/* Item 1 */}
                        <li className="flex items-center gap-2 text-[13px]">
                          <Link
                            href="/nextjs"
                            className="flex items-center gap-2 text-[13px]"
                          >
                            <Image
                              src="/images/icons/nextjs-icon.svg"
                              width={35}
                              height={35}
                              alt="Next.js"
                              className="border border-black rounded-xl p-1"
                            />
                            Website Designing
                            <span className="text-blue-500 text-xs">New</span>
                          </Link>
                        </li>

                        {/* Item 2 */}
                        <li className="flex items-center gap-2 text-[13px]">
                          <Link
                            href="/nextjs"
                            className="flex items-center gap-2 text-[13px]"
                          >
                            <Image
                              src="/images/icons/nextjs-icon.svg"
                              width={35}
                              height={35}
                              alt="Next.js"
                              className="border border-black rounded-xl p-1"
                            />
                            Catalog Designing
                          </Link>
                        </li>

                        {/* Item 3 */}
                        <li className="flex items-center gap-2 text-[13px]">
                          <Link
                            href="/nextjs"
                            className="flex items-center gap-2 text-[13px]"
                          >
                            <Image
                              src="/images/icons/nextjs-icon.svg"
                              width={35}
                              height={35}
                              alt="Next.js"
                              className="border border-black rounded-xl p-1"
                            />
                            Emailer Designing
                          </Link>
                        </li>
                      </ul>

                      {/* Call to Action */}
                      <div className="bg-[#d3e8f7] px-5 py-5 mt-2 rounded-xl">
                        <p>Explore Pricing</p>
                        <p>Talk to Sales</p>
                        <p>Contact Support</p>

                        <a
                          href="/contact-us"
                          className="hidden md:inline-block w-full text-center mt-2 py-3 text-white text-[15px] font-semibold rounded leading-[150%] bg-[#5E9ED5] border border-transparent hover:border-[#5E9ED5] hover:bg-transparent hover:text-[#5E9ED5] transition-all duration-500"
                        >
                          Get Started Free →
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/portfolio"
              className="text-white text-opacity-80 hover:text-blue-600"
            >
              Portfolio
            </Link>
            <Link
              href="/packages"
              className="text-white text-opacity-80 hover:text-blue-600"
            >
              Packages
            </Link>
            <Link
              href="/blogs"
              className="text-white text-opacity-80 hover:text-blue-600"
            >
              Blogs
            </Link>
          </nav>
        </div>

        {/* Right Side: Button */}
        <div className="hidden lg:block space-x-[30px] items-center">
          <Link
            href="/join"
            className="text-white text-opacity-80 hover:text-blue-600"
          >
            Join
          </Link>
          <Link
            href="/contact"
            className="text-white text-opacity-80 hover:text-blue-600"
          >
            Contact
          </Link>

          <Link
            href="/get-started"
            className="btn-color text-white hover:bg-blue-700 transition"
          >
            Get a Free Quote
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden text-white">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[80px] h-[calc(100vh-80px)] left-0 w-full  bg-black z-40 overflow-y-auto px-[15px] py-5 space-y-3"
          >
            <Link
              href="/"
              className="block text-white text-opacity-80 hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block text-white text-opacity-80 hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              Company Overview
            </Link>

           <div>
  <button
    onClick={() => setIsMobileSubOpen(!isMobileSubOpen)}
    className="flex items-center justify-between w-full text-white hover:text-blue-600 transition-colors duration-200"
  >
    Services
    <ChevronDown
      className={`ml-1 h-4 w-4 transition-transform duration-500 ${
        isMobileSubOpen ? "rotate-180" : ""
      }`}
    />
  </button>

  <AnimatePresence initial={false}>
    {isMobileSubOpen && (
      <motion.div
        key="mobile-submenu"
       initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden mt-4"
      >
        {/* Your dropdown items */}
        <MobileDropdown
          title="Designing Services"
          items={[
            { label: "Website Designing", href: "/nextjs" },
            { label: "Catalog Designing", href: "/nextjs" },
            { label: "Emailer Designing", href: "/nextjs" },
            { label: "PSD To HTML Designing", href: "/nextjs" },
            { label: "Logo Designing", href: "/nextjs" },
          ]}
          setIsOpen={setIsOpen}
        />

        <MobileDropdown
          title="Manage Databases"
          items={[
            { label: "Website Designing", href: "/nextjs" },
            { label: "Catalog Designing", href: "/nextjs" },
            { label: "Emailer Designing", href: "/nextjs" },
            { label: "PSD To HTML Designing", href: "/nextjs" },
            { label: "Logo Designing", href: "/nextjs" },
          ]}
          setIsOpen={setIsOpen}
        />

        <MobileDropdown
          title="Networking"
          items={[
            { label: "Website Designing", href: "/nextjs" },
            { label: "Catalog Designing", href: "/nextjs" },
            { label: "Emailer Designing", href: "/nextjs" },
          ]}
          setIsOpen={setIsOpen}
        />
      </motion.div>
    )}
  </AnimatePresence>
</div>


            <Link
              href="/portfolio"
              className="block text-white text-opacity-80 hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              href="/packages"
              className="block text-white text-opacity-80 hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              Packages
            </Link>
            <Link
              href="/blogs"
              className="block text-white text-opacity-80 hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              Blogs
            </Link>
            <Link
              href="/join"
              className="block text-white text-opacity-80 hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              Join
            </Link>
            <Link
              href="/contact"
              className="block text-white text-opacity-80 hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>

            <Link
              href="/get-started"
              className="inline-block btn-color text-white hover:bg-blue-700 mt-2"
              onClick={() => setIsOpen(false)}
            >
              Get a Free Quote
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
    
  );
  

}
