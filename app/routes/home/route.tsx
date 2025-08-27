import { useEffect, useRef } from "react";
import { Link } from "react-router";
import ImageSlider from "../../components/ImageSlider";
import LeadershipDesign from "../../components/LeadershipDesign";

// Loader function for the home route
export async function loader() {
  return null;
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

// Default export component
export default function Home() {
  const addToRefs = useRevealOnScroll();

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          .reveal-element {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.8s ease-out;
          }
          
          .reveal-visible {
            opacity: 1;
            transform: translateY(0);
          }
          
          .reveal-fade-in {
            opacity: 0;
            transition: opacity 1s ease-out;
          }
          
          .reveal-fade-in.reveal-visible {
            opacity: 1;
          }
          
          .reveal-slide-up {
            opacity: 0;
            transform: translateY(50px);
            transition: all 0.8s ease-out;
          }
          
          .reveal-slide-up.reveal-visible {
            opacity: 1;
            transform: translateY(0);
          }
          
          .reveal-slide-left {
            opacity: 0;
            transform: translateX(-50px);
            transition: all 0.8s ease-out;
          }
          
          .reveal-slide-left.reveal-visible {
            opacity: 1;
            transform: translateX(0);
          }
          
          .reveal-slide-right {
            opacity: 0;
            transform: translateX(50px);
            transition: all 0.8s ease-out;
          }
          
          .reveal-slide-right.reveal-visible {
            opacity: 1;
            transform: translateX(0);
          }
          
          .reveal-scale {
            opacity: 0;
            transform: scale(0.8);
            transition: all 0.8s ease-out;
          }
          
          .reveal-scale.reveal-visible {
            opacity: 1;
            transform: scale(1);
          }
        `,
        }}
      />
      <main className="min-h-screen overflow-x-hidden transition-colors duration-200 min-w-screen">
        {/* SECTION 1: Hero Section with Background Image */}
        <section id="hero-section" className="relative min-h-screen">
          {/* Background Image */}
          <div className="absolute inset-0 bg-center bg-no-repeat bg-cover bg-[url('/donation_img.jpg')]">
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/80"></div>
          </div>

          {/* Hero Content */}
          <div className="relative z-10 max-w-6xl px-6 py-20 mx-auto">
            <div className="mb-20 text-center reveal-fade-in" ref={addToRefs}>
              <div
                className="flex items-center justify-center w-64 h-64 mx-auto mb-12 md:w-80 md:h-80 reveal-scale"
                ref={addToRefs}
              >
                <img
                  src="/logo.png"
                  alt="The Great Abanga Foundation"
                  className="object-contain w-full h-full drop-shadow-2xl"
                />
              </div>

              <h1
                className="mb-6 text-3xl font-bold text-white md:text-6xl reveal-slide-up drop-shadow-lg"
                ref={addToRefs}
              >
                The Great Abanga Foundation
              </h1>

              <p
                className="mb-6 text-lg font-semibold text-orange-400 md:text-3xl reveal-slide-up drop-shadow-lg"
                ref={addToRefs}
              >
                Helping Hands Brighter Tomorrow
              </p>

              <p
                className="max-w-4xl mx-auto mb-6 text-base leading-relaxed text-gray-100 md:text-xl reveal-slide-up drop-shadow-lg"
                ref={addToRefs}
              >
                Creating a future where no one is left behind — empowered,
                uplifted, and cared for. Empowering communities across Ghana and
                Canada through comprehensive programs in education, healthcare,
                and sustainable development.
              </p>

              <div
                className="flex flex-col items-center justify-center gap-4 mb-8 sm:flex-row reveal-slide-up"
                ref={addToRefs}
              >
                <div className="flex items-center space-x-2 text-lg text-gray-200">
                  <svg
                    className="w-5 h-5 text-orange-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-medium">Ghana - Sunyani</span>
                </div>
                <div className="hidden text-gray-400 sm:block">•</div>
                <div className="flex items-center space-x-2 text-lg text-gray-200">
                  <svg
                    className="w-5 h-5 text-orange-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-medium">Canada</span>
                </div>
              </div>

              <div
                className="flex flex-col justify-center gap-4 pt-10 sm:flex-row reveal-slide-up"
                ref={addToRefs}
              >
                <a href="/impact" className="btn-tgaf-primary">
                  See Our Impact
                </a>
                <a href="/contact" className="btn-tgaf-secondary">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: Our Commitment to Communities */}
        <section id="commitment-section" style={{ backgroundColor: "#F7F2ED" }}>
          <div className="px-4 py-16 mx-auto md:py-20 md:px-6 md:max-w-6xl">
            {/* Stats Section */}
            {/* <div
              className="grid grid-cols-1 gap-8 mb-20 md:grid-cols-4 reveal-fade-in"
              ref={addToRefs}
            >
              <div
                className="p-6 text-center rounded-lg bg-gray-200/50 reveal-slide-up"
                ref={addToRefs}
              >
                <div className="mb-2 text-4xl font-bold tgaf-orange">3+</div>
                <div className="font-medium text-black">Community Programs</div>
              </div>
              <div
                className="p-6 text-center rounded-lg bg-gray-200/50 reveal-slide-up"
                ref={addToRefs}
              >
                <div className="mb-2 text-4xl font-bold tgaf-orange">₵25K+</div>
                <div className="font-medium text-black">
                  Community Investment
                </div>
              </div>
              <div
                className="p-6 text-center rounded-lg bg-gray-200/50 reveal-slide-up"
                ref={addToRefs}
              >
                <div className="mb-2 text-4xl font-bold tgaf-orange">1</div>
                <div className="font-medium text-black">
                  University Partnered
                </div>
              </div>
              <div
                className="p-6 text-center rounded-lg bg-gray-200/50 reveal-slide-up"
                ref={addToRefs}
              >
                <div className="mb-2 text-4xl font-bold tgaf-orange">2</div>
                <div className="font-medium text-black">Years of Impact</div>
              </div>
            </div> */}

            {/* SUBSECTION 2A: Foundation Goals */}
            <div
              id="foundation-goals"
              className="p-6 mb-16 rounded-lg md:p-12 md:mb-20 reveal-fade-in"
              ref={addToRefs}
            >
              <h2
                className="mb-8 text-2xl font-bold text-center sm:text-4xl reveal-slide-up"
                style={{ color: "#3E2723" }}
                ref={addToRefs}
              >
                Our Commitment to Communities
              </h2>
              <p
                className="max-w-3xl mx-auto mb-8 text-center"
                style={{ color: "#3E2723" }}
              >
                Established for charitable purposes in July 2025, our foundation
                operates as a non-profit organization dedicated to transparent
                and impactful community service.
              </p>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className="text-center reveal-slide-up" ref={addToRefs}>
                  <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                    <img
                      src="/education_img.jpg"
                      alt="Education programs"
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-200/80 to-transparent"></div>
                    <div className="absolute bottom-3 left-3">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full shadow-lg bg-white/20 backdrop-blur-sm">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <h3
                    className="mb-3 text-lg font-bold"
                    style={{ color: "#3E2723" }}
                  >
                    Education
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#3E2723" }}
                  >
                    Scholarships, educational resources, and infrastructure
                    support for underprivileged students.
                  </p>
                </div>
                <div className="text-center reveal-slide-up" ref={addToRefs}>
                  <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                    <img
                      src="/healthcare.jpg"
                      alt="Healthcare services"
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-200/80 to-transparent"></div>
                    <div className="absolute bottom-3 left-3">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full shadow-lg bg-white/20 backdrop-blur-sm">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <h3
                    className="mb-3 text-lg font-bold"
                    style={{ color: "#3E2723" }}
                  >
                    Healthcare
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#3E2723" }}
                  >
                    Medical aid, health awareness programs, and treatment for
                    the sick and vulnerable.
                  </p>
                </div>
                <div className="text-center reveal-slide-up" ref={addToRefs}>
                  <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                    <img
                      src="/communitydevelopment_img.jpg"
                      alt="Community development"
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-200/80 to-transparent"></div>
                    <div className="absolute bottom-3 left-3">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full shadow-lg bg-white/20 backdrop-blur-sm">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <h3
                    className="mb-3 text-lg font-bold"
                    style={{ color: "#3E2723" }}
                  >
                    Community Development
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#3E2723" }}
                  >
                    Clean water access, food security, and livelihood
                    improvement programs.
                  </p>
                </div>
                {/* <div className="text-center reveal-slide-up" ref={addToRefs}>
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full shadow-lg bg-gradient-to-br from-orange-500 to-orange-600">
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
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                    />
                  </svg>
                </div>
                <h3 className="mb-3 text-lg font-bold text-gray-900">
                  Advocacy & Empowerment
                </h3>
                <p className="text-sm leading-relaxed text-gray-700">
                  Social welfare policies and skills training for marginalized
                  groups.
                </p>
              </div> */}
              </div>
            </div>

            {/* SUBSECTION 2B: Leadership Highlight */}
            <div
              id="leadership-highlight"
              className="mx-4 mb-16 md:mx-5 md:mb-20 reveal-fade-in"
              ref={addToRefs}
            >
              <h2
                className="mb-8 text-2xl font-bold text-center md:text-3xl md:mb-12 reveal-slide-up"
                style={{ color: "#3E2723" }}
                ref={addToRefs}
              >
                Led by Visionary Leaders
              </h2>

              <div className="reveal-slide-up" ref={addToRefs}>
                <div className="relative">
                  {/* Rotated black background div */}
                  <div
                    className="absolute inset-0 bg-black -z-10 rounded-2xl"
                    style={{
                      transform: "rotate(1deg)",
                    }}
                  />
                  {/* Main content div with flex layout */}
                  <div className="p-8 bg-gradient-to-r from-orange-400 to-orange-300 rounded-2xl">
                    <div className="flex flex-col items-center gap-8 lg:flex-row">
                      {/* Leadership Design Component */}
                      <div className="flex justify-center flex-1 lg:justify-start">
                        <LeadershipDesign />
                      </div>

                      {/* Text Content */}
                      <div className="flex-1 text-center text-white lg:text-left">
                        <p className="mb-6 text-lg">
                          Under the leadership of CEO Osman Hakim Abdul, along
                          with Manager Amanfo Martha Simaa, PRO Amoah Gideon,
                          and Publicity Ruth, our foundation continues to expand
                          its impact across communities.
                        </p>
                        <p className="mb-6 text-lg font-medium">
                          Together, we're building bridges of opportunity and
                          hope.
                        </p>
                        <Link
                          to="/about"
                          className="relative inline-flex items-center px-6 py-3 overflow-hidden font-semibold text-orange-500 transition-all duration-500 bg-white rounded-lg hover:text-white hover:scale-105 group"
                        >
                          <span className="absolute inset-0 w-0 transition-all duration-500 ease-out bg-black group-hover:w-full"></span>
                          <span className="relative z-10">
                            Meet Our Leaders
                          </span>
                          <svg
                            className="relative z-10 w-5 h-5 ml-2"
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
                  </div>
                </div>
              </div>
            </div>

            {/* SUBSECTION 2C: Education Mission Statement */}
            <section
              id="education-mission"
              className="w-screen h-[100vh] relative left-1/2 right-1/2 -mx-[50vw]"
            >
              <div className="flex flex-col justify-center h-full p-5 mb-16 md:p-12 bg-gradient-to-br from-gray-50 to-gray-100">
                <div className="flex flex-col mx-auto md:flex-row md:items-center md:gap-12">
                  {/* Text Content */}
                  <div className="text-center md:w-1/2 md:text-left">
                    <h2
                      className="mb-6 text-2xl font-bold text-gray-900 md:text-4xl reveal-slide-up"
                      ref={addToRefs}
                    >
                      Transforming Lives Through Education
                    </h2>
                    <p
                      className="text-base leading-relaxed text-gray-600 md:text-xl reveal-slide-up"
                      ref={addToRefs}
                    >
                      Every student deserves the opportunity to pursue higher
                      education, regardless of their financial background.
                      Through our comprehensive scholarship programs, we remove
                      financial barriers and open doors to academic excellence,
                      empowering the next generation of African leaders,
                      innovators, and change-makers.
                    </p>
                  </div>

                  {/* Image Slider */}
                  <div
                    className="mt-8 md:w-1/2 md:mt-0 reveal-fade-in"
                    ref={addToRefs}
                  >
                    <ImageSlider />
                  </div>
                </div>
              </div>
            </section>
            {/* SUBSECTION 2D: Impact Stories */}
            <div
              id="impact-stories"
              className="p-4 mb-16 md:p-12 md:mb-20 reveal-fade-in"
              ref={addToRefs}
            >
              <h3
                className="mb-8 text-2xl font-bold text-center text-gray-900 md:text-3xl md:mb-12 reveal-slide-up"
                ref={addToRefs}
              >
                Our Impact Stories
              </h3>
              <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
                <div className="text-center reveal-slide-up" ref={addToRefs}>
                  <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                    <img
                      src="/education_img.jpg"
                      alt="Academic Excellence"
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-400/80 to-transparent"></div>
                    {/* <div className="absolute bottom-3 left-3">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full shadow-lg bg-white/20 backdrop-blur-sm">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                          />
                        </svg>
                      </div>
                    </div> */}
                  </div>
                  <h4 className="mb-4 text-lg font-semibold text-gray-900 md:text-xl">
                    Academic Excellence
                  </h4>
                  <p className="text-sm leading-relaxed text-gray-600 md:text-base">
                    Our scholarship recipients maintain an average GPA of 3.8+
                    and have a 95% graduation rate, demonstrating the power of
                    removing financial barriers to education.
                  </p>
                </div>
                <div className="text-center reveal-slide-up" ref={addToRefs}>
                  <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                    <img
                      src="/soboloparty_img.jpg"
                      alt="Sponsoring School Events"
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-400/80 to-transparent"></div>
                    {/* <div className="absolute bottom-3 left-3">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full shadow-lg bg-white/20 backdrop-blur-sm">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4M8 7h8M8 7l-2 9a2 2 0 002 2h8a2 2 0 002-2L16 7M9 11v6m6-6v6"
                          />
                        </svg>
                      </div>
                    </div> */}
                  </div>
                  <h4 className="mb-4 text-lg font-semibold text-gray-900 md:text-xl">
                    Sponsoring School Events
                  </h4>
                  <p className="text-sm leading-relaxed text-gray-600 md:text-base">
                    We support educational institutions by sponsoring academic
                    events, conferences, and competitions that promote learning
                    and excellence in various fields of study.
                  </p>
                </div>
                <div className="text-center reveal-slide-up" ref={addToRefs}>
                  <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                    <img
                      src="/financial_aid_img.jpg"
                      alt="Financial Aid"
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-400/80 to-transparent"></div>
                    {/* <div className="absolute bottom-3 left-3">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full shadow-lg bg-white/20 backdrop-blur-sm">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                    </div> */}
                  </div>
                  <h4 className="mb-4 text-lg font-semibold text-gray-900 md:text-xl">
                    Financial Aid
                  </h4>
                  <p className="text-sm leading-relaxed text-gray-600 md:text-base">
                    Direct financial assistance to families in need, helping
                    cover essential expenses like tuition fees, medical bills,
                    and basic living costs during challenging times.
                  </p>
                </div>
              </div>

              {/* View More Impact Button */}
              <div
                className="mt-12 text-center reveal-slide-up"
                ref={addToRefs}
              >
                <Link
                  to="/impact"
                  className="relative inline-flex items-center px-8 py-4 overflow-hidden font-semibold text-white transition-all duration-500 shadow-lg rounded-xl group bg-gradient-to-r from-orange-400 to-orange-500"
                >
                  <span className="absolute inset-0 w-0 transition-all duration-500 ease-out bg-black group-hover:w-full"></span>
                  <span className="relative z-10">View Our Full Impact</span>
                  <svg
                    className="relative z-10 w-5 h-5 ml-2"
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

            {/* SUBSECTION 2E: Social Media Follow Us */}
            <div
              id="social-media"
              className="p-6 text-center md:p-12 bg-gradient-to-br from-gray-50 to-gray-100 "
            >
              <h3
                className="mb-6 text-xl font-extrabold text-gray-700 md:text-3xl md:mb-8 reveal-slide-up"
                ref={addToRefs}
              >
                Follow The great Abanga Foundation
              </h3>

              <div
                className="flex flex-wrap items-center justify-center gap-6 reveal-slide-up"
                ref={addToRefs}
              >
                <div className="pt-2">
                  <div className="flex space-x-3">
                    <a
                      href="https://www.facebook.com/abanga.osman.397"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative p-2 overflow-hidden text-white text-gray-600 transition-colors duration-200 bg-orange-500 rounded-full group"
                      aria-label="Facebook"
                    >
                      <span className="absolute inset-0 w-0 h-full transition-all duration-500 ease-out bg-black rounded-full group-hover:w-full"></span>
                      <span className="relative z-10 flex items-center justify-center">
                        <svg
                          className="w-5 h-5 md:w-8 md:h-8"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                      </span>
                    </a>
                    <a
                      href="https://www.instagram.com/the_great_abanga_foundation?igsh=MXVwb2VwaTI4bDdqOA=="
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative p-2 overflow-hidden text-white text-gray-600 transition-colors duration-200 bg-orange-500 rounded-full group"
                      aria-label="Instagram"
                    >
                      <span className="absolute inset-0 w-0 h-full transition-all duration-500 ease-out bg-black rounded-full group-hover:w-full"></span>
                      <span className="relative z-10 flex items-center justify-center">
                        <svg
                          className="w-5 h-5 md:w-8 md:h-8"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      </span>
                    </a>
                    <a
                      href="https://www.tiktok.com/@the.great.foundat6?is_from_webapp=1&sender_device=pc"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative p-2 overflow-hidden text-white text-gray-600 transition-colors duration-200 bg-orange-500 rounded-full group"
                      aria-label="TikTok"
                    >
                      <span className="absolute inset-0 w-0 h-full transition-all duration-500 ease-out bg-black rounded-full group-hover:w-full"></span>
                      <span className="relative z-10 flex items-center justify-center">
                        <svg
                          className="w-5 h-5 md:w-8 md:h-8"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
              </div>

              <p
                className="mt-6 text-sm text-gray-500 reveal-slide-up"
                ref={addToRefs}
              >
                Together, we can build a brighter future for our communities.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
