import { useState, useRef, useEffect } from "react";

interface SearchBarProps {
  isOpen: boolean;
  onClose: () => void;
  isScrolled: boolean;
}

export default function SearchBar({
  isOpen,
  onClose,
  isScrolled,
}: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const searchRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Handle search logic here
      console.log("Searching for:", searchQuery);
      // You can navigate to search results page or filter content
      onClose();
      setSearchQuery("");
    }
  };

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      ref={searchRef}
      className={`absolute top-full left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#F5F3ED]" : " bg-opacity-80"
      }  border-t ${isScrolled ? "border-[#F5F3ED]" : ""}`}
    >
      <div className="max-w-6xl px-6 py-6 mx-auto">
        <form onSubmit={handleSearchSubmit} className="flex justify-center">
          <div className="relative w-full max-w-2xl">
            <div className="relative">
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="What can we help you find?"
                className={`w-full px-6 py-4 pl-6 pr-16 text-base rounded-full border-2 focus:outline-none transition-all duration-200 ${
                  isScrolled
                    ? "bg-white border-gray-300 text-gray-700 placeholder-gray-500"
                    : "bg-white bg-opacity-95 border-white border-opacity-50 text-gray-700 placeholder-gray-500 backdrop-blur-sm "
                } shadow-lg`}
              />
              <button
                type="submit"
                className="absolute inset-y-0 right-0 flex items-center justify-center w-12 h-12 m-1 transition-colors duration-200 bg-orange-300 rounded-full hover:bg-orange-400 group"
                aria-label="Search"
              >
                <svg
                  className="w-5 h-5 text-white transition-transform duration-200 group-hover:scale-110"
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
              </button>
            </div>

            {/* Close button positioned outside the search bar */}
            <button
              type="button"
              onClick={onClose}
              className={`absolute -top-2 -right-2 w-8 h-8 rounded-full transition-colors duration-200 flex items-center justify-center ${
                isScrolled
                  ? "bg-gray-200 text-gray-600 hover:bg-gray-300"
                  : "bg-white bg-opacity-20 text-gray-800 hover:bg-opacity-30 backdrop-blur-sm"
              }`}
              aria-label="Close search"
            >
              <svg
                className="w-4 h-4"
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
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
