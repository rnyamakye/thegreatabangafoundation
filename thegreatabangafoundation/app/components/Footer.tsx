import { Link } from "react-router";
import { useState, useEffect } from "react";
import BackToTopButton from "./BackToTopButton";

export function Footer() {
  const currentYear = new Date().getFullYear();

  // Newsletter form state
  const [formData, setFormData] = useState({
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({
    email: "",
    general: "",
  });
  const [touched, setTouched] = useState({
    email: false,
  });

  // Validation functions
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const newErrors = {
      email: "",
      general: "",
    };

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error !== "");
  };

  // Newsletter form handlers
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }

    // Clear general error
    if (errors.general) {
      setErrors((prev) => ({
        ...prev,
        general: "",
      }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name } = e.target;
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));

    // Validate field on blur
    if (name === "email" && touched.email) {
      if (!formData.email.trim()) {
        setErrors((prev) => ({ ...prev, email: "Email address is required" }));
      } else if (!validateEmail(formData.email)) {
        setErrors((prev) => ({
          ...prev,
          email: "Please enter a valid email address",
        }));
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Mark all fields as touched
    setTouched({
      email: true,
    });

    // Validate form
    if (!validateForm()) {
      setErrors((prev) => ({
        ...prev,
        general: "Please correct the errors above before submitting",
      }));
      return;
    }

    setIsSubmitting(true);
    setErrors({ email: "", general: "" });

    try {
      // Simulate form submission with potential failure
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          // Simulate random server error (10% chance)
          if (Math.random() < 0.1) {
            reject(new Error("Server error"));
          } else {
            resolve(true);
          }
        }, 1000);
      });

      setSubmitted(true);
      setIsSubmitting(false);

      // Reset form after success message
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          email: "",
        });
        setTouched({
          email: false,
        });
      }, 3000);
    } catch (error) {
      setIsSubmitting(false);
      setErrors((prev) => ({
        ...prev,
        general: "Something went wrong. Please try again later.",
      }));
    }
  };

  return (
    <footer className="bg-[#F2ECE6] border-t border-gray-200 px-0 md:px-5">
      <div className="px-6 py-12 mx-auto max-w-screen">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-6">
          {/* Logo and Mission */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-6 space-x-3">
              <img
                src="/logo.png"
                alt="The Great Abanga Foundation"
                className="w-auto h-12"
              />
              <span className="text-xl font-bold text-[#4c4c4c]">TGAF</span>
            </div>
            <p className="mb-4 leading-relaxed text-[#4c4c4c]">
              Creating a future where no one is left behind — empowered,
              uplifted, and cared for. We provide scholarships, tuition
              assistance, and educational support to help deserving students
              achieve their dreams of higher education across Africa.
            </p>
            <p className="italic font-semibold text-[#4c4c4c]/70">
              "Helping Hands, Brighter Tomorrow"
            </p>
          </div>
          <div className="flex gap-25 md:gap-20 md:col-span-2">
            {/* Quick Links */}
            <div>
              <h3 className="mb-4 text-xl font-semibold text-[#4c4c4c]">
                Quick Links
              </h3>
              <ul className="grid space-y-2 ">
                <li>
                  <Link
                    to="/"
                    className="text-[#4c4c4c] transition-colors duration-200 hover:text-[#4c4c4c]"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-[#4c4c4c] transition-colors duration-200 hover:text-[#4c4c4c]"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/impact"
                    className="text-[#4c4c4c] transition-colors duration-200 hover:text-[#4c4c4c]"
                  >
                    Impact
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    className="text-[#4c4c4c] transition-colors duration-200 hover:text-[#4c4c4c]"
                  >
                    Blog
                  </Link>
                </li>
                {/* <li>
                <Link
                  to="/donate"
                  className="text-[#4c4c4c] transition-colors duration-200 hover:text-[#4c4c4c]"
                >
                  Donate
                </Link>
              </li> */}
                <li>
                  <Link
                    to="/contact"
                    className="text-[#4c4c4c] transition-colors duration-200 hover:text-[#4c4c4c]"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* About Links */}
            <div>
              <h3 className="mb-4 text-xl font-semibold text-[#4c4c4c]">
                About
              </h3>
              <ul className="grid space-y-2">
                <li>
                  <Link
                    to="/about/mission"
                    className="text-[#4c4c4c] transition-colors duration-200 hover:text-[#4c4c4c]"
                  >
                    Our Mission
                  </Link>
                </li>

                <li>
                  <Link
                    to="/about/governance"
                    className="text-[#4c4c4c] transition-colors duration-200 hover:text-[#4c4c4c]"
                  >
                    Governance
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about/leadership"
                    className="text-[#4c4c4c] transition-colors duration-200 hover:text-[#4c4c4c]"
                  >
                    Leadership
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-xl font-semibold text-[#4c4c4c]">
              Contact Info
            </h3>
            <div className="space-y-3 text-[#4c4c4c]">
              <div className="flex items-start space-x-2">
                <svg
                  className="w-5 h-5 mt-0.5 text-[#4c4c4c]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-sm">Sunyani, Ghana</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-[#4c4c4c]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a
                  href="tel:0544902900"
                  className="text-sm transition-colors duration-200 hover:text-[#4c4c4c]"
                >
                  0544902900
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-[#4c4c4c]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 7.89a2 2 0 002.83 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:greatabangafoundation@gmail.com"
                  className="text-sm transition-colors duration-200 hover:text-[#4c4c4c] text-wrap"
                >
                  greatabangafoundation@gmail.com
                </a>
              </div>

              {/* Social Media Links */}
              <div className="pt-2">
                {/* <h4 className="mb-2 text-sm font-medium text-gray-700">
                  Follow Us:
                </h4> */}
                {/* <div className="flex space-x-3">
                  <a
                    href="https://www.facebook.com/abanga.osman.397"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#4c4c4c] transition-colors duration-200 hover:text-[#4c4c4c]"
                    aria-label="Facebook"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/the_great_abanga_foundation?igsh=MXVwb2VwaTI4bDdqOA=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#4c4c4c] transition-colors duration-200 hover:text-[#4c4c4c]"
                    aria-label="Instagram"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.tiktok.com/@the.great.foundat6?is_from_webapp=1&sender_device=pc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#4c4c4c] transition-colors duration-200 hover:text-[#4c4c4c]"
                    aria-label="TikTok"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                    </svg>
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="pt-8 mt-8 border-t border-gray-300">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-sm text-[#4c4c4c]">
              © {currentYear} The Great Abanga Foundation. All rights reserved.
            </p>

            {/* Policy Links */}
            <div className="flex flex-wrap items-center justify-center space-x-6 text-sm">
              <Link
                to="/privacy-policy"
                className="text-[#4c4c4c] transition-colors duration-200 hover:text-gray-800 hover:underline"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-of-service"
                className="text-[#4c4c4c] transition-colors duration-200 hover:text-gray-800 hover:underline"
              >
                Terms of Service
              </Link>
              <Link
                to="/cookie-policy"
                className="text-[#4c4c4c] transition-colors duration-200 hover:text-gray-800 hover:underline"
              >
                Cookie Policy
              </Link>
              <Link
                to="/data-protection"
                className="text-[#4c4c4c] transition-colors duration-200 hover:text-gray-800 hover:underline"
              >
                Data Protection
              </Link>
            </div>
          </div>

          {/* Back to Top Button - Centered at bottom */}
          <div className="flex justify-center mt-6">
            <BackToTopButton />
          </div>
        </div>
      </div>
    </footer>
  );
}
