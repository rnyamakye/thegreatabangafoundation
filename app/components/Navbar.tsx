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
          isActive ? "text-orange-600" : "text-gray-700 hover:text-orange-600"
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
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
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

  return (
    <nav className="sticky top-0 left-0 right-0 z-50 bg-gray-200/95 backdrop-blur-md border-b border-gray-300">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-3">
              <img
                src="/logo.png"
                alt="The Great Abanga Foundation"
                className="h-10 w-auto"
              />
              <span className="text-lg font-semibold text-black hidden sm:block">
                TGAF
              </span>
            </Link>
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/impact">Impact</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <Link
              to="/donate"
              className="relative overflow-hidden bg-orange-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 group"
            >
              <span className="relative z-10">Donate</span>
              <div className="absolute inset-0 bg-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
            </Link>
          </div>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center space-x-3">
            {/* Hamburger Menu Button */}
            <button
              type="button"
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">
                {isMenuOpen ? "Close main menu" : "Open main menu"}
              </span>
              {isMenuOpen ? (
                <svg
                  className="w-6 h-6"
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
                  className="w-6 h-6"
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
          isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
        id="mobile-menu"
      >
        <div className="px-6 py-4 space-y-2 bg-gray-200 border-t border-gray-300">
          <NavLink
            to="/"
            onClick={() => setIsMenuOpen(false)}
            className="block py-2"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setIsMenuOpen(false)}
            className="block py-2"
          >
            About
          </NavLink>
          <NavLink
            to="/impact"
            onClick={() => setIsMenuOpen(false)}
            className="block py-2"
          >
            Impact
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="block py-2"
          >
            Contact
          </NavLink>
          <Link
            to="/donate"
            onClick={() => setIsMenuOpen(false)}
            className="relative overflow-hidden block py-2 px-4 bg-orange-600 text-white rounded-lg font-medium text-center transition-all duration-300 group"
          >
            <span className="relative z-10">Donate</span>
            <div className="absolute inset-0 bg-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
          </Link>
        </div>
      </div>
    </nav>
  );
}
