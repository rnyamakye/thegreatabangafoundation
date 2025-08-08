import { useEffect, useRef } from "react";

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

export default function About() {
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
      <main className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-100 transition-colors duration-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          {/* Header */}
          <div className="text-center mb-16 reveal-fade-in" ref={addToRefs}>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-6 reveal-slide-up"
              ref={addToRefs}
            >
              About The Great Abanga Foundation
            </h1>
            <div className="mb-6">
              <p className="text-2xl font-semibold text-orange-600 mb-2">
                "Helping Hands Brighter Tomorrow"
              </p>
              <p className="text-lg text-black font-medium">
                Creating a future where no one is left behind — empowered,
                uplifted, and cared for
              </p>
            </div>
            <p
              className="text-lg sm:text-xl text-black max-w-3xl mx-auto leading-relaxed reveal-slide-up"
              ref={addToRefs}
            >
              Founded by visionary leaders with a deep commitment to education
              and community development, The Great Abanga Foundation has been
              transforming lives through comprehensive programs spanning
              education, healthcare, and sustainable development for over 2
              years.
            </p>
          </div>

          {/* Foundation Overview */}
          <div
            className="mb-16 bg-transparent rounded-2xl p-6 sm:p-8 md:p-12 reveal-fade-in"
            ref={addToRefs}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4 sm:mb-6">
                  Our Global Presence
                </h2>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    <span className="text-lg text-black font-semibold">
                      Ghana - Sunyani
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    <span className="text-lg text-black font-semibold">
                      Canada
                    </span>
                  </div>
                </div>
                <p className="text-base sm:text-lg text-black mb-4">
                  Operating across two continents, we bring together diverse
                  perspectives and resources to create meaningful impact in
                  communities where it's needed most.
                </p>
              </div>
              <div className="text-center">
                <div className="w-64 h-64 mx-auto mb-6 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-2xl">
                  <svg
                    className="w-32 h-32 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-black mb-4">
                  Global Impact, Local Touch
                </h3>
                <p className="text-black">
                  Connecting communities across continents for sustainable
                  development
                </p>
              </div>
            </div>
          </div>

          {/* Leadership Team */}
          <div className="mb-16 reveal-fade-in" ref={addToRefs}>
            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-8 sm:mb-12 text-center">
              Our Leadership Team
            </h2>
            <div className="space-y-16">
              {/* CEO */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <h3 className="text-2xl font-bold text-black mb-4">
                    Osman Hakim Abdul
                  </h3>
                  <p className="text-orange-600 font-semibold mb-4">
                    Chief Executive Officer
                  </p>
                  <p className="text-black leading-relaxed">
                    Osman Abdul Hakim, born on May 3rd, 2001, a visionary CEO
                    and dedicated philanthropist. As the driving force behind
                    The Great Abanga Foundation, he leads with a deep commitment
                    to empowering communities and creating lasting social
                    impact. Osman’s leadership is characterized by his passion
                    for advancing education, improving healthcare, and promoting
                    sustainable development initiatives. His philanthropic
                    activities focus on uplifting underprivileged individuals
                    and fostering opportunities for growth and resilience.
                  </p>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="rounded-lg overflow-hidden h-80">
                    <img
                      src="/abanga_img.jpg"
                      alt="Osman Hakim Abdul - Chief Executive Officer"
                      className="w-full h-full object-cover object-top"
                      loading="lazy"
                      decoding="async"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                </div>
              </div>

              {/* Manager */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-1 lg:order-1">
                  <div className="rounded-lg overflow-hidden h-80">
                    <img
                      src="/giden_img.jpg"
                      alt="Amoah Gideon - Public Relations Officer"
                      className="w-full h-full object-cover object-top"
                      loading="lazy"
                      decoding="async"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                </div>
                <div className="order-2 lg:order-2">
                  <h3 className="text-2xl font-bold text-black mb-4">
                    Amoah Gideon
                  </h3>
                  <p className="text-orange-600 font-semibold mb-4">
                    Public Relations Officer
                  </p>
                  <p className="text-black leading-relaxed">
                    Gideon Amoah is a dedicated philanthropist, passionate
                    entrepreneur, and a committed student currently pursuing his
                    studies at the University of Energy and Natural Resources.
                    Through his philanthropic efforts, he strives to make a
                    positive impact on communities by supporting initiatives
                    that promote education, healthcare, and sustainable
                    development.
                  </p>
                </div>
              </div>

              {/* PRO */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <h3 className="text-2xl font-bold text-black mb-4">
                    Amanfo Martha Simaa
                  </h3>
                  <p className="text-orange-600 font-semibold mb-4">Manager</p>
                  <p className="text-black leading-relaxed">
                    Amanfo Martha Simaa serves as the Manager of The Great
                    Abanga Foundation, overseeing the day-to-day operations and
                    ensuring the effective implementation of our charitable
                    programs. With exceptional organizational skills and a
                    passion for community development, she coordinates our
                    educational, healthcare, and sustainable development
                    initiatives.
                  </p>
                </div>
                <div className="order-1 lg:order-2 rounded-lg overflow-hidden h-80 bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                  <span className="text-white font-bold text-6xl">MGR</span>
                </div>
              </div>

              {/* Publicity */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="rounded-lg overflow-hidden h-80 bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                  <span className="text-white font-bold text-6xl">PUB</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-black mb-4">Ruth</h3>
                  <p className="text-orange-600 font-semibold mb-4">
                    Publicity
                  </p>
                  <p className="text-black leading-relaxed">
                    Ruth leads our publicity efforts, crafting compelling
                    narratives that showcase the foundation's impact and mission
                    to the wider community. With expertise in communications and
                    community engagement, she ensures our message of hope,
                    empowerment, and positive change reaches those who need it
                    most and those who can contribute to our cause.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-black mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-black mb-4">
                A commitment to empowering communities by promoting access to
                quality education, improving healthcare for the sick and
                underprivileged, and fostering sustainable development
                initiatives.
              </p>
              <p className="text-lg text-black mb-6">
                We emphasize our dedication to partnerships, advocacy, and
                targeted programs aimed at creating a healthier, more educated,
                and resilient society where every individual has the opportunity
                to thrive.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-black mb-6">Our Vision</h2>
              <div className="bg-gradient-to-r from-orange-600 to-orange-500 text-white p-6 rounded-lg mb-6">
                <p className="text-lg font-medium italic mb-4">
                  "Creating a future where no one is left behind — empowered,
                  uplifted, and cared for."
                </p>
              </div>
              <p className="text-lg text-black">
                We envision a world where barriers to education, healthcare, and
                opportunity are eliminated, and every person has the tools and
                support they need to reach their full potential and contribute
                meaningfully to their communities.
              </p>
            </div>
          </div>

          {/* Foundation Objectives */}
          <div
            className="mb-16 bg-transparent rounded-2xl p-8 reveal-fade-in"
            ref={addToRefs}
          >
            <h2 className="text-3xl font-bold text-black mb-8 text-center">
              Our Foundation Objectives
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-black mb-2">
                      Education
                    </h3>
                    <p className="text-black leading-relaxed">
                      Provide scholarships, educational resources, and
                      infrastructure support to underprivileged students and
                      schools.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-black mb-2">
                      Healthcare
                    </h3>
                    <p className="text-black leading-relaxed">
                      Support medical aid, health awareness programs, and
                      treatment for the sick and vulnerable.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-black mb-2">
                      Community Development
                    </h3>
                    <p className="text-black leading-relaxed">
                      Initiate and fund projects aimed at improving living
                      standards, including access to clean water, food security,
                      and livelihood programs.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-black mb-2">
                      Advocacy & Empowerment
                    </h3>
                    <p className="text-black leading-relaxed">
                      Promote social welfare policies and empower marginalized
                      groups through skills training and mentorship programs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Our Impact Stats */}
          <div
            className="mb-16 bg-transparent rounded-2xl p-6 sm:p-8 md:p-12 reveal-fade-in"
            ref={addToRefs}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-8 sm:mb-12 text-center">
              Our Impact by the Numbers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">15+</span>
                </div>
                <h3 className="text-xl font-semibold text-black mb-2">
                  Students Supported
                </h3>
                <p className="text-black">
                  Scholarships and educational assistance provided
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-sm">₵45K+</span>
                </div>
                <h3 className="text-xl font-semibold text-black mb-2">
                  Total Investment
                </h3>
                <p className="text-black">
                  Financial support in education and development
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">100%</span>
                </div>
                <h3 className="text-xl font-semibold text-black mb-2">
                  Success Rate
                </h3>
                <p className="text-black">
                  Students completing their educational goals
                </p>
              </div>
            </div>
          </div>

          {/* Core Focus Areas */}
          <div className="mb-16 reveal-fade-in" ref={addToRefs}>
            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-8 sm:mb-12 text-center">
              Our Core Focus Areas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center bg-transparent p-6 rounded-xl">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
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
                <h3 className="text-xl font-bold text-black mb-4">
                  Quality Education
                </h3>
                <p className="text-black leading-relaxed">
                  Promoting access to quality education through scholarships,
                  academic support, and educational partnerships that break down
                  barriers to learning.
                </p>
              </div>
              <div className="text-center bg-transparent p-6 rounded-xl">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
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
                <h3 className="text-xl font-bold text-black mb-4">
                  Healthcare Support
                </h3>
                <p className="text-black leading-relaxed">
                  Improving healthcare for the sick and underprivileged through
                  targeted medical assistance, health education, and community
                  wellness programs.
                </p>
              </div>
              <div className="text-center bg-transparent p-6 rounded-xl">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
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
                <h3 className="text-xl font-bold text-black mb-4">
                  Sustainable Development
                </h3>
                <p className="text-black leading-relaxed">
                  Fostering sustainable development initiatives that create
                  lasting positive change and build resilient communities for
                  future generations.
                </p>
              </div>
            </div>
          </div>

          {/* Governance & Operations */}
          <div className="mb-16 reveal-fade-in" ref={addToRefs}>
            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-8 sm:mb-12 text-center">
              Our Governance & Operations
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-transparent p-6 rounded-xl">
                <h3 className="text-xl font-bold text-black mb-4 flex items-center">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                    <svg
                      className="w-4 h-4 text-white"
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
                  Board of Trustees
                </h3>
                <div className="space-y-3 text-black">
                  <p>
                    <strong>Composition:</strong> Between 1 and 2 trustees
                  </p>
                  <p>
                    <strong>Roles:</strong> Policy-making, financial oversight,
                    and strategic direction
                  </p>
                  <p>
                    <strong>Term:</strong> Two years, with re-election
                    eligibility
                  </p>
                </div>
              </div>
              <div className="bg-transparent p-6 rounded-xl">
                <h3 className="text-xl font-bold text-black mb-4 flex items-center">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                    <svg
                      className="w-4 h-4 text-white"
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
                  Non-Profit Status
                </h3>
                <div className="space-y-3 text-black">
                  <p>Operates as a charitable non-profit organization</p>
                  <p>
                    No member or trustee receives personal financial benefit
                  </p>
                  <p>All funds directed toward charitable objectives</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
              <div className="bg-transparent p-6 rounded-xl">
                <h3 className="text-xl font-bold text-black mb-4 flex items-center">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                    <svg
                      className="w-4 h-4 text-white"
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
                  Membership
                </h3>
                <div className="space-y-3 text-black">
                  <p>
                    <strong>Eligibility:</strong> Open to individuals and
                    organizations supporting our mission
                  </p>
                  <p>
                    <strong>Admission:</strong> Written application for Board
                    approval
                  </p>
                  <p>
                    <strong>Standards:</strong> Alignment with foundation goals
                    and values
                  </p>
                </div>
              </div>
              <div className="bg-transparent p-6 rounded-xl">
                <h3 className="text-xl font-bold text-black mb-4 flex items-center">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  Financial Management
                </h3>
                <div className="space-y-3 text-black">
                  <p>
                    <strong>Funding:</strong> Donations, grants, and fundraising
                    activities
                  </p>
                  <p>
                    <strong>Oversight:</strong> All expenditures require Board
                    approval
                  </p>
                  <p>
                    <strong>Transparency:</strong> Annual independent financial
                    audits
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Foundation Establishment */}
          <div
            className="mb-16 bg-gradient-to-r from-orange-600 to-orange-500 text-white p-8 rounded-2xl text-center reveal-fade-in"
            ref={addToRefs}
          >
            <h2 className="text-2xl font-bold mb-4">
              Foundation Establishment
            </h2>
            <p className="text-lg mb-2">
              The Great Abanga Foundation was officially established for
              charitable purposes in July 2025
            </p>
            <p className="text-base opacity-90">
              Committed to transparent, accountable, and impactful community
              service
            </p>
          </div>

          {/* Values Section */}
          <div className="mt-16 sm:mt-20 bg-transparent rounded-2xl p-6 sm:p-8 md:p-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-8 sm:mb-12 text-center">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-orange-500 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 sm:w-8 sm:h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-black mb-2">
                  Integrity
                </h3>
                <p className="text-xs sm:text-sm text-black leading-relaxed">
                  Transparency in all our operations and decisions
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-orange-500 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 sm:w-8 sm:h-8 text-white"
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
                <h3 className="text-base sm:text-lg font-semibold text-black mb-2">
                  Compassion
                </h3>
                <p className="text-xs sm:text-sm text-black leading-relaxed">
                  Understanding and addressing real community needs
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-orange-500 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 sm:w-8 sm:h-8 text-white"
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
                <h3 className="text-base sm:text-lg font-semibold text-black mb-2">
                  Excellence
                </h3>
                <p className="text-xs sm:text-sm text-black leading-relaxed">
                  Striving for the highest quality in everything we do
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-orange-500 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 sm:w-8 sm:h-8 text-white"
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
                <h3 className="text-base sm:text-lg font-semibold text-black mb-2">
                  Collaboration
                </h3>
                <p className="text-xs sm:text-sm text-black leading-relaxed">
                  Working together with communities and partners
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
