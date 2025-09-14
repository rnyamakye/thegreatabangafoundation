import { Link, useLocation } from "react-router";
import { useState, useEffect, useRef } from "react";
import AboutDropdown from "./AboutDropdown";
import SearchBar from "./SearchBar";

// Custom NavLink component with animated underline
function NavLink({
  to,
  children,
  className = "",
  onClick,
  isScrolled = false,
  isMissionPage = false,
}: {
  to: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  isScrolled?: boolean;
  isMissionPage?: boolean;
}) {
  const location = useLocation();
  const isActive =
    location.pathname === to || (to === "/" && location.pathname === "/");

  const getTextColor = () => {
    if (isMissionPage) {
      return isActive
        ? "text-[#4c4c4c]"
        : "text-[#4c4c4c] hover:text-[#666666]";
    } else if (isScrolled) {
      return isActive
        ? "text-gray-300 md:text-white"
        : "text-black md:text-white hover:text-gray-600 md:hover:text-gray-300";
    } else {
      return isActive ? "text-gray-300" : "text-white hover:text-gray-300";
    }
  };

  return (
    <Link
      to={to}
      onClick={onClick}
      className={`relative px-1 py-2 text-sm md:text-base lg:text-lg font-semibold md:font-bold transition-colors duration-200 group ${className}`}
    >
      <span className={`transition-colors duration-200 ${getTextColor()}`}>
        {children}
      </span>

      {/* Animated underline */}
      <span
        className={`absolute bottom-0 left-0 h-0.5 bg-orange-300 transition-all duration-300 ease-out ${
          isActive ? "w-full" : "w-0 group-hover:w-full"
        }`}
      ></span>
    </Link>
  );
}

// Mobile About Dropdown component
function MobileAboutDropdown({ closeMenu }: { closeMenu: () => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const aboutLinks = [
    { to: "/about", label: "About Us" },
    { to: "/about/mission", label: "Mission" },
    { to: "/about/governance", label: "Governance" },
    { to: "/about/leadership", label: "Leadership" },
  ];

  return (
    <div>
      {/* Main About Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-2 font-semibold text-gray-800 border-b hover:text-gray-600"
      >
        <span>About</span>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Sub-links */}
      {isOpen && (
        <div className="pl-4 space-y-1">
          {aboutLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={closeMenu}
              className="block py-2 text-sm font-semibold text-gray-600 hover:text-gray-800"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const location = useLocation();

  // Check if we're on the mission page
  const isMissionPage = location.pathname === "/about/mission";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const closeSearch = () => {
    setIsSearchOpen(false);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      // Close mobile menu
      if (
        mobileMenuRef.current &&
        buttonRef.current &&
        !mobileMenuRef.current.contains(target) &&
        !buttonRef.current.contains(target)
      ) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  // Handle navbar background and visibility based on scroll
  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      // Set scrolled state for background change
      setIsScrolled(currentScrollY > 10);

      // Handle visibility based on scroll direction
      if (currentScrollY < 10) {
        // Always show navbar at the top
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past 100px - hide navbar
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - show navbar
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  return (
    <nav
      className={`absolute left-0 right-0 z-50 transition-all duration-300 ease-in-out  ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${isScrolled ? "shadow-lg py-2 top-0" : "bg-transparent py-2 -top-1"}
      ${isMenuOpen ? "bg-[#F8F8F8] backdrop-blur-lg shadow-lg py-2" : ""}`}
    >
      <div className="px-6 mx-auto max-w-screen">
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            isScrolled ? "h-12 md:h-16" : "h-16 md:h-20"
          }`}
        >
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-3">
              <img
                src="/logo.png"
                alt="The Great Abanga Foundation"
                className={`w-auto transition-all duration-300 ${
                  isScrolled ? "h-8" : "h-10"
                }`}
              />
              <span
                className={`hidden font-cursive italic lg:block font-semibold transition-colors duration-300 ${
                  isMissionPage
                    ? "text-lg text-white"
                    : isScrolled
                      ? "text-lg text-gray-300"
                      : "text-lg text-white"
                }`}
              >
                The Great Abanga Foundation
              </span>
            </Link>
          </div>

          {/* Navigation Links - Desktop */}
          <div className="items-center hidden space-x-8 md:flex">
            {/* <NavLink to="/" isScrolled={isScrolled} isMissionPage={isMissionPage}>
              Home
            </NavLink> */}
            <AboutDropdown
              isScrolled={isScrolled}
              isMissionPage={isMissionPage}
            />
            <NavLink
              to="/impact"
              isScrolled={isScrolled}
              isMissionPage={isMissionPage}
            >
              Impact
            </NavLink>
            <NavLink
              to="/blog"
              isScrolled={isScrolled}
              isMissionPage={isMissionPage}
            >
              Stories
            </NavLink>
            <NavLink
              to="/contact"
              isScrolled={isScrolled}
              isMissionPage={isMissionPage}
            >
              Contact
            </NavLink>

            {/* Search Icon */}
            {/* <button
              onClick={toggleSearch}
              className={`p-2 rounded-lg transition-colors duration-200 hover:bg-gray-100 hover:bg-opacity-20 hover:text-gray-900 ${
                isMissionPage
                  ? "text-[#4c4c4c]"
                  : isScrolled
                    ? "text-gray-900 md:text-white"
                    : "text-white"
              }`}
              aria-label="Search"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button> */}

            {/* <Link
              to="/donate"
              className="relative px-4 py-2 overflow-hidden font-medium text-white transition-all duration-300 bg-orange-600 rounded-lg group"
            >
              <span className="relative z-10">Donate</span>
              <div className="absolute inset-0 transition-transform duration-500 ease-out transform -translate-x-full bg-black group-hover:translate-x-0"></div>
            </Link> */}
          </div>

          {/* Mobile Controls */}
          <div className="flex items-center space-x-3 md:hidden">
            {/* Search Icon - Mobile */}
            {/* <button
              onClick={toggleSearch}
              className={`p-2 rounded-lg transition-colors duration-200 ${
                isMissionPage
                  ? "text-[#4c4c4c]"
                  : isScrolled
                    ? "text-gray-900"
                    : "text-white"
              }`}
              aria-label="Search"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button> */}

            {/* Hamburger Menu Button */}
            <button
              ref={buttonRef}
              type="button"
              onClick={toggleMenu}
              className={`relative p-2 overflow-hidden transition-all duration-300 ${
                isMissionPage
                  ? "text-white"
                  : isScrolled
                    ? "text-black"
                    : "text-white"
              }`}
              aria-controls="mobile-menu"
            >
              <span className="sr-only">
                {isMenuOpen ? "Close main menu" : "Open main menu"}
              </span>
              {/* <div className="absolute inset-0 transition-transform duration-500 ease-out transform -translate-x-full bg-black group-hover:translate-x-0"></div> */}
              {isMenuOpen ? (
                <svg
                  className="relative z-10 w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="relative z-10 w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        ref={mobileMenuRef}
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isScrolled || isMenuOpen ? " backdrop-blur-lg shadow-lg" : ""
        } ${isMenuOpen ? "min-h-64  opacity-100 bg-white" : "max-h-0 opacity-0"}`}
        id="mobile-menu"
      >
        <div className="px-6 py-4 space-y-2 border-t border-white">
          <Link
            to="/"
            onClick={closeMenu}
            className="block py-2 font-semibold text-gray-800 border-b hover:text-gray-600"
          >
            Home
          </Link>
          <MobileAboutDropdown closeMenu={closeMenu} />
          <Link
            to="/impact"
            onClick={closeMenu}
            className="block py-2 font-semibold text-gray-800 border-b hover:text-gray-600"
          >
            Our work
          </Link>
          <Link
            to="/blog"
            onClick={closeMenu}
            className="block py-2 font-semibold text-gray-800 border-b hover:text-gray-600"
          >
            Stories
          </Link>
          <Link
            to="/contact"
            onClick={closeMenu}
            className="block py-2 font-semibold text-gray-800 hover:text-gray-600"
          >
            Contact Us
          </Link>
          {/* <Link
            to="/donate"
            onClick={closeMenu}
            className="relative block px-4 py-2 overflow-hidden font-medium text-center text-white transition-all duration-300 bg-orange-600 rounded-lg group"
          >
            <span className="relative z-10">Donate</span>
            <div className="absolute inset-0 transition-transform duration-500 ease-out transform -translate-x-full bg-black group-hover:translate-x-0"></div>
          </Link> */}
        </div>
      </div>

      {/* Search Bar Component */}
      {/* <SearchBar
        isOpen={isSearchOpen}
        onClose={closeSearch}
        isScrolled={isScrolled}
      /> */}
    </nav>
  );
}
