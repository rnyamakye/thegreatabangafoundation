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
      <div className="min-h-screen transition-colors duration-200">
        {/* Hero Section with Background Image */}
        <div className="relative min-h-screen">
          {/* Background Image */}
          <div className="absolute inset-0 bg-center bg-no-repeat bg-cover bg-[url('/dinner_img.jpg')]">
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
                About The Great Abanga Foundation
              </h1>

              <p
                className="mb-6 text-2xl font-semibold text-orange-400 md:text-3xl reveal-slide-up drop-shadow-lg"
                ref={addToRefs}
              >
                "Helping Hands Brighter Tomorrow"
              </p>

              <p
                className="max-w-4xl mx-auto mb-6 text-xl leading-relaxed text-gray-100 reveal-slide-up drop-shadow-lg"
                ref={addToRefs}
              >
                Creating a future where no one is left behind — empowered,
                uplifted, and cared for. Founded by visionary leaders with a
                deep commitment to education and community development, The
                Great Abanga Foundation has been transforming lives through
                comprehensive programs spanning education, healthcare, and
                sustainable development for 2 years.
              </p>
            </div>
          </div>
        </div>

        {/* Content Section with Light Background */}
        <main className="bg-gradient-to-br from-gray-50 via-white to-white">
          <div className="max-w-6xl px-6 py-20 mx-auto">
            {/* Foundation Overview */}
            <div
              className="p-6 mb-16 bg-white rounded-2xl sm:p-8 md:p-12 reveal-fade-in"
              ref={addToRefs}
            >
              <div className="grid items-center grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
                <div>
                  <h2 className="mb-4 text-2xl font-bold text-black sm:text-3xl sm:mb-6">
                    Our Global Presence
                  </h2>
                  <div className="mb-6 space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                      <span className="text-lg font-semibold text-black">
                        Ghana - Sunyani
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                      <span className="text-lg font-semibold text-black">
                        Canada
                      </span>
                    </div>
                  </div>
                  <p className="mb-4 text-base text-black sm:text-lg">
                    Operating across two continents, we bring together diverse
                    perspectives and resources to create meaningful impact in
                    communities where it's needed most.
                  </p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center w-32 h-32 mx-auto mb-6 rounded-full shadow-2xl md:h-64 md:w-64 bg-gradient-to-br from-orange-500 to-orange-600">
                    <svg
                      className="w-24 h-24 text-white md:h-32 md:w-32"
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
                  <h3 className="mb-4 text-xl font-semibold text-black">
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
              <h2 className="mb-8 text-2xl font-bold text-center text-black sm:text-3xl sm:mb-12">
                Our Leadership Team
              </h2>
              <div className="space-y-16">
                {/* CEO */}
                <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                  <div className="order-2 lg:order-1">
                    <h3 className="mb-4 text-2xl font-bold text-black">
                      Osman Abdul Hakim Abanga
                    </h3>
                    <p className="mb-4 font-semibold text-orange-600">
                      Chief Executive Officer
                    </p>
                    <p className="leading-relaxed text-black">
                      Osman Abdul Hakim Abanga, born on May 3rd, 2001, a
                      visionary CEO and dedicated philanthropist. As the driving
                      force behind The Great Abanga Foundation, he leads with a
                      deep commitment to empowering communities and creating
                      lasting social impact. Osman’s leadership is characterized
                      by his passion for advancing education, improving
                      healthcare, and promoting sustainable development
                      initiatives. His philanthropic activities focus on
                      uplifting underprivileged individuals and fostering
                      opportunities for growth and resilience.
                    </p>
                  </div>
                  <div className="order-1 lg:order-2">
                    <div className="relative overflow-hidden rounded-lg h-80">
                      <img
                        src="/abanga_img.jpg"
                        alt="Osman Hakim Abdul - Chief Executive Officer"
                        className="object-cover object-top w-full h-full"
                        loading="lazy"
                        decoding="async"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute px-3 py-2 bg-white rounded-lg shadow-lg bottom-3 right-3">
                        <p className="text-sm font-semibold text-gray-800">
                          CEO
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Manager */}
                <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                  <div className="order-1 lg:order-1">
                    <div className="relative overflow-hidden rounded-lg h-80">
                      <img
                        src="/giden_img.jpg"
                        alt="Amoah Gideon - Public Relations Officer"
                        className="object-cover object-top w-full h-full"
                        loading="lazy"
                        decoding="async"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute px-3 py-2 bg-white rounded-lg shadow-lg bottom-3 right-3">
                        <p className="text-sm font-semibold text-gray-800">
                          PRO
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="order-2 lg:order-2">
                    <h3 className="mb-4 text-2xl font-bold text-black">
                      Amoah Gideon
                    </h3>
                    <p className="mb-4 font-semibold text-orange-600">
                      Public Relations Officer
                    </p>
                    <p className="leading-relaxed text-black">
                      Gideon Amoah is a dedicated philanthropist, passionate
                      entrepreneur, and a committed student currently pursuing
                      his studies at the University of Energy and Natural
                      Resources. Through his philanthropic efforts, he strives
                      to make a positive impact on communities by supporting
                      initiatives that promote education, healthcare, and
                      sustainable development.
                    </p>
                  </div>
                </div>

                {/* PRO */}
                <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                  <div className="order-2 lg:order-1">
                    <h3 className="mb-4 text-2xl font-bold text-black">
                      Amanfo Martha Simaa
                    </h3>
                    <p className="mb-4 font-semibold text-orange-600">
                      Manager
                    </p>
                    <p className="leading-relaxed text-black">
                      Amanfo Martha Simaa serves as the Manager of The Great
                      Abanga Foundation, overseeing the day-to-day operations
                      and ensuring the effective implementation of our
                      charitable programs. With exceptional organizational
                      skills and a passion for community development, she
                      coordinates our educational, healthcare, and sustainable
                      development initiatives. Martha brings valuable experience
                      from her background as a former teacher and is currently a
                      student pursuing further education. She holds a Diploma in
                      Basic Education (DBE), which enhances her understanding of
                      educational needs and community development.
                    </p>
                  </div>
                  <div className="order-1 lg:order-2">
                    <div className="relative overflow-hidden rounded-lg h-80">
                      <img
                        src="/martha_img.jpg"
                        alt="Amanfo Martha Simaa - Manager"
                        className="object-cover object-top w-full h-full"
                        loading="lazy"
                        decoding="async"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute px-3 py-2 bg-white rounded-lg shadow-lg bottom-3 right-3">
                        <p className="text-sm font-semibold text-gray-800">
                          Manager
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Publicity */}
                <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                  <div className="relative flex items-center justify-center overflow-hidden rounded-lg h-80 bg-gradient-to-br from-orange-500 to-orange-600">
                    <img
                      src="/ruth_img.jpg"
                      alt="Ruth Abena Amankwah - Publicity"
                      className="object-cover object-top w-full h-full"
                      loading="lazy"
                      decoding="async"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute px-3 py-2 bg-white rounded-lg shadow-lg bottom-3 right-3">
                      <p className="text-sm font-semibold text-gray-800">
                        Publicity
                      </p>
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-4 text-2xl font-bold text-black">
                      Ruth Abena Amankwah
                    </h3>
                    <p className="mb-4 font-semibold text-orange-600">
                      Publicity
                    </p>
                    <p className="leading-relaxed text-black">
                      Ruth Abena Amankwah, an entrepreneur, podcaster, social
                      media content creator, philanthropist, and a dedicated
                      student pursuing a degree in Biological Sciences at the
                      University of Energy and Natural Resources. She founded
                      and manages Elora Wigs and Perfumes, excels in building
                      client relationships, and develops effective marketing
                      strategies. Ruth contributes as a panelist on Earth Dreams
                      Entertainment, creating and editing engaging podcast
                      content. She also creates and manages social media content
                      for various organizations, building and nurturing online
                      communities. Passionate about giving back, she volunteers
                      with The Great Abanga Foundation, organizing fundraising
                      campaigns and mentoring those in need.
                    </p>
                    <div className="mt-4 space-y-2 text-black">
                      <p>
                        <strong>Social Media:</strong> Miss_Ruth
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mission & Vision */}
            <div className="grid grid-cols-1 gap-12 mb-16 md:grid-cols-2">
              <div>
                <h2 className="mb-6 text-3xl font-bold text-black">
                  Our Mission
                </h2>
                <p className="mb-4 text-lg text-black">
                  A commitment to empowering communities by promoting access to
                  quality education, improving healthcare for the sick and
                  underprivileged, and fostering sustainable development
                  initiatives.
                </p>
                <p className="mb-6 text-lg text-black">
                  We emphasize our dedication to partnerships, advocacy, and
                  targeted programs aimed at creating a healthier, more
                  educated, and resilient society where every individual has the
                  opportunity to thrive.
                </p>
              </div>
              <div>
                <h2 className="mb-6 text-3xl font-bold text-black">
                  Our Vision
                </h2>
                <div className="relative mb-6">
                  {/* Black rotated background */}
                  <div
                    className="absolute inset-0 rounded-lg"
                    style={{
                      background: "black",
                      transform: "rotate(1deg)",
                      zIndex: 0,
                    }}
                  />
                  {/* Orange foreground */}
                  <div className="relative z-10 p-6 text-white rounded-lg shadow-lg bg-gradient-to-r from-orange-600 to-orange-500">
                    <p className="mb-4 text-lg italic font-medium">
                      "Creating a future where no one is left behind —
                      empowered, uplifted, and cared for."
                    </p>
                  </div>
                </div>
                <p className="text-lg text-black">
                  We envision a world where barriers to education, healthcare,
                  and opportunity are eliminated, and every person has the tools
                  and support they need to reach their full potential and
                  contribute meaningfully to their communities.
                </p>
              </div>
            </div>

            {/* Foundation Objectives */}
            <div
              className="p-8 mb-16 bg-transparent rounded-2xl reveal-fade-in"
              ref={addToRefs}
            >
              <h2 className="mb-8 text-3xl font-bold text-center text-black">
                Our Foundation Objectives
              </h2>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 mt-1 bg-orange-500 rounded-full">
                      <span className="text-sm font-bold text-white">1</span>
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-semibold text-black">
                        Education
                      </h3>
                      <p className="leading-relaxed text-black">
                        Provide scholarships, educational resources, and
                        infrastructure support to underprivileged students and
                        schools.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 mt-1 bg-orange-500 rounded-full">
                      <span className="text-sm font-bold text-white">2</span>
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-semibold text-black">
                        Healthcare
                      </h3>
                      <p className="leading-relaxed text-black">
                        Support medical aid, health awareness programs, and
                        treatment for the sick and vulnerable.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 mt-1 bg-orange-500 rounded-full">
                      <span className="text-sm font-bold text-white">3</span>
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-semibold text-black">
                        Community Development
                      </h3>
                      <p className="leading-relaxed text-black">
                        Initiate and fund projects aimed at improving living
                        standards, including access to clean water, food
                        security, and livelihood programs.
                      </p>
                    </div>
                  </div>
                  {/* <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 mt-1 bg-orange-500 rounded-full">
                    <span className="text-sm font-bold text-white">4</span>
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-semibold text-black">
                      Advocacy & Empowerment
                    </h3>
                    <p className="leading-relaxed text-black">
                      Promote social welfare policies and empower marginalized
                      groups through skills training and mentorship programs.
                    </p>
                  </div>
                </div> */}
                </div>
              </div>
            </div>

            {/* Our Impact Stats */}
            <div
              className="p-6 mb-16 bg-transparent rounded-2xl sm:p-8 md:p-12 reveal-fade-in"
              ref={addToRefs}
            >
              <h2 className="mb-8 text-2xl font-bold text-center text-black sm:text-3xl sm:mb-12">
                Our Impact by the Numbers
              </h2>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                <div className="text-center">
                  <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 rounded-full shadow-lg bg-gradient-to-br from-orange-500 to-orange-600">
                    <span className="text-lg font-bold text-white">15+</span>
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-black">
                    Students Supported
                  </h3>
                  <p className="text-black">
                    Scholarships and educational assistance provided
                  </p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 rounded-full shadow-lg bg-gradient-to-br from-orange-500 to-orange-600">
                    <span className="text-sm font-bold text-white">₵25K+</span>
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-black">
                    Total Investment
                  </h3>
                  <p className="text-black">
                    Financial support in education and development
                  </p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 rounded-full shadow-lg bg-gradient-to-br from-orange-500 to-orange-600">
                    <span className="text-lg font-bold text-white">100%</span>
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-black">
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
              <h2 className="mb-8 text-2xl font-bold text-center text-black sm:text-3xl sm:mb-12">
                Our Core Focus Areas
              </h2>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                <div className="p-6 text-center bg-transparent rounded-xl">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full shadow-lg bg-gradient-to-br from-orange-500 to-orange-600">
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
                  <h3 className="mb-4 text-xl font-bold text-black">
                    Quality Education
                  </h3>
                  <p className="leading-relaxed text-black">
                    Promoting access to quality education through scholarships,
                    academic support, and educational partnerships that break
                    down barriers to learning.
                  </p>
                </div>
                <div className="p-6 text-center bg-transparent rounded-xl">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full shadow-lg bg-gradient-to-br from-orange-500 to-orange-600">
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
                  <h3 className="mb-4 text-xl font-bold text-black">
                    Healthcare Support
                  </h3>
                  <p className="leading-relaxed text-black">
                    Improving healthcare for the sick and underprivileged
                    through targeted medical assistance, health education, and
                    community wellness programs.
                  </p>
                </div>
                <div className="p-6 text-center bg-transparent rounded-xl">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full shadow-lg bg-gradient-to-br from-orange-500 to-orange-600">
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
                  <h3 className="mb-4 text-xl font-bold text-black">
                    Sustainable Development
                  </h3>
                  <p className="leading-relaxed text-black">
                    Fostering sustainable development initiatives that create
                    lasting positive change and build resilient communities for
                    future generations.
                  </p>
                </div>
              </div>
            </div>

            {/* Governance & Operations */}
            <div className="mb-16 reveal-fade-in" ref={addToRefs}>
              <h2 className="mb-8 text-2xl font-bold text-center text-black sm:text-3xl sm:mb-12">
                Our Governance & Operations
              </h2>
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                <div className="p-6 bg-transparent rounded-xl">
                  <h3 className="flex items-center mb-4 text-xl font-bold text-black">
                    <div className="flex items-center justify-center w-8 h-8 mr-3 bg-orange-500 rounded-full">
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
                      <strong>Roles:</strong> Policy-making, financial
                      oversight, and strategic direction
                    </p>
                    <p>
                      <strong>Term:</strong> Two years, with re-election
                      eligibility
                    </p>
                  </div>
                </div>
                <div className="p-6 bg-transparent rounded-xl">
                  <h3 className="flex items-center mb-4 text-xl font-bold text-black">
                    <div className="flex items-center justify-center w-8 h-8 mr-3 bg-orange-500 rounded-full">
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

              <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2">
                <div className="p-6 bg-transparent rounded-xl">
                  <h3 className="flex items-center mb-4 text-xl font-bold text-black">
                    <div className="flex items-center justify-center w-8 h-8 mr-3 bg-orange-500 rounded-full">
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
                      <strong>Standards:</strong> Alignment with foundation
                      goals and values
                    </p>
                  </div>
                </div>
                <div className="p-6 bg-transparent rounded-xl">
                  <h3 className="flex items-center mb-4 text-xl font-bold text-black">
                    <div className="flex items-center justify-center w-8 h-8 mr-3 bg-orange-500 rounded-full">
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
                      <strong>Funding:</strong> Donations, grants, and
                      fundraising activities
                    </p>
                    <p>
                      <strong>Oversight:</strong> All expenditures require Board
                      approval
                    </p>
                    <p>
                      <strong>Transparency:</strong> Annual independent
                      financial audits
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Values Section */}
            <div className="p-6 mt-1 bg-transparent sm:mt-20 rounded-2xl sm:p-8 md:p-12">
              <h2 className="mb-8 text-2xl font-bold text-center text-black sm:text-3xl sm:mb-12">
                Our Core Values
              </h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 sm:gap-8">
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 mx-auto mb-3 bg-orange-500 rounded-full sm:w-16 sm:h-16 sm:mb-4">
                    <svg
                      className="w-6 h-6 text-white sm:w-8 sm:h-8"
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
                  <h3 className="mb-2 text-base font-semibold text-black sm:text-lg">
                    Integrity
                  </h3>
                  <p className="text-xs leading-relaxed text-black sm:text-sm">
                    Transparency in all our operations and decisions
                  </p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 mx-auto mb-3 bg-orange-500 rounded-full sm:w-16 sm:h-16 sm:mb-4">
                    <svg
                      className="w-6 h-6 text-white sm:w-8 sm:h-8"
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
                  <h3 className="mb-2 text-base font-semibold text-black sm:text-lg">
                    Compassion
                  </h3>
                  <p className="text-xs leading-relaxed text-black sm:text-sm">
                    Understanding and addressing real community needs
                  </p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 mx-auto mb-3 bg-orange-500 rounded-full sm:w-16 sm:h-16 sm:mb-4">
                    <svg
                      className="w-6 h-6 text-white sm:w-8 sm:h-8"
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
                  <h3 className="mb-2 text-base font-semibold text-black sm:text-lg">
                    Excellence
                  </h3>
                  <p className="text-xs leading-relaxed text-black sm:text-sm">
                    Striving for the highest quality in everything we do
                  </p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 mx-auto mb-3 bg-orange-500 rounded-full sm:w-16 sm:h-16 sm:mb-4">
                    <svg
                      className="w-6 h-6 text-white sm:w-8 sm:h-8"
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
                  <h3 className="mb-2 text-base font-semibold text-black sm:text-lg">
                    Collaboration
                  </h3>
                  <p className="text-xs leading-relaxed text-black sm:text-sm">
                    Working together with communities and partners
                  </p>
                </div>
              </div>

              {/* Foundation Establishment */}
                <div className="relative mt-20 reveal-fade-in" ref={addToRefs}>
                {/* Black rotated background */}
                <div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                  background: "black",
                  transform: "rotate(1deg)",
                  zIndex: 0,
                  }}
                />
                {/* Orange foreground */}
                <div className="relative z-10 p-8 text-center text-white bg-gradient-to-r from-orange-600 to-orange-500 rounded-2xl">
                  <h2 className="mb-4 text-2xl font-bold">
                  Foundation Establishment
                  </h2>
                  <p className="mb-2 text-lg">
                  The Great Abanga Foundation was officially established for
                  charitable purposes in July 2025
                  </p>
                  <p className="text-base opacity-90">
                  Committed to transparent, accountable, and impactful community
                  service
                  </p>
                </div>
                </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
