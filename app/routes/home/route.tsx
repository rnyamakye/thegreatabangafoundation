import { useEffect, useRef } from "react";

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
      <main className="min-h-screen transition-colors duration-200">
        {/* Hero Section with Background Image */}
        <div className="relative min-h-screen">
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
                className="mb-6 text-5xl font-bold text-white md:text-6xl reveal-slide-up drop-shadow-lg"
                ref={addToRefs}
              >
                The Great Abanga Foundation
              </h1>

              <p
                className="mb-6 text-2xl font-semibold text-orange-400 md:text-3xl reveal-slide-up drop-shadow-lg"
                ref={addToRefs}
              >
                Helping Hands Brighter Tomorrow
              </p>

              <p
                className="max-w-4xl mx-auto mb-6 text-xl leading-relaxed text-gray-100 reveal-slide-up drop-shadow-lg"
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
        </div>

        {/* Content Section with Light Background */}
        <div className="bg-gradient-to-br from-gray-50 via-white to-white">
          <div className="max-w-6xl px-6 py-20 mx-auto">
            {/* Stats Section */}
            <div
              className="grid grid-cols-1 gap-8 mb-20 md:grid-cols-4 reveal-fade-in"
              ref={addToRefs}
            >
              <div
                className="p-6 text-center bg-transparent rounded-lg reveal-slide-up"
                ref={addToRefs}
              >
                <div className="mb-2 text-4xl font-bold tgaf-orange">3+</div>
                <div className="font-medium text-black">Community Programs</div>
              </div>
              <div
                className="p-6 text-center bg-transparent rounded-lg reveal-slide-up"
                ref={addToRefs}
              >
                <div className="mb-2 text-4xl font-bold tgaf-orange">₵25K+</div>
                <div className="font-medium text-black">
                  Community Investment
                </div>
              </div>
              <div
                className="p-6 text-center bg-transparent rounded-lg reveal-slide-up"
                ref={addToRefs}
              >
                <div className="mb-2 text-4xl font-bold tgaf-orange">1</div>
                <div className="font-medium text-black">
                  University Partnered
                </div>
              </div>
              <div
                className="p-6 text-center bg-transparent rounded-lg reveal-slide-up"
                ref={addToRefs}
              >
                <div className="mb-2 text-4xl font-bold tgaf-orange">2</div>
                <div className="font-medium text-black">Years of Impact</div>
              </div>
            </div>

            {/* Foundation Goals Section */}
            <div
              className="p-8 mb-20 bg-transparent rounded-2xl sm:p-12 reveal-fade-in"
              ref={addToRefs}
            >
              <h2
                className="mb-8 text-3xl font-bold text-center text-gray-900 sm:text-4xl reveal-slide-up"
                ref={addToRefs}
              >
                Our Commitment to Communities
              </h2>
              <p className="max-w-3xl mx-auto mb-8 text-center text-gray-700">
                Established for charitable purposes in July 2025, our foundation
                operates as a non-profit organization dedicated to transparent
                and impactful community service.
              </p>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className="text-center reveal-slide-up" ref={addToRefs}>
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
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-3 text-lg font-bold text-gray-900">
                    Education
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-700">
                    Scholarships, educational resources, and infrastructure
                    support for underprivileged students.
                  </p>
                </div>
                <div className="text-center reveal-slide-up" ref={addToRefs}>
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
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-3 text-lg font-bold text-gray-900">
                    Healthcare
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-700">
                    Medical aid, health awareness programs, and treatment for
                    the sick and vulnerable.
                  </p>
                </div>
                <div className="text-center reveal-slide-up" ref={addToRefs}>
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
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-3 text-lg font-bold text-gray-900">
                    Community Development
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-700">
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

            {/* Leadership Highlight */}
            <div className="mb-20 reveal-fade-in" ref={addToRefs}>
              <h2
                className="mb-8 text-3xl font-bold text-center text-gray-900 reveal-slide-up"
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
                  {/* Main content div */}
                  <div className="p-8 text-center text-white bg-gradient-to-r from-orange-600 to-orange-500 rounded-2xl">
                    <p className="mb-6 text-lg">
                      Under the leadership of CEO Osman Hakim Abdul, along with
                      Manager Amanfo Martha Simaa, PRO Amoah Gideon, and
                      Publicity Ruth, our foundation continues to expand its
                      impact across communities.
                    </p>
                    <p className="text-lg font-medium">
                      Together, we're building bridges of opportunity and hope.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mission Statement */}
            <div className="mb-16 text-center reveal-fade-in" ref={addToRefs}>
              <h2
                className="mb-6 text-4xl font-bold text-gray-900 reveal-slide-up"
                ref={addToRefs}
              >
                Transforming Lives Through Education
              </h2>
              <p
                className="max-w-4xl mx-auto text-xl leading-relaxed text-gray-600 reveal-slide-up"
                ref={addToRefs}
              >
                Every student deserves the opportunity to pursue higher
                education, regardless of their financial background. Through our
                comprehensive scholarship programs, we remove financial barriers
                and open doors to academic excellence, empowering the next
                generation of African leaders, innovators, and change-makers.
              </p>
            </div>

            {/* Impact Stories Section */}
            <div
              className="p-12 mb-20 bg-transparent rounded-2xl reveal-fade-in"
              ref={addToRefs}
            >
              <h3
                className="mb-12 text-3xl font-bold text-center text-gray-900 reveal-slide-up"
                ref={addToRefs}
              >
                Our Impact Stories
              </h3>
              <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                <div className="text-center reveal-slide-up" ref={addToRefs}>
                  <div
                    className="flex items-center justify-center w-20 h-20 mx-auto mb-6 rounded-full tgaf-bg-gradient reveal-scale"
                    ref={addToRefs}
                  >
                    <svg
                      className="w-10 h-10 text-white"
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
                  <h4 className="mb-4 text-xl font-semibold text-gray-900">
                    Academic Excellence
                  </h4>
                  <p className="leading-relaxed text-gray-600">
                    Our scholarship recipients maintain an average GPA of 3.8+
                    and have a 95% graduation rate, demonstrating the power of
                    removing financial barriers to education.
                  </p>
                </div>
                <div className="text-center reveal-slide-up" ref={addToRefs}>
                  <div
                    className="flex items-center justify-center w-20 h-20 mx-auto mb-6 rounded-full tgaf-bg-gradient reveal-scale"
                    ref={addToRefs}
                  >
                    <svg
                      className="w-10 h-10 text-white"
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
                  <h4 className="mb-4 text-xl font-semibold text-gray-900">
                    Sponsoring School Events
                  </h4>
                  <p className="leading-relaxed text-gray-600">
                    We support educational institutions by sponsoring academic
                    events, conferences, and competitions that promote learning
                    and excellence in various fields of study.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
