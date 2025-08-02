import { useState, useEffect } from "react";

// Theme hook for managing dark/light mode
export function useTheme() {
  const [isDark, setIsDark] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Only run on client side
    if (typeof window === "undefined") return;

    try {
      // Check for saved theme preference or default to light mode
      const savedTheme = localStorage.getItem("theme");
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

      let shouldBeDark = false;

      if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
        shouldBeDark = true;
      }

      console.log("Theme initialization:", {
        savedTheme,
        prefersDark,
        shouldBeDark,
      });

      setIsDark(shouldBeDark);

      // Apply theme immediately to both elements
      const htmlElement = document.documentElement;
      const bodyElement = document.body;

      if (shouldBeDark) {
        htmlElement.classList.add("dark");
        bodyElement.classList.add("dark");
      } else {
        htmlElement.classList.remove("dark");
        bodyElement.classList.remove("dark");
      }

      setIsInitialized(true);
    } catch (error) {
      console.error("Theme initialization error:", error);
      setIsInitialized(true);
    }
  }, []);

  const toggleTheme = () => {
    try {
      const newTheme = !isDark;
      console.log(
        "Toggling theme from",
        isDark ? "dark" : "light",
        "to",
        newTheme ? "dark" : "light"
      );

      setIsDark(newTheme);

      const htmlElement = document.documentElement;
      const bodyElement = document.body;

      if (newTheme) {
        htmlElement.classList.add("dark");
        bodyElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
        console.log("Applied dark theme");
      } else {
        htmlElement.classList.remove("dark");
        bodyElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        console.log("Applied light theme");
      }
    } catch (error) {
      console.error("Theme toggle error:", error);
    }
  };

  return { isDark, toggleTheme, isInitialized };
}

// Theme Toggle Component
interface ThemeToggleProps {
  size?: "sm" | "md" | "lg";
  variant?: "button" | "switch" | "icon";
  className?: string;
  showLabel?: boolean;
}

export function ThemeToggle({
  size = "md",
  variant = "switch",
  className = "",
  showLabel = false,
}: ThemeToggleProps) {
  const { isDark, toggleTheme } = useTheme();

  console.log("ThemeToggle render:", { isDark, variant, size });

  // Size configurations
  const sizeConfig = {
    sm: {
      container: "w-10 h-5",
      toggle: "w-4 h-4",
      translate: "translate-x-5",
      icon: "w-4 h-4",
      button: "p-1.5",
      text: "text-xs",
    },
    md: {
      container: "w-12 h-6",
      toggle: "w-5 h-5",
      translate: "translate-x-6",
      icon: "w-5 h-5",
      button: "p-2",
      text: "text-sm",
    },
    lg: {
      container: "w-14 h-7",
      toggle: "w-6 h-6",
      translate: "translate-x-7",
      icon: "w-6 h-6",
      button: "p-2.5",
      text: "text-base",
    },
  };

  const config = sizeConfig[size];

  const handleToggle = () => {
    console.log("ThemeToggle button clicked!");
    toggleTheme();
  };

  if (variant === "icon") {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        {showLabel && (
          <span
            className={`font-medium text-gray-700 dark:text-gray-300 ${config.text}`}
          >
            {isDark ? "Dark" : "Light"}
          </span>
        )}
        <button
          onClick={handleToggle}
          className={`${config.button} rounded-md text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400`}
          aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        >
          {isDark ? (
            // Sun icon for light mode
            <svg
              className={config.icon}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          ) : (
            // Moon icon for dark mode
            <svg
              className={config.icon}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          )}
        </button>
      </div>
    );
  }

  if (variant === "button") {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        {showLabel && (
          <span
            className={`font-medium text-gray-700 dark:text-gray-300 ${config.text}`}
          >
            Theme:
          </span>
        )}
        <button
          onClick={handleToggle}
          className={`${config.button} px-3 py-1.5 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 flex items-center gap-1.5 ${config.text}`}
        >
          {isDark ? (
            <>
              <svg
                className={config.icon}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
              Light
            </>
          ) : (
            <>
              <svg
                className={config.icon}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
              Dark
            </>
          )}
        </button>
      </div>
    );
  }

  // Default switch variant
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {showLabel && (
        <span
          className={`font-medium text-gray-700 dark:text-gray-300 ${config.text}`}
        >
          {isDark ? "Dark" : "Light"} Mode
        </span>
      )}
      <button
        onClick={handleToggle}
        className={`relative inline-flex ${config.container} items-center rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900 ${
          isDark
            ? "bg-blue-600 dark:bg-blue-500"
            : "bg-gray-300 dark:bg-gray-600"
        }`}
        role="switch"
        aria-checked={isDark}
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      >
        <span
          className={`inline-block ${config.toggle} transform rounded-full bg-white transition-transform duration-300 shadow-lg ${
            isDark ? config.translate : "translate-x-0.5"
          }`}
        >
          <span className="flex items-center justify-center w-full h-full">
            {isDark ? (
              // Moon icon
              <svg
                className="w-3 h-3 text-blue-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              // Sun icon
              <svg
                className="w-3 h-3 text-yellow-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </span>
        </span>
      </button>
    </div>
  );
}
