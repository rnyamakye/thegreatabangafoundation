import { Link, useLocation } from "react-router";
import { useState, useEffect, useRef } from "react";

// Custom NavLink component with animated underline
function NavLink({
  to,
  children,
  className = "",
  onClick,
}: {
  to: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  const location = useLocation();
  const isActive =
    location.pathname === to || (to === "/" && location.pathname === "/");

  return (
    <Link
      to={to}
      onClick={onClick}
      className={`relative px-1 py-2 text-sm font-medium transition-colors duration-200 group ${className}`}
    >
      <span
        className={`transition-colors duration-200 ${
          className.includes("text-gray-800")
            ? isActive
              ? "text-orange-600"
              : "text-gray-800 hover:text-orange-600"
            : isActive
              ? "text-orange-600"
              : "text-black hover:text-orange-600"
        }`}
      >
        {children}
      </span>

      {/* Animated underline */}
      <span
        className={`absolute bottom-0 left-0 h-0.5 bg-orange-600 transition-all duration-300 ease-out ${
          isActive ? "w-full" : "w-0 group-hover:w-full"
        }`}
      ></span>
    </Link>
  );
}

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
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

  // Handle navbar visibility based on scroll direction
  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 10) {
        // Always show navbar at the top
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 text-black bg-white backdrop-blur-xl transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-6xl px-6 mx-auto">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-3">
              <img
                src="/logo.png"
                alt="The Great Abanga Foundation"
                className="w-auto h-10"
              />
              <span className="text-lg font-semibold text-black sm:block">
                TGAF
              </span>
            </Link>
          </div>

          {/* Navigation Links - Desktop */}
          <div className="items-center hidden space-x-8 text-white md:flex">
            <NavLink to="/" className="text-white">
              Home
            </NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/impact">Impact</NavLink>
            {/* <NavLink to="/blog">Blog</NavLink> */}
            <NavLink to="/contact">Contact</NavLink>
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
            {/* Hamburger Menu Button */}
            <button
              ref={buttonRef}
              type="button"
              onClick={toggleMenu}
              className="relative p-2 overflow-hidden text-white transition-all duration-300 bg-black rounded-md group"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
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
        className={`md:hidden overflow-hidden bg-[#F7F2ED] backdrop-blur-lg shadow-lg transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
        id="mobile-menu"
      >
        <div className="px-6 py-4 space-y-2 border-t border-gray-300">
          <NavLink
            to="/"
            onClick={closeMenu}
            className="block py-2 text-gray-800 hover:text-orange-600"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            onClick={closeMenu}
            className="block py-2 text-gray-800 hover:text-orange-600"
          >
            About
          </NavLink>
          <NavLink
            to="/impact"
            onClick={closeMenu}
            className="block py-2 text-gray-800 hover:text-orange-600"
          >
            Impact
          </NavLink>
          <NavLink
            to="/blog"
            onClick={closeMenu}
            className="block py-2 text-gray-800 hover:text-orange-600"
          >
            Blog
          </NavLink>
          <NavLink
            to="/contact"
            onClick={closeMenu}
            className="block py-2 text-gray-800 hover:text-orange-600"
          >
            Contact
          </NavLink>
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
    </nav>
  );
}
