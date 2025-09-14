import { Link, useLocation } from "react-router";
import { useState, useEffect, useRef } from "react";

// Dropdown component for About navigation
export default function AboutDropdown({
  className = "",
  isScrolled = false,
  isMissionPage = false,
}: {
  className?: string;
  isScrolled?: boolean;
  isMissionPage?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const isAboutActive = location.pathname.startsWith("/about");

  const aboutLinks = [
    { to: "/about", label: "About Us" },
    { to: "/about/mission", label: "Mission" },
    { to: "/about/governance", label: "Governance" },
    { to: "/about/leadership", label: "Leadership" },
  ];

  const getTextColor = () => {
    if (isMissionPage) {
      return isAboutActive
        ? "text-[#4c4c4c]"
        : "text-[#4c4c4c] hover:text-[#666666]";
    } else if (isScrolled) {
      return isAboutActive
        ? "text-gray-600 md:text-white"
        : "text-black md:text-white hover:text-gray-600 md:hover:text-gray-300";
    } else {
      return isAboutActive
        ? "text-gray-300 md:text-white"
        : "text-white hover:text-gray-300";
    }
  };

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150); // Small delay to prevent flickering
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={dropdownRef}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Main About Link */}
      <div
        className={`relative px-1 py-2 text-sm font-medium font-quicksand transition-colors duration-200 group cursor-pointer ${className}`}
      >
        <span
          className={`flex items-center space-x-2 transition-colors duration-200 ${getTextColor()}`}
        >
          <span className="text-lg font-extrabold">About</span>
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
        </span>

        {/* Animated underline */}
        <span
          className={`absolute bottom-0 left-0 h-0.5 bg-orange-300 transition-all duration-300 ease-out ${
            isAboutActive
              ? "w-full"
              : isOpen
                ? "w-full"
                : "w-0 group-hover:w-full"
          }`}
        ></span>
      </div>

      {/* Invisible bridge to prevent gaps */}
      {isOpen && (
        <div className="absolute left-0 w-full h-2 bg-transparent top-full"></div>
      )}

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute left-0 z-50 py-2 mt-2 bg-white border border-gray-200 shadow-lg w-60 top-full">
          {aboutLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="block px-5 py-2 mx-5 text-sm text-gray-700 transition-colors duration-150 hover:border-b hover:text-gray-600"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
