"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
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
        setIsSubMenuOpen(false);
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

  // Function to toggle mobile menu and close submenu
  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
    setIsSubMenuOpen(false); // Close submenu when mobile menu is toggled
  };

  // Function to close both menus
  const closeAllMenus = () => {
    setIsOpen(false);
    setIsSubMenuOpen(false);
  };

  return (
    <header
      className={`bg-black sticky top-0 z-50 transition-transform duration-500 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container-width mx-auto px-[15px] md:px-[60px] py-[20px] flex justify-between items-center">
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
          <nav className="hidden md:flex gap-[30px] items-center">
            <Link href="/" className="block text-white hover:text-blue-600" onClick={closeAllMenus}>
              Home
            </Link>
            <Link
              href="/about"
              className="block text-white-80 hover:text-blue-600"
              onClick={closeAllMenus}
            >
              Company Overview
            </Link>

            <div className="relative" ref={subMenuRef}>
              <button
                className="flex items-center text-white hover:text-blue-500 transition-colors duration-200"
                onMouseEnter={() => isClient && setIsSubMenuOpen(true)}
                onClick={() => isClient && setIsSubMenuOpen(!isSubMenuOpen)}
              >
                Services
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                    isSubMenuOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isClient && (
                <div className="fixed top-[100%] left-0 w-full z-50">
                  <div
                    className={`
                      mx-auto max-w-[1320px] bg-white border border-gray-200 shadow-lg
                      transition-all duration-300 ease-in-out
                      ${isSubMenuOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-1"}
                      px-4 py-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4
                    `}
                    onMouseLeave={() => setIsSubMenuOpen(false)}
                  >
                    <Link
                      href="/services/web"
                      className="block px-3 py-2 mx-auto items-center text-gray-800 hover:bg-gray-100 rounded transition-all"
                      onClick={() => setIsSubMenuOpen(false)}
                    >
                      Web Development
                    </Link>
                    <Link
                      href="/services/seo"
                      className="block px-3 py-2 mx-auto text-gray-800 hover:bg-gray-100 rounded transition-all"
                      onClick={() => setIsSubMenuOpen(false)}
                    >
                      SEO Services
                    </Link>
                    <Link
                      href="/services/design"
                      className="block px-3 py-2 mx-auto text-gray-800 hover:bg-gray-100 rounded transition-all"
                      onClick={() => setIsSubMenuOpen(false)}
                    >
                      Graphic Design
                    </Link>
                    <Link
                      href="/services/app"
                      className="block px-3 py-2 mx-auto text-gray-800 hover:bg-gray-100 rounded transition-all"
                      onClick={() => setIsSubMenuOpen(false)}
                    >
                      App Development
                    </Link>
                    <Link
                      href="/services/marketing"
                      className="block px-3 py-2 mx-auto text-gray-800 hover:bg-gray-100 rounded transition-all"
                      onClick={() => setIsSubMenuOpen(false)}
                    >
                      Digital Marketing
                    </Link>
                    <Link
                      href="/services/content"
                      className="block px-3 py-2 mx-auto text-gray-800 hover:bg-gray-100 rounded transition-all"
                      onClick={() => setIsSubMenuOpen(false)}
                    >
                      Content Writing
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/portfolio" className="text-white-80 hover:text-blue-600">
              Portfolio
            </Link>
            <Link href="/packages" className="text-white-80 hover:text-blue-600">
              Packages
            </Link>
            <Link href="/blogs" className="text-white-80 hover:text-blue-600">
              Blogs
            </Link>
          </nav>
        </div>

        {/* Right Side: Button */}
        <div className="hidden md:block space-x-[30px] items-center">
          <Link href="/join" className="text-white-80 hover:text-blue-600">
            Join
          </Link>
          <Link href="/contact" className="text-white-80 hover:text-blue-600">
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
        <div className="md:hidden text-white">
          <button onClick={toggleMobileMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <Link href="/" className="block text-white-80 hover:text-blue-600" onClick={closeAllMenus}>
            Home
          </Link>
          <Link
            href="/about"
            className="block text-white-80 hover:text-blue-600"
            onClick={closeAllMenus}
          >
            Company Overview
          </Link>

          <div>
            <button
              onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
              className="flex items-center justify-between w-full text-white hover:text-blue-600 transition-colors duration-200"
            >
              Services
              <ChevronDown
                className={`ml-1 h-4 w-4 transition-transform duration-500 ${
                  isSubMenuOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Animated submenu */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                isSubMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="pl-4 mt-2 space-y-1">
                <Link
                  href="/services/web"
                  className="block text-white hover:text-blue-600 transition-colors"
                  onClick={closeAllMenus}
                >
                  Web Development
                </Link>
                <Link
                  href="/services/seo"
                  className="block text-white hover:text-blue-600 transition-colors"
                  onClick={closeAllMenus}
                >
                  SEO Services
                </Link>
                <Link
                  href="/services/design"
                  className="block text-white hover:text-blue-600 transition-colors"
                  onClick={closeAllMenus}
                >
                  Graphic Design
                </Link>
                <Link
                  href="/services/app"
                  className="block text-white hover:text-blue-600 transition-colors"
                  onClick={closeAllMenus}
                >
                  App Development
                </Link>
                <Link
                  href="/services/marketing"
                  className="block text-white hover:text-blue-600 transition-colors"
                  onClick={closeAllMenus}
                >
                  Digital Marketing
                </Link>
                <Link
                  href="/services/content"
                  className="block text-white hover:text-blue-600 transition-colors"
                  onClick={closeAllMenus}
                >
                  Content Writing
                </Link>
              </div>
            </div>
          </div>

          <Link
            href="/portfolio"
            className="block text-white-80 hover:text-blue-600"
            onClick={closeAllMenus}
          >
            Portfolio
          </Link>
          <Link
            href="/packages"
            className="block text-white-80 hover:text-blue-600"
            onClick={closeAllMenus}
          >
            Packages
          </Link>
          <Link
            href="/blogs"
            className="block text-white-80 hover:text-blue-600"
            onClick={closeAllMenus}
          >
            Blogs
          </Link>
          <Link
            href="/join"
            className="block text-white-80 hover:text-blue-600"
            onClick={closeAllMenus}
          >
            Join
          </Link>
          <Link
            href="/contact"
            className="block text-white-80 hover:text-blue-600"
            onClick={closeAllMenus}
          >
            Contact
          </Link>

          <Link
            href="/get-started"
            className="inline-block btn-color text-white hover:bg-blue-700 mt-2"
            onClick={closeAllMenus}
          >
            Get a Free Quote
          </Link>
        </div>
      )}
    </header>
  );
}