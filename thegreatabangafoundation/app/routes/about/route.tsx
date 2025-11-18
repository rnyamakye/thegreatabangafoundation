import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import LeadershipDesign from "~/components/LeadershipDesign";
import LatestNews from "~/components/LatestNews";
import MotionWrapper from "~/components/MotionWrapper";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  staggerItem,
  scaleIn,
  viewportOptions,
} from "~/utils/motion";

export function meta() {
  return [
    { title: "About - The Great Abanga Foundation" },
    {
      name: "description",
      content:
        "Learn about our founder's passion for education and how TGAF is transforming lives through scholarships and educational support.",
    },
  ];
}

// Custom hook for reveal on scroll animation
function useRevealOnScroll() {
  const elementsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    elementsRef.current.forEach((element) => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      elementsRef.current.forEach((element) => {
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };

  return addToRefs;
}

// Custom hook for counter animation
function useCountUp(endValue: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const startValue = 0;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
      const easedProgress = easeOutCubic(progress);

      const currentCount = Math.floor(
        startValue + (endValue - startValue) * easedProgress
      );
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, endValue, duration]);

  return { count, elementRef };
}

export default function About() {
  const addToRefs = useRevealOnScroll();

  // Initialize counters for about page stats
  const studentsCounter = useCountUp(15);
  const investmentCounter = useCountUp(25000);
  const successRateCounter = useCountUp(100);

  return (
    <>
      <div className="min-h-screen transition-colors duration-200">
        {/* Hero Section with Background Image */}
        <MotionWrapper variants={fadeInUp} className="relative h-[100vh]">
          {/* SVG Background Fallback */}
          <div className="absolute inset-0 hero-svg-background" />

          {/* Background Image */}
          <div className="absolute inset-0 bg-no-repeat bg-top bg-cover bg-[url('/leadership_img1.jpg')] ">
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/50" />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 flex items-center justify-center px-6 py-20 mx-auto min-h-150">
            <div className="flex flex-col items-center justify-center text-center">
              <h1 className="mb-6 text-6xl font-extrabold leading-tight text-gray-100 md:text-7xl drop-shadow-lg">
                About Us
              </h1>
            </div>

            {/* Quote positioned at bottom */}
            <div className="absolute w-full max-w-4xl px-6 transform -translate-x-1/2 bottom-20 left-1/2">
              <div className="relative z-10 flex flex-col text-center">
                <blockquote className="text-lg italic font-medium text-gray-100 font-quicksand md:text-xl">
                  "We make a living by what we get, but we make a life by what
                  we give."
                </blockquote>
                <cite className="block mt-2 text-sm font-semibold text-gray-200 font-quicksand md:text-base">
                  – Winston Churchill
                </cite>
              </div>
            </div>
          </div>

          {/* Scroll Down Arrow */}
          <div className="absolute transform -translate-x-1/2 bottom-8 left-1/2">
            <div
              className="flex flex-col items-center text-white cursor-pointer"
              onClick={() =>
                window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
              }
            >
              <span className="mb-2 text-sm font-medium opacity-80">
                Scroll Down
              </span>
              <svg
                className="w-6 h-6 transition-opacity duration-300 opacity-80 hover:opacity-100"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </div>
        </MotionWrapper>

        {/* Mission Section with Team Photo */}
        <section className="py-20 bg-white">
          <div className="px-6 mx-auto max-w-7xl">
            <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
              {/* Left Side - Team Photo with Decorative Elements */}
              <MotionWrapper variants={fadeInLeft} className="relative">
                <div className="">
                  {/* Background Decorative Shapes */}
                  <div className="absolute w-64 h-64 rounded-full -top-8 -left-8 bg-gradient-to-br from-pink-400 via-orange-500 to-orange-600 opacity-20 blur-3xl"></div>
                  <div className="absolute w-48 h-48 rounded-full -bottom-8 -right-8 bg-gradient-to-tl from-[#374a5c] to-blue-400 opacity-15 blur-2xl"></div>

                  {/* Main Photo Container with Custom Shape */}
                  <div className="relative">
                    {/* Decorative Pink Shape Behind Photo */}
                    <div className="absolute w-full h-full -top-4 -right-4">
                      <div className="w-full h-full transform rounded-full pink-gradient opacity-80 rotate-12"></div>
                    </div>

                    {/* Team Photo with Custom Rounded Shape */}
                    <div className="relative z-10 overflow-hidden transition-transform duration-500 transform shadow-2xl rounded-xl ">
                      <img
                        src="/communitydevelopment_img.jpg"
                        alt="The Great Abanga Foundation Team"
                        className="object-cover w-full h-80 md:h-120"
                      />
                    </div>

                    {/* Additional Decorative Elements */}
                    <div className="absolute w-24 h-24 rounded-full -bottom-6 -left-6 bg-gradient-to-br from-yellow-400 to-orange-500 opacity-60 blur-sm"></div>
                    <div className="absolute w-16 h-16 border-4 border-orange-300 rounded-full top-8 -left-4 opacity-40"></div>
                  </div>
                </div>
              </MotionWrapper>

              {/* Right Side - Mission Content */}
              <MotionWrapper variants={fadeInRight} className="">
                <div className="space-y-8">
                  <div>
                    <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl font-quicksand">
                      Our Mission & Vision
                    </h2>
                    <div className="w-20 h-1 mb-8 bg-orange-300"></div>
                  </div>

                  <div className="space-y-6">
                    <p className="mb-4 text-lg italic font-medium leading-relaxed text-gray-700 md:text-xl font-quicksand">
                      "Creating a future where no one is left behind, where
                      everyone is empowered, uplifted, and cared for."
                    </p>
                    <p className="text-lg leading-relaxed text-gray-700 md:text-xl font-quicksand">
                      The great Abanga Foundation is a foundation committed to
                      empowering communities by promoting access to quality
                      education, improving healthcare for the sick and
                      underprivileged, and fostering sustainable development
                      initiatives.
                    </p>
                  </div>

                  {/* Call to Action */}
                  <div className="pt-6">
                    <Link
                      to="/about/mission"
                      className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 transform bg-[#374a5c] shadow-lg rounded-xl hover:scale-105 hover:shadow-xl"
                    >
                      Learn More
                      <svg
                        className="w-5 h-5 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </MotionWrapper>
            </div>
          </div>
        </section>

        <div className="bg-[#F7F2ED]/60">
          <div className="flex flex-col items-center pt-20 mx-auto">
            {/* Mission & Vision */}
            <div className="flex gap-12 px-6 mb-16 max-w-7xl md:grid-cols-2">
              <LeadershipDesign />
            </div>

            {/* Governance & Operations */}
            <div className="flex flex-col items-center pb-16 mx-auto bg-white min-w-screen">
              <div className="py-16 max-w-7xl">
                <div className="flex items-center justify-center">
                  <div className="px-6 mb-2 text-center">
                    <h2 className="relative inline-block mb-6 text-4xl font-bold text-gray-900 md:text-5xl font-quicksand">
                      Our Governance & Operations
                      <div className="absolute left-0 w-12 h-1 bg-orange-300 -bottom-2"></div>
                    </h2>
                  </div>
                </div>
                <div className="flex items-center justify-center p-6">
                  <p className="max-w-3xl text-lg text-center text-gray-900">
                    The Great Abanga Foundation operates as a charitable
                    non-profit organization. Helping to bring equality in
                    education and healthcare access for all. Maintaining
                    transparency in all our operations as well as using ethical
                    decision-making processes to ensure the best outcomes for
                    the communities we serve.
                  </p>
                </div>
                <section className="">
                  <div className="px-6 mx-auto max-w-7xl">
                    <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
                      <div className="p-6 text-center">
                        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-[#374a5c] rounded-full">
                          <svg
                            className="w-8 h-8 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                            />
                          </svg>
                        </div>
                        <h3 className="mb-3 text-xl font-semibold text-gray-900">
                          Transparency
                        </h3>
                        <p className="text-gray-600">
                          Open communication and clear reporting to all
                          stakeholders
                        </p>
                      </div>
                      <div className="p-6 text-center ">
                        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-[#374a5c] rounded-full">
                          <svg
                            className="w-8 h-8 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                            />
                          </svg>
                        </div>
                        <h3 className="mb-3 text-xl font-semibold text-gray-900">
                          Accountability
                        </h3>
                        <p className="text-gray-600">
                          Responsible stewardship of resources and measurable
                          outcomes
                        </p>
                      </div>
                      <div className="p-6 text-center ">
                        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-[#374a5c] rounded-full">
                          <svg
                            className="w-8 h-8 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                            />
                          </svg>
                        </div>
                        <h3 className="mb-3 text-xl font-semibold text-gray-900">
                          Integrity
                        </h3>
                        <p className="text-gray-600">
                          Ethical decision-making and unwavering commitment to
                          our values
                        </p>
                      </div>
                      <div className="p-6 text-center bg-white ">
                        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-[#374a5c] rounded-full">
                          <svg
                            className="w-8 h-8 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 10V3L4 14h7v7l9-11h-7z"
                            />
                          </svg>
                        </div>
                        <h3 className="mb-3 text-xl font-semibold text-gray-900">
                          Effectiveness
                        </h3>
                        <p className="text-gray-600">
                          Strategic focus on maximizing impact and achieving our
                          mission
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <Link
                to="/about/governance"
                className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 transform bg-[#374a5c] shadow-lg rounded-xl hover:scale-105 hover:shadow-xl"
              >
                Learn More
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
            <div className="w-full border-t border-gray-200 ">
              <LatestNews />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
